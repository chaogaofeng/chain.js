import { JSONSerializable, removeNull } from '../../../util/json';
import { AccAddress } from '../../bech32';
import { Coins } from '../../Coins';
import { Any } from '../../../proto/google/protobuf/any';
import { MsgInstantiateContract as MsgInstantiateContract_pb } from '../../../proto/cosmwasm/wasm/v1/tx';
import * as Long from 'long';

export class MsgInstantiateContract extends JSONSerializable<
  MsgInstantiateContract.Amino,
  MsgInstantiateContract.Data,
  MsgInstantiateContract.Proto
> {
  public funds: Coins;

  /**
   * @param sender is a sender address
   * @param admin is an optional contract admin address who can migrate the contract, put empty string to disable migration
   * @param code_id is the reference to the stored WASM code
   * @param msg json encoded message to be passed to the contract on instantiation
   * @param funds are transferred to the contract on execution
   */
  constructor(
    public sender: AccAddress,
    public admin: AccAddress | undefined,
    public code_id: number,
    public msg: object | string,
    funds: Coins.Input = {}
  ) {
    super();
    this.funds = new Coins(funds);
  }

  public static fromAmino(
    data: MsgInstantiateContract.Amino
  ): MsgInstantiateContract {
    const {
      value: { sender, admin, code_id, msg, funds },
    } = data;
    return new MsgInstantiateContract(
      sender,
      admin,
      Number.parseInt(code_id),
      msg,
      Coins.fromAmino(funds)
    );
  }

  public toAmino(): MsgInstantiateContract.Amino {
    const { sender, admin, code_id, msg, funds } = this;
    return {
      type: 'wasm/MsgInstantiateContract',
      value: {
        sender,
        admin,
        code_id: code_id.toFixed(),
        msg: removeNull(msg),
        funds: funds.toAmino(),
      },
    };
  }

  public static fromProto(
    proto: MsgInstantiateContract.Proto
  ): MsgInstantiateContract {
    return new MsgInstantiateContract(
      proto.sender,
      proto.admin !== '' ? proto.admin : undefined,
      proto.codeId.toNumber(),
      JSON.parse(Buffer.from(proto.msg).toString('utf-8')),
      Coins.fromProto(proto.funds)
    );
  }

  public toProto(): MsgInstantiateContract.Proto {
    const { sender, admin, code_id, msg, funds } = this;
    return MsgInstantiateContract_pb.fromPartial({
      admin,
      codeId: Long.fromNumber(code_id),
      funds: funds.toProto(),
      msg: Buffer.from(JSON.stringify(msg), 'utf-8'),
      sender,
    });
  }

  public packAny(): Any {
    return Any.fromPartial({
      typeUrl: '/cosmwasm.wasm.v1.MsgInstantiateContract',
      value: MsgInstantiateContract_pb.encode(this.toProto()).finish(),
    });
  }

  public static unpackAny(msgAny: Any): MsgInstantiateContract {
    return MsgInstantiateContract.fromProto(
      MsgInstantiateContract_pb.decode(msgAny.value)
    );
  }

  public static fromData(
    data: MsgInstantiateContract.Data
  ): MsgInstantiateContract {
    const { sender, admin, code_id, msg, funds } = data;
    return new MsgInstantiateContract(
      sender,
      admin !== '' ? admin : undefined,
      Number.parseInt(code_id),
      msg,
      Coins.fromData(funds)
    );
  }

  public toData(): MsgInstantiateContract.Data {
    const { sender, admin, code_id, msg, funds } = this;
    return {
      '@type': '/cosmwasm.wasm.v1.MsgInstantiateContract',
      sender,
      admin: admin || '',
      code_id: code_id.toFixed(),
      msg: removeNull(msg),
      funds: funds.toData(),
    };
  }
}

export namespace MsgInstantiateContract {
  export interface Amino {
    type: 'wasm/MsgInstantiateContract';
    value: {
      sender: AccAddress;
      admin?: AccAddress;
      code_id: string;
      msg: object | string;
      funds: Coins.Amino;
    };
  }

  export interface Data {
    '@type': '/cosmwasm.wasm.v1.MsgInstantiateContract';
    sender: AccAddress;
    admin: AccAddress;
    code_id: string;
    msg: object | string;
    funds: Coins.Data;
  }

  export type Proto = MsgInstantiateContract_pb;
}
