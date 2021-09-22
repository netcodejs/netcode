import {
    ComponentConstructor,
    ComponentDefinition,
    DefineClass,
    DefineValueType,
    SortedComponentdefinition,
    Type,
} from "./component";
import { Entity } from "./entity";

export function setBit(source: number, index: number) {
    return source | (1 << index);
}

export function resetBit(source: number, index: number) {
    return source & ~(1 << index);
}

export function testBit(source: number, index: number) {
    return (source & (1 << index)) != 0;
}

export function toggleBit(source: number, index: number) {
    return source ^ (1 << index);
}

export function fastRemove<T>(arr: T[], index: number) {
    const overringIdx = arr.length - 1;
    arr[index] = arr[overringIdx];
    arr.length--;
    return overringIdx;
}

export function entityClone(entity: Entity): Entity {
    const newObj = Object.create(null) as Entity;
    newObj.index = entity.index;
    newObj.version = entity.version;
    return newObj;
}

export function entityEqualTo(e1: Entity, e2: Entity): boolean {
    return e1.index === e2.index && e1.version === e2.version;
}

export function isComponentConstructor(
    sign: Type | ComponentConstructor
): sign is ComponentConstructor {
    return typeof sign !== "number";
}

export function getPlainByteLength(type: Type, length = 1) {
    switch (type) {
        case Type.i8:
        case Type.u8:
        case Type.bool:
            return length;
        case Type.i16:
        case Type.u16:
            return 2 * length;
        case Type.i32:
        case Type.u32:
        case Type.f32:
            return 4 * length;
        case Type.f64:
            return 8 * length;
        default:
            return 0;
    }
}

export function sortDefine(
    define: ComponentDefinition
): [SortedComponentdefinition, number] {
    let byteLength = 0;
    const entries = Object.entries(define);
    const out = {};
    for (let [propName, define] of entries) {
        let sign: Type | ComponentConstructor;
        let length = 1;
        let isArray = false;
        const offset = byteLength;
        if (Array.isArray(define)) {
            isArray = true;
            [sign, length] = define;
        } else {
            sign = define;
        }

        let type = DefineValueType.PLAIN;
        if (isComponentConstructor(sign)) {
            type = DefineValueType.COMPLEX;
            byteLength += sign.byteLength * length;
        } else {
            byteLength += getPlainByteLength(sign, length);
        }
        out[propName] = {
            sign,
            type,
            isArray,
            length,
            offset,
        };
    }

    return [out, byteLength];
}

export function generateDefinePrototype(ctr: ComponentConstructor) {
    for (let [name, define] of Object.entries(ctr.sortedDefinition)) {
        if (!define.isArray && define.type === DefineValueType.PLAIN) {
            switch (define.sign) {
                case Type.i8:
                    ctr.prototype[name] = function (
                        this: DefineClass,
                        val?: number
                    ): void | number {
                        const arch = this.archetype;
                        const view = arch.view;
                        if (val === void 0) {
                            return view.getInt8(this.offset + define.offset);
                        } else {
                            view.setInt8(this.offset + define.offset, val);
                        }
                    };
                    break;
                case Type.u8:
                    ctr.prototype[name] = function (
                        this: DefineClass,
                        val?: number
                    ): void | number {
                        const arch = this.archetype;
                        const view = arch.view;
                        if (val === void 0) {
                            return view.getUint8(this.offset + define.offset);
                        } else {
                            view.setUint8(this.offset + define.offset, val);
                        }
                    };
                    break;
                case Type.bool:
                    ctr.prototype[name] = function (
                        this: DefineClass,
                        val?: boolean
                    ): void | boolean {
                        const arch = this.archetype;
                        const view = arch.view;
                        if (val === void 0) {
                            return !!view.getUint8(this.offset + define.offset);
                        } else {
                            view.setUint8(
                                this.offset + define.offset,
                                Number(val)
                            );
                        }
                    };
                    break;
                case Type.i16:
                    ctr.prototype[name] = function (
                        this: DefineClass,
                        val?: number
                    ): void | number {
                        const arch = this.archetype;
                        const view = arch.view;
                        if (val === void 0) {
                            return view.getInt16(this.offset + define.offset);
                        } else {
                            view.setInt16(this.offset + define.offset, val);
                        }
                    };
                    break;
                case Type.u16:
                    ctr.prototype[name] = function (
                        this: DefineClass,
                        val?: number
                    ): void | number {
                        const arch = this.archetype;
                        const view = arch.view;
                        if (val === void 0) {
                            return view.getUint16(this.offset + define.offset);
                        } else {
                            view.setUint16(this.offset + define.offset, val);
                        }
                    };
                    break;
                case Type.i32:
                    ctr.prototype[name] = function (
                        this: DefineClass,
                        val?: number
                    ): void | number {
                        const arch = this.archetype;
                        const view = arch.view;
                        if (val === void 0) {
                            return view.getInt32(this.offset + define.offset);
                        } else {
                            view.setInt32(this.offset + define.offset, val);
                        }
                    };
                    break;
                case Type.u32:
                    ctr.prototype[name] = function (
                        this: DefineClass,
                        val?: number
                    ): void | number {
                        const arch = this.archetype;
                        const view = arch.view;
                        if (val === void 0) {
                            return view.getUint32(this.offset + define.offset);
                        } else {
                            view.setUint32(this.offset + define.offset, val);
                        }
                    };
                    break;
                case Type.f32:
                    ctr.prototype[name] = function (
                        this: DefineClass,
                        val?: number
                    ): void | number {
                        const arch = this.archetype;
                        const view = arch.view;
                        if (val === void 0) {
                            return view.getFloat32(this.offset + define.offset);
                        } else {
                            view.setFloat32(this.offset + define.offset, val);
                        }
                    };
                    break;
                case Type.f64:
                    ctr.prototype[name] = function (
                        this: DefineClass,
                        val?: number
                    ): void | number {
                        const arch = this.archetype;
                        const view = arch.view;
                        if (val === void 0) {
                            return view.getFloat64(this.offset + define.offset);
                        } else {
                            view.setFloat64(this.offset + define.offset, val);
                        }
                    };
                    break;
            }
        }
    }
}
