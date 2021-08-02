import { DataType } from "./comp-schema";
import { NetSerable, NetVar } from "./comp-decorator";
import {
    IDataBufferReader,
    IDatabufferWriter,
    ISerable,
} from "./data/serializable";

export abstract class ADirty<T> {
    abstract get value(): T;
    abstract set value(inValue: T);
    abstract dirty: boolean;

    getsetDirty(): boolean {
        const old = this.dirty;
        this.dirty = false;
        return old;
    }
}

@NetSerable("Int", false)
export class Int extends ADirty<number> implements ISerable {
    @NetVar(DataType.BOOL)
    dirty: boolean = true;
    private _value: number = 0;
    @NetVar(DataType.INT)
    get value() {
        return this._value;
    }

    set value(inValue) {
        if (this._value !== inValue) {
            this._value = inValue;
            this.dirty = true;
        }
    }

    constructor(value = 0) {
        super();
        this._value = value;
    }

    ser(buffer: IDatabufferWriter<any>): void {
        const dirty = this.getsetDirty();
        buffer.writeBoolean(dirty);
        if (dirty) {
            buffer.writeInt(this._value);
        }
    }

    deser(buffer: IDataBufferReader<any>): void {
        this.dirty = buffer.readBoolean();
        if (this.dirty) {
            this._value = buffer.readInt();
        }
    }
}

@NetSerable("Float", false)
export class Float extends ADirty<number> implements ISerable {
    @NetVar(DataType.BOOL)
    dirty: boolean = true;

    private _value: number = 0;
    @NetVar(DataType.FLOAT)
    get value() {
        return this._value;
    }
    set value(inValue) {
        if (this._value !== inValue) {
            this._value = inValue;
            this.dirty = true;
        }
    }

    constructor(value = 0) {
        super();
        this._value = value;
    }

    ser(buffer: IDatabufferWriter<any>): void {
        const dirty = this.getsetDirty();
        buffer.writeBoolean(dirty);
        if (dirty) {
            buffer.writeFloat(this._value);
        }
    }

    deser(buffer: IDataBufferReader<any>): void {
        this.dirty = buffer.readBoolean();
        if (this.dirty) {
            this._value = buffer.readFloat();
        }
    }
}

@NetSerable("Long", false)
export class Long extends ADirty<number> implements ISerable {
    @NetVar(DataType.BOOL)
    dirty: boolean = true;

    private _value: number = 0;
    @NetVar(DataType.LONG)
    get value() {
        return this._value;
    }
    set value(inValue) {
        if (this._value !== inValue) {
            this._value = inValue;
            this.dirty = true;
        }
    }

    constructor(value = 0) {
        super();
        this._value = value;
    }

    ser(buffer: IDatabufferWriter<any>): void {
        const dirty = this.getsetDirty();
        buffer.writeBoolean(dirty);
        if (dirty) {
            buffer.writeLong(this._value);
        }
    }

    deser(buffer: IDataBufferReader<any>): void {
        this.dirty = buffer.readBoolean();
        if (this.dirty) {
            this._value = buffer.readLong();
        }
    }
}

@NetSerable("Uint", false)
export class Uint extends ADirty<number> implements ISerable {
    @NetVar(DataType.BOOL)
    dirty: boolean = true;
    private _value: number = 0;
    @NetVar(DataType.uint)
    get value() {
        return this._value;
    }

    set value(inValue) {
        if (this._value !== inValue) {
            this._value = inValue;
            this.dirty = true;
        }
    }

    constructor(value = 0) {
        super();
        this._value = value;
    }

    ser(buffer: IDatabufferWriter<any>): void {
        const dirty = this.getsetDirty();
        buffer.writeBoolean(dirty);
        if (dirty) {
            buffer.writeUint(this._value);
        }
    }

    deser(buffer: IDataBufferReader<any>): void {
        this.dirty = buffer.readBoolean();
        if (this.dirty) {
            this._value = buffer.readUint();
        }
    }
}

@NetSerable("Double", false)
export class Double extends ADirty<number> implements ISerable {
    @NetVar(DataType.BOOL)
    dirty: boolean = true;

    private _value: number = 0;
    @NetVar(DataType.DOUBLE)
    get value() {
        return this._value;
    }
    set value(inValue) {
        if (this._value !== inValue) {
            this._value = inValue;
            this.dirty = true;
        }
    }

    constructor(value = 0) {
        super();
        this._value = value;
    }

    ser(buffer: IDatabufferWriter<any>): void {
        const dirty = this.getsetDirty();
        buffer.writeBoolean(dirty);
        if (dirty) {
            buffer.writeDouble(this._value);
        }
    }

    deser(buffer: IDataBufferReader<any>): void {
        this.dirty = buffer.readBoolean();
        if (this.dirty) {
            this._value = buffer.readDouble();
        }
    }
}

@NetSerable("Ulong", false)
export class Ulong extends ADirty<number> implements ISerable {
    @NetVar(DataType.BOOL)
    dirty: boolean = true;

    private _value: number = 0;
    @NetVar(DataType.ulong)
    get value() {
        return this._value;
    }
    set value(inValue) {
        if (this._value !== inValue) {
            this._value = inValue;
            this.dirty = true;
        }
    }

    constructor(value = 0) {
        super();
        this._value = value;
    }

    ser(buffer: IDatabufferWriter<any>): void {
        const dirty = this.getsetDirty();
        buffer.writeBoolean(dirty);
        if (dirty) {
            buffer.writeUlong(this._value);
        }
    }

    deser(buffer: IDataBufferReader<any>): void {
        this.dirty = buffer.readBoolean();
        if (this.dirty) {
            this._value = buffer.readUlong();
        }
    }
}

@NetSerable("Short", false)
export class Short extends ADirty<number> implements ISerable {
    @NetVar(DataType.BOOL)
    dirty: boolean = true;

    private _value: number = 0;
    @NetVar(DataType.SHORT)
    get value() {
        return this._value;
    }
    set value(inValue) {
        if (this._value !== inValue) {
            this._value = inValue;
            this.dirty = true;
        }
    }

    constructor(value = 0) {
        super();
        this._value = value;
    }

    ser(buffer: IDatabufferWriter<any>): void {
        const dirty = this.getsetDirty();
        buffer.writeBoolean(dirty);
        if (dirty) {
            buffer.writeShort(this._value);
        }
    }

    deser(buffer: IDataBufferReader<any>): void {
        this.dirty = buffer.readBoolean();
        if (this.dirty) {
            this._value = buffer.readShort();
        }
    }
}

@NetSerable("Ulong", false)
export class Ushort extends ADirty<number> implements ISerable {
    @NetVar(DataType.BOOL)
    dirty: boolean = true;

    private _value: number = 0;
    @NetVar(DataType.ushort)
    get value() {
        return this._value;
    }
    set value(inValue) {
        if (this._value !== inValue) {
            this._value = inValue;
            this.dirty = true;
        }
    }

    constructor(value = 0) {
        super();
        this._value = value;
    }

    ser(buffer: IDatabufferWriter<any>): void {
        const dirty = this.getsetDirty();
        buffer.writeBoolean(dirty);
        if (dirty) {
            buffer.writeUshort(this._value);
        }
    }

    deser(buffer: IDataBufferReader<any>): void {
        this.dirty = buffer.readBoolean();
        if (this.dirty) {
            this._value = buffer.readUshort();
        }
    }
}
