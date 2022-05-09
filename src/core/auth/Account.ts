import { Any } from '../../proto/google/protobuf/any';
import { BaseAccount } from './BaseAccount';

export type Account = BaseAccount;
/**
 * Stores information about an account fetched from the blockchain.
 */
export namespace Account {
  export type Amino = BaseAccount.Amino;
  export type Data = BaseAccount.Data;
  export type Proto = Any;

  export function fromAmino(amino: Account.Amino): Account {
    switch (amino.type) {
      case 'core/Account':
        return BaseAccount.fromAmino(amino);
    }
  }

  export function fromData(data: Account.Data): Account {
    switch (data['@type']) {
      case '/cosmos.auth.v1beta1.BaseAccount':
        return BaseAccount.fromData(data);
    }
  }

  export function fromProto(accountAny: Account.Proto): Account {
    const typeUrl = accountAny.typeUrl;
    if (typeUrl === '/cosmos.auth.v1beta1.BaseAccount') {
      return BaseAccount.unpackAny(accountAny);
    }
    throw new Error(`Account type ${typeUrl} not recognized`);
  }
}
