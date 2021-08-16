import { NULL_NUM, NULL_STR } from "./macro";

export interface PropSchema {
    paramIndex: number;
    propertyKey: string;
    type: NetFiledType;
}

export interface Schema {
    name: string;
    hash: number;
    count: number;
    props: Record<string, PropSchema>;
    methods: Record<string, MethodSchema>;
    raw: PropSchema[];
}

export interface NetFiledType {
    container: number;
    dataType: DataType;
    refCtr?: { new (): any };
}

export interface MethodSchema {
    name: string;
    hash: number;
    paramTypes: DataType[];
    paramCount: number;
    returnType: DataType;
    returnRefCtr?: any;
    type: Role;
}

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
    NONE, I8 = 1, U8, I16, U16, I32, U32, F32, F64,
    SHORT, ushort, INT, uint, LONG, ulong, FLOAT, DOUBLE, STRING, BOOL
}
export const DataTypeObect = 99 as DataType;
export const DataTypeVoid = 98 as DataType;

export type ComponentConstructor<T = any> = { new (): T } & {
    __schema__: Schema;
};

export function genSchema(o = Object.create(null)): Schema {
    o.hash = NULL_NUM;
    o.name = NULL_STR;
    o.count = 0;
    o.props = Object.create(null);
    o.methods = Object.create(null);
    o.raw = [];
    return o;
}

export function genMethodSchema(o = Object.create(null)): MethodSchema {
    o.hash = NULL_NUM;
    o.name = NULL_STR;
    o.paramCount = 0;
    o.paramTypes = [];
    o.returnType = DataTypeVoid;
    o.type = -1;
    return o;
}

export const SCHEME_KEY = "__schema__";
export type ISchema = { [SCHEME_KEY]: Schema };

export function getSchemaByPrototype(prototype: any): Schema | null {
    if (prototype.hasOwnProperty(SCHEME_KEY)) {
        return (prototype as any)[SCHEME_KEY];
    }
    return null;
}

export function getOrCreateScheme(prototype: any): Schema {
    if (prototype.hasOwnProperty(SCHEME_KEY)) {
        return (prototype as any)[SCHEME_KEY];
    }

    const s = genSchema() as Schema;
    (prototype as any)[SCHEME_KEY] = s;
    const superCtr = Object.getPrototypeOf(prototype);

    const superSchema = superCtr[SCHEME_KEY] as Schema;
    if (superSchema) {
        s.raw.push.apply(s.raw, superSchema.raw);
    }
    return s;
}
