import { ProtoOf } from "./misc";
import { str as hash } from "./lib/crc-32";
import { Config } from "./config";
import {
    PropSchema,
    DataType,
    DataTypeObect,
    getOrCreateScheme,
    DataTypeVoid,
    genMethodSchema,
    Role,
} from "./comp-schema";
import { hash2compName, compName2ctr, hash2RpcName } from "./global-record";
import { ARR_CONTAINER, NONE_CONTAINER } from "./macro";
import {
    fixupSerable,
    fixupSerableJIT,
    fixupSerableJITWithoutState,
    fixupSerableWithoutState,
} from "./comp-fixup";
import { IComp } from "./comp-interface";

class WhyPropertyKeyHasTheSameError extends Error {}
function sortComponentPropertyKey(a: PropSchema, b: PropSchema): number {
    const akey = a.propertyKey;
    const bkey = b.propertyKey;
    if (akey == bkey) throw new WhyPropertyKeyHasTheSameError();
    return akey > bkey ? 1 : -1;
}

export function NetSerable(name: string, genSerable = true) {
    return function <T>(target: { new (): T }) {
        const s = getOrCreateScheme(target.prototype);
        s.name = name;
        s.hash = hash(name);
        hash2compName[s.hash] = s.name;
        compName2ctr[s.name] = target;

        s.count = s.raw.length;
        if (s.count > 0) {
            s.raw.sort(sortComponentPropertyKey);
            for (let paramIndex = 0; paramIndex < s.count; paramIndex++) {
                const v = s.raw[paramIndex];
                v.paramIndex = paramIndex;
                s.props[paramIndex] = v;
                s.props[v.propertyKey as string] = v;
            }
        }

        if (genSerable) {
            if (Config.JIT) {
                fixupSerableJIT(target.prototype);
            } else {
                fixupSerable(target.prototype);
            }
        } else {
            if (Config.JIT) {
                fixupSerableJITWithoutState(target.prototype);
            } else {
                fixupSerableWithoutState(target.prototype);
            }
        }
    };
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

export function NetVar<DT extends number, R>(type: DT | { new (): R }) {
    return function <PK extends string | symbol>(
        t: ProtoOf<Record<PK, DataTypeMappingPrimitive[DT] & R>>,
        propertyKey: PK
    ) {
        const s = getOrCreateScheme(t as any);
        s.raw.push({
            paramIndex: -1,
            propertyKey: String(propertyKey),
            type: {
                container: NONE_CONTAINER,
                dataType: typeof type === "number" ? type : DataTypeObect,
                refCtr: typeof type === "number" ? undefined : type,
            },
        });
    };
}

export function NetArr<DT extends number, R>(type: DT | { new (): R }) {
    return function <PK extends string | symbol>(
        t: ProtoOf<Record<PK, Array<DataTypeMappingPrimitive[DT] & R>>>,
        propertyKey: PK
    ) {
        const s = getOrCreateScheme(t as any);
        s.raw.push({
            paramIndex: -1,
            propertyKey: String(propertyKey),
            type: {
                container: ARR_CONTAINER,
                dataType: typeof type === "number" ? type : DataTypeObect,
                refCtr: typeof type === "number" ? undefined : type,
            },
        });
    };
}

type RpcReturnTypeMapping<T extends undefined | number, R> = T extends number
    ? DataTypeMappingPrimitive[T] & R
    : void;
export class Crc32PropertyKeyHashConflict extends Error {}

export function Rpc<R, RpcReturnType extends undefined | number = undefined>(
    type: Role,
    returnType?: RpcReturnType | { new (): R }
) {
    return function <PropKey extends string>(
        t: IComp &
            ProtoOf<
                Record<
                    PropKey,
                    (
                        ...args: any[]
                    ) => void | Promise<RpcReturnTypeMapping<RpcReturnType, R>>
                >
            >,
        propertyKey: PropKey
    ): void {
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
            ms.returnType =
                typeof returnType === "number" ? returnType : DataTypeObect;
            ms.returnRefCtr =
                typeof returnType === "number" ? undefined : returnType;
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
        t: IComp,
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
