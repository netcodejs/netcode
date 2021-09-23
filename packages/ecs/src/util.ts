import {
    ComponentConstructor,
    ComponentSchema,
    Component,
    PlainSignature,
    SortedComponentSchema,
    Type,
    ComplexSignature,
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

export function getPlainByteLength(type: Type) {
    switch (type) {
        case Type.i8:
        case Type.u8:
        case Type.bool:
            return length;
        case Type.i16:
        case Type.u16:
            return 2;
        case Type.i32:
        case Type.u32:
        case Type.f32:
            return 4;
        case Type.f64:
            return 8;
        default:
            return 0;
    }
}

export function sortDefine(
    define: ComponentSchema
): [SortedComponentSchema, number] {
    let byteLength = 0;
    const entries = Object.entries(define);
    const out: SortedComponentSchema = {
        plains: [],
        plainArrays: [],
        complexs: [],
        complexArrays: [],
    };
    for (let [name, define] of entries) {
        let valueType: Type | ComponentConstructor;
        let length = 1;
        let isArray = false;
        const offset = byteLength;
        if (Array.isArray(define)) {
            isArray = true;
            [valueType, length] = define;
        } else {
            valueType = define;
        }

        if (isComponentConstructor(valueType)) {
            byteLength += valueType.byteLength * length;
            if (isArray) {
                out.complexArrays.push({
                    type: valueType,
                    length,
                    offset,
                    name,
                });
            } else {
                out.complexs.push({
                    type: valueType,
                    offset,
                    name,
                });
            }
        } else {
            const singleSize = getPlainByteLength(valueType);
            byteLength += singleSize * length;
            if (isArray) {
                out.plainArrays.push({
                    type: valueType,
                    length,
                    offset,
                    name,
                    singleSize,
                });
            } else {
                out.plains.push({
                    type: valueType,
                    offset,
                    name,
                    singleSize,
                });
            }
        }
    }

    return [out, byteLength];
}

export function genPlainAccessFunction(sign: PlainSignature) {
    switch (sign.type) {
        case Type.i8:
            return function (this: Component, val?: number): void | number {
                const arch = this.archetype;
                const view = arch.view;
                if (val === void 0) {
                    return view.getInt8(this.offset + sign.offset);
                } else {
                    view.setInt8(this.offset + sign.offset, val);
                }
            };
        case Type.u8:
            return function (this: Component, val?: number): void | number {
                const arch = this.archetype;
                const view = arch.view;
                if (val === void 0) {
                    return view.getUint8(this.offset + sign.offset);
                } else {
                    view.setUint8(this.offset + sign.offset, val);
                }
            };
        case Type.bool:
            return function (this: Component, val?: boolean): void | boolean {
                const arch = this.archetype;
                const view = arch.view;
                if (val === void 0) {
                    return !!view.getUint8(this.offset + sign.offset);
                } else {
                    view.setUint8(this.offset + sign.offset, Number(val));
                }
            };
        case Type.i16:
            return function (this: Component, val?: number): void | number {
                const arch = this.archetype;
                const view = arch.view;
                if (val === void 0) {
                    return view.getInt16(this.offset + sign.offset, true);
                } else {
                    view.setInt16(this.offset + sign.offset, val, true);
                }
            };
        case Type.u16:
            return function (this: Component, val?: number): void | number {
                const arch = this.archetype;
                const view = arch.view;
                if (val === void 0) {
                    return view.getUint16(this.offset + sign.offset, true);
                } else {
                    view.setUint16(this.offset + sign.offset, val, true);
                }
            };
        case Type.i32:
            return function (this: Component, val?: number): void | number {
                const arch = this.archetype;
                const view = arch.view;
                if (val === void 0) {
                    return view.getInt32(this.offset + sign.offset, true);
                } else {
                    view.setInt32(this.offset + sign.offset, val, true);
                }
            };
        case Type.u32:
            return function (this: Component, val?: number): void | number {
                const arch = this.archetype;
                const view = arch.view;
                if (val === void 0) {
                    return view.getUint32(this.offset + sign.offset, true);
                } else {
                    view.setUint32(this.offset + sign.offset, val, true);
                }
            };
        case Type.f32:
            return function (this: Component, val?: number): void | number {
                const arch = this.archetype;
                const view = arch.view;
                if (val === void 0) {
                    return view.getFloat32(this.offset + sign.offset, true);
                } else {
                    view.setFloat32(this.offset + sign.offset, val, true);
                }
            };
        case Type.f64:
            return function (this: Component, val?: number): void | number {
                const arch = this.archetype;
                const view = arch.view;
                if (val === void 0) {
                    return view.getFloat64(this.offset + sign.offset, true);
                } else {
                    view.setFloat64(this.offset + sign.offset, val, true);
                }
            };
        default:
            return null;
    }
}

export function genPlainArrayAccessFunction(sign: PlainSignature) {
    switch (sign.type) {
        case Type.i8:
            return function (
                this: Component,
                index: number,
                val?: number
            ): void | number {
                const arch = this.archetype;
                const view = arch.view;
                if (val === void 0) {
                    return view.getInt8(
                        this.offset + sign.offset + sign.singleSize * index
                    );
                } else {
                    view.setInt8(
                        this.offset + sign.offset + sign.singleSize * index,
                        val
                    );
                }
            };
        case Type.u8:
            return function (
                this: Component,
                index: number,
                val?: number
            ): void | number {
                const arch = this.archetype;
                const view = arch.view;
                if (val === void 0) {
                    return view.getUint8(
                        this.offset + sign.offset + sign.singleSize * index
                    );
                } else {
                    view.setUint8(
                        this.offset + sign.offset + sign.singleSize * index,
                        val
                    );
                }
            };
        case Type.bool:
            return function (
                this: Component,
                index: number,
                val?: boolean
            ): void | boolean {
                const arch = this.archetype;
                const view = arch.view;
                if (val === void 0) {
                    return !!view.getUint8(
                        this.offset + sign.offset + sign.singleSize * index
                    );
                } else {
                    view.setUint8(
                        this.offset + sign.offset + sign.singleSize * index,
                        Number(val)
                    );
                }
            };
        case Type.i16:
            return function (
                this: Component,
                index: number,
                val?: number
            ): void | number {
                const arch = this.archetype;
                const view = arch.view;
                if (val === void 0) {
                    return view.getInt16(
                        this.offset + sign.offset + sign.singleSize * index,
                        true
                    );
                } else {
                    view.setInt16(
                        this.offset + sign.offset + sign.singleSize * index,
                        val,
                        true
                    );
                }
            };
        case Type.u16:
            return function (
                this: Component,
                index: number,
                val?: number
            ): void | number {
                const arch = this.archetype;
                const view = arch.view;
                if (val === void 0) {
                    return view.getUint16(
                        this.offset + sign.offset + sign.singleSize * index,
                        true
                    );
                } else {
                    view.setUint16(
                        this.offset + sign.offset + sign.singleSize * index,
                        val,
                        true
                    );
                }
            };
        case Type.i32:
            return function (
                this: Component,
                index: number,
                val?: number
            ): void | number {
                const arch = this.archetype;
                const view = arch.view;
                if (val === void 0) {
                    return view.getInt32(
                        this.offset + sign.offset + sign.singleSize * index,
                        true
                    );
                } else {
                    view.setInt32(
                        this.offset + sign.offset + sign.singleSize * index,
                        val,
                        true
                    );
                }
            };
        case Type.u32:
            return function (
                this: Component,
                index: number,
                val?: number
            ): void | number {
                const arch = this.archetype;
                const view = arch.view;
                if (val === void 0) {
                    return view.getUint32(
                        this.offset + sign.offset + sign.singleSize * index,
                        true
                    );
                } else {
                    view.setUint32(
                        this.offset + sign.offset + sign.singleSize * index,
                        val,
                        true
                    );
                }
            };
        case Type.f32:
            return function (
                this: Component,
                index: number,
                val?: number
            ): void | number {
                const arch = this.archetype;
                const view = arch.view;
                if (val === void 0) {
                    return view.getFloat32(
                        this.offset + sign.offset + sign.singleSize * index,
                        true
                    );
                } else {
                    view.setFloat32(
                        this.offset + sign.offset + sign.singleSize * index,
                        val,
                        true
                    );
                }
            };
        case Type.f64:
            return function (
                this: Component,
                index: number,
                val?: number
            ): void | number {
                const arch = this.archetype;
                const view = arch.view;
                if (val === void 0) {
                    return view.getFloat64(
                        this.offset + sign.offset + sign.singleSize * index,
                        true
                    );
                } else {
                    view.setFloat64(
                        this.offset + sign.offset + sign.singleSize * index,
                        val,
                        true
                    );
                }
            };
        default:
            return null;
    }
}

export function genComplexAccessFunction(sign: ComplexSignature) {
    return function (this: Component, out: Component = sign.type.TEMP) {
        out.set(this.archetype, this.offset + sign.offset);
        return out;
    };
}

export function genComplexArrayAccessFunction(sign: ComplexSignature) {
    return function (
        this: Component,
        index: number,
        out: Component = sign.type.TEMP
    ) {
        out.set(
            this.archetype,
            this.offset + sign.offset + index * sign.type.byteLength
        );
        return out;
    };
}

export function genComponentPrototype(
    sorted: SortedComponentSchema,
    prototype: Object
) {
    for (let sign of sorted.plains) {
        prototype[sign.name] = genPlainAccessFunction(sign);
    }
    for (let sign of sorted.plainArrays) {
        prototype[sign.name] = genPlainArrayAccessFunction(sign);
        prototype[`${sign.name}Length`] = sign.length;
    }
    for (let sign of sorted.complexs) {
        prototype[sign.name] = genComplexAccessFunction(sign);
    }
    for (let sign of sorted.complexArrays) {
        prototype[sign.name] = genComplexArrayAccessFunction(sign);
        prototype[`${sign.name}Length`] = sign.length;
    }
}
