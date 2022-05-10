/* eslint-disable */
import Long from 'long';
import * as _m0 from 'protobufjs/minimal';

export const protobufPackage = 'terra.market.v1beta1';

/** Params defines the parameters for the market module. */
export interface Params {
  basePool: Uint8Array;
  poolRecoveryPeriod: Long;
  minStabilitySpread: Uint8Array;
}

function createBaseParams(): Params {
  return {
    basePool: new Uint8Array(),
    poolRecoveryPeriod: Long.UZERO,
    minStabilitySpread: new Uint8Array(),
  };
}

export const Params = {
  encode(
    message: Params,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.basePool.length !== 0) {
      writer.uint32(10).bytes(message.basePool);
    }
    if (!message.poolRecoveryPeriod.isZero()) {
      writer.uint32(16).uint64(message.poolRecoveryPeriod);
    }
    if (message.minStabilitySpread.length !== 0) {
      writer.uint32(26).bytes(message.minStabilitySpread);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Params {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.basePool = reader.bytes();
          break;
        case 2:
          message.poolRecoveryPeriod = reader.uint64() as Long;
          break;
        case 3:
          message.minStabilitySpread = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Params {
    return {
      basePool: isSet(object.basePool)
        ? bytesFromBase64(object.basePool)
        : new Uint8Array(),
      poolRecoveryPeriod: isSet(object.poolRecoveryPeriod)
        ? Long.fromValue(object.poolRecoveryPeriod)
        : Long.UZERO,
      minStabilitySpread: isSet(object.minStabilitySpread)
        ? bytesFromBase64(object.minStabilitySpread)
        : new Uint8Array(),
    };
  },

  toJSON(message: Params): unknown {
    const obj: any = {};
    message.basePool !== undefined &&
      (obj.basePool = base64FromBytes(
        message.basePool !== undefined ? message.basePool : new Uint8Array()
      ));
    message.poolRecoveryPeriod !== undefined &&
      (obj.poolRecoveryPeriod = (
        message.poolRecoveryPeriod || Long.UZERO
      ).toString());
    message.minStabilitySpread !== undefined &&
      (obj.minStabilitySpread = base64FromBytes(
        message.minStabilitySpread !== undefined
          ? message.minStabilitySpread
          : new Uint8Array()
      ));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Params>, I>>(object: I): Params {
    const message = createBaseParams();
    message.basePool = object.basePool ?? new Uint8Array();
    message.poolRecoveryPeriod =
      object.poolRecoveryPeriod !== undefined &&
      object.poolRecoveryPeriod !== null
        ? Long.fromValue(object.poolRecoveryPeriod)
        : Long.UZERO;
    message.minStabilitySpread = object.minStabilitySpread ?? new Uint8Array();
    return message;
  },
};

declare var self: any | undefined;
declare var window: any | undefined;
declare var global: any | undefined;
var globalThis: any = (() => {
  if (typeof globalThis !== 'undefined') return globalThis;
  if (typeof self !== 'undefined') return self;
  if (typeof window !== 'undefined') return window;
  if (typeof global !== 'undefined') return global;
  throw 'Unable to locate global object';
})();

const atob: (b64: string) => string =
  globalThis.atob ||
  (b64 => globalThis.Buffer.from(b64, 'base64').toString('binary'));
function bytesFromBase64(b64: string): Uint8Array {
  const bin = atob(b64);
  const arr = new Uint8Array(bin.length);
  for (let i = 0; i < bin.length; ++i) {
    arr[i] = bin.charCodeAt(i);
  }
  return arr;
}

const btoa: (bin: string) => string =
  globalThis.btoa ||
  (bin => globalThis.Buffer.from(bin, 'binary').toString('base64'));
function base64FromBytes(arr: Uint8Array): string {
  const bin: string[] = [];
  arr.forEach(byte => {
    bin.push(String.fromCharCode(byte));
  });
  return btoa(bin.join(''));
}

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
