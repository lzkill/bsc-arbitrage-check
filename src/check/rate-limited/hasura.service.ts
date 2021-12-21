import { Injectable } from '@nestjs/common';
import Bottleneck from 'bottleneck';
import { HasuraService } from 'src/shared/hasura/hasura.service';
import { AppLoggerService } from 'src/shared/logger/logger.service';

@Injectable()
export class RateLimitedHasuraService {
  private limiter: Bottleneck;

  constructor(private logger: AppLoggerService, private hasura: HasuraService) {
    this.init();
  }

  init() {
    this.setRateLimiter();
    this.logger.log(`Rate limited Hasura service initialized`);
  }

  private setRateLimiter() {
    try {
      this.limiter = new Bottleneck({
        maxConcurrent: 1,
        minTime: 60000 / 60,
      });
      this.limiter.on('error', function (error) {
        this.logger.error(error);
      });
    } catch (e) {
      this.logger.error(e);
    }
  }

  async findOpenTrades() {
    return (
      await this.limiter.schedule(() => this.hasura.findOpenTrades())
    ).biscoint_trade;
  }

  updateOffer(offer) {
    return this.limiter.schedule(() => this.hasura.updateOffer(offer));
  }

  updateTrade(trade) {
    return this.limiter.schedule(() => this.hasura.updateTrade(trade));
  }

  removeTrade(trade) {
    return this.limiter.schedule(() => this.hasura.removeTrade(trade));
  }
}
