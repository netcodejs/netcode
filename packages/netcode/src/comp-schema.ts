export enum RpcType {
    SERVER,
    CLIENT,
}

export enum Role {
    AUTHORITY = 1,
    SIMULATED_PROXY,
    AUTONMOUS_PROXY,
}

// prettier-ignore
export enum DataType {
    NONE, 
    I8 = 1, U8, I16, U16, I32, U32, U64, I64, F32, F64,
    BYTE, UBYTE, SHORT, USHORT, INT, UINT, LONG, ULONG, FLOAT, DOUBLE, STRING, BOOL
}
export const DataTypeObect = 99 as DataType;
export const DataTypeVoid = 98 as DataType;

export const SCHEME_HASH_KEY = "__hash__";
export type ISchema = { [SCHEME_HASH_KEY]: number };

export function getHash(prototype: any): number | null {
    if (prototype.hasOwnProperty(SCHEME_HASH_KEY)) {
        return (prototype as any)[SCHEME_HASH_KEY];
    }
    return null;
}
