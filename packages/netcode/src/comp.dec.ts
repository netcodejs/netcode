import { ProtoOf } from "./misc";
import { DataType, Role } from "./comp-schema";
import { IComp } from "./comp-interface";

export function NetSerable(_name: string, _genSerable = true) {
    return function <T>(_target: { new (): T }) {};
}

export type DataTypeMappingPrimitive = {
    [DataType.NONE]: never;
    [DataType.INT]: number;
    [DataType.LONG]: number;
    [DataType.FLOAT]: number;
    [DataType.DOUBLE]: number;
    [DataType.SHORT]: number;
    [DataType.I8]: number;
    [DataType.U8]: number;
    [DataType.I16]: number;
    [DataType.U16]: number;
    [DataType.I32]: number;
    [DataType.U32]: number;
    [DataType.F32]: number;
    [DataType.F64]: number;
    [DataType.STRING]: string;
    [DataType.BOOL]: boolean;
};

export function NetVar<DT extends number, R>(_type?: DT | { new (): R }) {
    return function <PK extends string | symbol>(
        _t: ProtoOf<Record<PK, DataTypeMappingPrimitive[DT] & R>>,
        _propertyKey: PK
    ) {};
}

export function NetArr<DT extends number, R>(_type?: DT | { new (): R }) {
    return function <PK extends string | symbol>(
        _t: ProtoOf<Record<PK, Array<DataTypeMappingPrimitive[DT] & R>>>,
        _propertyKey: PK
    ) {};
}

type RpcReturnTypeMapping<T extends undefined | number, R> = T extends number
    ? DataTypeMappingPrimitive[T] & R
    : void;

export function Rpc<R, RpcReturnType extends undefined | number = undefined>(
    _type: Role,
    _returnType?: RpcReturnType | { new (): R }
) {
    return function <PropKey extends string>(
        _t: IComp &
            ProtoOf<
                Record<
                    PropKey,
                    (
                        ...args: any[]
                    ) => void | Promise<RpcReturnTypeMapping<RpcReturnType, R>>
                >
            >,
        _propertyKey: PropKey
    ): void {};
}

export function RpcVar(_type?: DataType) {
    return function (
        _t: IComp,
        _propertyKey: string,
        _parameterIndex: number
    ): void {};
}
