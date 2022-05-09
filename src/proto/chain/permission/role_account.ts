/* eslint-disable */
import Long from 'long';
import * as _m0 from 'protobufjs/minimal';
import { Role, roleFromJSON, roleToJSON } from '../../chain/permission/perm';

export const protobufPackage = 'glodnet.chain.permission';

export interface RoleAccount {
  address: string;
  roles: Role[];
}

function createBaseRoleAccount(): RoleAccount {
  return { address: '', roles: [] };
}

export const RoleAccount = {
  encode(
    message: RoleAccount,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.address !== '') {
      writer.uint32(10).string(message.address);
    }
    writer.uint32(18).fork();
    for (const v of message.roles) {
      writer.int32(v);
    }
    writer.ldelim();
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RoleAccount {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRoleAccount();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.roles.push(reader.int32() as any);
            }
          } else {
            message.roles.push(reader.int32() as any);
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): RoleAccount {
    return {
      address: isSet(object.address) ? String(object.address) : '',
      roles: Array.isArray(object?.roles)
        ? object.roles.map((e: any) => roleFromJSON(e))
        : [],
    };
  },

  toJSON(message: RoleAccount): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    if (message.roles) {
      obj.roles = message.roles.map(e => roleToJSON(e));
    } else {
      obj.roles = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<RoleAccount>, I>>(
    object: I
  ): RoleAccount {
    const message = createBaseRoleAccount();
    message.address = object.address ?? '';
    message.roles = object.roles?.map(e => e) || [];
    return message;
  },
};

type Builtin =
  | Date
  | Function
  | Uint8Array
  | string
  | number
  | boolean
  | undefined;

export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Long
  ? string | number | Long
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin
  ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & Record<
        Exclude<keyof I, KeysOfUnion<P>>,
        never
      >;

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
