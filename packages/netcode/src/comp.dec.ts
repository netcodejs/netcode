import { Role } from "./comp-schema";
import { ProtoOf } from "./misc";

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
export function Rpc(role: Role) {
    return function <
        PropertyName extends string,
        T extends Record<string, any> &
            Record<PropertyName, (...args) => Promise<any>>
    >(
        prototype: T & Record<`${PropertyName}_impl`, T[PropertyName]>,
        propertyName: PropertyName
    ) {};
}

export function Type() {}
