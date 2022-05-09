/* eslint-disable */
import Long from 'long';
import * as _m0 from 'protobufjs/minimal';

export const protobufPackage = 'glodnet.chain.permission';

/** Role represents a role */
export enum Role {
  /** ROOT_ADMIN - ROOT_ADMIN defines the root admin role index. */
  ROOT_ADMIN = 0,
  /** PERM_ADMIN - PERM_ADMIN defines the permission admin role index. */
  PERM_ADMIN = 1,
  /** ID_ADMIN - ID_ADMIN defines the identity admin role index. */
  ID_ADMIN = 2,
  /** TOKEN_ADMIN - TOKEN_ADMIN defines the token admin role index. */
  TOKEN_ADMIN = 3,
  /** WASM_ADMIN - WASM_ADMIN defines the wasm admin role index. */
  WASM_ADMIN = 4,
  UNRECOGNIZED = -1,
}

export function roleFromJSON(object: any): Role {
  switch (object) {
    case 0:
    case 'ROOT_ADMIN':
      return Role.ROOT_ADMIN;
    case 1:
    case 'PERM_ADMIN':
      return Role.PERM_ADMIN;
    case 2:
    case 'ID_ADMIN':
      return Role.ID_ADMIN;
    case 3:
    case 'TOKEN_ADMIN':
      return Role.TOKEN_ADMIN;
    case 4:
    case 'WASM_ADMIN':
      return Role.WASM_ADMIN;
    case -1:
    case 'UNRECOGNIZED':
    default:
      return Role.UNRECOGNIZED;
  }
}

export function roleToJSON(object: Role): string {
  switch (object) {
    case Role.ROOT_ADMIN:
      return 'ROOT_ADMIN';
    case Role.PERM_ADMIN:
      return 'PERM_ADMIN';
    case Role.ID_ADMIN:
      return 'ID_ADMIN';
    case Role.TOKEN_ADMIN:
      return 'TOKEN_ADMIN';
    case Role.WASM_ADMIN:
      return 'WASM_ADMIN';
    default:
      return 'UNKNOWN';
  }
}

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}
