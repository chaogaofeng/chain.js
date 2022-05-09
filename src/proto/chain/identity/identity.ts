/* eslint-disable */
import Long from 'long';
import * as _m0 from 'protobufjs/minimal';

export const protobufPackage = 'glodnet.chain.identity';

/** PubKeyAlgorithm defines the algorithm names for the public key */
export enum PubKeyAlgorithm {
  /** UnknownPubKeyAlgorithm - UnknownPubKeyAlgorithm defines an unknown algorithm name */
  UnknownPubKeyAlgorithm = 0,
  /** RSA - RSA defines a RSA algorithm name */
  RSA = 1,
  /** DSA - DSA defines a DSA algorithm name. */
  DSA = 2,
  /** ECDSA - ECDSA defines an ECDSA algorithm name. */
  ECDSA = 3,
  /** ED25519 - ED25519 defines an ED25519 algorithm name. */
  ED25519 = 4,
  /** SM2 - SM2 defines an SM2 algorithm name. */
  SM2 = 5,
  UNRECOGNIZED = -1,
}

export function pubKeyAlgorithmFromJSON(object: any): PubKeyAlgorithm {
  switch (object) {
    case 0:
    case 'UnknownPubKeyAlgorithm':
      return PubKeyAlgorithm.UnknownPubKeyAlgorithm;
    case 1:
    case 'RSA':
      return PubKeyAlgorithm.RSA;
    case 2:
    case 'DSA':
      return PubKeyAlgorithm.DSA;
    case 3:
    case 'ECDSA':
      return PubKeyAlgorithm.ECDSA;
    case 4:
    case 'ED25519':
      return PubKeyAlgorithm.ED25519;
    case 5:
    case 'SM2':
      return PubKeyAlgorithm.SM2;
    case -1:
    case 'UNRECOGNIZED':
    default:
      return PubKeyAlgorithm.UNRECOGNIZED;
  }
}

export function pubKeyAlgorithmToJSON(object: PubKeyAlgorithm): string {
  switch (object) {
    case PubKeyAlgorithm.UnknownPubKeyAlgorithm:
      return 'UnknownPubKeyAlgorithm';
    case PubKeyAlgorithm.RSA:
      return 'RSA';
    case PubKeyAlgorithm.DSA:
      return 'DSA';
    case PubKeyAlgorithm.ECDSA:
      return 'ECDSA';
    case PubKeyAlgorithm.ED25519:
      return 'ED25519';
    case PubKeyAlgorithm.SM2:
      return 'SM2';
    default:
      return 'UNKNOWN';
  }
}

export interface Identity {
  address: string;
  certificate: string;
  parent: string;
  data: string;
  creator: string;
}

/** PubKey represents a public key along with the corresponding algorithm */
export interface PubKeyInfo {
  pubKey: string;
  algorithm: PubKeyAlgorithm;
}

function createBaseIdentity(): Identity {
  return { address: '', certificate: '', parent: '', data: '', creator: '' };
}

export const Identity = {
  encode(
    message: Identity,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.address !== '') {
      writer.uint32(10).string(message.address);
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
    if (message.creator !== '') {
      writer.uint32(42).string(message.creator);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Identity {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseIdentity();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
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
        case 5:
          message.creator = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Identity {
    return {
      address: isSet(object.address) ? String(object.address) : '',
      certificate: isSet(object.certificate) ? String(object.certificate) : '',
      parent: isSet(object.parent) ? String(object.parent) : '',
      data: isSet(object.data) ? String(object.data) : '',
      creator: isSet(object.creator) ? String(object.creator) : '',
    };
  },

  toJSON(message: Identity): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    message.certificate !== undefined &&
      (obj.certificate = message.certificate);
    message.parent !== undefined && (obj.parent = message.parent);
    message.data !== undefined && (obj.data = message.data);
    message.creator !== undefined && (obj.creator = message.creator);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Identity>, I>>(object: I): Identity {
    const message = createBaseIdentity();
    message.address = object.address ?? '';
    message.certificate = object.certificate ?? '';
    message.parent = object.parent ?? '';
    message.data = object.data ?? '';
    message.creator = object.creator ?? '';
    return message;
  },
};

function createBasePubKeyInfo(): PubKeyInfo {
  return { pubKey: '', algorithm: 0 };
}

export const PubKeyInfo = {
  encode(
    message: PubKeyInfo,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.pubKey !== '') {
      writer.uint32(10).string(message.pubKey);
    }
    if (message.algorithm !== 0) {
      writer.uint32(16).int32(message.algorithm);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PubKeyInfo {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePubKeyInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pubKey = reader.string();
          break;
        case 2:
          message.algorithm = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): PubKeyInfo {
    return {
      pubKey: isSet(object.pubKey) ? String(object.pubKey) : '',
      algorithm: isSet(object.algorithm)
        ? pubKeyAlgorithmFromJSON(object.algorithm)
        : 0,
    };
  },

  toJSON(message: PubKeyInfo): unknown {
    const obj: any = {};
    message.pubKey !== undefined && (obj.pubKey = message.pubKey);
    message.algorithm !== undefined &&
      (obj.algorithm = pubKeyAlgorithmToJSON(message.algorithm));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<PubKeyInfo>, I>>(
    object: I
  ): PubKeyInfo {
    const message = createBasePubKeyInfo();
    message.pubKey = object.pubKey ?? '';
    message.algorithm = object.algorithm ?? 0;
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
