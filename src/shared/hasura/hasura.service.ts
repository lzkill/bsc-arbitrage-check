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

  async findOpenTrades() {
    return getSdk(this.client).findOpenTrades();
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
    const { id, checkedAt, status } = trade;
    const variables = { id, checkedAt, status };
    return getSdk(this.client).updateTrade(variables);
  }

  async removeTrade(trade) {
    const variables = {
      tradeId: trade.id,
      openOfferId: trade.openOffer.id,
      closeOfferId: trade.closeOffer.id,
    };
    return getSdk(this.client).removeTrade(variables);
  }
}
