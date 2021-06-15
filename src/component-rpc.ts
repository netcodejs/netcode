import {
    ComponentConstructor,
    DataType,
    DataTypeVoid,
    genMethodSchema,
    genSchema,
    getOrCreateScheme,
    RpcType,
} from "./component-schema";
import { str as hash } from "./lib/crc-32";

export const hash2RpcName = {} as Record<number, string>;
export class Crc32PropertyKeyHashConflict extends Error {}
export function Rpc<RpcReturnType extends void | DataType = void>(
    type: RpcType,
    returnType?: RpcReturnType
) {
    return function (t: any, propertyKey: string): void {
        // gen schema
        const s = getOrCreateScheme(t);
        if (!s.methods[propertyKey]) {
            s.methods[propertyKey] = genMethodSchema();
        }
        const ms = s.methods[propertyKey];
        ms.hash = hash(propertyKey);
        ms.name = propertyKey;
        ms.type = type;
        if (hash2RpcName[ms.hash] && hash2RpcName[ms.hash] != ms.name) {
            throw new Crc32PropertyKeyHashConflict();
        }
        hash2RpcName[ms.hash] = ms.name;
        if (typeof returnType === "undefined") {
            ms.returnType = DataTypeVoid;
        } else {
            ms.returnType = returnType as DataType;
        }

        ms.paramCount = ms.paramTypes.length;
        for (let i = 0, len = ms.paramCount; i < len; i++) {
            if (!ms.paramTypes[i]) {
                console.warn(
                    `[Netcode]Rpc function ${propertyKey} at paramIndex(${i}) set the default type DataType.double`
                );
                ms.paramTypes[i] = DataType.DOUBLE;
            }
        }
    };
}

export function RpcVar(type: DataType) {
    return function (
        t: any,
        propertyKey: string,
        parameterIndex: number
    ): void {
        const s = getOrCreateScheme(t);
        if (!s.methods[propertyKey]) {
            s.methods[propertyKey] = genMethodSchema();
        }
        const ms = s.methods[propertyKey];
        ms.paramTypes[parameterIndex] = type;
    };
}
