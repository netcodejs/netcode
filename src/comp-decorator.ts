import { ProtoOf } from "./misc";
import { str as hash } from "./lib/crc-32";
import { Config } from "./config";
import {
    PropSchema,
    DataType,
    DataTypeObect,
    getOrCreateScheme,
} from "./comp-schema";
import { hash2compName, compName2ctr } from "./global-record";
import { ARR_CONTAINER, NONE_CONTAINER } from "./macro";
import { fixupSerable, fixupSerableJIT } from "./comp-fixup";

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
        }
    };
}

type DataTypeMappingPrimitive = {
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
