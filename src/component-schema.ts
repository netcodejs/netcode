import { RpcType } from "./component-rpc";
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
    type: RpcType;
}

// prettier-ignore
export enum DataType {
    none, i8 = 1, u8, i16, u16, i32, u32, f32, f64,
    short, ushort, int, uint, long, ulong, float, double, string, bool
}
export const DataTypeObect = 99;
export const DataTypeVoid = 98;

export type ComponentConstructor<T = any> = { new (): T } & {
    __schema__: Schema;
};

export function genSchema(): Schema {
    return {
        hash: NULL_NUM,
        name: NULL_STR,
        count: 0,
        props: Object.create(null),
        methods: Object.create(null),
        raw: [],
    };
}

export function genMethodSchema(): MethodSchema {
    return {
        hash: NULL_NUM,
        name: NULL_STR,
        paramCount: 0,
        paramTypes: [],
        returnType: DataTypeVoid,
    };
}
