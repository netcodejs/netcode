import { IComp } from "./base";
import {
    DataType,
    DataTypeObect,
    ISchema,
    Schema,
    SCHEME_KEY,
} from "./comp-schema";
import { IDatabufferWriter, IDataBufferReader } from "./data/serializable";
import { NONE_CONTAINER } from "./macro";

export function fixupSerable<T extends Record<string, any>>(target: {
    new (): T;
}) {
    target.prototype.ser = function (
        this: ISchema & Record<string, any>,
        buffer: IDatabufferWriter
    ) {
        const schema = this[SCHEME_KEY];
        for (let i = 0, count = schema.count; i < count; i++) {
            const prop = schema.props[i];
            const type = prop.type;
            const key = prop.propertyKey;
            const value = this[key];
            if (type.container === NONE_CONTAINER) {
                switch (type.dataType) {
                    case DataType.INT:
                    case DataType.I32:
                        buffer.writeInt(value);
                        break;
                    case DataType.FLOAT:
                    case DataType.F32:
                        buffer.writeFloat(value);
                        break;
                    case DataType.DOUBLE:
                    case DataType.F64:
                        buffer.writeDouble(value);
                        break;
                    case DataType.BOOL:
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
                        case DataType.INT:
                        case DataType.I32:
                            buffer.writeInt(value[i]);
                            break;
                        case DataType.FLOAT:
                        case DataType.F32:
                            buffer.writeFloat(value[i]);
                            break;
                        case DataType.DOUBLE:
                        case DataType.F64:
                            buffer.writeDouble(value[i]);
                            break;
                        case DataType.BOOL:
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
        this: ISchema & Record<string, any>,
        buffer: IDataBufferReader
    ) {
        const schema = this[SCHEME_KEY];
        for (let i = 0, count = schema.count; i < count; i++) {
            const prop = schema.props[i];
            const type = prop.type;
            const key = prop.propertyKey;
            if (type.container === NONE_CONTAINER) {
                switch (type.dataType) {
                    case DataType.INT:
                    case DataType.I32:
                        (this as any)[key] = buffer.readInt();
                        break;
                    case DataType.FLOAT:
                    case DataType.F32:
                        (this as any)[key] = buffer.readFloat();
                        break;
                    case DataType.DOUBLE:
                    case DataType.F64:
                        (this as any)[key] = buffer.readDouble();
                        break;
                    case DataType.BOOL:
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
                        case DataType.INT:
                        case DataType.I32:
                            arr[i] = buffer.readInt();
                            break;
                        case DataType.FLOAT:
                        case DataType.F32:
                            arr[i] = buffer.readFloat();
                            break;
                        case DataType.DOUBLE:
                        case DataType.F64:
                            arr[i] = buffer.readDouble();
                            break;
                        case DataType.BOOL:
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

export function fixupSerableJIT(prototype: any) {
    const schema = prototype[SCHEME_KEY] as Schema;
    fixedupSerableStateJit(prototype, schema);
    fixedupSerableRpc(prototype, schema);
}

export function fixedupSerableStateJit(prototype: any, schema: Schema) {
    let serJitStr = "";
    for (let i = 0, count = schema.count; i < count; i++) {
        const prop = schema.props[i];
        const type = prop.type;
        const key = prop.propertyKey;
        if (type.container === NONE_CONTAINER) {
            switch (type.dataType) {
                case DataType.INT:
                case DataType.I32:
                    serJitStr += `buffer.writeInt(this.${key});`;
                    break;
                case DataType.FLOAT:
                case DataType.F32:
                    serJitStr += `buffer.writeFloat(this.${key});`;
                    break;
                case DataType.DOUBLE:
                case DataType.F64:
                    serJitStr += `buffer.writeDouble(this.${key});`;
                    break;
                case DataType.BOOL:
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
                case DataType.INT:
                case DataType.I32:
                    itemSerFuncStr = `buffer.writeInt(arr[i]);`;
                    break;
                case DataType.FLOAT:
                case DataType.F32:
                    itemSerFuncStr = `buffer.writeFloat(arr[i]);`;
                    break;
                case DataType.DOUBLE:
                case DataType.F64:
                    itemSerFuncStr = `buffer.writeDouble(arr[i]);`;
                    break;
                case DataType.BOOL:
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
    prototype.ser = Function("buffer", serJitStr);
    let deserJitStr = "";
    for (let i = 0, count = schema.count; i < count; i++) {
        const prop = schema.props[i];
        const type = prop.type;
        const key = prop.propertyKey;
        if (type.container === NONE_CONTAINER) {
            switch (type.dataType) {
                case DataType.INT:
                case DataType.I32:
                    deserJitStr += `this.${key}=buffer.readInt();`;
                    break;
                case DataType.FLOAT:
                case DataType.F32:
                    deserJitStr += `this.${key}=buffer.readFloat();`;
                    break;
                case DataType.DOUBLE:
                case DataType.F64:
                    deserJitStr += `this.${key}=buffer.readDouble();`;
                    break;
                case DataType.BOOL:
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
                case DataType.INT:
                case DataType.I32:
                    itemSerFuncStr = `arr[i]=buffer.readInt();`;
                    break;
                case DataType.FLOAT:
                case DataType.F32:
                    itemSerFuncStr = `arr[i]=buffer.readFloat();`;
                    break;
                case DataType.DOUBLE:
                case DataType.F64:
                    itemSerFuncStr = `arr[i]=buffer.readDouble();`;
                    break;
                case DataType.BOOL:
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
    prototype.deser = Function("buffer", deserJitStr);
}

export function fixedupSerableRpcJit(prototype: any, schema: Schema) {
    const rpcNames = Object.keys(schema.methods);
    for (let i = 0, len = rpcNames.length; i < len; i++) {
        const name = rpcNames[i];
        const ms = schema.methods[name];

        let serJitStr = `
        `;
        prototype["ser" + ms.hash] = Function("buffer", serJitStr);

        let deserJitStr = "";
        prototype["deser" + ms.hash] = Function("buffer", deserJitStr);
    }
}

export function fixedupSerableRpc(prototype: any, schema: Schema) {
    const rpcNames = Object.keys(schema.methods);
    for (let i = 0, len = rpcNames.length; i < len; i++) {
        const name = rpcNames[i];
        const ms = schema.methods[name];
        prototype["ser" + ms.hash] = function (
            buffer: IDatabufferWriter,
            args: any[]
        ) {
            for (let j = 0, len = ms.paramCount; j < len; j++) {
                const value = args[j];
                switch (ms.paramTypes[j]) {
                    case DataType.INT:
                    case DataType.I32:
                        buffer.writeInt(value);
                        break;
                    case DataType.FLOAT:
                    case DataType.F32:
                        buffer.writeFloat(value);
                        break;
                    case DataType.DOUBLE:
                    case DataType.F64:
                        buffer.writeDouble(value);
                        break;
                    case DataTypeObect:
                        value.ser(buffer);
                        break;
                }
            }
        };
        prototype["deser" + ms.hash] = function (buffer: IDataBufferReader) {
            const args = new Array(ms.paramCount);
            for (let j = 0, len = ms.paramCount; j < len; j++) {
                switch (ms.paramTypes[j]) {
                    case DataType.INT:
                    case DataType.I32:
                        args[j] = buffer.readInt();
                        break;
                    case DataType.FLOAT:
                    case DataType.F32:
                        args[j] = buffer.readFloat();
                        break;
                    case DataType.DOUBLE:
                    case DataType.F64:
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
        prototype[privateName] = prototype[name];
        prototype[name] = function (
            this: IComp & ISchema & Record<string, Function>,
            ...args: any[]
        ) {
            const domain = this.domain;
            if (domain == null) {
                console.warn("Domain is not valid!");
                return;
            }
            if (domain.option.type == ms.type) {
                this[privateName](...args);
            } else {
                domain.readonlyInternalMsgMng.sendRpc(name, this, args);
            }
        };
    }
}
