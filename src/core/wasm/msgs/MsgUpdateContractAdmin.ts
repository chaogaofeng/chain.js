import { JSONSerializable } from '../../../util/json';
import { AccAddress } from '../../bech32';
import { Any } from '../../../proto/google/protobuf/any';
import { MsgUpdateAdmin as MsgUpdateContractAdmin_pb } from '../../../proto/cosmwasm/wasm/v1/tx';

export class MsgUpdateContractAdmin extends JSONSerializable<
  MsgUpdateContractAdmin.Amino,
  MsgUpdateContractAdmin.Data,
  MsgUpdateContractAdmin.Proto
> {
  /**
   * @param sender contract sender
   * @param new_admin new admin
   * @param contract contract address
   */
  constructor(
    public sender: AccAddress,
    public new_admin: AccAddress,
    public contract: AccAddress
  ) {
    super();
  }

  public static fromAmino(
    data: MsgUpdateContractAdmin.Amino
  ): MsgUpdateContractAdmin {
    const {
      value: { sender, new_admin, contract },
    } = data;
    return new MsgUpdateContractAdmin(sender, new_admin, contract);
  }

  public toAmino(): MsgUpdateContractAdmin.Amino {
    const { sender, new_admin, contract } = this;
    return {
      type: 'wasm/MsgUpdateContractAdmin',
      value: {
        sender,
        new_admin,
        contract,
      },
    };
  }

  public static fromProto(
    proto: MsgUpdateContractAdmin.Proto
  ): MsgUpdateContractAdmin {
    return new MsgUpdateContractAdmin(
      proto.sender,
      proto.newAdmin,
      proto.contract
    );
  }

  public toProto(): MsgUpdateContractAdmin.Proto {
    const { sender, new_admin, contract } = this;
    return MsgUpdateContractAdmin_pb.fromPartial({
      sender,
      contract,
      newAdmin: new_admin,
    });
  }

  public packAny(): Any {
    return Any.fromPartial({
      typeUrl: '/cosmwasm.wasm.v1.MsgUpdateAdmin',
      value: MsgUpdateContractAdmin_pb.encode(this.toProto()).finish(),
    });
  }

  public static unpackAny(msgAny: Any): MsgUpdateContractAdmin {
    return MsgUpdateContractAdmin.fromProto(
      MsgUpdateContractAdmin_pb.decode(msgAny.value)
    );
  }

  public static fromData(
    data: MsgUpdateContractAdmin.Data
  ): MsgUpdateContractAdmin {
    const { sender, new_admin, contract } = data;
    return new MsgUpdateContractAdmin(sender, new_admin, contract);
  }

  public toData(): MsgUpdateContractAdmin.Data {
    const { sender, new_admin, contract } = this;
    return {
      '@type': '/cosmwasm.wasm.v1.MsgUpdateAdmin',
      sender,
      new_admin,
      contract,
    };
  }
}

export namespace MsgUpdateContractAdmin {
  export interface Amino {
    type: 'wasm/MsgUpdateContractAdmin';
    value: {
      sender: AccAddress;
      new_admin: AccAddress;
      contract: AccAddress;
    };
  }

  export interface Data {
    '@type': '/cosmwasm.wasm.v1.MsgUpdateAdmin';
    sender: AccAddress;
    new_admin: AccAddress;
    contract: AccAddress;
  }

  export type Proto = MsgUpdateContractAdmin_pb;
}
