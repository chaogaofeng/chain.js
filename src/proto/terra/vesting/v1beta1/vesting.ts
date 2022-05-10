/* eslint-disable */
import Long from 'long';
import * as _m0 from 'protobufjs/minimal';
import { BaseVestingAccount } from '../../../cosmos/vesting/v1beta1/vesting';

export const protobufPackage = 'terra.vesting.v1beta1';

/**
 * LazyGradedVestingAccount implements the LazyGradedVestingAccount interface. It vests all
 * coins according to a predefined schedule.
 */
export interface LazyGradedVestingAccount {
  baseVestingAccount?: BaseVestingAccount;
  vestingSchedules: VestingSchedule[];
}

/** Schedule - represent single schedule data for a vesting schedule */
export interface Schedule {
  startTime: Long;
  endTime: Long;
  ratio: string;
}

/** VestingSchedule defines vesting schedule for a denom */
export interface VestingSchedule {
  denom: string;
  schedules: Schedule[];
}

function createBaseLazyGradedVestingAccount(): LazyGradedVestingAccount {
  return { baseVestingAccount: undefined, vestingSchedules: [] };
}

export const LazyGradedVestingAccount = {
  encode(
    message: LazyGradedVestingAccount,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.baseVestingAccount !== undefined) {
      BaseVestingAccount.encode(
        message.baseVestingAccount,
        writer.uint32(10).fork()
      ).ldelim();
    }
    for (const v of message.vestingSchedules) {
      VestingSchedule.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): LazyGradedVestingAccount {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLazyGradedVestingAccount();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.baseVestingAccount = BaseVestingAccount.decode(
            reader,
            reader.uint32()
          );
          break;
        case 2:
          message.vestingSchedules.push(
            VestingSchedule.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): LazyGradedVestingAccount {
    return {
      baseVestingAccount: isSet(object.baseVestingAccount)
        ? BaseVestingAccount.fromJSON(object.baseVestingAccount)
        : undefined,
      vestingSchedules: Array.isArray(object?.vestingSchedules)
        ? object.vestingSchedules.map((e: any) => VestingSchedule.fromJSON(e))
        : [],
    };
  },

  toJSON(message: LazyGradedVestingAccount): unknown {
    const obj: any = {};
    message.baseVestingAccount !== undefined &&
      (obj.baseVestingAccount = message.baseVestingAccount
        ? BaseVestingAccount.toJSON(message.baseVestingAccount)
        : undefined);
    if (message.vestingSchedules) {
      obj.vestingSchedules = message.vestingSchedules.map(e =>
        e ? VestingSchedule.toJSON(e) : undefined
      );
    } else {
      obj.vestingSchedules = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<LazyGradedVestingAccount>, I>>(
    object: I
  ): LazyGradedVestingAccount {
    const message = createBaseLazyGradedVestingAccount();
    message.baseVestingAccount =
      object.baseVestingAccount !== undefined &&
      object.baseVestingAccount !== null
        ? BaseVestingAccount.fromPartial(object.baseVestingAccount)
        : undefined;
    message.vestingSchedules =
      object.vestingSchedules?.map(e => VestingSchedule.fromPartial(e)) || [];
    return message;
  },
};

function createBaseSchedule(): Schedule {
  return { startTime: Long.ZERO, endTime: Long.ZERO, ratio: '' };
}

export const Schedule = {
  encode(
    message: Schedule,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (!message.startTime.isZero()) {
      writer.uint32(8).int64(message.startTime);
    }
    if (!message.endTime.isZero()) {
      writer.uint32(16).int64(message.endTime);
    }
    if (message.ratio !== '') {
      writer.uint32(26).string(message.ratio);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Schedule {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSchedule();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.startTime = reader.int64() as Long;
          break;
        case 2:
          message.endTime = reader.int64() as Long;
          break;
        case 3:
          message.ratio = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Schedule {
    return {
      startTime: isSet(object.startTime)
        ? Long.fromValue(object.startTime)
        : Long.ZERO,
      endTime: isSet(object.endTime)
        ? Long.fromValue(object.endTime)
        : Long.ZERO,
      ratio: isSet(object.ratio) ? String(object.ratio) : '',
    };
  },

  toJSON(message: Schedule): unknown {
    const obj: any = {};
    message.startTime !== undefined &&
      (obj.startTime = (message.startTime || Long.ZERO).toString());
    message.endTime !== undefined &&
      (obj.endTime = (message.endTime || Long.ZERO).toString());
    message.ratio !== undefined && (obj.ratio = message.ratio);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Schedule>, I>>(object: I): Schedule {
    const message = createBaseSchedule();
    message.startTime =
      object.startTime !== undefined && object.startTime !== null
        ? Long.fromValue(object.startTime)
        : Long.ZERO;
    message.endTime =
      object.endTime !== undefined && object.endTime !== null
        ? Long.fromValue(object.endTime)
        : Long.ZERO;
    message.ratio = object.ratio ?? '';
    return message;
  },
};

function createBaseVestingSchedule(): VestingSchedule {
  return { denom: '', schedules: [] };
}

export const VestingSchedule = {
  encode(
    message: VestingSchedule,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.denom !== '') {
      writer.uint32(10).string(message.denom);
    }
    for (const v of message.schedules) {
      Schedule.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): VestingSchedule {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseVestingSchedule();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
          break;
        case 2:
          message.schedules.push(Schedule.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): VestingSchedule {
    return {
      denom: isSet(object.denom) ? String(object.denom) : '',
      schedules: Array.isArray(object?.schedules)
        ? object.schedules.map((e: any) => Schedule.fromJSON(e))
        : [],
    };
  },

  toJSON(message: VestingSchedule): unknown {
    const obj: any = {};
    message.denom !== undefined && (obj.denom = message.denom);
    if (message.schedules) {
      obj.schedules = message.schedules.map(e =>
        e ? Schedule.toJSON(e) : undefined
      );
    } else {
      obj.schedules = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<VestingSchedule>, I>>(
    object: I
  ): VestingSchedule {
    const message = createBaseVestingSchedule();
    message.denom = object.denom ?? '';
    message.schedules =
      object.schedules?.map(e => Schedule.fromPartial(e)) || [];
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
