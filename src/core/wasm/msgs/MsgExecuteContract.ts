import { JSONSerializable, removeNull } from '../../../util/json';
import { AccAddress } from '../../bech32';
import { Coins } from '../../Coins';
import { Any } from '../../../proto/google/protobuf/any';
import { MsgExecuteContract as MsgExecuteContract_pb } from '../../../proto/cosmwasm/wasm/v1/tx';

export class MsgExecuteContract extends JSONSerializable<
  MsgExecuteContract.Amino,
  MsgExecuteContract.Data,
  MsgExecuteContract.Proto
> {
  public funds: Coins;

  /**
   * @param sender contract user
   * @param contract contract address
   * @param msg HandleMsg to pass as arguments for contract invocation
   * @param funds funds to be sent to contract
   */
  constructor(
    public sender: AccAddress,
    public contract: AccAddress,
    public msg: object | string,
    funds: Coins.Input = {}
  ) {
    super();
    this.funds = new Coins(funds);
  }

  public static fromAmino(data: MsgExecuteContract.Amino): MsgExecuteContract {
    const {
      value: { sender, contract, msg, funds },
    } = data;
    return new MsgExecuteContract(
      sender,
      contract,
      msg,
      Coins.fromAmino(funds)
    );
  }

  public toAmino(): MsgExecuteContract.Amino {
    const { sender, contract, msg, funds } = this;

    return {
      type: 'wasm/MsgExecuteContract',
      value: {
        sender,
        contract,
        msg: removeNull(msg),
        funds: funds.toAmino(),
      },
    };
  }

  public static fromProto(data: MsgExecuteContract.Proto): MsgExecuteContract {
    return new MsgExecuteContract(
      data.sender,
      data.contract,
      JSON.parse(Buffer.from(data.msg).toString('utf-8')),
      Coins.fromProto(data.funds)
    );
  }

  public toProto(): MsgExecuteContract.Proto {
    const { sender, contract, msg, funds } = this;
    return MsgExecuteContract_pb.fromPartial({
      funds: funds.toProto(),
      contract,
      sender,
      msg: Buffer.from(JSON.stringify(removeNull(msg)), 'utf-8'),
    });
  }

  public packAny(): Any {
    return Any.fromPartial({
      typeUrl: '/cosmwasm.wasm.v1.MsgExecuteContract',
      value: MsgExecuteContract_pb.encode(this.toProto()).finish(),
    });
  }

  public static unpackAny(msgAny: Any): MsgExecuteContract {
    return MsgExecuteContract.fromProto(
      MsgExecuteContract_pb.decode(msgAny.value)
    );
  }

  public static fromData(data: MsgExecuteContract.Data): MsgExecuteContract {
    const { sender, contract, msg, funds } = data;
    return new MsgExecuteContract(sender, contract, msg, Coins.fromData(funds));
  }

  public toData(): MsgExecuteContract.Data {
    const { sender, contract, msg, funds } = this;
    return {
      '@type': '/cosmwasm.wasm.v1.MsgExecuteContract',
      sender,
      contract,
      msg,
      funds: funds.toData(),
    };
  }
}

export namespace MsgExecuteContract {
  export interface Amino {
    type: 'wasm/MsgExecuteContract';
    value: {
      sender: AccAddress;
      contract: AccAddress;
      msg: object | string;
      funds: Coins.Amino;
    };
  }

  export interface Data {
    '@type': '/cosmwasm.wasm.v1.MsgExecuteContract';
    sender: AccAddress;
    contract: AccAddress;
    msg: object | string;
    funds: Coins.Data;
  }

  export type Proto = MsgExecuteContract_pb;
}
