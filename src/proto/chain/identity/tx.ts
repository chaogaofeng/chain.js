/* eslint-disable */
import Long from 'long';
import { grpc } from '@improbable-eng/grpc-web';
import * as _m0 from 'protobufjs/minimal';
import { BrowserHeaders } from 'browser-headers';

export const protobufPackage = 'glodnet.chain.identity';

export interface MsgCreate {
  creator: string;
  certificate: string;
  parent: string;
  data: string;
}

export interface MsgCreateResponse {
  address: string;
}

export interface MsgUpdate {
  creator: string;
  certificate: string;
  parent: string;
  data: string;
}

export interface MsgUpdateResponse {
  address: string;
}

export interface MsgRemove {
  creator: string;
  address: string;
}

export interface MsgRemoveResponse {}

function createBaseMsgCreate(): MsgCreate {
  return { creator: '', certificate: '', parent: '', data: '' };
}

export const MsgCreate = {
  encode(
    message: MsgCreate,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.creator !== '') {
      writer.uint32(10).string(message.creator);
    }
    if (message.certificate !== '') {
      writer.uint32(18).string(message.certificate);
    }
    if (message.parent !== '') {
      writer.uint32(26).string(message.parent);
    }
    if (message.data !== '') {
      writer.uint32(34).string(message.data);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreate {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreate();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.certificate = reader.string();
          break;
        case 3:
          message.parent = reader.string();
          break;
        case 4:
          message.data = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreate {
    return {
      creator: isSet(object.creator) ? String(object.creator) : '',
      certificate: isSet(object.certificate) ? String(object.certificate) : '',
      parent: isSet(object.parent) ? String(object.parent) : '',
      data: isSet(object.data) ? String(object.data) : '',
    };
  },

  toJSON(message: MsgCreate): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.certificate !== undefined &&
      (obj.certificate = message.certificate);
    message.parent !== undefined && (obj.parent = message.parent);
    message.data !== undefined && (obj.data = message.data);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgCreate>, I>>(
    object: I
  ): MsgCreate {
    const message = createBaseMsgCreate();
    message.creator = object.creator ?? '';
    message.certificate = object.certificate ?? '';
    message.parent = object.parent ?? '';
    message.data = object.data ?? '';
    return message;
  },
};

function createBaseMsgCreateResponse(): MsgCreateResponse {
  return { address: '' };
}

export const MsgCreateResponse = {
  encode(
    message: MsgCreateResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.address !== '') {
      writer.uint32(10).string(message.address);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateResponse {
    return {
      address: isSet(object.address) ? String(object.address) : '',
    };
  },

  toJSON(message: MsgCreateResponse): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgCreateResponse>, I>>(
    object: I
  ): MsgCreateResponse {
    const message = createBaseMsgCreateResponse();
    message.address = object.address ?? '';
    return message;
  },
};

function createBaseMsgUpdate(): MsgUpdate {
  return { creator: '', certificate: '', parent: '', data: '' };
}

export const MsgUpdate = {
  encode(
    message: MsgUpdate,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.creator !== '') {
      writer.uint32(10).string(message.creator);
    }
    if (message.certificate !== '') {
      writer.uint32(18).string(message.certificate);
    }
    if (message.parent !== '') {
      writer.uint32(26).string(message.parent);
    }
    if (message.data !== '') {
      writer.uint32(34).string(message.data);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdate {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdate();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.certificate = reader.string();
          break;
        case 3:
          message.parent = reader.string();
          break;
        case 4:
          message.data = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgUpdate {
    return {
      creator: isSet(object.creator) ? String(object.creator) : '',
      certificate: isSet(object.certificate) ? String(object.certificate) : '',
      parent: isSet(object.parent) ? String(object.parent) : '',
      data: isSet(object.data) ? String(object.data) : '',
    };
  },

  toJSON(message: MsgUpdate): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.certificate !== undefined &&
      (obj.certificate = message.certificate);
    message.parent !== undefined && (obj.parent = message.parent);
    message.data !== undefined && (obj.data = message.data);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgUpdate>, I>>(
    object: I
  ): MsgUpdate {
    const message = createBaseMsgUpdate();
    message.creator = object.creator ?? '';
    message.certificate = object.certificate ?? '';
    message.parent = object.parent ?? '';
    message.data = object.data ?? '';
    return message;
  },
};

function createBaseMsgUpdateResponse(): MsgUpdateResponse {
  return { address: '' };
}

export const MsgUpdateResponse = {
  encode(
    message: MsgUpdateResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.address !== '') {
      writer.uint32(10).string(message.address);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgUpdateResponse {
    return {
      address: isSet(object.address) ? String(object.address) : '',
    };
  },

  toJSON(message: MsgUpdateResponse): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgUpdateResponse>, I>>(
    object: I
  ): MsgUpdateResponse {
    const message = createBaseMsgUpdateResponse();
    message.address = object.address ?? '';
    return message;
  },
};

function createBaseMsgRemove(): MsgRemove {
  return { creator: '', address: '' };
}

export const MsgRemove = {
  encode(
    message: MsgRemove,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.creator !== '') {
      writer.uint32(10).string(message.creator);
    }
    if (message.address !== '') {
      writer.uint32(18).string(message.address);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRemove {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRemove();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.address = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgRemove {
    return {
      creator: isSet(object.creator) ? String(object.creator) : '',
      address: isSet(object.address) ? String(object.address) : '',
    };
  },

  toJSON(message: MsgRemove): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.address !== undefined && (obj.address = message.address);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgRemove>, I>>(
    object: I
  ): MsgRemove {
    const message = createBaseMsgRemove();
    message.creator = object.creator ?? '';
    message.address = object.address ?? '';
    return message;
  },
};

function createBaseMsgRemoveResponse(): MsgRemoveResponse {
  return {};
}

export const MsgRemoveResponse = {
  encode(
    _: MsgRemoveResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRemoveResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRemoveResponse();
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

  fromJSON(_: any): MsgRemoveResponse {
    return {};
  },

  toJSON(_: MsgRemoveResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgRemoveResponse>, I>>(
    _: I
  ): MsgRemoveResponse {
    const message = createBaseMsgRemoveResponse();
    return message;
  },
};

/** Msg defines the Msg service. */
export interface Msg {
  Create(
    request: DeepPartial<MsgCreate>,
    metadata?: grpc.Metadata
  ): Promise<MsgCreateResponse>;
  Update(
    request: DeepPartial<MsgUpdate>,
    metadata?: grpc.Metadata
  ): Promise<MsgUpdateResponse>;
  /** this line is used by starport scaffolding # proto/tx/rpc */
  Remove(
    request: DeepPartial<MsgRemove>,
    metadata?: grpc.Metadata
  ): Promise<MsgRemoveResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.Create = this.Create.bind(this);
    this.Update = this.Update.bind(this);
    this.Remove = this.Remove.bind(this);
  }

  Create(
    request: DeepPartial<MsgCreate>,
    metadata?: grpc.Metadata
  ): Promise<MsgCreateResponse> {
    return this.rpc.unary(
      MsgCreateDesc,
      MsgCreate.fromPartial(request),
      metadata
    );
  }

  Update(
    request: DeepPartial<MsgUpdate>,
    metadata?: grpc.Metadata
  ): Promise<MsgUpdateResponse> {
    return this.rpc.unary(
      MsgUpdateDesc,
      MsgUpdate.fromPartial(request),
      metadata
    );
  }

  Remove(
    request: DeepPartial<MsgRemove>,
    metadata?: grpc.Metadata
  ): Promise<MsgRemoveResponse> {
    return this.rpc.unary(
      MsgRemoveDesc,
      MsgRemove.fromPartial(request),
      metadata
    );
  }
}

export const MsgDesc = {
  serviceName: 'glodnet.chain.identity.Msg',
};

export const MsgCreateDesc: UnaryMethodDefinitionish = {
  methodName: 'Create',
  service: MsgDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return MsgCreate.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...MsgCreateResponse.decode(data),
        toObject() {
          return this;
        },
      };
    },
  } as any,
};

export const MsgUpdateDesc: UnaryMethodDefinitionish = {
  methodName: 'Update',
  service: MsgDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return MsgUpdate.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...MsgUpdateResponse.decode(data),
        toObject() {
          return this;
        },
      };
    },
  } as any,
};

export const MsgRemoveDesc: UnaryMethodDefinitionish = {
  methodName: 'Remove',
  service: MsgDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return MsgRemove.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...MsgRemoveResponse.decode(data),
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
