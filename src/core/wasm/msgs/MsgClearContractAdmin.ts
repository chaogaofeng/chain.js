import { JSONSerializable } from '../../../util/json';
import { AccAddress } from '../../bech32';
import { Any } from '../../../proto/google/protobuf/any';
import { MsgClearAdmin as MsgClearContractAdmin_pb } from '../../../proto/cosmwasm/wasm/v1/tx';

export class MsgClearContractAdmin extends JSONSerializable<
  MsgClearContractAdmin.Amino,
  MsgClearContractAdmin.Data,
  MsgClearContractAdmin.Proto
> {
  /**
   * @param sender contract sender
   * @param contract contract address
   */
  constructor(public sender: AccAddress, public contract: AccAddress) {
    super();
  }

  public static fromAmino(
    data: MsgClearContractAdmin.Amino
  ): MsgClearContractAdmin {
    const {
      value: { sender, contract },
    } = data;
    return new MsgClearContractAdmin(sender, contract);
  }

  public toAmino(): MsgClearContractAdmin.Amino {
    const { sender, contract } = this;
    return {
      type: 'wasm/MsgClearAdmin',
      value: {
        sender,
        contract,
      },
    };
  }

  public static fromProto(
    data: MsgClearContractAdmin.Proto
  ): MsgClearContractAdmin {
    return new MsgClearContractAdmin(data.sender, data.contract);
  }

  public toProto(): MsgClearContractAdmin.Proto {
    return MsgClearContractAdmin_pb.fromPartial({
      sender: this.sender,
      contract: this.contract,
    });
  }

  public packAny(): Any {
    return Any.fromPartial({
      typeUrl: '/cosmwasm.wasm.v1.MsgClearContractAdmin',
      value: MsgClearContractAdmin_pb.encode(this.toProto()).finish(),
    });
  }

  public static unpackAny(msgAny: Any): MsgClearContractAdmin {
    return MsgClearContractAdmin.fromProto(
      MsgClearContractAdmin_pb.decode(msgAny.value)
    );
  }

  public static fromData(
    data: MsgClearContractAdmin.Data
  ): MsgClearContractAdmin {
    const { sender, contract } = data;
    return new MsgClearContractAdmin(sender, contract);
  }

  public toData(): MsgClearContractAdmin.Data {
    return {
      '@type': '/cosmwasm.wasm.v1.MsgClearAdmin',
      sender: this.sender,
      contract: this.contract,
    };
  }
}

export namespace MsgClearContractAdmin {
  export interface Amino {
    type: 'wasm/MsgClearAdmin';
    value: {
      sender: AccAddress;
      contract: AccAddress;
    };
  }

  export interface Data {
    '@type': '/cosmwasm.wasm.v1.MsgClearAdmin';
    sender: string;
    contract: string;
  }

  export type Proto = MsgClearContractAdmin_pb;
}
