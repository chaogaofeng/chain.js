/* eslint-disable */
import Long from 'long';
import { grpc } from '@improbable-eng/grpc-web';
import * as _m0 from 'protobufjs/minimal';
import { BrowserHeaders } from 'browser-headers';

export const protobufPackage = 'glodnet.chain.token';

export interface MsgIssue {
  creator: string;
  base: string;
  display: string;
  exponent: number;
  name: string;
  symbol: string;
  desc: string;
  amount: string;
  to: string;
}

export interface MsgIssueResponse {}

export interface MsgMint {
  creator: string;
  base: string;
  amount: string;
  to: string;
}

export interface MsgMintResponse {}

export interface MsgBurn {
  creator: string;
  base: string;
  amount: string;
}

export interface MsgBurnResponse {}

function createBaseMsgIssue(): MsgIssue {
  return {
    creator: '',
    base: '',
    display: '',
    exponent: 0,
    name: '',
    symbol: '',
    desc: '',
    amount: '',
    to: '',
  };
}

export const MsgIssue = {
  encode(
    message: MsgIssue,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.creator !== '') {
      writer.uint32(10).string(message.creator);
    }
    if (message.base !== '') {
      writer.uint32(18).string(message.base);
    }
    if (message.display !== '') {
      writer.uint32(26).string(message.display);
    }
    if (message.exponent !== 0) {
      writer.uint32(32).uint32(message.exponent);
    }
    if (message.name !== '') {
      writer.uint32(42).string(message.name);
    }
    if (message.symbol !== '') {
      writer.uint32(50).string(message.symbol);
    }
    if (message.desc !== '') {
      writer.uint32(58).string(message.desc);
    }
    if (message.amount !== '') {
      writer.uint32(66).string(message.amount);
    }
    if (message.to !== '') {
      writer.uint32(74).string(message.to);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgIssue {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgIssue();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.base = reader.string();
          break;
        case 3:
          message.display = reader.string();
          break;
        case 4:
          message.exponent = reader.uint32();
          break;
        case 5:
          message.name = reader.string();
          break;
        case 6:
          message.symbol = reader.string();
          break;
        case 7:
          message.desc = reader.string();
          break;
        case 8:
          message.amount = reader.string();
          break;
        case 9:
          message.to = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgIssue {
    return {
      creator: isSet(object.creator) ? String(object.creator) : '',
      base: isSet(object.base) ? String(object.base) : '',
      display: isSet(object.display) ? String(object.display) : '',
      exponent: isSet(object.exponent) ? Number(object.exponent) : 0,
      name: isSet(object.name) ? String(object.name) : '',
      symbol: isSet(object.symbol) ? String(object.symbol) : '',
      desc: isSet(object.desc) ? String(object.desc) : '',
      amount: isSet(object.amount) ? String(object.amount) : '',
      to: isSet(object.to) ? String(object.to) : '',
    };
  },

  toJSON(message: MsgIssue): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.base !== undefined && (obj.base = message.base);
    message.display !== undefined && (obj.display = message.display);
    message.exponent !== undefined &&
      (obj.exponent = Math.round(message.exponent));
    message.name !== undefined && (obj.name = message.name);
    message.symbol !== undefined && (obj.symbol = message.symbol);
    message.desc !== undefined && (obj.desc = message.desc);
    message.amount !== undefined && (obj.amount = message.amount);
    message.to !== undefined && (obj.to = message.to);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgIssue>, I>>(object: I): MsgIssue {
    const message = createBaseMsgIssue();
    message.creator = object.creator ?? '';
    message.base = object.base ?? '';
    message.display = object.display ?? '';
    message.exponent = object.exponent ?? 0;
    message.name = object.name ?? '';
    message.symbol = object.symbol ?? '';
    message.desc = object.desc ?? '';
    message.amount = object.amount ?? '';
    message.to = object.to ?? '';
    return message;
  },
};

function createBaseMsgIssueResponse(): MsgIssueResponse {
  return {};
}

export const MsgIssueResponse = {
  encode(
    _: MsgIssueResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgIssueResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgIssueResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgIssueResponse {
    return {};
  },

  toJSON(_: MsgIssueResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgIssueResponse>, I>>(
    _: I
  ): MsgIssueResponse {
    const message = createBaseMsgIssueResponse();
    return message;
  },
};

function createBaseMsgMint(): MsgMint {
  return { creator: '', base: '', amount: '', to: '' };
}

export const MsgMint = {
  encode(
    message: MsgMint,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.creator !== '') {
      writer.uint32(10).string(message.creator);
    }
    if (message.base !== '') {
      writer.uint32(18).string(message.base);
    }
    if (message.amount !== '') {
      writer.uint32(26).string(message.amount);
    }
    if (message.to !== '') {
      writer.uint32(34).string(message.to);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgMint {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgMint();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.base = reader.string();
          break;
        case 3:
          message.amount = reader.string();
          break;
        case 4:
          message.to = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgMint {
    return {
      creator: isSet(object.creator) ? String(object.creator) : '',
      base: isSet(object.base) ? String(object.base) : '',
      amount: isSet(object.amount) ? String(object.amount) : '',
      to: isSet(object.to) ? String(object.to) : '',
    };
  },

  toJSON(message: MsgMint): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.base !== undefined && (obj.base = message.base);
    message.amount !== undefined && (obj.amount = message.amount);
    message.to !== undefined && (obj.to = message.to);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgMint>, I>>(object: I): MsgMint {
    const message = createBaseMsgMint();
    message.creator = object.creator ?? '';
    message.base = object.base ?? '';
    message.amount = object.amount ?? '';
    message.to = object.to ?? '';
    return message;
  },
};

function createBaseMsgMintResponse(): MsgMintResponse {
  return {};
}

export const MsgMintResponse = {
  encode(
    _: MsgMintResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgMintResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgMintResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgMintResponse {
    return {};
  },

  toJSON(_: MsgMintResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgMintResponse>, I>>(
    _: I
  ): MsgMintResponse {
    const message = createBaseMsgMintResponse();
    return message;
  },
};

function createBaseMsgBurn(): MsgBurn {
  return { creator: '', base: '', amount: '' };
}

export const MsgBurn = {
  encode(
    message: MsgBurn,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.creator !== '') {
      writer.uint32(10).string(message.creator);
    }
    if (message.base !== '') {
      writer.uint32(18).string(message.base);
    }
    if (message.amount !== '') {
      writer.uint32(26).string(message.amount);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgBurn {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgBurn();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.base = reader.string();
          break;
        case 3:
          message.amount = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgBurn {
    return {
      creator: isSet(object.creator) ? String(object.creator) : '',
      base: isSet(object.base) ? String(object.base) : '',
      amount: isSet(object.amount) ? String(object.amount) : '',
    };
  },

  toJSON(message: MsgBurn): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.base !== undefined && (obj.base = message.base);
    message.amount !== undefined && (obj.amount = message.amount);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgBurn>, I>>(object: I): MsgBurn {
    const message = createBaseMsgBurn();
    message.creator = object.creator ?? '';
    message.base = object.base ?? '';
    message.amount = object.amount ?? '';
    return message;
  },
};

function createBaseMsgBurnResponse(): MsgBurnResponse {
  return {};
}

export const MsgBurnResponse = {
  encode(
    _: MsgBurnResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgBurnResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgBurnResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgBurnResponse {
    return {};
  },

  toJSON(_: MsgBurnResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgBurnResponse>, I>>(
    _: I
  ): MsgBurnResponse {
    const message = createBaseMsgBurnResponse();
    return message;
  },
};

/** Msg defines the Msg service. */
export interface Msg {
  Issue(
    request: DeepPartial<MsgIssue>,
    metadata?: grpc.Metadata
  ): Promise<MsgIssueResponse>;
  Mint(
    request: DeepPartial<MsgMint>,
    metadata?: grpc.Metadata
  ): Promise<MsgMintResponse>;
  /** this line is used by starport scaffolding # proto/tx/rpc */
  Burn(
    request: DeepPartial<MsgBurn>,
    metadata?: grpc.Metadata
  ): Promise<MsgBurnResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.Issue = this.Issue.bind(this);
    this.Mint = this.Mint.bind(this);
    this.Burn = this.Burn.bind(this);
  }

  Issue(
    request: DeepPartial<MsgIssue>,
    metadata?: grpc.Metadata
  ): Promise<MsgIssueResponse> {
    return this.rpc.unary(
      MsgIssueDesc,
      MsgIssue.fromPartial(request),
      metadata
    );
  }

  Mint(
    request: DeepPartial<MsgMint>,
    metadata?: grpc.Metadata
  ): Promise<MsgMintResponse> {
    return this.rpc.unary(MsgMintDesc, MsgMint.fromPartial(request), metadata);
  }

  Burn(
    request: DeepPartial<MsgBurn>,
    metadata?: grpc.Metadata
  ): Promise<MsgBurnResponse> {
    return this.rpc.unary(MsgBurnDesc, MsgBurn.fromPartial(request), metadata);
  }
}

export const MsgDesc = {
  serviceName: 'glodnet.chain.token.Msg',
};

export const MsgIssueDesc: UnaryMethodDefinitionish = {
  methodName: 'Issue',
  service: MsgDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return MsgIssue.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...MsgIssueResponse.decode(data),
        toObject() {
          return this;
        },
      };
    },
  } as any,
};

export const MsgMintDesc: UnaryMethodDefinitionish = {
  methodName: 'Mint',
  service: MsgDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return MsgMint.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...MsgMintResponse.decode(data),
        toObject() {
          return this;
        },
      };
    },
  } as any,
};

export const MsgBurnDesc: UnaryMethodDefinitionish = {
  methodName: 'Burn',
  service: MsgDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return MsgBurn.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...MsgBurnResponse.decode(data),
        toObject() {
          return this;
        },
      };
    },
  } as any,
};

interface UnaryMethodDefinitionishR
  extends grpc.UnaryMethodDefinition<any, any> {
  requestStream: any;
  responseStream: any;
}

type UnaryMethodDefinitionish = UnaryMethodDefinitionishR;

interface Rpc {
  unary<T extends UnaryMethodDefinitionish>(
    methodDesc: T,
    request: any,
    metadata: grpc.Metadata | undefined
  ): Promise<any>;
}

export class GrpcWebImpl {
  private host: string;
  private options: {
    transport?: grpc.TransportFactory;

    debug?: boolean;
    metadata?: grpc.Metadata;
  };

  constructor(
    host: string,
    options: {
      transport?: grpc.TransportFactory;

      debug?: boolean;
      metadata?: grpc.Metadata;
    }
  ) {
    this.host = host;
    this.options = options;
  }

  unary<T extends UnaryMethodDefinitionish>(
    methodDesc: T,
    _request: any,
    metadata: grpc.Metadata | undefined
  ): Promise<any> {
    const request = { ..._request, ...methodDesc.requestType };
    const maybeCombinedMetadata =
      metadata && this.options.metadata
        ? new BrowserHeaders({
            ...this.options?.metadata.headersMap,
            ...metadata?.headersMap,
          })
        : metadata || this.options.metadata;
    return new Promise((resolve, reject) => {
      grpc.unary(methodDesc, {
        request,
        host: this.host,
        metadata: maybeCombinedMetadata,
        transport: this.options.transport,
        debug: this.options.debug,
        onEnd: function (response) {
          if (response.status === grpc.Code.OK) {
            resolve(response.message);
          } else {
            const err = new Error(response.statusMessage) as any;
            err.code = response.status;
            err.metadata = response.trailers;
            reject(err);
          }
        },
      });
    });
  }
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
