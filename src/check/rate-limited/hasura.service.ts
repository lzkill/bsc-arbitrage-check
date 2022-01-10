import { Injectable } from '@nestjs/common';
import Bottleneck from 'bottleneck';
import { AppConfigService } from 'src/config/config.service';
import { HasuraService } from 'src/shared/hasura/hasura.service';
import { AppLoggerService } from 'src/shared/logger/logger.service';

@Injectable()
export class RateLimitedHasuraService {
  private limiter: Bottleneck;

  constructor(
    private config: AppConfigService,
    private logger: AppLoggerService,
    private hasura: HasuraService,
  ) {
    this.init();
  }

  init() {
    this.setRateLimiter();
    this.logger.log(`Rate limited Hasura service initialized`);
  }

  private setRateLimiter() {
    this.limiter = new Bottleneck({
      maxConcurrent: 1,
      minTime: this.config.hasura.minInterval,
    });
    this.limiter.on('error', function (error) {
      console.error(error);
    });
  }

  async findPendingTrades() {
    const trades = await this.limiter.schedule(() =>
      this.hasura.findPendingTrades(),
    );
    return trades.biscoint_trade;
  }

  async createOffer(offer) {
    const _offer = await this.limiter.schedule(() =>
      this.hasura.createOffer(offer),
    );
    return _offer.insert_biscoint_offer_one.id;
  }

  updateOffer(offer) {
    return this.limiter.schedule(() => this.hasura.updateOffer(offer));
  }

  updateTrade(trade) {
    return this.limiter.schedule(() => this.hasura.updateTrade(trade));
  }
}
