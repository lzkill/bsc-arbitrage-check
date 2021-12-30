import { Injectable } from '@nestjs/common';
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

        await this.checkPendingTrades();
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

  private async checkPendingTrades() {
    try {
      const pendingTrades = await this.hasura.findPendingTrades();
      if (pendingTrades?.length) {
        const brokenTrades = pendingTrades.filter((t) => t.status === 'broken');
        if (brokenTrades?.length) await this.handleBrokenTrades(brokenTrades);

        const openTrades = pendingTrades.filter((t) => t.status === 'open');
        if (openTrades?.length) await this.handleOpenTrades(openTrades);
      }
    } catch (e) {
      this.logger.error(e);
    }
  }

  // single sell on avg efPrice
  private async handleBrokenTrades(trades: any[]) {
    try {
      const baseGroups = _.groupBy(trades, 'openOffer.base');

      for (const [base, baseTrades] of Object.entries(baseGroups)) {
        const totalQuoteAmount = baseTrades
          .map((trade) => +trade.openOffer.quoteAmount)
          .reduce((a, b) => a + b);
        const totalBaseAmount = baseTrades
          .map((trade) => +trade.openOffer.baseAmount)
          .reduce((a, b) => a + b);
        const breakEvenEfPrice = totalQuoteAmount / totalBaseAmount;

        const closeOffer = await this.biscoint.getOffer({
          base: base,
          amount: totalBaseAmount.toString(),
          op: 'sell',
          isQuote: false,
        });

        const canClose = this.canClose(breakEvenEfPrice, +closeOffer.efPrice);
        if (canClose) {
          for (const trade of baseTrades) {
            Object.assign(trade.closeOffer, closeOffer);
            await this.updateOffer(trade.closeOffer);

            trade.hasSiblings = baseTrades.length > 1 ? true : false;
            trade.checkedAt = moment.utc();
            await this.updateTrade(trade);
          }

          await this.broker.publish(RABBITMQ_BISCOINT_CONFIRM_KEY, {
            offers: [closeOffer],
          });
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

  private async handleOpenTrades(trades: any[]) {
    try {
      const confirmedOffers = await this.biscoint.getConfirmedOffers(
        this.config.app.historySize,
      );

      for (const trade of trades) {
        const openOffer = confirmedOffers.get(trade.openOffer.offerId);
        const closeOffer = confirmedOffers.get(trade.closeOffer.offerId);

        const isMissedTrade =
          !openOffer &&
          this.isExpired(trade.openOffer, this.config.app.expireAfter);
        if (isMissedTrade) {
          trade.status = 'missed';
        }

        const isBrokenTrade =
          openOffer &&
          !closeOffer &&
          this.isExpired(trade.closeOffer, this.config.app.expireAfter);
        if (isBrokenTrade) {
          trade.status = 'broken';
          this.notify(trade, TradeEvent.TRADE_BROKEN);
        }

        const isClosedTrade = openOffer && closeOffer;
        if (isClosedTrade) {
          trade.openOffer.confirmedAt = openOffer.date;
          await this.updateOffer(trade.openOffer);

          trade.closeOffer.confirmedAt = closeOffer.date;
          await this.updateOffer(trade.closeOffer);

          trade.status = 'closed';
          this.notify(trade, TradeEvent.TRADE_CLOSED);
        }

        trade.checkedAt = moment.utc();
        await this.updateTrade(trade);
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

  private notify(trade, event: TradeEvent) {
    try {
      return this.broker.publish(RABBITMQ_BISCOINT_NOTIFY_KEY, {
        event: event,
        payload: trade,
      });
    } catch (e) {
      this.logger.error(e);
    }
  }
}
