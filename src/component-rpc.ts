import { DataType } from "./misc";

export enum RpcType {
    SERVER,
    CLIENT,
}

export interface MethodSchema {
    name: string;
    hash: number;
    paramTypes: DataType[];
    paramCount: number;
}

export function Rpc(type: RpcType): PropertyDecorator {
    return function (target: Object, propertyKey: string | symbol): void {
        console.log(type);
    };
}

export function RpcVar(type: DataType): ParameterDecorator {
    return function (
        target: Object,
        propertyKey: string | symbol,
        parameterIndex: number
    ): void {};
}

export function RpcArr(type: DataType): ParameterDecorator {
    return function (
        target: Object,
        propertyKey: string | symbol,
        parameterIndex: number
    ): void {};
}
