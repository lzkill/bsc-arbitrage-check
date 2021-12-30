import { Injectable } from '@nestjs/common';
import { GraphQLClient } from 'graphql-request';
import { AppConfigService } from 'src/config/config.service';
import { getSdk } from './hasura-sdk';

@Injectable()
export class HasuraService {
  private client;

  constructor(private config: AppConfigService) {
    this.client = new GraphQLClient(config.hasura.apiEndpoint, {
      headers: {
        [`x-hasura-admin-secret`]: config.hasura.adminSecret,
      },
    });
  }

  async findPendingTrades() {
    return getSdk(this.client).findPendingTrades();
  }

  async updateOffer(offer) {
    const {
      id,
      apiKeyId,
      confirmedAt,
      createdAt,
      efPrice,
      expiresAt,
      offerId,
      quoteAmount,
    } = offer;
    const variables = {
      id,
      apiKeyId,
      confirmedAt,
      createdAt,
      efPrice,
      expiresAt,
      offerId,
      quoteAmount,
    };
    return getSdk(this.client).updateOffer(variables);
  }

  async updateTrade(trade) {
    const { id, checkedAt, status, hasSiblings } = trade;
    const variables = { id, checkedAt, status, hasSiblings };
    return getSdk(this.client).updateTrade(variables);
  }
}
