import { Serable, Var } from "./comp.dec";

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

@Serable
export class Int extends ADirty<number> implements ISerable {
    @Var
    dirty: boolean = true;
    private _value: number = 0;
    @Var
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

    ser(buffer: IDataBufferWriter<any>): void {
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

@Serable
export class Float extends ADirty<number> implements ISerable {
    @Var
    dirty: boolean = true;

    private _value: number = 0;
    @Var
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

    ser(buffer: IDataBufferWriter<any>): void {
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

@Serable
export class Long extends ADirty<number> implements ISerable {
    @Var
    dirty: boolean = true;

    private _value: number = 0;
    @Var
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

    ser(buffer: IDataBufferWriter<any>): void {
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

@Serable
export class Uint extends ADirty<number> implements ISerable {
    @Var
    dirty: boolean = true;
    private _value: number = 0;
    @Var
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

    ser(buffer: IDataBufferWriter<any>): void {
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

@Serable
export class Double extends ADirty<number> implements ISerable {
    @Var
    dirty: boolean = true;

    private _value: number = 0;
    @Var
    get value(): u32 {
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

    ser(buffer: IDataBufferWriter<any>): void {
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

@Serable
export class Ulong extends ADirty<number> implements ISerable {
    @Var
    dirty: boolean = true;

    private _value: number = 0;
    @Var
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

    ser(buffer: IDataBufferWriter<any>): void {
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

@Serable
export class Short extends ADirty<number> implements ISerable {
    @Var
    dirty: boolean = true;

    private _value: number = 0;
    @Var
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

    ser(buffer: IDataBufferWriter<any>): void {
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

@Serable
export class Ushort extends ADirty<number> implements ISerable {
    @Var
    dirty: boolean = true;

    private _value: number = 0;
    @Var
    get value(): short {
        return this._value;
    }
    set value(inValue: short) {
        if (this._value !== inValue) {
            this._value = inValue;
            this.dirty = true;
        }
    }

    constructor(value = 0) {
        super();
        this._value = value;
    }

    ser(buffer: IDataBufferWriter<any>): void {
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
