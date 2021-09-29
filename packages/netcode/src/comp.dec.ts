import { Role } from "./comp-schema";

// export type DataTypeMappingPrimitive = {
//     [DataType.NONE]: never;
//     [DataType.INT]: number;
//     [DataType.LONG]: number;
//     [DataType.FLOAT]: number;
//     [DataType.DOUBLE]: number;
//     [DataType.SHORT]: number;
//     [DataType.I8]: number;
//     [DataType.U8]: number;
//     [DataType.I16]: number;
//     [DataType.U16]: number;
//     [DataType.I32]: number;
//     [DataType.U32]: number;
//     [DataType.F32]: number;
//     [DataType.F64]: number;
//     [DataType.STRING]: string;
//     [DataType.BOOL]: boolean;
// };

export function Serable(_prototype: any) {}
export function Var<VarName extends string>(
    _prototype: any,
    _varName: VarName
) {}

type RpcDecorator = <
    PropertyName extends string,
    T extends Record<string, any> &
        Record<PropertyName, (...args: any[]) => Promise<any> | void>
>(
    _prototype: T & Record<`${PropertyName}_impl`, T[PropertyName]>,
    _propertyName: PropertyName
) => void;

export function Rpc(_role: Role) {
    return function () {} as RpcDecorator;
}

export function Type() {}
