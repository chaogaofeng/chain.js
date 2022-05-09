import { JSONSerializable, removeNull } from '../../../util/json';
import { AccAddress } from '../../bech32';
import { Any } from '../../../proto/google/protobuf/any';
import { MsgMigrateContract as MsgMigrateContract_pb } from '../../../proto/cosmwasm/wasm/v1/tx';
import * as Long from 'long';

export class MsgMigrateContract extends JSONSerializable<
  MsgMigrateContract.Amino,
  MsgMigrateContract.Data,
  MsgMigrateContract.Proto
> {
  /**
   * @param sender contract sender
   * @param contract contract address to be migrated from
   * @param code_id reference to the new code on the blockchain
   * @param msg JSON message to configure the migrate state of the contract
   */
  constructor(
    public sender: AccAddress,
    public contract: AccAddress,
    public code_id: number,
    public msg: object | string // json object or string
  ) {
    super();
  }

  public static fromAmino(data: MsgMigrateContract.Amino): MsgMigrateContract {
    const {
      value: { sender, contract, code_id, msg },
    } = data;
    return new MsgMigrateContract(
      sender,
      contract,
      Number.parseInt(code_id),
      msg
    );
  }

  public toAmino(): MsgMigrateContract.Amino {
    const { sender, contract, code_id, msg } = this;
    return {
      type: 'wasm/MsgMigrateContract',
      value: {
        sender,
        contract,
        code_id: code_id.toFixed(),
        msg: removeNull(msg),
      },
    };
  }

  public static fromProto(proto: MsgMigrateContract.Proto): MsgMigrateContract {
    return new MsgMigrateContract(
      proto.sender,
      proto.contract,
      proto.codeId.toNumber(),
      JSON.parse(Buffer.from(proto.msg).toString('utf-8'))
    );
  }

  public toProto(): MsgMigrateContract.Proto {
    const { sender, contract, code_id, msg } = this;
    return MsgMigrateContract_pb.fromPartial({
      sender,
      contract,
      codeId: Long.fromNumber(code_id),
      msg: Buffer.from(JSON.stringify(msg), 'utf-8'),
    });
  }
  public packAny(): Any {
    return Any.fromPartial({
      typeUrl: '/cosmwasm.wasm.v1.MsgMigrateContract',
      value: MsgMigrateContract_pb.encode(this.toProto()).finish(),
    });
  }

  public static unpackAny(msgAny: Any): MsgMigrateContract {
    return MsgMigrateContract.fromProto(
      MsgMigrateContract_pb.decode(msgAny.value)
    );
  }

  public static fromData(data: MsgMigrateContract.Data): MsgMigrateContract {
    const { sender, contract, code_id, msg } = data;
    return new MsgMigrateContract(
      sender,
      contract,
      Number.parseInt(code_id),
      msg
    );
  }

  public toData(): MsgMigrateContract.Data {
    const { sender, contract, code_id, msg } = this;
    return {
      '@type': '/cosmwasm.wasm.v1.MsgMigrateContract',
      sender,
      contract,
      code_id: code_id.toFixed(),
      msg: removeNull(msg),
    };
  }
}

export namespace MsgMigrateContract {
  export interface Amino {
    type: 'wasm/MsgMigrateContract';
    value: {
      sender: AccAddress;
      contract: AccAddress;
      code_id: string;
      msg: object | string;
    };
  }

  export interface Data {
    '@type': '/cosmwasm.wasm.v1.MsgMigrateContract';
    sender: AccAddress;
    contract: AccAddress;
    code_id: string;
    msg: object | string;
  }

  export type Proto = MsgMigrateContract_pb;
}
