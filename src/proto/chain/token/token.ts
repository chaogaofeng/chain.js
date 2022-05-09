/* eslint-disable */
import Long from 'long';
import * as _m0 from 'protobufjs/minimal';
import { Coin } from '../../cosmos/base/v1beta1/coin';
import { Metadata } from '../../cosmos/bank/v1beta1/bank';

export const protobufPackage = 'glodnet.chain.token';

export interface Token {
  symbol: string;
  owner: string;
  issued?: Coin;
  burned?: Coin;
  metadata?: Metadata;
}

function createBaseToken(): Token {
  return {
    symbol: '',
    owner: '',
    issued: undefined,
    burned: undefined,
    metadata: undefined,
  };
}

export const Token = {
  encode(message: Token, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.symbol !== '') {
      writer.uint32(10).string(message.symbol);
    }
    if (message.owner !== '') {
      writer.uint32(18).string(message.owner);
    }
    if (message.issued !== undefined) {
      Coin.encode(message.issued, writer.uint32(26).fork()).ldelim();
    }
    if (message.burned !== undefined) {
      Coin.encode(message.burned, writer.uint32(34).fork()).ldelim();
    }
    if (message.metadata !== undefined) {
      Metadata.encode(message.metadata, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Token {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseToken();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.symbol = reader.string();
          break;
        case 2:
          message.owner = reader.string();
          break;
        case 3:
          message.issued = Coin.decode(reader, reader.uint32());
          break;
        case 4:
          message.burned = Coin.decode(reader, reader.uint32());
          break;
        case 5:
          message.metadata = Metadata.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Token {
    return {
      symbol: isSet(object.symbol) ? String(object.symbol) : '',
      owner: isSet(object.owner) ? String(object.owner) : '',
      issued: isSet(object.issued) ? Coin.fromJSON(object.issued) : undefined,
      burned: isSet(object.burned) ? Coin.fromJSON(object.burned) : undefined,
      metadata: isSet(object.metadata)
        ? Metadata.fromJSON(object.metadata)
        : undefined,
    };
  },

  toJSON(message: Token): unknown {
    const obj: any = {};
    message.symbol !== undefined && (obj.symbol = message.symbol);
    message.owner !== undefined && (obj.owner = message.owner);
    message.issued !== undefined &&
      (obj.issued = message.issued ? Coin.toJSON(message.issued) : undefined);
    message.burned !== undefined &&
      (obj.burned = message.burned ? Coin.toJSON(message.burned) : undefined);
    message.metadata !== undefined &&
      (obj.metadata = message.metadata
        ? Metadata.toJSON(message.metadata)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Token>, I>>(object: I): Token {
    const message = createBaseToken();
    message.symbol = object.symbol ?? '';
    message.owner = object.owner ?? '';
    message.issued =
      object.issued !== undefined && object.issued !== null
        ? Coin.fromPartial(object.issued)
        : undefined;
    message.burned =
      object.burned !== undefined && object.burned !== null
        ? Coin.fromPartial(object.burned)
        : undefined;
    message.metadata =
      object.metadata !== undefined && object.metadata !== null
        ? Metadata.fromPartial(object.metadata)
        : undefined;
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
