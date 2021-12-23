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
import { BackOffPolicy, Retryable } from 'typescript-retry-decorator';
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
      if (openTrades?.length) {
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

          const isZombieTrade =
            !openTrade &&
            this.isExpired(trade.openOffer, this.config.app.removeAfter);
          if (isZombieTrade) {
            this.removeTrade(trade);
            continue;
          }

          const isBrokenTrade =
            openTrade &&
            !closeTrade &&
            this.isExpired(trade.closeOffer, this.config.app.expireAfter);
          if (isBrokenTrade) {
            const closeOffer = await this.closeTrade(trade);
            if (closeOffer) {
              Object.assign(trade.closeOffer, closeOffer);
              this.updateOffer(trade.closeOffer);
            }

            if (trade.status !== 'broken') {
              trade.status = 'broken';
              this.notify(trade, TradeEvent.TRADE_BROKEN);
            }
          }

          const isClosedTrade = openTrade && closeTrade;
          if (isClosedTrade) {
            trade.openOffer.confirmedAt = openTrade.date;
            this.updateOffer(trade.openOffer);
            trade.closeOffer.confirmedAt = closeTrade.date;
            this.updateOffer(trade.closeOffer);
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

  private isExpired(offer, expireAfter = 0) {
    const expiresAt = new Date(offer.expiresAt).getTime();
    const now = Date.now();
    return now - expiresAt > expireAfter;
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

      if (closeOffer) {
        const canClose = this.canClose(+openOffer.efPrice, +closeOffer.efPrice);
        if (canClose) {
          await this.broker.publish(RABBITMQ_BISCOINT_CONFIRM_KEY, {
            offers: [closeOffer],
          });

          return closeOffer;
        }
      }
    } catch (e) {
      this.logger.error(e);
    }
  }

  private canClose(openEfPrice: number, closeEfPrice: number) {
    if (closeEfPrice >= openEfPrice)
      return this.config.app.takeProfit
        ? this.percent(openEfPrice, closeEfPrice) >= this.config.app.takeProfit
        : true;

    return this.config.app.stopLoss
      ? this.percent(closeEfPrice, openEfPrice) <= this.config.app.stopLoss
      : false;
  }

  private percent(value1: number, value2: number) {
    return (value2 / value1 - 1) * 100;
  }

  @Retryable({
    maxAttempts: 10,
    backOffPolicy: BackOffPolicy.ExponentialBackOffPolicy,
    backOff: 1000,
    exponentialOption: { maxInterval: 5000, multiplier: 2 },
  })
  private updateOffer(offer) {
    try {
      return this.hasura.updateOffer(offer);
    } catch (e) {
      this.logger.error(e);
    }
  }

  @Retryable({
    maxAttempts: 10,
    backOffPolicy: BackOffPolicy.ExponentialBackOffPolicy,
    backOff: 1000,
    exponentialOption: { maxInterval: 5000, multiplier: 2 },
  })
  private updateTrade(trade) {
    try {
      return this.hasura.updateTrade(trade);
    } catch (e) {
      this.logger.error(e);
    }
  }

  @Retryable({
    maxAttempts: 10,
    backOffPolicy: BackOffPolicy.ExponentialBackOffPolicy,
    backOff: 1000,
    exponentialOption: { maxInterval: 5000, multiplier: 2 },
  })
  private removeTrade(trade) {
    try {
      return this.hasura.removeTrade(trade);
    } catch (e) {
      this.logger.error(e);
    }
  }

  private notify(trade, event: TradeEvent) {
    try {
      this.broker.publish(RABBITMQ_BISCOINT_NOTIFY_KEY, {
        event: event,
        payload: trade,
      });
    } catch (e) {
      this.logger.error(e);
    }
  }
}
