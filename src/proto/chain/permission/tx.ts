/* eslint-disable */
import Long from 'long';
import { grpc } from '@improbable-eng/grpc-web';
import * as _m0 from 'protobufjs/minimal';
import { BrowserHeaders } from 'browser-headers';
import { Role, roleFromJSON, roleToJSON } from '../../chain/permission/perm';

export const protobufPackage = 'glodnet.chain.permission';

export interface MsgAssign {
  creator: string;
  address: string;
  roles: Role[];
}

export interface MsgAssignResponse {}

export interface MsgUnassign {
  creator: string;
  address: string;
  roles: Role[];
}

export interface MsgUnassignResponse {}

function createBaseMsgAssign(): MsgAssign {
  return { creator: '', address: '', roles: [] };
}

export const MsgAssign = {
  encode(
    message: MsgAssign,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.creator !== '') {
      writer.uint32(10).string(message.creator);
    }
    if (message.address !== '') {
      writer.uint32(18).string(message.address);
    }
    writer.uint32(26).fork();
    for (const v of message.roles) {
      writer.int32(v);
    }
    writer.ldelim();
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgAssign {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAssign();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.address = reader.string();
          break;
        case 3:
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

  fromJSON(object: any): MsgAssign {
    return {
      creator: isSet(object.creator) ? String(object.creator) : '',
      address: isSet(object.address) ? String(object.address) : '',
      roles: Array.isArray(object?.roles)
        ? object.roles.map((e: any) => roleFromJSON(e))
        : [],
    };
  },

  toJSON(message: MsgAssign): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.address !== undefined && (obj.address = message.address);
    if (message.roles) {
      obj.roles = message.roles.map(e => roleToJSON(e));
    } else {
      obj.roles = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgAssign>, I>>(
    object: I
  ): MsgAssign {
    const message = createBaseMsgAssign();
    message.creator = object.creator ?? '';
    message.address = object.address ?? '';
    message.roles = object.roles?.map(e => e) || [];
    return message;
  },
};

function createBaseMsgAssignResponse(): MsgAssignResponse {
  return {};
}

export const MsgAssignResponse = {
  encode(
    _: MsgAssignResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgAssignResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAssignResponse();
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

  fromJSON(_: any): MsgAssignResponse {
    return {};
  },

  toJSON(_: MsgAssignResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgAssignResponse>, I>>(
    _: I
  ): MsgAssignResponse {
    const message = createBaseMsgAssignResponse();
    return message;
  },
};

function createBaseMsgUnassign(): MsgUnassign {
  return { creator: '', address: '', roles: [] };
}

export const MsgUnassign = {
  encode(
    message: MsgUnassign,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.creator !== '') {
      writer.uint32(10).string(message.creator);
    }
    if (message.address !== '') {
      writer.uint32(18).string(message.address);
    }
    writer.uint32(26).fork();
    for (const v of message.roles) {
      writer.int32(v);
    }
    writer.ldelim();
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUnassign {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUnassign();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.address = reader.string();
          break;
        case 3:
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

  fromJSON(object: any): MsgUnassign {
    return {
      creator: isSet(object.creator) ? String(object.creator) : '',
      address: isSet(object.address) ? String(object.address) : '',
      roles: Array.isArray(object?.roles)
        ? object.roles.map((e: any) => roleFromJSON(e))
        : [],
    };
  },

  toJSON(message: MsgUnassign): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.address !== undefined && (obj.address = message.address);
    if (message.roles) {
      obj.roles = message.roles.map(e => roleToJSON(e));
    } else {
      obj.roles = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgUnassign>, I>>(
    object: I
  ): MsgUnassign {
    const message = createBaseMsgUnassign();
    message.creator = object.creator ?? '';
    message.address = object.address ?? '';
    message.roles = object.roles?.map(e => e) || [];
    return message;
  },
};

function createBaseMsgUnassignResponse(): MsgUnassignResponse {
  return {};
}

export const MsgUnassignResponse = {
  encode(
    _: MsgUnassignResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUnassignResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUnassignResponse();
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

  fromJSON(_: any): MsgUnassignResponse {
    return {};
  },

  toJSON(_: MsgUnassignResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgUnassignResponse>, I>>(
    _: I
  ): MsgUnassignResponse {
    const message = createBaseMsgUnassignResponse();
    return message;
  },
};

/** Msg defines the Msg service. */
export interface Msg {
  Assign(
    request: DeepPartial<MsgAssign>,
    metadata?: grpc.Metadata
  ): Promise<MsgAssignResponse>;
  /** this line is used by starport scaffolding # proto/tx/rpc */
  Unassign(
    request: DeepPartial<MsgUnassign>,
    metadata?: grpc.Metadata
  ): Promise<MsgUnassignResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.Assign = this.Assign.bind(this);
    this.Unassign = this.Unassign.bind(this);
  }

  Assign(
    request: DeepPartial<MsgAssign>,
    metadata?: grpc.Metadata
  ): Promise<MsgAssignResponse> {
    return this.rpc.unary(
      MsgAssignDesc,
      MsgAssign.fromPartial(request),
      metadata
    );
  }

  Unassign(
    request: DeepPartial<MsgUnassign>,
    metadata?: grpc.Metadata
  ): Promise<MsgUnassignResponse> {
    return this.rpc.unary(
      MsgUnassignDesc,
      MsgUnassign.fromPartial(request),
      metadata
    );
  }
}

export const MsgDesc = {
  serviceName: 'glodnet.chain.permission.Msg',
};

export const MsgAssignDesc: UnaryMethodDefinitionish = {
  methodName: 'Assign',
  service: MsgDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return MsgAssign.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...MsgAssignResponse.decode(data),
        toObject() {
          return this;
        },
      };
    },
  } as any,
};

export const MsgUnassignDesc: UnaryMethodDefinitionish = {
  methodName: 'Unassign',
  service: MsgDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return MsgUnassign.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...MsgUnassignResponse.decode(data),
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
