import {
  AccAddress,
  Account,
  BaseAccount,
} from '../../../core';
import { BaseAPI } from './BaseAPI';
import { APIParams } from '../APIRequester';

export class AuthAPI extends BaseAPI {
  /**
   * Looks up the account information using its Terra account address.
   *
   * @param address address of account to look up
   */
  public async accountInfo(
    address: AccAddress,
    params: APIParams = {}
  ): Promise<Account> {
    const { account } = await this.c.get<{
      account: BaseAccount.Data;
    }>(`/cosmos/auth/v1beta1/accounts/${address}`, params);
    return Account.fromData(account);
  }
}
