/* eslint-disable */
import Long from 'long';
import * as _m0 from 'protobufjs/minimal';
import { Coin } from '../../../cosmos/base/v1beta1/coin';

export const protobufPackage = 'terra.treasury.v1beta1';

/** Params defines the parameters for the oracle module. */
export interface Params {
  taxPolicy?: PolicyConstraints;
  rewardPolicy?: PolicyConstraints;
  seigniorageBurdenTarget: string;
  miningIncrement: string;
  windowShort: Long;
  windowLong: Long;
  windowProbation: Long;
}

/** PolicyConstraints - defines policy constraints can be applied in tax & reward policies */
export interface PolicyConstraints {
  rateMin: string;
  rateMax: string;
  cap?: Coin;
  changeRateMax: string;
}

/**
 * EpochTaxProceeds represents the tax amount
 * collected at the current epoch
 */
export interface EpochTaxProceeds {
  taxProceeds: Coin[];
}

/**
 * EpochInitialIssuance represents initial issuance
 * of the currrent epoch
 */
export interface EpochInitialIssuance {
  issuance: Coin[];
}

function createBaseParams(): Params {
  return {
    taxPolicy: undefined,
    rewardPolicy: undefined,
    seigniorageBurdenTarget: '',
    miningIncrement: '',
    windowShort: Long.UZERO,
    windowLong: Long.UZERO,
    windowProbation: Long.UZERO,
  };
}

export const Params = {
  encode(
    message: Params,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.taxPolicy !== undefined) {
      PolicyConstraints.encode(
        message.taxPolicy,
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.rewardPolicy !== undefined) {
      PolicyConstraints.encode(
        message.rewardPolicy,
        writer.uint32(18).fork()
      ).ldelim();
    }
    if (message.seigniorageBurdenTarget !== '') {
      writer.uint32(26).string(message.seigniorageBurdenTarget);
    }
    if (message.miningIncrement !== '') {
      writer.uint32(34).string(message.miningIncrement);
    }
    if (!message.windowShort.isZero()) {
      writer.uint32(40).uint64(message.windowShort);
    }
    if (!message.windowLong.isZero()) {
      writer.uint32(48).uint64(message.windowLong);
    }
    if (!message.windowProbation.isZero()) {
      writer.uint32(56).uint64(message.windowProbation);
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
          message.taxPolicy = PolicyConstraints.decode(reader, reader.uint32());
          break;
        case 2:
          message.rewardPolicy = PolicyConstraints.decode(
            reader,
            reader.uint32()
          );
          break;
        case 3:
          message.seigniorageBurdenTarget = reader.string();
          break;
        case 4:
          message.miningIncrement = reader.string();
          break;
        case 5:
          message.windowShort = reader.uint64() as Long;
          break;
        case 6:
          message.windowLong = reader.uint64() as Long;
          break;
        case 7:
          message.windowProbation = reader.uint64() as Long;
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
      taxPolicy: isSet(object.taxPolicy)
        ? PolicyConstraints.fromJSON(object.taxPolicy)
        : undefined,
      rewardPolicy: isSet(object.rewardPolicy)
        ? PolicyConstraints.fromJSON(object.rewardPolicy)
        : undefined,
      seigniorageBurdenTarget: isSet(object.seigniorageBurdenTarget)
        ? String(object.seigniorageBurdenTarget)
        : '',
      miningIncrement: isSet(object.miningIncrement)
        ? String(object.miningIncrement)
        : '',
      windowShort: isSet(object.windowShort)
        ? Long.fromValue(object.windowShort)
        : Long.UZERO,
      windowLong: isSet(object.windowLong)
        ? Long.fromValue(object.windowLong)
        : Long.UZERO,
      windowProbation: isSet(object.windowProbation)
        ? Long.fromValue(object.windowProbation)
        : Long.UZERO,
    };
  },

  toJSON(message: Params): unknown {
    const obj: any = {};
    message.taxPolicy !== undefined &&
      (obj.taxPolicy = message.taxPolicy
        ? PolicyConstraints.toJSON(message.taxPolicy)
        : undefined);
    message.rewardPolicy !== undefined &&
      (obj.rewardPolicy = message.rewardPolicy
        ? PolicyConstraints.toJSON(message.rewardPolicy)
        : undefined);
    message.seigniorageBurdenTarget !== undefined &&
      (obj.seigniorageBurdenTarget = message.seigniorageBurdenTarget);
    message.miningIncrement !== undefined &&
      (obj.miningIncrement = message.miningIncrement);
    message.windowShort !== undefined &&
      (obj.windowShort = (message.windowShort || Long.UZERO).toString());
    message.windowLong !== undefined &&
      (obj.windowLong = (message.windowLong || Long.UZERO).toString());
    message.windowProbation !== undefined &&
      (obj.windowProbation = (
        message.windowProbation || Long.UZERO
      ).toString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Params>, I>>(object: I): Params {
    const message = createBaseParams();
    message.taxPolicy =
      object.taxPolicy !== undefined && object.taxPolicy !== null
        ? PolicyConstraints.fromPartial(object.taxPolicy)
        : undefined;
    message.rewardPolicy =
      object.rewardPolicy !== undefined && object.rewardPolicy !== null
        ? PolicyConstraints.fromPartial(object.rewardPolicy)
        : undefined;
    message.seigniorageBurdenTarget = object.seigniorageBurdenTarget ?? '';
    message.miningIncrement = object.miningIncrement ?? '';
    message.windowShort =
      object.windowShort !== undefined && object.windowShort !== null
        ? Long.fromValue(object.windowShort)
        : Long.UZERO;
    message.windowLong =
      object.windowLong !== undefined && object.windowLong !== null
        ? Long.fromValue(object.windowLong)
        : Long.UZERO;
    message.windowProbation =
      object.windowProbation !== undefined && object.windowProbation !== null
        ? Long.fromValue(object.windowProbation)
        : Long.UZERO;
    return message;
  },
};

function createBasePolicyConstraints(): PolicyConstraints {
  return { rateMin: '', rateMax: '', cap: undefined, changeRateMax: '' };
}

export const PolicyConstraints = {
  encode(
    message: PolicyConstraints,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.rateMin !== '') {
      writer.uint32(10).string(message.rateMin);
    }
    if (message.rateMax !== '') {
      writer.uint32(18).string(message.rateMax);
    }
    if (message.cap !== undefined) {
      Coin.encode(message.cap, writer.uint32(26).fork()).ldelim();
    }
    if (message.changeRateMax !== '') {
      writer.uint32(34).string(message.changeRateMax);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PolicyConstraints {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePolicyConstraints();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.rateMin = reader.string();
          break;
        case 2:
          message.rateMax = reader.string();
          break;
        case 3:
          message.cap = Coin.decode(reader, reader.uint32());
          break;
        case 4:
          message.changeRateMax = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): PolicyConstraints {
    return {
      rateMin: isSet(object.rateMin) ? String(object.rateMin) : '',
      rateMax: isSet(object.rateMax) ? String(object.rateMax) : '',
      cap: isSet(object.cap) ? Coin.fromJSON(object.cap) : undefined,
      changeRateMax: isSet(object.changeRateMax)
        ? String(object.changeRateMax)
        : '',
    };
  },

  toJSON(message: PolicyConstraints): unknown {
    const obj: any = {};
    message.rateMin !== undefined && (obj.rateMin = message.rateMin);
    message.rateMax !== undefined && (obj.rateMax = message.rateMax);
    message.cap !== undefined &&
      (obj.cap = message.cap ? Coin.toJSON(message.cap) : undefined);
    message.changeRateMax !== undefined &&
      (obj.changeRateMax = message.changeRateMax);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<PolicyConstraints>, I>>(
    object: I
  ): PolicyConstraints {
    const message = createBasePolicyConstraints();
    message.rateMin = object.rateMin ?? '';
    message.rateMax = object.rateMax ?? '';
    message.cap =
      object.cap !== undefined && object.cap !== null
        ? Coin.fromPartial(object.cap)
        : undefined;
    message.changeRateMax = object.changeRateMax ?? '';
    return message;
  },
};

function createBaseEpochTaxProceeds(): EpochTaxProceeds {
  return { taxProceeds: [] };
}

export const EpochTaxProceeds = {
  encode(
    message: EpochTaxProceeds,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.taxProceeds) {
      Coin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EpochTaxProceeds {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEpochTaxProceeds();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.taxProceeds.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EpochTaxProceeds {
    return {
      taxProceeds: Array.isArray(object?.taxProceeds)
        ? object.taxProceeds.map((e: any) => Coin.fromJSON(e))
        : [],
    };
  },

  toJSON(message: EpochTaxProceeds): unknown {
    const obj: any = {};
    if (message.taxProceeds) {
      obj.taxProceeds = message.taxProceeds.map(e =>
        e ? Coin.toJSON(e) : undefined
      );
    } else {
      obj.taxProceeds = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EpochTaxProceeds>, I>>(
    object: I
  ): EpochTaxProceeds {
    const message = createBaseEpochTaxProceeds();
    message.taxProceeds =
      object.taxProceeds?.map(e => Coin.fromPartial(e)) || [];
    return message;
  },
};

function createBaseEpochInitialIssuance(): EpochInitialIssuance {
  return { issuance: [] };
}

export const EpochInitialIssuance = {
  encode(
    message: EpochInitialIssuance,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.issuance) {
      Coin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): EpochInitialIssuance {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEpochInitialIssuance();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.issuance.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EpochInitialIssuance {
    return {
      issuance: Array.isArray(object?.issuance)
        ? object.issuance.map((e: any) => Coin.fromJSON(e))
        : [],
    };
  },

  toJSON(message: EpochInitialIssuance): unknown {
    const obj: any = {};
    if (message.issuance) {
      obj.issuance = message.issuance.map(e =>
        e ? Coin.toJSON(e) : undefined
      );
    } else {
      obj.issuance = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EpochInitialIssuance>, I>>(
    object: I
  ): EpochInitialIssuance {
    const message = createBaseEpochInitialIssuance();
    message.issuance = object.issuance?.map(e => Coin.fromPartial(e)) || [];
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
