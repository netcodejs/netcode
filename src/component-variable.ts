import { Entity } from "./entity";
import { NULL_NUM, NULL_STR } from "./macro";
import { ProtoOf } from "./misc";
import { str as hash } from "./lib/crc-32";
import { IDataBufferReader, IDatabufferWriter } from "./data/serializable";
import { Config } from "./config";
import {
    PropSchema,
    Schema,
    DataType,
    DataTypeObect,
    ComponentConstructor,
    genSchema,
} from "./component-schema";
import { RpcType } from "./component-rpc";

class WhyPropertyKeyHasTheSameError extends Error {}
function sortComponentPropertyKey(a: PropSchema, b: PropSchema): number {
    const akey = a.propertyKey;
    const bkey = b.propertyKey;
    if (akey == bkey) throw new WhyPropertyKeyHasTheSameError();
    return akey > bkey ? 1 : -1;
}

export const hash2compName: Record<number, string> = Object.create(null);
export const compName2ctr: Record<string, { new (): any }> = Object.create(
    null
);
export function NetComp(name: string, genSerable = true) {
    return function <T>(target: { new (): T }) {
        let s = target.prototype.__schema__ as Schema;
        if (!s) {
            s = target.prototype.__schema__ = genSchema();
            return;
        }
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
                fixupSerableJIT(target);
            } else {
                fixupSerable(target);
            }
        }
    };
}

export const NONE_CONTAINER = 0;
export const ARR_CONTAINER = 1;

type DataTypeMappingPrimitive = {
    [DataType.none]: never;
    [DataType.int]: number;
    [DataType.long]: number;
    [DataType.float]: number;
    [DataType.double]: number;
    [DataType.short]: number;
    [DataType.i8]: number;
    [DataType.u8]: number;
    [DataType.i16]: number;
    [DataType.u16]: number;
    [DataType.i32]: number;
    [DataType.u32]: number;
    [DataType.f32]: number;
    [DataType.f64]: number;
    [DataType.string]: string;
};

export type SchemaClass<T> = T & { __schema__: Schema };

export function NetVar<DT extends number, R>(type: DT | { new (): R }) {
    return function <PK extends string | symbol>(
        t: ProtoOf<Record<PK, DataTypeMappingPrimitive[DT] & R>>,
        propertyKey: PK
    ) {
        const target: ComponentConstructor = t as any;
        if (!target.__schema__) target.__schema__ = genSchema();
        const s = target.__schema__;
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
        const target = (t as any) as ComponentConstructor;
        if (!target.__schema__) target.__schema__ = genSchema();
        const s = target.__schema__;
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

// export type ComponentType

export interface IComponent {
    entity: Entity;
    index: number;
    __schema__: Readonly<Schema>;
}

export function fixupSerable<T extends Record<string, any>>(target: {
    new (): T;
}) {
    target.prototype.ser = function (
        this: SchemaClass<T>,
        buffer: IDatabufferWriter
    ) {
        const schema = this.__schema__;
        for (let i = 0, count = schema.count; i < count; i++) {
            const prop = schema.props[i];
            const type = prop.type;
            const key = prop.propertyKey;
            const value = this[key];
            if (type.container === NONE_CONTAINER) {
                switch (type.dataType) {
                    case DataType.int:
                    case DataType.i32:
                        buffer.writeInt(value);
                        break;
                    case DataType.float:
                    case DataType.f32:
                        buffer.writeFloat(value);
                        break;
                    case DataType.double:
                    case DataType.f64:
                        buffer.writeDouble(value);
                        break;
                    case DataType.bool:
                        buffer.writeBoolean(value);
                        break;
                    case DataTypeObect:
                        value.ser(buffer);
                        break;
                }
            } else {
                buffer.writeInt(value.length);
                for (let i = 0, j = value.length; i < j; i++) {
                    switch (type.dataType) {
                        case DataType.int:
                        case DataType.i32:
                            buffer.writeInt(value[i]);
                            break;
                        case DataType.float:
                        case DataType.f32:
                            buffer.writeFloat(value[i]);
                            break;
                        case DataType.double:
                        case DataType.f64:
                            buffer.writeDouble(value[i]);
                            break;
                        case DataType.bool:
                            buffer.writeBoolean(value[i]);
                            break;
                        case DataTypeObect:
                            value.ser(buffer);
                            break;
                    }
                }
            }
        }
    };
    target.prototype.deser = function (
        this: SchemaClass<T>,
        buffer: IDataBufferReader
    ) {
        const schema = this.__schema__;
        for (let i = 0, count = schema.count; i < count; i++) {
            const prop = schema.props[i];
            const type = prop.type;
            const key = prop.propertyKey;
            if (type.container === NONE_CONTAINER) {
                switch (type.dataType) {
                    case DataType.int:
                    case DataType.i32:
                        (this as any)[key] = buffer.readInt();
                        break;
                    case DataType.float:
                    case DataType.f32:
                        (this as any)[key] = buffer.readFloat();
                        break;
                    case DataType.double:
                    case DataType.f64:
                        (this as any)[key] = buffer.readDouble();
                        break;
                    case DataType.bool:
                        (this as any)[key] = buffer.readBoolean();
                        break;
                    case DataTypeObect:
                        if (!(this as any)[key])
                            (this as any)[key] = new prop.type.refCtr!();
                        (this as any)[key].deser(buffer);
                        break;
                }
            } else {
                if (!(this as any)[key]) {
                    (this as any)[key] = [];
                }
                const arr = (this as any)[key] as any[];
                arr.length = buffer.readInt();
                for (let i = 0, j = arr.length; i < j; i++) {
                    switch (type.dataType) {
                        case DataType.int:
                        case DataType.i32:
                            arr[i] = buffer.readInt();
                            break;
                        case DataType.float:
                        case DataType.f32:
                            arr[i] = buffer.readFloat();
                            break;
                        case DataType.double:
                        case DataType.f64:
                            arr[i] = buffer.readDouble();
                            break;
                        case DataType.bool:
                            arr[i] = buffer.readBoolean();
                            break;
                        case DataTypeObect:
                            if (!(this as any)[key])
                                (this as any)[key] = new prop.type.refCtr!();
                            (this as any)[key].deser(buffer);
                            break;
                    }
                }
            }
        }
    };
}

export function fixupSerableJIT<T extends Record<string, any>>(target: {
    new (): T;
}) {
    const schema = target.prototype.__schema__ as Schema;
    fixedupSerableStateJit(target, schema);
    fixedupSerableRpc(target, schema);
}

export function fixedupSerableStateJit(target: any, schema: Schema) {
    let serJitStr = "";
    for (let i = 0, count = schema.count; i < count; i++) {
        const prop = schema.props[i];
        const type = prop.type;
        const key = prop.propertyKey;
        if (type.container === NONE_CONTAINER) {
            switch (type.dataType) {
                case DataType.int:
                case DataType.i32:
                    serJitStr += `buffer.writeInt(this.${key});`;
                    break;
                case DataType.float:
                case DataType.f32:
                    serJitStr += `buffer.writeFloat(this.${key});`;
                    break;
                case DataType.double:
                case DataType.f64:
                    serJitStr += `buffer.writeDouble(this.${key});`;
                    break;
                case DataType.bool:
                    serJitStr += `buffer.writeBoolean(this.${key});`;
                    break;
                case DataTypeObect:
                    serJitStr += `this.${key}.ser(buffer);`;
                    break;
            }
        } else {
            serJitStr += `buffer.writeInt(this.${key}.length);`;
            let itemSerFuncStr = "";
            switch (type.dataType) {
                case DataType.int:
                case DataType.i32:
                    itemSerFuncStr = `buffer.writeInt(arr[i]);`;
                    break;
                case DataType.float:
                case DataType.f32:
                    itemSerFuncStr = `buffer.writeFloat(arr[i]);`;
                    break;
                case DataType.double:
                case DataType.f64:
                    itemSerFuncStr = `buffer.writeDouble(arr[i]);`;
                    break;
                case DataType.bool:
                    serJitStr += `buffer.writeBoolean(this.${key});`;
                    break;
                case DataTypeObect:
                    itemSerFuncStr = `arr[i].ser(buffer);`;
                    break;
            }
            serJitStr += `
            var arr = this.${key}
            for (let i = 0, j = arr.length; i < j; i++) {
                ${itemSerFuncStr}
            }
            `;
        }
    }
    target.prototype.ser = Function("buffer", serJitStr);
    let deserJitStr = "";
    for (let i = 0, count = schema.count; i < count; i++) {
        const prop = schema.props[i];
        const type = prop.type;
        const key = prop.propertyKey;
        if (type.container === NONE_CONTAINER) {
            switch (type.dataType) {
                case DataType.int:
                case DataType.i32:
                    deserJitStr += `this.${key}=buffer.readInt();`;
                    break;
                case DataType.float:
                case DataType.f32:
                    deserJitStr += `this.${key}=buffer.readFloat();`;
                    break;
                case DataType.double:
                case DataType.f64:
                    deserJitStr += `this.${key}=buffer.readDouble();`;
                    break;
                case DataType.bool:
                    deserJitStr += `this.${key}=buffer.readBoolean();`;
                    break;
                case DataTypeObect:
                    deserJitStr += `this.${key}.deser(buffer);`;
                    break;
            }
        } else {
            deserJitStr += `
            if(!this.${key})this.${key}=[];
            var arr=this.${key};
            arr.length=buffer.readInt();`;
            let itemSerFuncStr = "";
            switch (type.dataType) {
                case DataType.int:
                case DataType.i32:
                    itemSerFuncStr = `arr[i]=buffer.readInt();`;
                    break;
                case DataType.float:
                case DataType.f32:
                    itemSerFuncStr = `arr[i]=buffer.readFloat();`;
                    break;
                case DataType.double:
                case DataType.f64:
                    itemSerFuncStr = `arr[i]=buffer.readDouble();`;
                    break;
                case DataType.bool:
                    deserJitStr += `arr[i]=buffer.readBoolean();`;
                    break;
                case DataTypeObect:
                    itemSerFuncStr = `arr[i].deser(buffer);`;
                    break;
            }
            deserJitStr += `
            for (let i = 0, j = arr.length; i < j; i++) {
                ${itemSerFuncStr}
            }
            `;
        }
    }
    target.prototype.deser = Function("buffer", deserJitStr);
}

export function fixedupSerableRpcJit(target: any, schema: Schema) {
    const rpcNames = Object.keys(schema.methods);
    for (let i = 0, len = rpcNames.length; i < len; i++) {
        const name = rpcNames[i];
        const ms = schema.methods[name];

        let serJitStr = `
        `;
        target.prototype["ser" + ms.hash] = Function("buffer", serJitStr);

        let deserJitStr = "";
        target.prototype["deser" + ms.hash] = Function("buffer", serJitStr);
    }
}

export function fixedupSerableRpc(target: any, schema: Schema) {
    const rpcNames = Object.keys(schema.methods);
    for (let i = 0, len = rpcNames.length; i < len; i++) {
        const name = rpcNames[i];
        const ms = schema.methods[name];
        target.prototype["ser" + ms.hash] = function (
            buffer: IDatabufferWriter,
            args: any[]
        ) {
            for (let j = 0, len = ms.paramCount; j < len; j++) {
                const value = args[j];
                switch (ms.paramTypes[j]) {
                    case DataType.int:
                    case DataType.i32:
                        buffer.writeInt(value);
                        break;
                    case DataType.float:
                    case DataType.f32:
                        buffer.writeFloat(value);
                        break;
                    case DataType.double:
                    case DataType.f64:
                        buffer.writeDouble(value);
                        break;
                    case DataTypeObect:
                        value.ser(buffer);
                        break;
                }
            }
        };
        target.prototype["deser" + ms.hash] = function (
            buffer: IDataBufferReader
        ) {
            const args = new Array(ms.paramCount);
            for (let j = 0, len = ms.paramCount; j < len; j++) {
                switch (ms.paramTypes[j]) {
                    case DataType.int:
                    case DataType.i32:
                        args[j] = buffer.readInt();
                        break;
                    case DataType.float:
                    case DataType.f32:
                        args[j] = buffer.readFloat();
                        break;
                    case DataType.double:
                    case DataType.f64:
                        args[j] = buffer.readDouble();
                        break;
                    case DataTypeObect:
                        args[j] = new (ms.paramTypes[j] as any)();
                        args[j].ser(buffer);
                        break;
                }
            }
            return args;
        };

        const privateName = "__" + name + "__";
        target.prototype[privateName] = target.prototype[name];
        target.prototype[name] = function (...args: any[]) {
            const ent = this.entity as Entity;
            const domain = ent.domain!;
            if (domain.type == ms.type) {
                this[privateName](...args);
            } else {
                domain.readonlyInternalMsgMng.sendRpc(name, this, args);
            }
        };
    }
}
