/* eslint-disable */
import Long from 'long';
import { grpc } from '@improbable-eng/grpc-web';
import * as _m0 from 'protobufjs/minimal';
import { Params } from '../../chain/permission/params';
import { RoleAccount } from '../../chain/permission/role_account';
import {
  PageRequest,
  PageResponse,
} from '../../cosmos/base/query/v1beta1/pagination';
import { BrowserHeaders } from 'browser-headers';

export const protobufPackage = 'glodnet.chain.permission';

/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {}

/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
  /** params holds all the parameters of this module. */
  params?: Params;
}

export interface QueryGetRoleAccountRequest {
  address: string;
}

export interface QueryGetRoleAccountResponse {
  roleAccount?: RoleAccount;
}

export interface QueryAllRoleAccountRequest {
  pagination?: PageRequest;
}

export interface QueryAllRoleAccountResponse {
  roleAccount: RoleAccount[];
  pagination?: PageResponse;
}

function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}

export const QueryParamsRequest = {
  encode(
    _: QueryParamsRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsRequest();
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

  fromJSON(_: any): QueryParamsRequest {
    return {};
  },

  toJSON(_: QueryParamsRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryParamsRequest>, I>>(
    _: I
  ): QueryParamsRequest {
    const message = createBaseQueryParamsRequest();
    return message;
  },
};

function createBaseQueryParamsResponse(): QueryParamsResponse {
  return { params: undefined };
}

export const QueryParamsResponse = {
  encode(
    message: QueryParamsResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryParamsResponse {
    return {
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined,
    };
  },

  toJSON(message: QueryParamsResponse): unknown {
    const obj: any = {};
    message.params !== undefined &&
      (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryParamsResponse>, I>>(
    object: I
  ): QueryParamsResponse {
    const message = createBaseQueryParamsResponse();
    message.params =
      object.params !== undefined && object.params !== null
        ? Params.fromPartial(object.params)
        : undefined;
    return message;
  },
};

function createBaseQueryGetRoleAccountRequest(): QueryGetRoleAccountRequest {
  return { address: '' };
}

export const QueryGetRoleAccountRequest = {
  encode(
    message: QueryGetRoleAccountRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.address !== '') {
      writer.uint32(10).string(message.address);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryGetRoleAccountRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetRoleAccountRequest();
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

  fromJSON(object: any): QueryGetRoleAccountRequest {
    return {
      address: isSet(object.address) ? String(object.address) : '',
    };
  },

  toJSON(message: QueryGetRoleAccountRequest): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryGetRoleAccountRequest>, I>>(
    object: I
  ): QueryGetRoleAccountRequest {
    const message = createBaseQueryGetRoleAccountRequest();
    message.address = object.address ?? '';
    return message;
  },
};

function createBaseQueryGetRoleAccountResponse(): QueryGetRoleAccountResponse {
  return { roleAccount: undefined };
}

export const QueryGetRoleAccountResponse = {
  encode(
    message: QueryGetRoleAccountResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.roleAccount !== undefined) {
      RoleAccount.encode(
        message.roleAccount,
        writer.uint32(10).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryGetRoleAccountResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetRoleAccountResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.roleAccount = RoleAccount.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetRoleAccountResponse {
    return {
      roleAccount: isSet(object.roleAccount)
        ? RoleAccount.fromJSON(object.roleAccount)
        : undefined,
    };
  },

  toJSON(message: QueryGetRoleAccountResponse): unknown {
    const obj: any = {};
    message.roleAccount !== undefined &&
      (obj.roleAccount = message.roleAccount
        ? RoleAccount.toJSON(message.roleAccount)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryGetRoleAccountResponse>, I>>(
    object: I
  ): QueryGetRoleAccountResponse {
    const message = createBaseQueryGetRoleAccountResponse();
    message.roleAccount =
      object.roleAccount !== undefined && object.roleAccount !== null
        ? RoleAccount.fromPartial(object.roleAccount)
        : undefined;
    return message;
  },
};

function createBaseQueryAllRoleAccountRequest(): QueryAllRoleAccountRequest {
  return { pagination: undefined };
}

export const QueryAllRoleAccountRequest = {
  encode(
    message: QueryAllRoleAccountRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryAllRoleAccountRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllRoleAccountRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllRoleAccountRequest {
    return {
      pagination: isSet(object.pagination)
        ? PageRequest.fromJSON(object.pagination)
        : undefined,
    };
  },

  toJSON(message: QueryAllRoleAccountRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryAllRoleAccountRequest>, I>>(
    object: I
  ): QueryAllRoleAccountRequest {
    const message = createBaseQueryAllRoleAccountRequest();
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageRequest.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

function createBaseQueryAllRoleAccountResponse(): QueryAllRoleAccountResponse {
  return { roleAccount: [], pagination: undefined };
}

export const QueryAllRoleAccountResponse = {
  encode(
    message: QueryAllRoleAccountResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.roleAccount) {
      RoleAccount.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(
        message.pagination,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryAllRoleAccountResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllRoleAccountResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.roleAccount.push(RoleAccount.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllRoleAccountResponse {
    return {
      roleAccount: Array.isArray(object?.roleAccount)
        ? object.roleAccount.map((e: any) => RoleAccount.fromJSON(e))
        : [],
      pagination: isSet(object.pagination)
        ? PageResponse.fromJSON(object.pagination)
        : undefined,
    };
  },

  toJSON(message: QueryAllRoleAccountResponse): unknown {
    const obj: any = {};
    if (message.roleAccount) {
      obj.roleAccount = message.roleAccount.map(e =>
        e ? RoleAccount.toJSON(e) : undefined
      );
    } else {
      obj.roleAccount = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryAllRoleAccountResponse>, I>>(
    object: I
  ): QueryAllRoleAccountResponse {
    const message = createBaseQueryAllRoleAccountResponse();
    message.roleAccount =
      object.roleAccount?.map(e => RoleAccount.fromPartial(e)) || [];
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageResponse.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

/** Query defines the gRPC querier service. */
export interface Query {
  /** Parameters queries the parameters of the module. */
  Params(
    request: DeepPartial<QueryParamsRequest>,
    metadata?: grpc.Metadata
  ): Promise<QueryParamsResponse>;
  /** Queries a RoleAccount by index. */
  RoleAccount(
    request: DeepPartial<QueryGetRoleAccountRequest>,
    metadata?: grpc.Metadata
  ): Promise<QueryGetRoleAccountResponse>;
  /** Queries a list of RoleAccount items. */
  RoleAccountAll(
    request: DeepPartial<QueryAllRoleAccountRequest>,
    metadata?: grpc.Metadata
  ): Promise<QueryAllRoleAccountResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.Params = this.Params.bind(this);
    this.RoleAccount = this.RoleAccount.bind(this);
    this.RoleAccountAll = this.RoleAccountAll.bind(this);
  }

  Params(
    request: DeepPartial<QueryParamsRequest>,
    metadata?: grpc.Metadata
  ): Promise<QueryParamsResponse> {
    return this.rpc.unary(
      QueryParamsDesc,
      QueryParamsRequest.fromPartial(request),
      metadata
    );
  }

  RoleAccount(
    request: DeepPartial<QueryGetRoleAccountRequest>,
    metadata?: grpc.Metadata
  ): Promise<QueryGetRoleAccountResponse> {
    return this.rpc.unary(
      QueryRoleAccountDesc,
      QueryGetRoleAccountRequest.fromPartial(request),
      metadata
    );
  }

  RoleAccountAll(
    request: DeepPartial<QueryAllRoleAccountRequest>,
    metadata?: grpc.Metadata
  ): Promise<QueryAllRoleAccountResponse> {
    return this.rpc.unary(
      QueryRoleAccountAllDesc,
      QueryAllRoleAccountRequest.fromPartial(request),
      metadata
    );
  }
}

export const QueryDesc = {
  serviceName: 'glodnet.chain.permission.Query',
};

export const QueryParamsDesc: UnaryMethodDefinitionish = {
  methodName: 'Params',
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return QueryParamsRequest.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...QueryParamsResponse.decode(data),
        toObject() {
          return this;
        },
      };
    },
  } as any,
};

export const QueryRoleAccountDesc: UnaryMethodDefinitionish = {
  methodName: 'RoleAccount',
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return QueryGetRoleAccountRequest.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...QueryGetRoleAccountResponse.decode(data),
        toObject() {
          return this;
        },
      };
    },
  } as any,
};

export const QueryRoleAccountAllDesc: UnaryMethodDefinitionish = {
  methodName: 'RoleAccountAll',
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return QueryAllRoleAccountRequest.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...QueryAllRoleAccountResponse.decode(data),
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
