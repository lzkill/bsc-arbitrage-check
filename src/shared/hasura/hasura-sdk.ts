import { GraphQLClient } from 'graphql-request';
import * as Dom from 'graphql-request/dist/types.dom';
import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
/** All built-in and custom scalars, mapped to their actual values */
export interface Scalars {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  numeric: any;
  timestamptz: Date;
}

/** Boolean expression to compare columns of type "Boolean". All fields are combined with logical 'AND'. */
export interface BooleanComparisonExp {
  _eq?: InputMaybe<Scalars['Boolean']>;
  _gt?: InputMaybe<Scalars['Boolean']>;
  _gte?: InputMaybe<Scalars['Boolean']>;
  _in?: InputMaybe<Array<Scalars['Boolean']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['Boolean']>;
  _lte?: InputMaybe<Scalars['Boolean']>;
  _neq?: InputMaybe<Scalars['Boolean']>;
  _nin?: InputMaybe<Array<Scalars['Boolean']>>;
}

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export interface IntComparisonExp {
  _eq?: InputMaybe<Scalars['Int']>;
  _gt?: InputMaybe<Scalars['Int']>;
  _gte?: InputMaybe<Scalars['Int']>;
  _in?: InputMaybe<Array<Scalars['Int']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['Int']>;
  _lte?: InputMaybe<Scalars['Int']>;
  _neq?: InputMaybe<Scalars['Int']>;
  _nin?: InputMaybe<Array<Scalars['Int']>>;
}

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export interface StringComparisonExp {
  _eq?: InputMaybe<Scalars['String']>;
  _gt?: InputMaybe<Scalars['String']>;
  _gte?: InputMaybe<Scalars['String']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars['String']>;
  _in?: InputMaybe<Array<Scalars['String']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars['String']>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars['String']>;
  _lt?: InputMaybe<Scalars['String']>;
  _lte?: InputMaybe<Scalars['String']>;
  _neq?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars['String']>;
  _nin?: InputMaybe<Array<Scalars['String']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars['String']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars['String']>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars['String']>;
}

/** columns and relationships of "biscoint.missed_profit" */
export interface BiscointMissedProfit {
  quoteProfit?: Maybe<Scalars['numeric']>;
}

/** aggregated selection of "biscoint.missed_profit" */
export interface BiscointMissedProfitAggregate {
  aggregate?: Maybe<BiscointMissedProfitAggregateFields>;
  nodes: Array<BiscointMissedProfit>;
}

/** aggregate fields of "biscoint.missed_profit" */
export interface BiscointMissedProfitAggregateFields {
  avg?: Maybe<BiscointMissedProfitAvgFields>;
  count: Scalars['Int'];
  max?: Maybe<BiscointMissedProfitMaxFields>;
  min?: Maybe<BiscointMissedProfitMinFields>;
  stddev?: Maybe<BiscointMissedProfitStddevFields>;
  stddev_pop?: Maybe<BiscointMissedProfitStddevPopFields>;
  stddev_samp?: Maybe<BiscointMissedProfitStddevSampFields>;
  sum?: Maybe<BiscointMissedProfitSumFields>;
  var_pop?: Maybe<BiscointMissedProfitVarPopFields>;
  var_samp?: Maybe<BiscointMissedProfitVarSampFields>;
  variance?: Maybe<BiscointMissedProfitVarianceFields>;
}

/** aggregate fields of "biscoint.missed_profit" */
export interface BiscointMissedProfitAggregateFieldsCountArgs {
  columns?: InputMaybe<Array<BiscointMissedProfitSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
}

/** aggregate avg on columns */
export interface BiscointMissedProfitAvgFields {
  quoteProfit?: Maybe<Scalars['Float']>;
}

/** Boolean expression to filter rows from the table "biscoint.missed_profit". All fields are combined with a logical 'AND'. */
export interface BiscointMissedProfitBoolExp {
  _and?: InputMaybe<Array<BiscointMissedProfitBoolExp>>;
  _not?: InputMaybe<BiscointMissedProfitBoolExp>;
  _or?: InputMaybe<Array<BiscointMissedProfitBoolExp>>;
  quoteProfit?: InputMaybe<NumericComparisonExp>;
}

/** aggregate max on columns */
export interface BiscointMissedProfitMaxFields {
  quoteProfit?: Maybe<Scalars['numeric']>;
}

/** aggregate min on columns */
export interface BiscointMissedProfitMinFields {
  quoteProfit?: Maybe<Scalars['numeric']>;
}

/** Ordering options when selecting data from "biscoint.missed_profit". */
export interface BiscointMissedProfitOrderBy {
  quoteProfit?: InputMaybe<OrderBy>;
}

/** select columns of table "biscoint.missed_profit" */
export enum BiscointMissedProfitSelectColumn {
  /** column name */
  QuoteProfit = 'quoteProfit',
}

/** aggregate stddev on columns */
export interface BiscointMissedProfitStddevFields {
  quoteProfit?: Maybe<Scalars['Float']>;
}

/** aggregate stddev_pop on columns */
export interface BiscointMissedProfitStddevPopFields {
  quoteProfit?: Maybe<Scalars['Float']>;
}

/** aggregate stddev_samp on columns */
export interface BiscointMissedProfitStddevSampFields {
  quoteProfit?: Maybe<Scalars['Float']>;
}

/** aggregate sum on columns */
export interface BiscointMissedProfitSumFields {
  quoteProfit?: Maybe<Scalars['numeric']>;
}

/** aggregate var_pop on columns */
export interface BiscointMissedProfitVarPopFields {
  quoteProfit?: Maybe<Scalars['Float']>;
}

/** aggregate var_samp on columns */
export interface BiscointMissedProfitVarSampFields {
  quoteProfit?: Maybe<Scalars['Float']>;
}

/** aggregate variance on columns */
export interface BiscointMissedProfitVarianceFields {
  quoteProfit?: Maybe<Scalars['Float']>;
}

/** columns and relationships of "biscoint.missed_trade" */
export interface BiscointMissedTrade {
  base?: Maybe<Scalars['String']>;
  checkedAt?: Maybe<Scalars['timestamptz']>;
  hasSiblings?: Maybe<Scalars['Boolean']>;
  id?: Maybe<Scalars['Int']>;
  owner?: Maybe<Scalars['String']>;
  quoteProfit?: Maybe<Scalars['numeric']>;
  status?: Maybe<Scalars['String']>;
  strategy?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
}

/** aggregated selection of "biscoint.missed_trade" */
export interface BiscointMissedTradeAggregate {
  aggregate?: Maybe<BiscointMissedTradeAggregateFields>;
  nodes: Array<BiscointMissedTrade>;
}

/** aggregate fields of "biscoint.missed_trade" */
export interface BiscointMissedTradeAggregateFields {
  avg?: Maybe<BiscointMissedTradeAvgFields>;
  count: Scalars['Int'];
  max?: Maybe<BiscointMissedTradeMaxFields>;
  min?: Maybe<BiscointMissedTradeMinFields>;
  stddev?: Maybe<BiscointMissedTradeStddevFields>;
  stddev_pop?: Maybe<BiscointMissedTradeStddevPopFields>;
  stddev_samp?: Maybe<BiscointMissedTradeStddevSampFields>;
  sum?: Maybe<BiscointMissedTradeSumFields>;
  var_pop?: Maybe<BiscointMissedTradeVarPopFields>;
  var_samp?: Maybe<BiscointMissedTradeVarSampFields>;
  variance?: Maybe<BiscointMissedTradeVarianceFields>;
}

/** aggregate fields of "biscoint.missed_trade" */
export interface BiscointMissedTradeAggregateFieldsCountArgs {
  columns?: InputMaybe<Array<BiscointMissedTradeSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
}

/** aggregate avg on columns */
export interface BiscointMissedTradeAvgFields {
  id?: Maybe<Scalars['Float']>;
  quoteProfit?: Maybe<Scalars['Float']>;
}

/** Boolean expression to filter rows from the table "biscoint.missed_trade". All fields are combined with a logical 'AND'. */
export interface BiscointMissedTradeBoolExp {
  _and?: InputMaybe<Array<BiscointMissedTradeBoolExp>>;
  _not?: InputMaybe<BiscointMissedTradeBoolExp>;
  _or?: InputMaybe<Array<BiscointMissedTradeBoolExp>>;
  base?: InputMaybe<StringComparisonExp>;
  checkedAt?: InputMaybe<TimestamptzComparisonExp>;
  hasSiblings?: InputMaybe<BooleanComparisonExp>;
  id?: InputMaybe<IntComparisonExp>;
  owner?: InputMaybe<StringComparisonExp>;
  quoteProfit?: InputMaybe<NumericComparisonExp>;
  status?: InputMaybe<StringComparisonExp>;
  strategy?: InputMaybe<StringComparisonExp>;
  type?: InputMaybe<StringComparisonExp>;
}

/** aggregate max on columns */
export interface BiscointMissedTradeMaxFields {
  base?: Maybe<Scalars['String']>;
  checkedAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  owner?: Maybe<Scalars['String']>;
  quoteProfit?: Maybe<Scalars['numeric']>;
  status?: Maybe<Scalars['String']>;
  strategy?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
}

/** aggregate min on columns */
export interface BiscointMissedTradeMinFields {
  base?: Maybe<Scalars['String']>;
  checkedAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  owner?: Maybe<Scalars['String']>;
  quoteProfit?: Maybe<Scalars['numeric']>;
  status?: Maybe<Scalars['String']>;
  strategy?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
}

/** Ordering options when selecting data from "biscoint.missed_trade". */
export interface BiscointMissedTradeOrderBy {
  base?: InputMaybe<OrderBy>;
  checkedAt?: InputMaybe<OrderBy>;
  hasSiblings?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  owner?: InputMaybe<OrderBy>;
  quoteProfit?: InputMaybe<OrderBy>;
  status?: InputMaybe<OrderBy>;
  strategy?: InputMaybe<OrderBy>;
  type?: InputMaybe<OrderBy>;
}

/** select columns of table "biscoint.missed_trade" */
export enum BiscointMissedTradeSelectColumn {
  /** column name */
  Base = 'base',
  /** column name */
  CheckedAt = 'checkedAt',
  /** column name */
  HasSiblings = 'hasSiblings',
  /** column name */
  Id = 'id',
  /** column name */
  Owner = 'owner',
  /** column name */
  QuoteProfit = 'quoteProfit',
  /** column name */
  Status = 'status',
  /** column name */
  Strategy = 'strategy',
  /** column name */
  Type = 'type',
}

/** aggregate stddev on columns */
export interface BiscointMissedTradeStddevFields {
  id?: Maybe<Scalars['Float']>;
  quoteProfit?: Maybe<Scalars['Float']>;
}

/** aggregate stddev_pop on columns */
export interface BiscointMissedTradeStddevPopFields {
  id?: Maybe<Scalars['Float']>;
  quoteProfit?: Maybe<Scalars['Float']>;
}

/** aggregate stddev_samp on columns */
export interface BiscointMissedTradeStddevSampFields {
  id?: Maybe<Scalars['Float']>;
  quoteProfit?: Maybe<Scalars['Float']>;
}

/** aggregate sum on columns */
export interface BiscointMissedTradeSumFields {
  id?: Maybe<Scalars['Int']>;
  quoteProfit?: Maybe<Scalars['numeric']>;
}

/** aggregate var_pop on columns */
export interface BiscointMissedTradeVarPopFields {
  id?: Maybe<Scalars['Float']>;
  quoteProfit?: Maybe<Scalars['Float']>;
}

/** aggregate var_samp on columns */
export interface BiscointMissedTradeVarSampFields {
  id?: Maybe<Scalars['Float']>;
  quoteProfit?: Maybe<Scalars['Float']>;
}

/** aggregate variance on columns */
export interface BiscointMissedTradeVarianceFields {
  id?: Maybe<Scalars['Float']>;
  quoteProfit?: Maybe<Scalars['Float']>;
}

/** columns and relationships of "biscoint.offer" */
export interface BiscointOffer {
  anticipatedAmount?: Maybe<Scalars['String']>;
  anticipationFeeQuote?: Maybe<Scalars['String']>;
  apiKeyId: Scalars['String'];
  base: Scalars['String'];
  baseAmount: Scalars['String'];
  confirmedAt?: Maybe<Scalars['timestamptz']>;
  createdAt: Scalars['timestamptz'];
  efPrice: Scalars['String'];
  expiresAt: Scalars['timestamptz'];
  id: Scalars['Int'];
  isQuote: Scalars['Boolean'];
  nextRecycleAt?: Maybe<Scalars['timestamptz']>;
  offerId: Scalars['String'];
  op: Scalars['String'];
  quote: Scalars['String'];
  quoteAmount: Scalars['String'];
}

/** aggregated selection of "biscoint.offer" */
export interface BiscointOfferAggregate {
  aggregate?: Maybe<BiscointOfferAggregateFields>;
  nodes: Array<BiscointOffer>;
}

/** aggregate fields of "biscoint.offer" */
export interface BiscointOfferAggregateFields {
  avg?: Maybe<BiscointOfferAvgFields>;
  count: Scalars['Int'];
  max?: Maybe<BiscointOfferMaxFields>;
  min?: Maybe<BiscointOfferMinFields>;
  stddev?: Maybe<BiscointOfferStddevFields>;
  stddev_pop?: Maybe<BiscointOfferStddevPopFields>;
  stddev_samp?: Maybe<BiscointOfferStddevSampFields>;
  sum?: Maybe<BiscointOfferSumFields>;
  var_pop?: Maybe<BiscointOfferVarPopFields>;
  var_samp?: Maybe<BiscointOfferVarSampFields>;
  variance?: Maybe<BiscointOfferVarianceFields>;
}

/** aggregate fields of "biscoint.offer" */
export interface BiscointOfferAggregateFieldsCountArgs {
  columns?: InputMaybe<Array<BiscointOfferSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
}

/** aggregate avg on columns */
export interface BiscointOfferAvgFields {
  id?: Maybe<Scalars['Float']>;
}

/** Boolean expression to filter rows from the table "biscoint.offer". All fields are combined with a logical 'AND'. */
export interface BiscointOfferBoolExp {
  _and?: InputMaybe<Array<BiscointOfferBoolExp>>;
  _not?: InputMaybe<BiscointOfferBoolExp>;
  _or?: InputMaybe<Array<BiscointOfferBoolExp>>;
  anticipatedAmount?: InputMaybe<StringComparisonExp>;
  anticipationFeeQuote?: InputMaybe<StringComparisonExp>;
  apiKeyId?: InputMaybe<StringComparisonExp>;
  base?: InputMaybe<StringComparisonExp>;
  baseAmount?: InputMaybe<StringComparisonExp>;
  confirmedAt?: InputMaybe<TimestamptzComparisonExp>;
  createdAt?: InputMaybe<TimestamptzComparisonExp>;
  efPrice?: InputMaybe<StringComparisonExp>;
  expiresAt?: InputMaybe<TimestamptzComparisonExp>;
  id?: InputMaybe<IntComparisonExp>;
  isQuote?: InputMaybe<BooleanComparisonExp>;
  nextRecycleAt?: InputMaybe<TimestamptzComparisonExp>;
  offerId?: InputMaybe<StringComparisonExp>;
  op?: InputMaybe<StringComparisonExp>;
  quote?: InputMaybe<StringComparisonExp>;
  quoteAmount?: InputMaybe<StringComparisonExp>;
}

/** unique or primary key constraints on table "biscoint.offer" */
export enum BiscointOfferConstraint {
  /** unique or primary key constraint */
  OfferOfferIdKey = 'offer_offerId_key',
  /** unique or primary key constraint */
  OfferPkey = 'offer_pkey',
}

/** input type for incrementing numeric columns in table "biscoint.offer" */
export interface BiscointOfferIncInput {
  id?: InputMaybe<Scalars['Int']>;
}

/** input type for inserting data into table "biscoint.offer" */
export interface BiscointOfferInsertInput {
  anticipatedAmount?: InputMaybe<Scalars['String']>;
  anticipationFeeQuote?: InputMaybe<Scalars['String']>;
  apiKeyId?: InputMaybe<Scalars['String']>;
  base?: InputMaybe<Scalars['String']>;
  baseAmount?: InputMaybe<Scalars['String']>;
  confirmedAt?: InputMaybe<Scalars['timestamptz']>;
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  efPrice?: InputMaybe<Scalars['String']>;
  expiresAt?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['Int']>;
  isQuote?: InputMaybe<Scalars['Boolean']>;
  nextRecycleAt?: InputMaybe<Scalars['timestamptz']>;
  offerId?: InputMaybe<Scalars['String']>;
  op?: InputMaybe<Scalars['String']>;
  quote?: InputMaybe<Scalars['String']>;
  quoteAmount?: InputMaybe<Scalars['String']>;
}

/** aggregate max on columns */
export interface BiscointOfferMaxFields {
  anticipatedAmount?: Maybe<Scalars['String']>;
  anticipationFeeQuote?: Maybe<Scalars['String']>;
  apiKeyId?: Maybe<Scalars['String']>;
  base?: Maybe<Scalars['String']>;
  baseAmount?: Maybe<Scalars['String']>;
  confirmedAt?: Maybe<Scalars['timestamptz']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  efPrice?: Maybe<Scalars['String']>;
  expiresAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  nextRecycleAt?: Maybe<Scalars['timestamptz']>;
  offerId?: Maybe<Scalars['String']>;
  op?: Maybe<Scalars['String']>;
  quote?: Maybe<Scalars['String']>;
  quoteAmount?: Maybe<Scalars['String']>;
}

/** aggregate min on columns */
export interface BiscointOfferMinFields {
  anticipatedAmount?: Maybe<Scalars['String']>;
  anticipationFeeQuote?: Maybe<Scalars['String']>;
  apiKeyId?: Maybe<Scalars['String']>;
  base?: Maybe<Scalars['String']>;
  baseAmount?: Maybe<Scalars['String']>;
  confirmedAt?: Maybe<Scalars['timestamptz']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  efPrice?: Maybe<Scalars['String']>;
  expiresAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  nextRecycleAt?: Maybe<Scalars['timestamptz']>;
  offerId?: Maybe<Scalars['String']>;
  op?: Maybe<Scalars['String']>;
  quote?: Maybe<Scalars['String']>;
  quoteAmount?: Maybe<Scalars['String']>;
}

/** response of any mutation on the table "biscoint.offer" */
export interface BiscointOfferMutationResponse {
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<BiscointOffer>;
}

/** input type for inserting object relation for remote table "biscoint.offer" */
export interface BiscointOfferObjRelInsertInput {
  data: BiscointOfferInsertInput;
  /** on conflict condition */
  on_conflict?: InputMaybe<BiscointOfferOnConflict>;
}

/** on conflict condition type for table "biscoint.offer" */
export interface BiscointOfferOnConflict {
  constraint: BiscointOfferConstraint;
  update_columns?: Array<BiscointOfferUpdateColumn>;
  where?: InputMaybe<BiscointOfferBoolExp>;
}

/** Ordering options when selecting data from "biscoint.offer". */
export interface BiscointOfferOrderBy {
  anticipatedAmount?: InputMaybe<OrderBy>;
  anticipationFeeQuote?: InputMaybe<OrderBy>;
  apiKeyId?: InputMaybe<OrderBy>;
  base?: InputMaybe<OrderBy>;
  baseAmount?: InputMaybe<OrderBy>;
  confirmedAt?: InputMaybe<OrderBy>;
  createdAt?: InputMaybe<OrderBy>;
  efPrice?: InputMaybe<OrderBy>;
  expiresAt?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  isQuote?: InputMaybe<OrderBy>;
  nextRecycleAt?: InputMaybe<OrderBy>;
  offerId?: InputMaybe<OrderBy>;
  op?: InputMaybe<OrderBy>;
  quote?: InputMaybe<OrderBy>;
  quoteAmount?: InputMaybe<OrderBy>;
}

/** primary key columns input for table: biscoint_offer */
export interface BiscointOfferPkColumnsInput {
  id: Scalars['Int'];
}

/** select columns of table "biscoint.offer" */
export enum BiscointOfferSelectColumn {
  /** column name */
  AnticipatedAmount = 'anticipatedAmount',
  /** column name */
  AnticipationFeeQuote = 'anticipationFeeQuote',
  /** column name */
  ApiKeyId = 'apiKeyId',
  /** column name */
  Base = 'base',
  /** column name */
  BaseAmount = 'baseAmount',
  /** column name */
  ConfirmedAt = 'confirmedAt',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  EfPrice = 'efPrice',
  /** column name */
  ExpiresAt = 'expiresAt',
  /** column name */
  Id = 'id',
  /** column name */
  IsQuote = 'isQuote',
  /** column name */
  NextRecycleAt = 'nextRecycleAt',
  /** column name */
  OfferId = 'offerId',
  /** column name */
  Op = 'op',
  /** column name */
  Quote = 'quote',
  /** column name */
  QuoteAmount = 'quoteAmount',
}

/** input type for updating data in table "biscoint.offer" */
export interface BiscointOfferSetInput {
  anticipatedAmount?: InputMaybe<Scalars['String']>;
  anticipationFeeQuote?: InputMaybe<Scalars['String']>;
  apiKeyId?: InputMaybe<Scalars['String']>;
  base?: InputMaybe<Scalars['String']>;
  baseAmount?: InputMaybe<Scalars['String']>;
  confirmedAt?: InputMaybe<Scalars['timestamptz']>;
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  efPrice?: InputMaybe<Scalars['String']>;
  expiresAt?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['Int']>;
  isQuote?: InputMaybe<Scalars['Boolean']>;
  nextRecycleAt?: InputMaybe<Scalars['timestamptz']>;
  offerId?: InputMaybe<Scalars['String']>;
  op?: InputMaybe<Scalars['String']>;
  quote?: InputMaybe<Scalars['String']>;
  quoteAmount?: InputMaybe<Scalars['String']>;
}

/** aggregate stddev on columns */
export interface BiscointOfferStddevFields {
  id?: Maybe<Scalars['Float']>;
}

/** aggregate stddev_pop on columns */
export interface BiscointOfferStddevPopFields {
  id?: Maybe<Scalars['Float']>;
}

/** aggregate stddev_samp on columns */
export interface BiscointOfferStddevSampFields {
  id?: Maybe<Scalars['Float']>;
}

/** aggregate sum on columns */
export interface BiscointOfferSumFields {
  id?: Maybe<Scalars['Int']>;
}

/** update columns of table "biscoint.offer" */
export enum BiscointOfferUpdateColumn {
  /** column name */
  AnticipatedAmount = 'anticipatedAmount',
  /** column name */
  AnticipationFeeQuote = 'anticipationFeeQuote',
  /** column name */
  ApiKeyId = 'apiKeyId',
  /** column name */
  Base = 'base',
  /** column name */
  BaseAmount = 'baseAmount',
  /** column name */
  ConfirmedAt = 'confirmedAt',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  EfPrice = 'efPrice',
  /** column name */
  ExpiresAt = 'expiresAt',
  /** column name */
  Id = 'id',
  /** column name */
  IsQuote = 'isQuote',
  /** column name */
  NextRecycleAt = 'nextRecycleAt',
  /** column name */
  OfferId = 'offerId',
  /** column name */
  Op = 'op',
  /** column name */
  Quote = 'quote',
  /** column name */
  QuoteAmount = 'quoteAmount',
}

/** aggregate var_pop on columns */
export interface BiscointOfferVarPopFields {
  id?: Maybe<Scalars['Float']>;
}

/** aggregate var_samp on columns */
export interface BiscointOfferVarSampFields {
  id?: Maybe<Scalars['Float']>;
}

/** aggregate variance on columns */
export interface BiscointOfferVarianceFields {
  id?: Maybe<Scalars['Float']>;
}

/** columns and relationships of "biscoint.order" */
export interface BiscointOrder {
  amount: Scalars['String'];
  base: Scalars['String'];
  checkedAt?: Maybe<Scalars['timestamptz']>;
  createdAt: Scalars['timestamptz'];
  id: Scalars['Int'];
  isQuote: Scalars['Boolean'];
  notBefore?: Maybe<Scalars['timestamptz']>;
  /** An object relationship */
  offer?: Maybe<BiscointOffer>;
  offerId?: Maybe<Scalars['Int']>;
  op: Scalars['String'];
  refPrice?: Maybe<Scalars['String']>;
  status: Scalars['String'];
}

/** aggregated selection of "biscoint.order" */
export interface BiscointOrderAggregate {
  aggregate?: Maybe<BiscointOrderAggregateFields>;
  nodes: Array<BiscointOrder>;
}

/** aggregate fields of "biscoint.order" */
export interface BiscointOrderAggregateFields {
  avg?: Maybe<BiscointOrderAvgFields>;
  count: Scalars['Int'];
  max?: Maybe<BiscointOrderMaxFields>;
  min?: Maybe<BiscointOrderMinFields>;
  stddev?: Maybe<BiscointOrderStddevFields>;
  stddev_pop?: Maybe<BiscointOrderStddevPopFields>;
  stddev_samp?: Maybe<BiscointOrderStddevSampFields>;
  sum?: Maybe<BiscointOrderSumFields>;
  var_pop?: Maybe<BiscointOrderVarPopFields>;
  var_samp?: Maybe<BiscointOrderVarSampFields>;
  variance?: Maybe<BiscointOrderVarianceFields>;
}

/** aggregate fields of "biscoint.order" */
export interface BiscointOrderAggregateFieldsCountArgs {
  columns?: InputMaybe<Array<BiscointOrderSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
}

/** aggregate avg on columns */
export interface BiscointOrderAvgFields {
  id?: Maybe<Scalars['Float']>;
  offerId?: Maybe<Scalars['Float']>;
}

/** Boolean expression to filter rows from the table "biscoint.order". All fields are combined with a logical 'AND'. */
export interface BiscointOrderBoolExp {
  _and?: InputMaybe<Array<BiscointOrderBoolExp>>;
  _not?: InputMaybe<BiscointOrderBoolExp>;
  _or?: InputMaybe<Array<BiscointOrderBoolExp>>;
  amount?: InputMaybe<StringComparisonExp>;
  base?: InputMaybe<StringComparisonExp>;
  checkedAt?: InputMaybe<TimestamptzComparisonExp>;
  createdAt?: InputMaybe<TimestamptzComparisonExp>;
  id?: InputMaybe<IntComparisonExp>;
  isQuote?: InputMaybe<BooleanComparisonExp>;
  notBefore?: InputMaybe<TimestamptzComparisonExp>;
  offer?: InputMaybe<BiscointOfferBoolExp>;
  offerId?: InputMaybe<IntComparisonExp>;
  op?: InputMaybe<StringComparisonExp>;
  refPrice?: InputMaybe<StringComparisonExp>;
  status?: InputMaybe<StringComparisonExp>;
}

/** unique or primary key constraints on table "biscoint.order" */
export enum BiscointOrderConstraint {
  /** unique or primary key constraint */
  OrderPkey = 'order_pkey',
}

/** input type for incrementing numeric columns in table "biscoint.order" */
export interface BiscointOrderIncInput {
  id?: InputMaybe<Scalars['Int']>;
  offerId?: InputMaybe<Scalars['Int']>;
}

/** input type for inserting data into table "biscoint.order" */
export interface BiscointOrderInsertInput {
  amount?: InputMaybe<Scalars['String']>;
  base?: InputMaybe<Scalars['String']>;
  checkedAt?: InputMaybe<Scalars['timestamptz']>;
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['Int']>;
  isQuote?: InputMaybe<Scalars['Boolean']>;
  notBefore?: InputMaybe<Scalars['timestamptz']>;
  offer?: InputMaybe<BiscointOfferObjRelInsertInput>;
  offerId?: InputMaybe<Scalars['Int']>;
  op?: InputMaybe<Scalars['String']>;
  refPrice?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<Scalars['String']>;
}

/** aggregate max on columns */
export interface BiscointOrderMaxFields {
  amount?: Maybe<Scalars['String']>;
  base?: Maybe<Scalars['String']>;
  checkedAt?: Maybe<Scalars['timestamptz']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  notBefore?: Maybe<Scalars['timestamptz']>;
  offerId?: Maybe<Scalars['Int']>;
  op?: Maybe<Scalars['String']>;
  refPrice?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
}

/** aggregate min on columns */
export interface BiscointOrderMinFields {
  amount?: Maybe<Scalars['String']>;
  base?: Maybe<Scalars['String']>;
  checkedAt?: Maybe<Scalars['timestamptz']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  notBefore?: Maybe<Scalars['timestamptz']>;
  offerId?: Maybe<Scalars['Int']>;
  op?: Maybe<Scalars['String']>;
  refPrice?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
}

/** response of any mutation on the table "biscoint.order" */
export interface BiscointOrderMutationResponse {
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<BiscointOrder>;
}

/** on conflict condition type for table "biscoint.order" */
export interface BiscointOrderOnConflict {
  constraint: BiscointOrderConstraint;
  update_columns?: Array<BiscointOrderUpdateColumn>;
  where?: InputMaybe<BiscointOrderBoolExp>;
}

/** Ordering options when selecting data from "biscoint.order". */
export interface BiscointOrderOrderBy {
  amount?: InputMaybe<OrderBy>;
  base?: InputMaybe<OrderBy>;
  checkedAt?: InputMaybe<OrderBy>;
  createdAt?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  isQuote?: InputMaybe<OrderBy>;
  notBefore?: InputMaybe<OrderBy>;
  offer?: InputMaybe<BiscointOfferOrderBy>;
  offerId?: InputMaybe<OrderBy>;
  op?: InputMaybe<OrderBy>;
  refPrice?: InputMaybe<OrderBy>;
  status?: InputMaybe<OrderBy>;
}

/** primary key columns input for table: biscoint_order */
export interface BiscointOrderPkColumnsInput {
  id: Scalars['Int'];
}

/** select columns of table "biscoint.order" */
export enum BiscointOrderSelectColumn {
  /** column name */
  Amount = 'amount',
  /** column name */
  Base = 'base',
  /** column name */
  CheckedAt = 'checkedAt',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  IsQuote = 'isQuote',
  /** column name */
  NotBefore = 'notBefore',
  /** column name */
  OfferId = 'offerId',
  /** column name */
  Op = 'op',
  /** column name */
  RefPrice = 'refPrice',
  /** column name */
  Status = 'status',
}

/** input type for updating data in table "biscoint.order" */
export interface BiscointOrderSetInput {
  amount?: InputMaybe<Scalars['String']>;
  base?: InputMaybe<Scalars['String']>;
  checkedAt?: InputMaybe<Scalars['timestamptz']>;
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['Int']>;
  isQuote?: InputMaybe<Scalars['Boolean']>;
  notBefore?: InputMaybe<Scalars['timestamptz']>;
  offerId?: InputMaybe<Scalars['Int']>;
  op?: InputMaybe<Scalars['String']>;
  refPrice?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<Scalars['String']>;
}

/** aggregate stddev on columns */
export interface BiscointOrderStddevFields {
  id?: Maybe<Scalars['Float']>;
  offerId?: Maybe<Scalars['Float']>;
}

/** aggregate stddev_pop on columns */
export interface BiscointOrderStddevPopFields {
  id?: Maybe<Scalars['Float']>;
  offerId?: Maybe<Scalars['Float']>;
}

/** aggregate stddev_samp on columns */
export interface BiscointOrderStddevSampFields {
  id?: Maybe<Scalars['Float']>;
  offerId?: Maybe<Scalars['Float']>;
}

/** aggregate sum on columns */
export interface BiscointOrderSumFields {
  id?: Maybe<Scalars['Int']>;
  offerId?: Maybe<Scalars['Int']>;
}

/** update columns of table "biscoint.order" */
export enum BiscointOrderUpdateColumn {
  /** column name */
  Amount = 'amount',
  /** column name */
  Base = 'base',
  /** column name */
  CheckedAt = 'checkedAt',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  IsQuote = 'isQuote',
  /** column name */
  NotBefore = 'notBefore',
  /** column name */
  OfferId = 'offerId',
  /** column name */
  Op = 'op',
  /** column name */
  RefPrice = 'refPrice',
  /** column name */
  Status = 'status',
}

/** aggregate var_pop on columns */
export interface BiscointOrderVarPopFields {
  id?: Maybe<Scalars['Float']>;
  offerId?: Maybe<Scalars['Float']>;
}

/** aggregate var_samp on columns */
export interface BiscointOrderVarSampFields {
  id?: Maybe<Scalars['Float']>;
  offerId?: Maybe<Scalars['Float']>;
}

/** aggregate variance on columns */
export interface BiscointOrderVarianceFields {
  id?: Maybe<Scalars['Float']>;
  offerId?: Maybe<Scalars['Float']>;
}

/** columns and relationships of "biscoint.pending_trade" */
export interface BiscointPendingTrade {
  apiKeyId?: Maybe<Scalars['String']>;
  base?: Maybe<Scalars['String']>;
  baseAmount?: Maybe<Scalars['String']>;
  checkedAt?: Maybe<Scalars['timestamptz']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  efPrice?: Maybe<Scalars['String']>;
  expiresAt?: Maybe<Scalars['timestamptz']>;
  hasSiblings?: Maybe<Scalars['Boolean']>;
  id?: Maybe<Scalars['Int']>;
  isQuote?: Maybe<Scalars['Boolean']>;
  offerId?: Maybe<Scalars['String']>;
  op?: Maybe<Scalars['String']>;
  owner?: Maybe<Scalars['String']>;
  quote?: Maybe<Scalars['String']>;
  quoteAmount?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  strategy?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
}

/** aggregated selection of "biscoint.pending_trade" */
export interface BiscointPendingTradeAggregate {
  aggregate?: Maybe<BiscointPendingTradeAggregateFields>;
  nodes: Array<BiscointPendingTrade>;
}

/** aggregate fields of "biscoint.pending_trade" */
export interface BiscointPendingTradeAggregateFields {
  avg?: Maybe<BiscointPendingTradeAvgFields>;
  count: Scalars['Int'];
  max?: Maybe<BiscointPendingTradeMaxFields>;
  min?: Maybe<BiscointPendingTradeMinFields>;
  stddev?: Maybe<BiscointPendingTradeStddevFields>;
  stddev_pop?: Maybe<BiscointPendingTradeStddevPopFields>;
  stddev_samp?: Maybe<BiscointPendingTradeStddevSampFields>;
  sum?: Maybe<BiscointPendingTradeSumFields>;
  var_pop?: Maybe<BiscointPendingTradeVarPopFields>;
  var_samp?: Maybe<BiscointPendingTradeVarSampFields>;
  variance?: Maybe<BiscointPendingTradeVarianceFields>;
}

/** aggregate fields of "biscoint.pending_trade" */
export interface BiscointPendingTradeAggregateFieldsCountArgs {
  columns?: InputMaybe<Array<BiscointPendingTradeSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
}

/** aggregate avg on columns */
export interface BiscointPendingTradeAvgFields {
  id?: Maybe<Scalars['Float']>;
}

/** Boolean expression to filter rows from the table "biscoint.pending_trade". All fields are combined with a logical 'AND'. */
export interface BiscointPendingTradeBoolExp {
  _and?: InputMaybe<Array<BiscointPendingTradeBoolExp>>;
  _not?: InputMaybe<BiscointPendingTradeBoolExp>;
  _or?: InputMaybe<Array<BiscointPendingTradeBoolExp>>;
  apiKeyId?: InputMaybe<StringComparisonExp>;
  base?: InputMaybe<StringComparisonExp>;
  baseAmount?: InputMaybe<StringComparisonExp>;
  checkedAt?: InputMaybe<TimestamptzComparisonExp>;
  createdAt?: InputMaybe<TimestamptzComparisonExp>;
  efPrice?: InputMaybe<StringComparisonExp>;
  expiresAt?: InputMaybe<TimestamptzComparisonExp>;
  hasSiblings?: InputMaybe<BooleanComparisonExp>;
  id?: InputMaybe<IntComparisonExp>;
  isQuote?: InputMaybe<BooleanComparisonExp>;
  offerId?: InputMaybe<StringComparisonExp>;
  op?: InputMaybe<StringComparisonExp>;
  owner?: InputMaybe<StringComparisonExp>;
  quote?: InputMaybe<StringComparisonExp>;
  quoteAmount?: InputMaybe<StringComparisonExp>;
  status?: InputMaybe<StringComparisonExp>;
  strategy?: InputMaybe<StringComparisonExp>;
  type?: InputMaybe<StringComparisonExp>;
}

/** aggregate max on columns */
export interface BiscointPendingTradeMaxFields {
  apiKeyId?: Maybe<Scalars['String']>;
  base?: Maybe<Scalars['String']>;
  baseAmount?: Maybe<Scalars['String']>;
  checkedAt?: Maybe<Scalars['timestamptz']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  efPrice?: Maybe<Scalars['String']>;
  expiresAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  offerId?: Maybe<Scalars['String']>;
  op?: Maybe<Scalars['String']>;
  owner?: Maybe<Scalars['String']>;
  quote?: Maybe<Scalars['String']>;
  quoteAmount?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  strategy?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
}

/** aggregate min on columns */
export interface BiscointPendingTradeMinFields {
  apiKeyId?: Maybe<Scalars['String']>;
  base?: Maybe<Scalars['String']>;
  baseAmount?: Maybe<Scalars['String']>;
  checkedAt?: Maybe<Scalars['timestamptz']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  efPrice?: Maybe<Scalars['String']>;
  expiresAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  offerId?: Maybe<Scalars['String']>;
  op?: Maybe<Scalars['String']>;
  owner?: Maybe<Scalars['String']>;
  quote?: Maybe<Scalars['String']>;
  quoteAmount?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  strategy?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
}

/** Ordering options when selecting data from "biscoint.pending_trade". */
export interface BiscointPendingTradeOrderBy {
  apiKeyId?: InputMaybe<OrderBy>;
  base?: InputMaybe<OrderBy>;
  baseAmount?: InputMaybe<OrderBy>;
  checkedAt?: InputMaybe<OrderBy>;
  createdAt?: InputMaybe<OrderBy>;
  efPrice?: InputMaybe<OrderBy>;
  expiresAt?: InputMaybe<OrderBy>;
  hasSiblings?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  isQuote?: InputMaybe<OrderBy>;
  offerId?: InputMaybe<OrderBy>;
  op?: InputMaybe<OrderBy>;
  owner?: InputMaybe<OrderBy>;
  quote?: InputMaybe<OrderBy>;
  quoteAmount?: InputMaybe<OrderBy>;
  status?: InputMaybe<OrderBy>;
  strategy?: InputMaybe<OrderBy>;
  type?: InputMaybe<OrderBy>;
}

/** select columns of table "biscoint.pending_trade" */
export enum BiscointPendingTradeSelectColumn {
  /** column name */
  ApiKeyId = 'apiKeyId',
  /** column name */
  Base = 'base',
  /** column name */
  BaseAmount = 'baseAmount',
  /** column name */
  CheckedAt = 'checkedAt',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  EfPrice = 'efPrice',
  /** column name */
  ExpiresAt = 'expiresAt',
  /** column name */
  HasSiblings = 'hasSiblings',
  /** column name */
  Id = 'id',
  /** column name */
  IsQuote = 'isQuote',
  /** column name */
  OfferId = 'offerId',
  /** column name */
  Op = 'op',
  /** column name */
  Owner = 'owner',
  /** column name */
  Quote = 'quote',
  /** column name */
  QuoteAmount = 'quoteAmount',
  /** column name */
  Status = 'status',
  /** column name */
  Strategy = 'strategy',
  /** column name */
  Type = 'type',
}

/** aggregate stddev on columns */
export interface BiscointPendingTradeStddevFields {
  id?: Maybe<Scalars['Float']>;
}

/** aggregate stddev_pop on columns */
export interface BiscointPendingTradeStddevPopFields {
  id?: Maybe<Scalars['Float']>;
}

/** aggregate stddev_samp on columns */
export interface BiscointPendingTradeStddevSampFields {
  id?: Maybe<Scalars['Float']>;
}

/** aggregate sum on columns */
export interface BiscointPendingTradeSumFields {
  id?: Maybe<Scalars['Int']>;
}

/** aggregate var_pop on columns */
export interface BiscointPendingTradeVarPopFields {
  id?: Maybe<Scalars['Float']>;
}

/** aggregate var_samp on columns */
export interface BiscointPendingTradeVarSampFields {
  id?: Maybe<Scalars['Float']>;
}

/** aggregate variance on columns */
export interface BiscointPendingTradeVarianceFields {
  id?: Maybe<Scalars['Float']>;
}

/** columns and relationships of "biscoint.trade" */
export interface BiscointTrade {
  checkedAt?: Maybe<Scalars['timestamptz']>;
  /** An object relationship */
  closeOffer?: Maybe<BiscointOffer>;
  closeOfferId?: Maybe<Scalars['Int']>;
  /** Trades that share the close offer are said to be siblings */
  hasSiblings?: Maybe<Scalars['Boolean']>;
  id: Scalars['Int'];
  /** An object relationship */
  openOffer: BiscointOffer;
  openOfferId: Scalars['Int'];
  owner?: Maybe<Scalars['String']>;
  status: Scalars['String'];
  strategy?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
}

/** aggregated selection of "biscoint.trade" */
export interface BiscointTradeAggregate {
  aggregate?: Maybe<BiscointTradeAggregateFields>;
  nodes: Array<BiscointTrade>;
}

/** aggregate fields of "biscoint.trade" */
export interface BiscointTradeAggregateFields {
  avg?: Maybe<BiscointTradeAvgFields>;
  count: Scalars['Int'];
  max?: Maybe<BiscointTradeMaxFields>;
  min?: Maybe<BiscointTradeMinFields>;
  stddev?: Maybe<BiscointTradeStddevFields>;
  stddev_pop?: Maybe<BiscointTradeStddevPopFields>;
  stddev_samp?: Maybe<BiscointTradeStddevSampFields>;
  sum?: Maybe<BiscointTradeSumFields>;
  var_pop?: Maybe<BiscointTradeVarPopFields>;
  var_samp?: Maybe<BiscointTradeVarSampFields>;
  variance?: Maybe<BiscointTradeVarianceFields>;
}

/** aggregate fields of "biscoint.trade" */
export interface BiscointTradeAggregateFieldsCountArgs {
  columns?: InputMaybe<Array<BiscointTradeSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
}

/** aggregate avg on columns */
export interface BiscointTradeAvgFields {
  closeOfferId?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  openOfferId?: Maybe<Scalars['Float']>;
}

/** Boolean expression to filter rows from the table "biscoint.trade". All fields are combined with a logical 'AND'. */
export interface BiscointTradeBoolExp {
  _and?: InputMaybe<Array<BiscointTradeBoolExp>>;
  _not?: InputMaybe<BiscointTradeBoolExp>;
  _or?: InputMaybe<Array<BiscointTradeBoolExp>>;
  checkedAt?: InputMaybe<TimestamptzComparisonExp>;
  closeOffer?: InputMaybe<BiscointOfferBoolExp>;
  closeOfferId?: InputMaybe<IntComparisonExp>;
  hasSiblings?: InputMaybe<BooleanComparisonExp>;
  id?: InputMaybe<IntComparisonExp>;
  openOffer?: InputMaybe<BiscointOfferBoolExp>;
  openOfferId?: InputMaybe<IntComparisonExp>;
  owner?: InputMaybe<StringComparisonExp>;
  status?: InputMaybe<StringComparisonExp>;
  strategy?: InputMaybe<StringComparisonExp>;
  type?: InputMaybe<StringComparisonExp>;
}

/** unique or primary key constraints on table "biscoint.trade" */
export enum BiscointTradeConstraint {
  /** unique or primary key constraint */
  TradePkey = 'trade_pkey',
}

/** input type for incrementing numeric columns in table "biscoint.trade" */
export interface BiscointTradeIncInput {
  closeOfferId?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['Int']>;
  openOfferId?: InputMaybe<Scalars['Int']>;
}

/** input type for inserting data into table "biscoint.trade" */
export interface BiscointTradeInsertInput {
  checkedAt?: InputMaybe<Scalars['timestamptz']>;
  closeOffer?: InputMaybe<BiscointOfferObjRelInsertInput>;
  closeOfferId?: InputMaybe<Scalars['Int']>;
  /** Trades that share the close offer are said to be siblings */
  hasSiblings?: InputMaybe<Scalars['Boolean']>;
  id?: InputMaybe<Scalars['Int']>;
  openOffer?: InputMaybe<BiscointOfferObjRelInsertInput>;
  openOfferId?: InputMaybe<Scalars['Int']>;
  owner?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<Scalars['String']>;
  strategy?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Scalars['String']>;
}

/** aggregate max on columns */
export interface BiscointTradeMaxFields {
  checkedAt?: Maybe<Scalars['timestamptz']>;
  closeOfferId?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  openOfferId?: Maybe<Scalars['Int']>;
  owner?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  strategy?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
}

/** aggregate min on columns */
export interface BiscointTradeMinFields {
  checkedAt?: Maybe<Scalars['timestamptz']>;
  closeOfferId?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  openOfferId?: Maybe<Scalars['Int']>;
  owner?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  strategy?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
}

/** response of any mutation on the table "biscoint.trade" */
export interface BiscointTradeMutationResponse {
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<BiscointTrade>;
}

/** on conflict condition type for table "biscoint.trade" */
export interface BiscointTradeOnConflict {
  constraint: BiscointTradeConstraint;
  update_columns?: Array<BiscointTradeUpdateColumn>;
  where?: InputMaybe<BiscointTradeBoolExp>;
}

/** Ordering options when selecting data from "biscoint.trade". */
export interface BiscointTradeOrderBy {
  checkedAt?: InputMaybe<OrderBy>;
  closeOffer?: InputMaybe<BiscointOfferOrderBy>;
  closeOfferId?: InputMaybe<OrderBy>;
  hasSiblings?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  openOffer?: InputMaybe<BiscointOfferOrderBy>;
  openOfferId?: InputMaybe<OrderBy>;
  owner?: InputMaybe<OrderBy>;
  status?: InputMaybe<OrderBy>;
  strategy?: InputMaybe<OrderBy>;
  type?: InputMaybe<OrderBy>;
}

/** primary key columns input for table: biscoint_trade */
export interface BiscointTradePkColumnsInput {
  id: Scalars['Int'];
}

/** select columns of table "biscoint.trade" */
export enum BiscointTradeSelectColumn {
  /** column name */
  CheckedAt = 'checkedAt',
  /** column name */
  CloseOfferId = 'closeOfferId',
  /** column name */
  HasSiblings = 'hasSiblings',
  /** column name */
  Id = 'id',
  /** column name */
  OpenOfferId = 'openOfferId',
  /** column name */
  Owner = 'owner',
  /** column name */
  Status = 'status',
  /** column name */
  Strategy = 'strategy',
  /** column name */
  Type = 'type',
}

/** input type for updating data in table "biscoint.trade" */
export interface BiscointTradeSetInput {
  checkedAt?: InputMaybe<Scalars['timestamptz']>;
  closeOfferId?: InputMaybe<Scalars['Int']>;
  /** Trades that share the close offer are said to be siblings */
  hasSiblings?: InputMaybe<Scalars['Boolean']>;
  id?: InputMaybe<Scalars['Int']>;
  openOfferId?: InputMaybe<Scalars['Int']>;
  owner?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<Scalars['String']>;
  strategy?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Scalars['String']>;
}

/** aggregate stddev on columns */
export interface BiscointTradeStddevFields {
  closeOfferId?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  openOfferId?: Maybe<Scalars['Float']>;
}

/** aggregate stddev_pop on columns */
export interface BiscointTradeStddevPopFields {
  closeOfferId?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  openOfferId?: Maybe<Scalars['Float']>;
}

/** aggregate stddev_samp on columns */
export interface BiscointTradeStddevSampFields {
  closeOfferId?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  openOfferId?: Maybe<Scalars['Float']>;
}

/** aggregate sum on columns */
export interface BiscointTradeSumFields {
  closeOfferId?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  openOfferId?: Maybe<Scalars['Int']>;
}

/** update columns of table "biscoint.trade" */
export enum BiscointTradeUpdateColumn {
  /** column name */
  CheckedAt = 'checkedAt',
  /** column name */
  CloseOfferId = 'closeOfferId',
  /** column name */
  HasSiblings = 'hasSiblings',
  /** column name */
  Id = 'id',
  /** column name */
  OpenOfferId = 'openOfferId',
  /** column name */
  Owner = 'owner',
  /** column name */
  Status = 'status',
  /** column name */
  Strategy = 'strategy',
  /** column name */
  Type = 'type',
}

/** aggregate var_pop on columns */
export interface BiscointTradeVarPopFields {
  closeOfferId?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  openOfferId?: Maybe<Scalars['Float']>;
}

/** aggregate var_samp on columns */
export interface BiscointTradeVarSampFields {
  closeOfferId?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  openOfferId?: Maybe<Scalars['Float']>;
}

/** aggregate variance on columns */
export interface BiscointTradeVarianceFields {
  closeOfferId?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  openOfferId?: Maybe<Scalars['Float']>;
}

/** columns and relationships of "biscoint.zombie_offer" */
export interface BiscointZombieOffer {
  anticipatedAmount?: Maybe<Scalars['String']>;
  anticipationFeeQuote?: Maybe<Scalars['String']>;
  apiKeyId?: Maybe<Scalars['String']>;
  base?: Maybe<Scalars['String']>;
  baseAmount?: Maybe<Scalars['String']>;
  confirmedAt?: Maybe<Scalars['timestamptz']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  efPrice?: Maybe<Scalars['String']>;
  expiresAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  isQuote?: Maybe<Scalars['Boolean']>;
  nextRecycleAt?: Maybe<Scalars['timestamptz']>;
  offerId?: Maybe<Scalars['String']>;
  op?: Maybe<Scalars['String']>;
  quote?: Maybe<Scalars['String']>;
  quoteAmount?: Maybe<Scalars['String']>;
}

/** aggregated selection of "biscoint.zombie_offer" */
export interface BiscointZombieOfferAggregate {
  aggregate?: Maybe<BiscointZombieOfferAggregateFields>;
  nodes: Array<BiscointZombieOffer>;
}

/** aggregate fields of "biscoint.zombie_offer" */
export interface BiscointZombieOfferAggregateFields {
  avg?: Maybe<BiscointZombieOfferAvgFields>;
  count: Scalars['Int'];
  max?: Maybe<BiscointZombieOfferMaxFields>;
  min?: Maybe<BiscointZombieOfferMinFields>;
  stddev?: Maybe<BiscointZombieOfferStddevFields>;
  stddev_pop?: Maybe<BiscointZombieOfferStddevPopFields>;
  stddev_samp?: Maybe<BiscointZombieOfferStddevSampFields>;
  sum?: Maybe<BiscointZombieOfferSumFields>;
  var_pop?: Maybe<BiscointZombieOfferVarPopFields>;
  var_samp?: Maybe<BiscointZombieOfferVarSampFields>;
  variance?: Maybe<BiscointZombieOfferVarianceFields>;
}

/** aggregate fields of "biscoint.zombie_offer" */
export interface BiscointZombieOfferAggregateFieldsCountArgs {
  columns?: InputMaybe<Array<BiscointZombieOfferSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
}

/** aggregate avg on columns */
export interface BiscointZombieOfferAvgFields {
  id?: Maybe<Scalars['Float']>;
}

/** Boolean expression to filter rows from the table "biscoint.zombie_offer". All fields are combined with a logical 'AND'. */
export interface BiscointZombieOfferBoolExp {
  _and?: InputMaybe<Array<BiscointZombieOfferBoolExp>>;
  _not?: InputMaybe<BiscointZombieOfferBoolExp>;
  _or?: InputMaybe<Array<BiscointZombieOfferBoolExp>>;
  anticipatedAmount?: InputMaybe<StringComparisonExp>;
  anticipationFeeQuote?: InputMaybe<StringComparisonExp>;
  apiKeyId?: InputMaybe<StringComparisonExp>;
  base?: InputMaybe<StringComparisonExp>;
  baseAmount?: InputMaybe<StringComparisonExp>;
  confirmedAt?: InputMaybe<TimestamptzComparisonExp>;
  createdAt?: InputMaybe<TimestamptzComparisonExp>;
  efPrice?: InputMaybe<StringComparisonExp>;
  expiresAt?: InputMaybe<TimestamptzComparisonExp>;
  id?: InputMaybe<IntComparisonExp>;
  isQuote?: InputMaybe<BooleanComparisonExp>;
  nextRecycleAt?: InputMaybe<TimestamptzComparisonExp>;
  offerId?: InputMaybe<StringComparisonExp>;
  op?: InputMaybe<StringComparisonExp>;
  quote?: InputMaybe<StringComparisonExp>;
  quoteAmount?: InputMaybe<StringComparisonExp>;
}

/** input type for incrementing numeric columns in table "biscoint.zombie_offer" */
export interface BiscointZombieOfferIncInput {
  id?: InputMaybe<Scalars['Int']>;
}

/** input type for inserting data into table "biscoint.zombie_offer" */
export interface BiscointZombieOfferInsertInput {
  anticipatedAmount?: InputMaybe<Scalars['String']>;
  anticipationFeeQuote?: InputMaybe<Scalars['String']>;
  apiKeyId?: InputMaybe<Scalars['String']>;
  base?: InputMaybe<Scalars['String']>;
  baseAmount?: InputMaybe<Scalars['String']>;
  confirmedAt?: InputMaybe<Scalars['timestamptz']>;
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  efPrice?: InputMaybe<Scalars['String']>;
  expiresAt?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['Int']>;
  isQuote?: InputMaybe<Scalars['Boolean']>;
  nextRecycleAt?: InputMaybe<Scalars['timestamptz']>;
  offerId?: InputMaybe<Scalars['String']>;
  op?: InputMaybe<Scalars['String']>;
  quote?: InputMaybe<Scalars['String']>;
  quoteAmount?: InputMaybe<Scalars['String']>;
}

/** aggregate max on columns */
export interface BiscointZombieOfferMaxFields {
  anticipatedAmount?: Maybe<Scalars['String']>;
  anticipationFeeQuote?: Maybe<Scalars['String']>;
  apiKeyId?: Maybe<Scalars['String']>;
  base?: Maybe<Scalars['String']>;
  baseAmount?: Maybe<Scalars['String']>;
  confirmedAt?: Maybe<Scalars['timestamptz']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  efPrice?: Maybe<Scalars['String']>;
  expiresAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  nextRecycleAt?: Maybe<Scalars['timestamptz']>;
  offerId?: Maybe<Scalars['String']>;
  op?: Maybe<Scalars['String']>;
  quote?: Maybe<Scalars['String']>;
  quoteAmount?: Maybe<Scalars['String']>;
}

/** aggregate min on columns */
export interface BiscointZombieOfferMinFields {
  anticipatedAmount?: Maybe<Scalars['String']>;
  anticipationFeeQuote?: Maybe<Scalars['String']>;
  apiKeyId?: Maybe<Scalars['String']>;
  base?: Maybe<Scalars['String']>;
  baseAmount?: Maybe<Scalars['String']>;
  confirmedAt?: Maybe<Scalars['timestamptz']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  efPrice?: Maybe<Scalars['String']>;
  expiresAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  nextRecycleAt?: Maybe<Scalars['timestamptz']>;
  offerId?: Maybe<Scalars['String']>;
  op?: Maybe<Scalars['String']>;
  quote?: Maybe<Scalars['String']>;
  quoteAmount?: Maybe<Scalars['String']>;
}

/** response of any mutation on the table "biscoint.zombie_offer" */
export interface BiscointZombieOfferMutationResponse {
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<BiscointZombieOffer>;
}

/** Ordering options when selecting data from "biscoint.zombie_offer". */
export interface BiscointZombieOfferOrderBy {
  anticipatedAmount?: InputMaybe<OrderBy>;
  anticipationFeeQuote?: InputMaybe<OrderBy>;
  apiKeyId?: InputMaybe<OrderBy>;
  base?: InputMaybe<OrderBy>;
  baseAmount?: InputMaybe<OrderBy>;
  confirmedAt?: InputMaybe<OrderBy>;
  createdAt?: InputMaybe<OrderBy>;
  efPrice?: InputMaybe<OrderBy>;
  expiresAt?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  isQuote?: InputMaybe<OrderBy>;
  nextRecycleAt?: InputMaybe<OrderBy>;
  offerId?: InputMaybe<OrderBy>;
  op?: InputMaybe<OrderBy>;
  quote?: InputMaybe<OrderBy>;
  quoteAmount?: InputMaybe<OrderBy>;
}

/** select columns of table "biscoint.zombie_offer" */
export enum BiscointZombieOfferSelectColumn {
  /** column name */
  AnticipatedAmount = 'anticipatedAmount',
  /** column name */
  AnticipationFeeQuote = 'anticipationFeeQuote',
  /** column name */
  ApiKeyId = 'apiKeyId',
  /** column name */
  Base = 'base',
  /** column name */
  BaseAmount = 'baseAmount',
  /** column name */
  ConfirmedAt = 'confirmedAt',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  EfPrice = 'efPrice',
  /** column name */
  ExpiresAt = 'expiresAt',
  /** column name */
  Id = 'id',
  /** column name */
  IsQuote = 'isQuote',
  /** column name */
  NextRecycleAt = 'nextRecycleAt',
  /** column name */
  OfferId = 'offerId',
  /** column name */
  Op = 'op',
  /** column name */
  Quote = 'quote',
  /** column name */
  QuoteAmount = 'quoteAmount',
}

/** input type for updating data in table "biscoint.zombie_offer" */
export interface BiscointZombieOfferSetInput {
  anticipatedAmount?: InputMaybe<Scalars['String']>;
  anticipationFeeQuote?: InputMaybe<Scalars['String']>;
  apiKeyId?: InputMaybe<Scalars['String']>;
  base?: InputMaybe<Scalars['String']>;
  baseAmount?: InputMaybe<Scalars['String']>;
  confirmedAt?: InputMaybe<Scalars['timestamptz']>;
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  efPrice?: InputMaybe<Scalars['String']>;
  expiresAt?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['Int']>;
  isQuote?: InputMaybe<Scalars['Boolean']>;
  nextRecycleAt?: InputMaybe<Scalars['timestamptz']>;
  offerId?: InputMaybe<Scalars['String']>;
  op?: InputMaybe<Scalars['String']>;
  quote?: InputMaybe<Scalars['String']>;
  quoteAmount?: InputMaybe<Scalars['String']>;
}

/** aggregate stddev on columns */
export interface BiscointZombieOfferStddevFields {
  id?: Maybe<Scalars['Float']>;
}

/** aggregate stddev_pop on columns */
export interface BiscointZombieOfferStddevPopFields {
  id?: Maybe<Scalars['Float']>;
}

/** aggregate stddev_samp on columns */
export interface BiscointZombieOfferStddevSampFields {
  id?: Maybe<Scalars['Float']>;
}

/** aggregate sum on columns */
export interface BiscointZombieOfferSumFields {
  id?: Maybe<Scalars['Int']>;
}

/** aggregate var_pop on columns */
export interface BiscointZombieOfferVarPopFields {
  id?: Maybe<Scalars['Float']>;
}

/** aggregate var_samp on columns */
export interface BiscointZombieOfferVarSampFields {
  id?: Maybe<Scalars['Float']>;
}

/** aggregate variance on columns */
export interface BiscointZombieOfferVarianceFields {
  id?: Maybe<Scalars['Float']>;
}

/** mutation root */
export interface MutationRoot {
  /** delete data from the table: "biscoint.offer" */
  delete_biscoint_offer?: Maybe<BiscointOfferMutationResponse>;
  /** delete single row from the table: "biscoint.offer" */
  delete_biscoint_offer_by_pk?: Maybe<BiscointOffer>;
  /** delete data from the table: "biscoint.order" */
  delete_biscoint_order?: Maybe<BiscointOrderMutationResponse>;
  /** delete single row from the table: "biscoint.order" */
  delete_biscoint_order_by_pk?: Maybe<BiscointOrder>;
  /** delete data from the table: "biscoint.trade" */
  delete_biscoint_trade?: Maybe<BiscointTradeMutationResponse>;
  /** delete single row from the table: "biscoint.trade" */
  delete_biscoint_trade_by_pk?: Maybe<BiscointTrade>;
  /** delete data from the table: "biscoint.zombie_offer" */
  delete_biscoint_zombie_offer?: Maybe<BiscointZombieOfferMutationResponse>;
  /** insert data into the table: "biscoint.offer" */
  insert_biscoint_offer?: Maybe<BiscointOfferMutationResponse>;
  /** insert a single row into the table: "biscoint.offer" */
  insert_biscoint_offer_one?: Maybe<BiscointOffer>;
  /** insert data into the table: "biscoint.order" */
  insert_biscoint_order?: Maybe<BiscointOrderMutationResponse>;
  /** insert a single row into the table: "biscoint.order" */
  insert_biscoint_order_one?: Maybe<BiscointOrder>;
  /** insert data into the table: "biscoint.trade" */
  insert_biscoint_trade?: Maybe<BiscointTradeMutationResponse>;
  /** insert a single row into the table: "biscoint.trade" */
  insert_biscoint_trade_one?: Maybe<BiscointTrade>;
  /** insert data into the table: "biscoint.zombie_offer" */
  insert_biscoint_zombie_offer?: Maybe<BiscointZombieOfferMutationResponse>;
  /** insert a single row into the table: "biscoint.zombie_offer" */
  insert_biscoint_zombie_offer_one?: Maybe<BiscointZombieOffer>;
  /** update data of the table: "biscoint.offer" */
  update_biscoint_offer?: Maybe<BiscointOfferMutationResponse>;
  /** update single row of the table: "biscoint.offer" */
  update_biscoint_offer_by_pk?: Maybe<BiscointOffer>;
  /** update data of the table: "biscoint.order" */
  update_biscoint_order?: Maybe<BiscointOrderMutationResponse>;
  /** update single row of the table: "biscoint.order" */
  update_biscoint_order_by_pk?: Maybe<BiscointOrder>;
  /** update data of the table: "biscoint.trade" */
  update_biscoint_trade?: Maybe<BiscointTradeMutationResponse>;
  /** update single row of the table: "biscoint.trade" */
  update_biscoint_trade_by_pk?: Maybe<BiscointTrade>;
  /** update data of the table: "biscoint.zombie_offer" */
  update_biscoint_zombie_offer?: Maybe<BiscointZombieOfferMutationResponse>;
}

/** mutation root */
export interface MutationRootDeleteBiscointOfferArgs {
  where: BiscointOfferBoolExp;
}

/** mutation root */
export interface MutationRootDeleteBiscointOfferByPkArgs {
  id: Scalars['Int'];
}

/** mutation root */
export interface MutationRootDeleteBiscointOrderArgs {
  where: BiscointOrderBoolExp;
}

/** mutation root */
export interface MutationRootDeleteBiscointOrderByPkArgs {
  id: Scalars['Int'];
}

/** mutation root */
export interface MutationRootDeleteBiscointTradeArgs {
  where: BiscointTradeBoolExp;
}

/** mutation root */
export interface MutationRootDeleteBiscointTradeByPkArgs {
  id: Scalars['Int'];
}

/** mutation root */
export interface MutationRootDeleteBiscointZombieOfferArgs {
  where: BiscointZombieOfferBoolExp;
}

/** mutation root */
export interface MutationRootInsertBiscointOfferArgs {
  objects: Array<BiscointOfferInsertInput>;
  on_conflict?: InputMaybe<BiscointOfferOnConflict>;
}

/** mutation root */
export interface MutationRootInsertBiscointOfferOneArgs {
  object: BiscointOfferInsertInput;
  on_conflict?: InputMaybe<BiscointOfferOnConflict>;
}

/** mutation root */
export interface MutationRootInsertBiscointOrderArgs {
  objects: Array<BiscointOrderInsertInput>;
  on_conflict?: InputMaybe<BiscointOrderOnConflict>;
}

/** mutation root */
export interface MutationRootInsertBiscointOrderOneArgs {
  object: BiscointOrderInsertInput;
  on_conflict?: InputMaybe<BiscointOrderOnConflict>;
}

/** mutation root */
export interface MutationRootInsertBiscointTradeArgs {
  objects: Array<BiscointTradeInsertInput>;
  on_conflict?: InputMaybe<BiscointTradeOnConflict>;
}

/** mutation root */
export interface MutationRootInsertBiscointTradeOneArgs {
  object: BiscointTradeInsertInput;
  on_conflict?: InputMaybe<BiscointTradeOnConflict>;
}

/** mutation root */
export interface MutationRootInsertBiscointZombieOfferArgs {
  objects: Array<BiscointZombieOfferInsertInput>;
}

/** mutation root */
export interface MutationRootInsertBiscointZombieOfferOneArgs {
  object: BiscointZombieOfferInsertInput;
}

/** mutation root */
export interface MutationRootUpdateBiscointOfferArgs {
  _inc?: InputMaybe<BiscointOfferIncInput>;
  _set?: InputMaybe<BiscointOfferSetInput>;
  where: BiscointOfferBoolExp;
}

/** mutation root */
export interface MutationRootUpdateBiscointOfferByPkArgs {
  _inc?: InputMaybe<BiscointOfferIncInput>;
  _set?: InputMaybe<BiscointOfferSetInput>;
  pk_columns: BiscointOfferPkColumnsInput;
}

/** mutation root */
export interface MutationRootUpdateBiscointOrderArgs {
  _inc?: InputMaybe<BiscointOrderIncInput>;
  _set?: InputMaybe<BiscointOrderSetInput>;
  where: BiscointOrderBoolExp;
}

/** mutation root */
export interface MutationRootUpdateBiscointOrderByPkArgs {
  _inc?: InputMaybe<BiscointOrderIncInput>;
  _set?: InputMaybe<BiscointOrderSetInput>;
  pk_columns: BiscointOrderPkColumnsInput;
}

/** mutation root */
export interface MutationRootUpdateBiscointTradeArgs {
  _inc?: InputMaybe<BiscointTradeIncInput>;
  _set?: InputMaybe<BiscointTradeSetInput>;
  where: BiscointTradeBoolExp;
}

/** mutation root */
export interface MutationRootUpdateBiscointTradeByPkArgs {
  _inc?: InputMaybe<BiscointTradeIncInput>;
  _set?: InputMaybe<BiscointTradeSetInput>;
  pk_columns: BiscointTradePkColumnsInput;
}

/** mutation root */
export interface MutationRootUpdateBiscointZombieOfferArgs {
  _inc?: InputMaybe<BiscointZombieOfferIncInput>;
  _set?: InputMaybe<BiscointZombieOfferSetInput>;
  where: BiscointZombieOfferBoolExp;
}

/** Boolean expression to compare columns of type "numeric". All fields are combined with logical 'AND'. */
export interface NumericComparisonExp {
  _eq?: InputMaybe<Scalars['numeric']>;
  _gt?: InputMaybe<Scalars['numeric']>;
  _gte?: InputMaybe<Scalars['numeric']>;
  _in?: InputMaybe<Array<Scalars['numeric']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['numeric']>;
  _lte?: InputMaybe<Scalars['numeric']>;
  _neq?: InputMaybe<Scalars['numeric']>;
  _nin?: InputMaybe<Array<Scalars['numeric']>>;
}

/** column ordering options */
export enum OrderBy {
  /** in ascending order, nulls last */
  Asc = 'asc',
  /** in ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in descending order, nulls first */
  Desc = 'desc',
  /** in descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in descending order, nulls last */
  DescNullsLast = 'desc_nulls_last',
}

export interface QueryRoot {
  /** fetch data from the table: "biscoint.missed_profit" */
  biscoint_missed_profit: Array<BiscointMissedProfit>;
  /** fetch aggregated fields from the table: "biscoint.missed_profit" */
  biscoint_missed_profit_aggregate: BiscointMissedProfitAggregate;
  /** fetch data from the table: "biscoint.missed_trade" */
  biscoint_missed_trade: Array<BiscointMissedTrade>;
  /** fetch aggregated fields from the table: "biscoint.missed_trade" */
  biscoint_missed_trade_aggregate: BiscointMissedTradeAggregate;
  /** fetch data from the table: "biscoint.offer" */
  biscoint_offer: Array<BiscointOffer>;
  /** fetch aggregated fields from the table: "biscoint.offer" */
  biscoint_offer_aggregate: BiscointOfferAggregate;
  /** fetch data from the table: "biscoint.offer" using primary key columns */
  biscoint_offer_by_pk?: Maybe<BiscointOffer>;
  /** fetch data from the table: "biscoint.order" */
  biscoint_order: Array<BiscointOrder>;
  /** fetch aggregated fields from the table: "biscoint.order" */
  biscoint_order_aggregate: BiscointOrderAggregate;
  /** fetch data from the table: "biscoint.order" using primary key columns */
  biscoint_order_by_pk?: Maybe<BiscointOrder>;
  /** fetch data from the table: "biscoint.pending_trade" */
  biscoint_pending_trade: Array<BiscointPendingTrade>;
  /** fetch aggregated fields from the table: "biscoint.pending_trade" */
  biscoint_pending_trade_aggregate: BiscointPendingTradeAggregate;
  /** fetch data from the table: "biscoint.trade" */
  biscoint_trade: Array<BiscointTrade>;
  /** fetch aggregated fields from the table: "biscoint.trade" */
  biscoint_trade_aggregate: BiscointTradeAggregate;
  /** fetch data from the table: "biscoint.trade" using primary key columns */
  biscoint_trade_by_pk?: Maybe<BiscointTrade>;
  /** fetch data from the table: "biscoint.zombie_offer" */
  biscoint_zombie_offer: Array<BiscointZombieOffer>;
  /** fetch aggregated fields from the table: "biscoint.zombie_offer" */
  biscoint_zombie_offer_aggregate: BiscointZombieOfferAggregate;
}

export interface QueryRootBiscointMissedProfitArgs {
  distinct_on?: InputMaybe<Array<BiscointMissedProfitSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<BiscointMissedProfitOrderBy>>;
  where?: InputMaybe<BiscointMissedProfitBoolExp>;
}

export interface QueryRootBiscointMissedProfitAggregateArgs {
  distinct_on?: InputMaybe<Array<BiscointMissedProfitSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<BiscointMissedProfitOrderBy>>;
  where?: InputMaybe<BiscointMissedProfitBoolExp>;
}

export interface QueryRootBiscointMissedTradeArgs {
  distinct_on?: InputMaybe<Array<BiscointMissedTradeSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<BiscointMissedTradeOrderBy>>;
  where?: InputMaybe<BiscointMissedTradeBoolExp>;
}

export interface QueryRootBiscointMissedTradeAggregateArgs {
  distinct_on?: InputMaybe<Array<BiscointMissedTradeSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<BiscointMissedTradeOrderBy>>;
  where?: InputMaybe<BiscointMissedTradeBoolExp>;
}

export interface QueryRootBiscointOfferArgs {
  distinct_on?: InputMaybe<Array<BiscointOfferSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<BiscointOfferOrderBy>>;
  where?: InputMaybe<BiscointOfferBoolExp>;
}

export interface QueryRootBiscointOfferAggregateArgs {
  distinct_on?: InputMaybe<Array<BiscointOfferSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<BiscointOfferOrderBy>>;
  where?: InputMaybe<BiscointOfferBoolExp>;
}

export interface QueryRootBiscointOfferByPkArgs {
  id: Scalars['Int'];
}

export interface QueryRootBiscointOrderArgs {
  distinct_on?: InputMaybe<Array<BiscointOrderSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<BiscointOrderOrderBy>>;
  where?: InputMaybe<BiscointOrderBoolExp>;
}

export interface QueryRootBiscointOrderAggregateArgs {
  distinct_on?: InputMaybe<Array<BiscointOrderSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<BiscointOrderOrderBy>>;
  where?: InputMaybe<BiscointOrderBoolExp>;
}

export interface QueryRootBiscointOrderByPkArgs {
  id: Scalars['Int'];
}

export interface QueryRootBiscointPendingTradeArgs {
  distinct_on?: InputMaybe<Array<BiscointPendingTradeSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<BiscointPendingTradeOrderBy>>;
  where?: InputMaybe<BiscointPendingTradeBoolExp>;
}

export interface QueryRootBiscointPendingTradeAggregateArgs {
  distinct_on?: InputMaybe<Array<BiscointPendingTradeSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<BiscointPendingTradeOrderBy>>;
  where?: InputMaybe<BiscointPendingTradeBoolExp>;
}

export interface QueryRootBiscointTradeArgs {
  distinct_on?: InputMaybe<Array<BiscointTradeSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<BiscointTradeOrderBy>>;
  where?: InputMaybe<BiscointTradeBoolExp>;
}

export interface QueryRootBiscointTradeAggregateArgs {
  distinct_on?: InputMaybe<Array<BiscointTradeSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<BiscointTradeOrderBy>>;
  where?: InputMaybe<BiscointTradeBoolExp>;
}

export interface QueryRootBiscointTradeByPkArgs {
  id: Scalars['Int'];
}

export interface QueryRootBiscointZombieOfferArgs {
  distinct_on?: InputMaybe<Array<BiscointZombieOfferSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<BiscointZombieOfferOrderBy>>;
  where?: InputMaybe<BiscointZombieOfferBoolExp>;
}

export interface QueryRootBiscointZombieOfferAggregateArgs {
  distinct_on?: InputMaybe<Array<BiscointZombieOfferSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<BiscointZombieOfferOrderBy>>;
  where?: InputMaybe<BiscointZombieOfferBoolExp>;
}

export interface SubscriptionRoot {
  /** fetch data from the table: "biscoint.missed_profit" */
  biscoint_missed_profit: Array<BiscointMissedProfit>;
  /** fetch aggregated fields from the table: "biscoint.missed_profit" */
  biscoint_missed_profit_aggregate: BiscointMissedProfitAggregate;
  /** fetch data from the table: "biscoint.missed_trade" */
  biscoint_missed_trade: Array<BiscointMissedTrade>;
  /** fetch aggregated fields from the table: "biscoint.missed_trade" */
  biscoint_missed_trade_aggregate: BiscointMissedTradeAggregate;
  /** fetch data from the table: "biscoint.offer" */
  biscoint_offer: Array<BiscointOffer>;
  /** fetch aggregated fields from the table: "biscoint.offer" */
  biscoint_offer_aggregate: BiscointOfferAggregate;
  /** fetch data from the table: "biscoint.offer" using primary key columns */
  biscoint_offer_by_pk?: Maybe<BiscointOffer>;
  /** fetch data from the table: "biscoint.order" */
  biscoint_order: Array<BiscointOrder>;
  /** fetch aggregated fields from the table: "biscoint.order" */
  biscoint_order_aggregate: BiscointOrderAggregate;
  /** fetch data from the table: "biscoint.order" using primary key columns */
  biscoint_order_by_pk?: Maybe<BiscointOrder>;
  /** fetch data from the table: "biscoint.pending_trade" */
  biscoint_pending_trade: Array<BiscointPendingTrade>;
  /** fetch aggregated fields from the table: "biscoint.pending_trade" */
  biscoint_pending_trade_aggregate: BiscointPendingTradeAggregate;
  /** fetch data from the table: "biscoint.trade" */
  biscoint_trade: Array<BiscointTrade>;
  /** fetch aggregated fields from the table: "biscoint.trade" */
  biscoint_trade_aggregate: BiscointTradeAggregate;
  /** fetch data from the table: "biscoint.trade" using primary key columns */
  biscoint_trade_by_pk?: Maybe<BiscointTrade>;
  /** fetch data from the table: "biscoint.zombie_offer" */
  biscoint_zombie_offer: Array<BiscointZombieOffer>;
  /** fetch aggregated fields from the table: "biscoint.zombie_offer" */
  biscoint_zombie_offer_aggregate: BiscointZombieOfferAggregate;
}

export interface SubscriptionRootBiscointMissedProfitArgs {
  distinct_on?: InputMaybe<Array<BiscointMissedProfitSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<BiscointMissedProfitOrderBy>>;
  where?: InputMaybe<BiscointMissedProfitBoolExp>;
}

export interface SubscriptionRootBiscointMissedProfitAggregateArgs {
  distinct_on?: InputMaybe<Array<BiscointMissedProfitSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<BiscointMissedProfitOrderBy>>;
  where?: InputMaybe<BiscointMissedProfitBoolExp>;
}

export interface SubscriptionRootBiscointMissedTradeArgs {
  distinct_on?: InputMaybe<Array<BiscointMissedTradeSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<BiscointMissedTradeOrderBy>>;
  where?: InputMaybe<BiscointMissedTradeBoolExp>;
}

export interface SubscriptionRootBiscointMissedTradeAggregateArgs {
  distinct_on?: InputMaybe<Array<BiscointMissedTradeSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<BiscointMissedTradeOrderBy>>;
  where?: InputMaybe<BiscointMissedTradeBoolExp>;
}

export interface SubscriptionRootBiscointOfferArgs {
  distinct_on?: InputMaybe<Array<BiscointOfferSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<BiscointOfferOrderBy>>;
  where?: InputMaybe<BiscointOfferBoolExp>;
}

export interface SubscriptionRootBiscointOfferAggregateArgs {
  distinct_on?: InputMaybe<Array<BiscointOfferSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<BiscointOfferOrderBy>>;
  where?: InputMaybe<BiscointOfferBoolExp>;
}

export interface SubscriptionRootBiscointOfferByPkArgs {
  id: Scalars['Int'];
}

export interface SubscriptionRootBiscointOrderArgs {
  distinct_on?: InputMaybe<Array<BiscointOrderSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<BiscointOrderOrderBy>>;
  where?: InputMaybe<BiscointOrderBoolExp>;
}

export interface SubscriptionRootBiscointOrderAggregateArgs {
  distinct_on?: InputMaybe<Array<BiscointOrderSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<BiscointOrderOrderBy>>;
  where?: InputMaybe<BiscointOrderBoolExp>;
}

export interface SubscriptionRootBiscointOrderByPkArgs {
  id: Scalars['Int'];
}

export interface SubscriptionRootBiscointPendingTradeArgs {
  distinct_on?: InputMaybe<Array<BiscointPendingTradeSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<BiscointPendingTradeOrderBy>>;
  where?: InputMaybe<BiscointPendingTradeBoolExp>;
}

export interface SubscriptionRootBiscointPendingTradeAggregateArgs {
  distinct_on?: InputMaybe<Array<BiscointPendingTradeSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<BiscointPendingTradeOrderBy>>;
  where?: InputMaybe<BiscointPendingTradeBoolExp>;
}

export interface SubscriptionRootBiscointTradeArgs {
  distinct_on?: InputMaybe<Array<BiscointTradeSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<BiscointTradeOrderBy>>;
  where?: InputMaybe<BiscointTradeBoolExp>;
}

export interface SubscriptionRootBiscointTradeAggregateArgs {
  distinct_on?: InputMaybe<Array<BiscointTradeSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<BiscointTradeOrderBy>>;
  where?: InputMaybe<BiscointTradeBoolExp>;
}

export interface SubscriptionRootBiscointTradeByPkArgs {
  id: Scalars['Int'];
}

export interface SubscriptionRootBiscointZombieOfferArgs {
  distinct_on?: InputMaybe<Array<BiscointZombieOfferSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<BiscointZombieOfferOrderBy>>;
  where?: InputMaybe<BiscointZombieOfferBoolExp>;
}

export interface SubscriptionRootBiscointZombieOfferAggregateArgs {
  distinct_on?: InputMaybe<Array<BiscointZombieOfferSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<BiscointZombieOfferOrderBy>>;
  where?: InputMaybe<BiscointZombieOfferBoolExp>;
}

/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
export interface TimestamptzComparisonExp {
  _eq?: InputMaybe<Scalars['timestamptz']>;
  _gt?: InputMaybe<Scalars['timestamptz']>;
  _gte?: InputMaybe<Scalars['timestamptz']>;
  _in?: InputMaybe<Array<Scalars['timestamptz']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['timestamptz']>;
  _lte?: InputMaybe<Scalars['timestamptz']>;
  _neq?: InputMaybe<Scalars['timestamptz']>;
  _nin?: InputMaybe<Array<Scalars['timestamptz']>>;
}

export type CreateOfferMutationVariables = Exact<{
  input: BiscointOfferInsertInput;
}>;

export type CreateOfferMutation = {
  insert_biscoint_offer_one?: { id: number } | null | undefined;
};

export type FindPendingTradesQueryVariables = Exact<{ [key: string]: never }>;

export type FindPendingTradesQuery = {
  biscoint_trade: Array<{
    id: number;
    checkedAt?: Date | null | undefined;
    owner?: string | null | undefined;
    status: string;
    strategy?: string | null | undefined;
    type?: string | null | undefined;
    hasSiblings?: boolean | null | undefined;
    openOfferId: number;
    closeOfferId?: number | null | undefined;
    closeOffer?:
      | {
          apiKeyId: string;
          base: string;
          baseAmount: string;
          confirmedAt?: Date | null | undefined;
          createdAt: Date;
          efPrice: string;
          expiresAt: Date;
          id: number;
          isQuote: boolean;
          offerId: string;
          op: string;
          quote: string;
          quoteAmount: string;
        }
      | null
      | undefined;
    openOffer: {
      apiKeyId: string;
      base: string;
      baseAmount: string;
      confirmedAt?: Date | null | undefined;
      createdAt: Date;
      efPrice: string;
      expiresAt: Date;
      id: number;
      isQuote: boolean;
      offerId: string;
      op: string;
      quote: string;
      quoteAmount: string;
    };
  }>;
};

export type UpdateOfferMutationVariables = Exact<{
  id: Scalars['Int'];
  apiKeyId?: InputMaybe<Scalars['String']>;
  confirmedAt?: InputMaybe<Scalars['timestamptz']>;
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  efPrice?: InputMaybe<Scalars['String']>;
  expiresAt?: InputMaybe<Scalars['timestamptz']>;
  offerId?: InputMaybe<Scalars['String']>;
  quoteAmount?: InputMaybe<Scalars['String']>;
}>;

export type UpdateOfferMutation = {
  update_biscoint_offer_by_pk?: { id: number } | null | undefined;
};

export type UpdateTradeMutationVariables = Exact<{
  id: Scalars['Int'];
  checkedAt?: InputMaybe<Scalars['timestamptz']>;
  status?: InputMaybe<Scalars['String']>;
  hasSiblings?: InputMaybe<Scalars['Boolean']>;
  closeOfferId?: InputMaybe<Scalars['Int']>;
}>;

export type UpdateTradeMutation = {
  update_biscoint_trade_by_pk?: { id: number } | null | undefined;
};

export const CreateOfferDocument = gql`
  mutation createOffer($input: biscoint_offer_insert_input!) {
    insert_biscoint_offer_one(object: $input) {
      id
    }
  }
`;
export const FindPendingTradesDocument = gql`
  query findPendingTrades {
    biscoint_trade(
      where: { type: { _eq: "arbitrage" }, status: { _in: ["open", "broken"] } }
    ) {
      closeOffer {
        apiKeyId
        base
        baseAmount
        confirmedAt
        createdAt
        efPrice
        expiresAt
        id
        isQuote
        offerId
        op
        quote
        quoteAmount
      }
      id
      checkedAt
      openOffer {
        apiKeyId
        base
        baseAmount
        confirmedAt
        createdAt
        efPrice
        expiresAt
        id
        isQuote
        offerId
        op
        quote
        quoteAmount
      }
      owner
      status
      strategy
      type
      hasSiblings
      openOfferId
      closeOfferId
    }
  }
`;
export const UpdateOfferDocument = gql`
  mutation updateOffer(
    $id: Int!
    $apiKeyId: String
    $confirmedAt: timestamptz
    $createdAt: timestamptz
    $efPrice: String
    $expiresAt: timestamptz
    $offerId: String
    $quoteAmount: String
  ) {
    update_biscoint_offer_by_pk(
      pk_columns: { id: $id }
      _set: {
        apiKeyId: $apiKeyId
        confirmedAt: $confirmedAt
        createdAt: $createdAt
        efPrice: $efPrice
        expiresAt: $expiresAt
        offerId: $offerId
        quoteAmount: $quoteAmount
      }
    ) {
      id
    }
  }
`;
export const UpdateTradeDocument = gql`
  mutation updateTrade(
    $id: Int!
    $checkedAt: timestamptz
    $status: String
    $hasSiblings: Boolean
    $closeOfferId: Int
  ) {
    update_biscoint_trade_by_pk(
      pk_columns: { id: $id }
      _set: {
        checkedAt: $checkedAt
        status: $status
        hasSiblings: $hasSiblings
        closeOfferId: $closeOfferId
      }
    ) {
      id
    }
  }
`;

export type SdkFunctionWrapper = <T>(
  action: (requestHeaders?: Record<string, string>) => Promise<T>,
  operationName: string,
) => Promise<T>;

const defaultWrapper: SdkFunctionWrapper = (action, _operationName) => action();

export function getSdk(
  client: GraphQLClient,
  withWrapper: SdkFunctionWrapper = defaultWrapper,
) {
  return {
    createOffer(
      variables: CreateOfferMutationVariables,
      requestHeaders?: Dom.RequestInit['headers'],
    ): Promise<CreateOfferMutation> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<CreateOfferMutation>(CreateOfferDocument, variables, {
            ...requestHeaders,
            ...wrappedRequestHeaders,
          }),
        'createOffer',
      );
    },
    findPendingTrades(
      variables?: FindPendingTradesQueryVariables,
      requestHeaders?: Dom.RequestInit['headers'],
    ): Promise<FindPendingTradesQuery> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<FindPendingTradesQuery>(
            FindPendingTradesDocument,
            variables,
            { ...requestHeaders, ...wrappedRequestHeaders },
          ),
        'findPendingTrades',
      );
    },
    updateOffer(
      variables: UpdateOfferMutationVariables,
      requestHeaders?: Dom.RequestInit['headers'],
    ): Promise<UpdateOfferMutation> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<UpdateOfferMutation>(UpdateOfferDocument, variables, {
            ...requestHeaders,
            ...wrappedRequestHeaders,
          }),
        'updateOffer',
      );
    },
    updateTrade(
      variables: UpdateTradeMutationVariables,
      requestHeaders?: Dom.RequestInit['headers'],
    ): Promise<UpdateTradeMutation> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<UpdateTradeMutation>(UpdateTradeDocument, variables, {
            ...requestHeaders,
            ...wrappedRequestHeaders,
          }),
        'updateTrade',
      );
    },
  };
}
export type Sdk = ReturnType<typeof getSdk>;
