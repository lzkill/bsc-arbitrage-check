import { Injectable } from '@nestjs/common';
import { ITradesResult } from 'biscoint-api-node/dist/typings/biscoint';
import * as _ from 'lodash';
import {
  RABBITMQ_BISCOINT_CONFIRM_KEY,
  RABBITMQ_BISCOINT_NOTIFY_KEY,
} from 'src/app-constants';
import { AppConfigService } from 'src/config/config.service';
import { BrokerService } from 'src/shared/broker/broker.service';
import { AppLoggerService } from 'src/shared/logger/logger.service';
import { RateLimitedBiscointService } from './rate-limited/biscoint.service';
import { RateLimitedHasuraService } from './rate-limited/hasura.service';

const moment = require('moment');

enum TradeEvent {
  TRADE_OPEN = 'trade-open',
  TRADE_BROKEN = 'trade-broken',
  TRADE_CLOSED = 'trade-closed',
}

@Injectable()
export class CheckService {
  private cycleCount = 0;

  constructor(
    private config: AppConfigService,
    private logger: AppLoggerService,
    private biscoint: RateLimitedBiscointService,
    private broker: BrokerService,
    private hasura: RateLimitedHasuraService,
  ) {}

  async check() {
    try {
      if (this.config.app.enabled) {
        const startedAt = Date.now();

        await this.checkOpenTrades();
        this.cycleCount += 1;

        const finishedAt = Date.now();
        const elapsedMs = finishedAt - startedAt;

        this.logger.log(
          `Check cycle #${this.cycleCount} took ${elapsedMs.toFixed(2)}ms`,
        );

        const waitIntervalMs = Math.max(
          this.config.app.checkInterval - elapsedMs,
          0,
        );
        setTimeout(this.check.bind(this), waitIntervalMs);
      } else setTimeout(this.check.bind(this), 5000);
    } catch (e) {
      this.logger.error(e);
    }
  }

  async checkOpenTrades() {
    try {
      const openTrades = await this.hasura.findOpenTrades();
      if (openTrades.length) {
        const lastTrades = await this.biscoint.getTrades(
          this.config.app.historySize,
        );
        for (const trade of openTrades) {
          const openTrade = _.find(
            lastTrades,
            (t: ITradesResult) => t.offerId === trade.openOffer.offerId,
          );

          const closeTrade = _.find(
            lastTrades,
            (t: ITradesResult) => t.offerId === trade.closeOffer.offerId,
          );

          const isZombieTrade = !openTrade && this.isExpired(trade.openOffer);
          if (isZombieTrade) {
            this.hasura.removeTrade(trade);
            continue;
          }

          const isBrokenTrade =
            openTrade && !closeTrade && this.isExpired(trade.closeOffer);
          if (isBrokenTrade) {
            const closeOffer = await this.closeTrade(trade);
            if (closeOffer) {
              Object.assign(trade.closeOffer, closeOffer);
              this.hasura.updateOffer(trade.closeOffer);
            }

            if (!trade.checkedAt) this.notify(trade, TradeEvent.TRADE_BROKEN);
            continue;
          }

          const isClosedTrade = openTrade && closeTrade;
          if (isClosedTrade) {
            trade.openOffer.confirmedAt = openTrade.date;
            this.hasura.updateOffer(trade.openOffer);

            trade.closeOffer.confirmedAt = closeTrade.date;
            this.hasura.updateOffer(trade.closeOffer);

            trade.status = 'closed';
            this.notify(trade, TradeEvent.TRADE_CLOSED);
          }

          trade.checkedAt = moment.utc();
          this.updateTrade(trade);
        }
      }
    } catch (e) {
      this.logger.error(e);
    }
  }

  private isExpired(offer) {
    const expiresAt = new Date(offer.expiresAt).getTime();
    const now = Date.now();
    return expiresAt <= now;
  }

  private async closeTrade(trade) {
    try {
      const openOffer = trade.openOffer;
      const closeOffer = await this.biscoint.getOffer({
        base: openOffer.base,
        amount: openOffer.baseAmount,
        op: 'sell',
        isQuote: false,
      });

      if (closeOffer && +closeOffer.efPrice >= +openOffer.efPrice) {
        await this.broker.publish(RABBITMQ_BISCOINT_CONFIRM_KEY, {
          offers: [closeOffer],
        });

        return closeOffer;
      }
    } catch (e) {
      this.logger.error(e);
    }
  }

  private notify(trade, event: TradeEvent) {
    try {
      this.broker.publish(RABBITMQ_BISCOINT_NOTIFY_KEY, {
        event: event,
        trade: trade,
      });
    } catch (e) {
      this.logger.error(e);
    }
  }

  private updateTrade(trade) {
    try {
      this.hasura.updateTrade(trade);
    } catch (e) {
      this.logger.error(e);
    }
  }
}
