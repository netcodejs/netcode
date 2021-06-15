import { DataType } from "./component-schema";
import { NetComp, NetVar } from "./component-variable";
import {
    IDataBufferReader,
    IDatabufferWriter,
    ISerable,
} from "./data/serializable";

export abstract class ADirty<T> {
    abstract value: T;
    abstract dirty: boolean;

    getsetDirty(): boolean {
        const old = this.dirty;
        this.dirty = false;
        return old;
    }
}

@NetComp("Int")
export class Int extends ADirty<number> implements ISerable {
    @NetVar(DataType.BOOL)
    dirty: boolean = false;
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

@NetComp("Float")
export class Float extends ADirty<number> implements ISerable {
    @NetVar(DataType.BOOL)
    dirty: boolean = false;

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

@NetComp("Long")
export class Long extends ADirty<number> implements ISerable {
    @NetVar(DataType.BOOL)
    dirty: boolean = false;

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

@NetComp("Uint")
export class Uint extends ADirty<number> implements ISerable {
    @NetVar(DataType.BOOL)
    dirty: boolean = false;
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

@NetComp("Double")
export class Double extends ADirty<number> implements ISerable {
    @NetVar(DataType.BOOL)
    dirty: boolean = false;

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

@NetComp("Ulong")
export class Ulong extends ADirty<number> implements ISerable {
    @NetVar(DataType.BOOL)
    dirty: boolean = false;

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

@NetComp("Short")
export class Short extends ADirty<number> implements ISerable {
    @NetVar(DataType.BOOL)
    dirty: boolean = false;

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

@NetComp("Ulong")
export class Ushort extends ADirty<number> implements ISerable {
    @NetVar(DataType.BOOL)
    dirty: boolean = false;

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
