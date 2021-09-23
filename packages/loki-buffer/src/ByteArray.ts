const BIG: number = 4294967296;

type RDecodeType = { decode(bytes: ByteArray): void };

type RVoNewType = new () => RDecodeType;

type RVoCreateType = { create(): RDecodeType };

type WVoType = new () => { encode(bytes: ByteArray): void };

type NumberType = 1 | 2 | 3 | 4 | 5 | 6 | 7;

type ByteType = NumberType | 8 | 9 | 15 | 16;

type REleType = ByteType | RVoNewType | RVoCreateType;

type WEleType = ByteType | WVoType;

export class ByteArray {
  private _len = 0;

  private _pos = 0;

  private _byteView: Uint8Array = null as never;

  powTwo = false;

  protected _data_!: DataView;

  constructor(data: ArrayBuffer) {
    if (typeof data === 'number') {
      this.resizeBuffer(data);
    } else if (data) {
      this.setUint8Array(new Uint8Array(data));
    } else {
      this.resizeBuffer(8);
    }
  }

  private resizeBuffer(len: number): void {
    try {
      var newByteView: any = new Uint8Array(len);
      if (this._byteView != null) {
        if (this._byteView.length <= len) newByteView.setarr(this._byteView);
        else newByteView.setarr(this._byteView.subarray(0, len));
      }
      this._byteView = newByteView;
      this._data_ = new DataView(newByteView.buffer);
    } catch (err: any) {
      throw '__resizeBuffer err:' + len;
    }
  }

  setUint8Array(data: Uint8Array): void {
    this._byteView = data;
    this._data_ = new DataView(data.buffer);
    this._len = data.byteLength;
    this._pos = 0;
  }

  ensureWrite(lengthToEnsure: number): void {
    if (this._len < lengthToEnsure) this._len = lengthToEnsure;
  }

  clear(): void {
    this._pos = 0;
    this._len = 0;
  }

  _get(pos: number): number {
    return this._data_.getUint8(pos);
  }

  _set(pos: number, value: number): void {
    this._data_.setUint8(pos, value);
  }

  _byteAt_(index: number): number {
    return this._byteView[index];
  }

  _byteSet_(index: number, value: number): void {
    this.ensureWrite(index + 1);
    this._byteView[index] = value;
  }

  readBoolean(): boolean {
    return this.readByte() !== 0;
  }

  readUByte(): number {
    return this._data_.getUint8(this._pos++);
  }

  readByte(): number {
    return this._data_.getInt8(this._pos++);
  }

  readUInt(): number {
    const uInt = this._data_.getUint32(this._pos);
    this._pos += 4;
    return Math.floor(uInt);
  }

  readInt(): number {
    const tInt = this._data_.getInt32(this._pos);
    this._pos += 4;
    return tInt;
  }

  readShort(): number {
    const short = this._data_.getInt16(this._pos);
    this._pos += 2;
    return short;
  }

  readUShort(): number {
    const value = this._data_.getUint16(this._pos);
    this._pos += 2;
    return value;
  }

  readLong(): number {
    const head = this.readUInt();
    const end = this.readUInt();
    return head * 1.0 * BIG + end;
  }

  readFloat(): number {
    const float = this._data_.getInt32(this._pos) / 1000;
    this._pos += 4;
    return float;
  }

  readDouble(): number {
    const double = this._data_.getFloat64(this._pos);
    this._pos += 8;
    return double;
  }

  readString(): string {
    const length = this.readUShort();
    if (length > 0) {
      return this.readUTFBytes(length);
    }
    return '';
  }

  readUTFBytes(len = -1): string {
    let value = '';
    const max: number = this._pos + len;
    let c: number, c2: number, c3: number;
    const f = String.fromCharCode;
    while (this._pos < max) {
      c = this._data_.getUint8(this._pos++);
      if (c < 0x80) {
        if (c !== 0) {
          value += f(c);
        }
      } else if (c < 0xe0) {
        value += f(
          ((c & 0x3f) << 6) | (this._data_.getUint8(this._pos++) & 0x7f)
        );
      } else if (c < 0xf0) {
        c2 = this._data_.getUint8(this._pos++);
        value += f(
          ((c & 0x1f) << 12) |
            ((c2 & 0x7f) << 6) |
            (this._data_.getUint8(this._pos++) & 0x7f)
        );
      } else {
        c2 = this._data_.getUint8(this._pos++);
        c3 = this._data_.getUint8(this._pos++);
        value += f(
          ((c & 0x0f) << 18) |
            ((c2 & 0x7f) << 12) |
            ((c3 << 6) & 0x7f) |
            (this._data_.getUint8(this._pos++) & 0x7f)
        );
      }
    }
    value.charCodeAt(0);
    return value;
  }

  writeBoolean(value: boolean): void {
    this.writeByte(value ? 1 : 0);
  }

  writeUByte(value: number): void {
    this.ensureWrite(this._pos + 1);
    this._data_.setUint8(this._pos, value);
    this._pos += 1;
  }

  writeByte(value: number): void {
    this.ensureWrite(this._pos + 1);
    this._data_.setInt8(this._pos, value);
    this._pos += 1;
  }

  writeInt(value: number): void {
    this.ensureWrite(this._pos + 4);
    this._data_.setInt32(this._pos, value);
    this._pos += 4;
  }

  writeUInt(value: number): void {
    this.ensureWrite(this._pos + 4);
    this._data_.setUint32(this._pos, value);
    this._pos += 4;
  }

  writeShort(value: number): void {
    this.ensureWrite(this._pos + 2);
    this._data_.setInt16(this._pos, value);
    this._pos += 2;
  }

  writeUShort(value: number): void {
    this.ensureWrite(this._pos + 2);
    this._data_.setUint16(this._pos, value);
    this._pos += 2;
  }

  writeLong(value: number): void {
    if (value != 0 && (value > Number.MAX_VALUE || value < Number.MIN_VALUE)) {
      console.log('writeLong error -- Out of bounds');
    }
    let head: number;
    let end: number;
    if (value > 0) {
      end = value % BIG;
      head = (value - end * 1.0) / BIG;
    } else {
      end = value & -BIG;
      head = BIG;
      if (value < BIG) {
        end || head++;
        head += (value - end * 1.0) / BIG;
      }
      end += BIG;
    }
    this.writeUInt(head);
    this.writeUInt(end);
  }

  writeFloat(value: number): void {
    this.ensureWrite(this._pos + 4);
    value = value * 1000;
    this._data_.setInt32(this._pos, value);
    this._pos += 4;
  }

  writeDouble(value: number): void {
    this.ensureWrite(this._pos + 8);
    this._data_.setFloat64(this._pos, value);
    this._pos += 8;
  }

  writeString(value: string): void {
    this.writeUShort(ByteArray._getUTFBytesCount(value));
    this.writeUTFBytes(value);
  }

  writeUTFBytes(value: string): void {
    this.ensureWrite(this._pos + value.length * 4);
    for (let i = 0, sz: number = value.length; i < sz; i++) {
      const c: number = value.charCodeAt(i);
      if (c <= 0x7f) {
        this.writeByte(c);
      } else if (c <= 0x7ff) {
        this.writeByte(0xc0 | (c >> 6));
        this.writeByte(0x80 | (c & 63));
      } else if (c <= 0xffff) {
        this.writeByte(0xe0 | (c >> 12));
        this.writeByte(0x80 | ((c >> 6) & 63));
        this.writeByte(0x80 | (c & 63));
      } else {
        this.writeByte(0xf0 | (c >> 18));
        this.writeByte(0x80 | ((c >> 12) & 63));
        this.writeByte(0x80 | ((c >> 6) & 63));
        this.writeByte(0x80 | (c & 63));
      }
    }
    this._len = this._pos;
  }

  static _getUTFBytesCount(value: string): number {
    let count = 0;
    for (let i = 0, sz: number = value.length; i < sz; i++) {
      const c: number = value.charCodeAt(i);
      if (c <= 0x7f) {
        count += 1;
      } else if (c <= 0x7ff) {
        count += 2;
      } else if (c <= 0xffff) {
        count += 3;
      } else {
        count += 4;
      }
    }
    return count;
  }

  readList<T = any>(
    lengthByteType: NumberType,
    valType: REleType,
    KEYType?: 0,
    ...args: any[]
  ): T[];

  readList<T = any>(lengthByteType: NumberType, valType: REleType): T[] {
    const list: any[] = [];
    const length: number = _byteReadFunc[lengthByteType].call(this);

    if (length === 0) return list;

    if (valType < 15) {
      const readFunc = _byteReadFunc[valType as ByteType];
      for (let i = 0; i < length; i++) {
        list[i] = readFunc.call(this);
      }
    } else if (valType > 0) {
      const readFunc = _byteReadFunc[valType as ByteType];
      const params: any[] = [];
      for (let i = 3; i < arguments.length; i++) {
        params[i - 3] = arguments[i];
      }
      for (let i = 0; i < length; i++) {
        list[i] = readFunc.apply(this, params);
      }
    } else {
      const NewType =
        (valType as RVoCreateType).create == null
          ? (valType as RVoNewType)
          : null;
      for (let i = 0; i < length; i++) {
        const vo = NewType
          ? new NewType()
          : (valType as RVoCreateType).create();
        vo.decode(this);
        list[i] = vo;
      }
    }

    return list;
  }

  writeList(
    list: any[],
    lengthByteType: NumberType,
    valType: WEleType,
    KEYType?: 0,
    ...args: any[]
  ): void;

  writeList(list: any[], lengthByteType: NumberType, valType: WEleType): void {
    const length = list ? list.length : 0;
    _byteWriteFunc[lengthByteType].call(this, length);

    if (length === 0) return;
    if (valType < 15) {
      const wrtiteFunc = _byteWriteFunc[valType as ByteType];
      for (let i = 0; i < length; i++) {
        wrtiteFunc.call(this, list[i]);
      }
    } else if (valType > 0) {
      const writeFunc = _byteWriteFunc[valType as ByteType];
      const params: any[] = [];
      for (let i = 4; i < arguments.length; i++) {
        params[i - 3] = arguments[i];
      }
      for (let i = 0; i < length; i++) {
        params[0] = list[i];
        writeFunc.apply(this, params);
      }
    } else {
      for (let i = 0; i < length; i++) {
        (list[i] as InstanceType<WVoType>).encode(this);
      }
    }
  }

  readBufferArray(): any[] {
    const typesLen = this.readByte();
    if (typesLen === 0) {
      return [];
    }

    const types = [];
    for (let i = 0; i < typesLen; i++) {
      types.push(this.readByte());
    }

    return this.readList.apply(this, types as any);
  }

  writeArrayBuffer(arraybuffer: ArrayBuffer, offset = 0, length = 0): void {
    if (offset < 0 || length < 0) throw new Error('writeArrayBuffer error');
    const rlen = length === 0 ? arraybuffer.byteLength - offset : length;
    this.ensureWrite(this._pos + rlen);
    const uint8Array = new Uint8Array(arraybuffer);
    this._byteView.set(uint8Array.subarray(offset, offset + rlen), this._pos);
    this._pos += rlen;
  }
}

const _byteReadFunc: Record<number, Function> = {
  1: ByteArray.prototype.readByte,
  2: ByteArray.prototype.readUByte,
  3: ByteArray.prototype.readShort,
  4: ByteArray.prototype.readUShort,
  5: ByteArray.prototype.readInt,
  6: ByteArray.prototype.readUInt,
  7: ByteArray.prototype.readLong,
  8: ByteArray.prototype.readBoolean,
  10: ByteArray.prototype.readList,
};

const _byteWriteFunc: Record<number, Function> = {
  1: ByteArray.prototype.writeByte,
  2: ByteArray.prototype.writeUByte,
  3: ByteArray.prototype.writeShort,
  4: ByteArray.prototype.writeUShort,
  5: ByteArray.prototype.writeInt,
  6: ByteArray.prototype.writeUInt,
  7: ByteArray.prototype.writeLong,
  8: ByteArray.prototype.writeBoolean,
  10: ByteArray.prototype.writeList,
};
