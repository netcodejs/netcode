export class Compress {
  protected _xd_: Boolean = true;
  protected _data_!: CompressBytes;
  protected _byteview_: any;
  protected _length: number = 0;
  protected _pos_: number = 0;
  // private static _sysend: String = "";

  constructor(data: ArrayBuffer, length: number) {
    if (data) {
      this._byteview_ = new Uint8Array(data);
      this._data_ = new CompressBytes(this._byteview_.buffer, length);
      this._length = this._data_.byteLength;
      this._pos_ = 0;
    } else {
      this.__resizeBuffer(8);
    }
  }

  private __resizeBuffer(len: number): void {
    try {
      var newByteView: any = new Uint8Array(len);
      if (this._byteview_ != null) {
        if (this._byteview_.length <= len) newByteView.setarr(this._byteview_);
        else newByteView.setarr(this._byteview_.subarray(0, len));
      }
      this._byteview_ = newByteView;
      this._data_ = new CompressBytes(newByteView.buffer, len);
    } catch (err: any) {
      throw '__resizeBuffer err:' + len;
    }
  }

  ensureWrite(lengthToEnsure: number): void {
    if (this._length < lengthToEnsure) this._length = lengthToEnsure;
  }

  clear(): void {
    this._pos_ = 0;
    this._length = 0;
  }

  _get(pos: number): number {
    return this._data_.getUint8(pos);
  }

  _set(pos: number, value: number): void {
    this._data_.setUint8(pos, value);
  }

  _byteAt_(index: number): number {
    return this._byteview_[index];
  }

  _byteSet_(index: number, value: number): void {
    this.ensureWrite(index + 1);
    this._byteview_[index] = value;
  }

  readBoolean(): boolean {
    return !!this._data_.getBit(this._pos_++);
  }

  readByte(): number {
    this._pos_ += 8;
    return this._data_.getInt8(this._pos_);
  }

  readUnsignedInt(): number {
    const uInt = this._data_.getUint16(this._pos_);
    this._pos_ += 16;
    return Math.floor(uInt);
  }

  readInt(): number {
    const tInt = this._data_.getInt16(this._pos_);
    this._pos_ += 16;
    return tInt;
  }

  readShort(): number {
    const short = this._data_.getInt8(this._pos_);
    this._pos_ += 8;
    return short;
  }

  readUnsignedShort(): number {
    const value = this._data_.getUint8(this._pos_);
    this._pos_ += 8;
    return value;
  }

  readLong(): number {
    const value = this._data_.getInt32(this._pos_);
    this._pos_ += 32;
    return value;
  }

  readUnsignedLong(): number {
    const value = this._data_.getUint32(this._pos_);
    this._pos_ += 32;
    return value;
  }

  readFloat(): number {
    const float = this._data_.getFloat32(this._pos_);
    this._pos_ += 32;
    return float;
  }

  readDouble(): number {
    const double = this._data_.getFloat64(this._pos_);
    this._pos_ += 64;
    return double;
  }

  writeBoolean(value: boolean): void {
    this.ensureWrite(this._pos_ + 1);
    this._data_.setBit(this._pos_, value ? 1 : 0);
    this._pos_ += 1;
  }

  writeByte(value: number): void {
    this.ensureWrite(this._pos_ + 8);
    this._data_.setInt8(this._pos_, value);
    this._pos_ += 8;
  }

  writeInt(value: number): void {
    this.ensureWrite(this._pos_ + 16);
    this._data_.setInt16(this._pos_, value);
    this._pos_ += 16;
  }

  writeUnsignedInt(value: number): void {
    this.ensureWrite(this._pos_ + 2);
    this._data_.setUint16(this._pos_, value);
    this._pos_ += 16;
  }

  writeShort(value: number): void {
    this.ensureWrite(this._pos_ + 8);
    this._data_.setInt8(this._pos_, value);
    this._pos_ += 8;
  }

  writeUnsignedShort(value: number): void {
    this.ensureWrite(this._pos_ + 8);
    this._data_.setUint8(this._pos_, value);
    this._pos_ += 8;
  }

  writeLong(value: number): void {
    this.ensureWrite(this._pos_ + 32);
    this._data_.setInt32(this._pos_, value);
    this._pos_ += 32;
  }

  writeUnsignedLong(value: number): void {
    this.ensureWrite(this._pos_ + 32);
    this._data_.setUint32(this._pos_, value);
    this._pos_ += 32;
  }

  writeFloat(value: number): void {
    this.ensureWrite(this._pos_ + 32);
    this._data_.setFloat32(this._pos_, value);
    this._pos_ += 32;
  }

  writeDouble(value: number): void {
    this.ensureWrite(this._pos_ + 64);
    this._data_.setFloat64(this._pos_, value);
    this._pos_ += 64;
  }

  writeArrayBuffer(arraybuffer: ArrayBuffer, offset = 0, length = 0): void {
    if (offset < 0 || length < 0) throw new Error('writeArrayBuffer error');
    const rlen = length === 0 ? arraybuffer.byteLength - offset : length;
    this.ensureWrite(this._pos_ + rlen);
    const uint8Array = new Uint8Array(arraybuffer);
    this._byteview_.set(uint8Array.subarray(offset, offset + rlen), this._pos_);
    this._pos_ += rlen;
  }
}

class CompressBytes {
  public byteLength = 0;
  public pos = 0;
  public _buffer;
  public _idx = 0;
  constructor(_data: ArrayBuffer, len: number) {
    this.byteLength = len;
    this._buffer = new Int8Array(len);
  }

  getBit(pos: number): number {
    let value = this._buffer[this._idx] % 2 == 1 ? 1 : 0;
    this.pos = pos;
    if (pos % 8 == 0) {
      this._idx--;
    }
    return value;
  }

  getUint8(pos: number): number {
    let value;
    if (pos % 8 == 0) {
      value = this._buffer[this._idx];
      this._idx--;
      this.pos = pos;
    } else {
      value =
        (this._buffer[this._idx] + (this._buffer[this._idx] << pos % 8)) >>
        pos % 8;
    }
    return value;
  }

  getInt8(pos: number): number {
    let value;
    if (pos % 8 == 0) {
      value = this._buffer[this._idx];
      this._idx--;
      this.pos = pos;
    } else {
      value =
        (this._buffer[this._idx] + (this._buffer[this._idx] << pos % 8)) >>
        pos % 8;
    }
    return value;
  }

  getUint16(pos: number): number {
    let value;
    if (pos % 8 == 0) {
      value = this._buffer[this._idx];
      this._idx--;
      this.pos = pos;
    } else {
      value =
        (this._buffer[this._idx] + (this._buffer[this._idx] << pos % 8)) >>
        pos % 8;
    }
    return value;
  }

  getInt16(pos: number): number {
    let value;
    if (pos % 8 == 0) {
      value = this._buffer[this._idx];
      this._idx--;
      this.pos = pos;
    } else {
      value =
        (this._buffer[this._idx] + (this._buffer[this._idx] << pos % 8)) >>
        pos % 8;
    }
    return value;
  }

  getInt32(pos: number): number {
    let value;
    if (pos % 8 == 0) {
      value = this._buffer[this._idx];
      this._idx--;
      this.pos = pos;
    } else {
      value =
        (this._buffer[this._idx] + (this._buffer[this._idx] << pos % 8)) >>
        pos % 8;
    }
    return value;
  }

  getUint32(pos: number): number {
    let value;
    if (pos % 8 == 0) {
      value = this._buffer[this._idx];
      this._idx--;
      this.pos = pos;
    } else {
      value =
        (this._buffer[this._idx] + (this._buffer[this._idx] << pos % 8)) >>
        pos % 8;
    }
    return value;
  }

  getFloat32(pos: number): number {
    let value;
    if (pos % 8 == 0) {
      value = this._buffer[this._idx];
      this._idx--;
      this.pos = pos;
    } else {
      value =
        (this._buffer[this._idx] + (this._buffer[this._idx] << pos % 8)) >>
        pos % 8;
    }
    return value;
  }

  getFloat64(pos: number): number {
    let value;
    if (pos % 8 == 0) {
      value = this._buffer[this._idx];
      this._idx--;
      this.pos = pos;
    } else {
      value =
        (this._buffer[this._idx] + (this._buffer[this._idx] << pos % 8)) >>
        pos % 8;
    }
    return value;
  }

  setBit(pos: number, value: number): void {
    this.pos = pos;
    if (pos % 8 == 0 && pos / 8 <= this._buffer.length) {
      //int8Array上个位置已满
      this._idx++;
      this._buffer[this._idx] = value;
    } else if (pos % 8 == 0 && pos / 8 > this._buffer.length) {
      //int8Array上个位置未满，并且需要扩容*1.5
      let newBuffer = new Int8Array(this.byteLength * 1.5);
      for (let i = 0; i < this.byteLength; i++) {
        newBuffer[i] = this._buffer[i];
      }
      this.byteLength = this.byteLength * 1.5;
    } else if (pos % 8 != 0) {
      //直接找到相应的位置补充
      let i = pos - ((pos * pos) % 8);
      this._buffer[this._idx] = this._buffer[this._idx] + Math.pow(2, i);
    }
  }

  setInt8(pos: number, value: number): void {
    this.pos = pos;
    if (pos % 8 == 0 && pos / 8 <= this._buffer.length) {
      this._idx++;
      this._buffer[this._idx] = value;
    } else if (pos % 8 == 0 && pos / 8 > this._buffer.length) {
      let newBuffer = new Int8Array(this.byteLength * 1.5);
      for (let i = 0; i < this.byteLength; i++) {
        newBuffer[i] = this._buffer[i];
      }
      this.byteLength = this.byteLength * 1.5;
    } else if (pos % 8 != 0) {
      let i = value >> pos % 8;
      this._buffer[this._idx] = (this._buffer[this._idx] + i) << pos % 8;
      this._idx++;
      this._buffer[this._idx] = value - i;
    }
  }

  setUint8(pos: number, value: number): void {
    this.pos = pos;
    if (pos % 8 == 0 && pos / 8 <= this._buffer.length) {
      this._idx++;
      this._buffer[this._idx] = value;
    } else if (pos % 8 == 0 && pos / 8 > this._buffer.length) {
      let newBuffer = new Int8Array(this.byteLength * 1.5);
      for (let i = 0; i < this.byteLength; i++) {
        newBuffer[i] = this._buffer[i];
      }
      this.byteLength = this.byteLength * 1.5;
    } else if (pos % 8 != 0) {
      let i = value >> pos % 8;
      this._buffer[this._idx] = (this._buffer[this._idx] + i) << pos % 8;
      this._idx++;
      this._buffer[this._idx] = value - i;
    }
  }

  setInt16(pos: number, value: number): void {
    this.pos = pos;
    if (pos % 8 == 0 && pos / 8 <= this._buffer.length) {
      this._idx++;
      this._buffer[this._idx] = value;
    } else if (pos % 8 == 0 && pos / 8 > this._buffer.length) {
      let newBuffer = new Int8Array(this.byteLength * 1.5);
      for (let i = 0; i < this.byteLength; i++) {
        newBuffer[i] = this._buffer[i];
      }
      this.byteLength = this.byteLength * 1.5;
    } else if (pos % 8 != 0) {
      let i = value >> pos % 8;
      this._buffer[this._idx] = (this._buffer[this._idx] + i) << pos % 8;
      this._idx++;
      this._buffer[this._idx] = value - i;
    }
  }

  setUint16(pos: number, value: number): void {
    this.pos = pos;
    if (pos % 8 == 0 && pos / 8 <= this._buffer.length) {
      this._idx++;
      this._buffer[this._idx] = value;
    } else if (pos % 8 == 0 && pos / 8 > this._buffer.length) {
      let newBuffer = new Int8Array(this.byteLength * 1.5);
      for (let i = 0; i < this.byteLength; i++) {
        newBuffer[i] = this._buffer[i];
      }
      this.byteLength = this.byteLength * 1.5;
    } else if (pos % 8 != 0) {
      let i = value >> pos % 8;
      this._buffer[this._idx] = (this._buffer[this._idx] + i) << pos % 8;
      this._idx++;
      this._buffer[this._idx] = value - i;
    }
  }

  setInt32(pos: number, value: number): void {
    this.pos = pos;
    if (pos % 8 == 0 && pos / 8 <= this._buffer.length) {
      this._idx++;
      this._buffer[this._idx] = value;
    } else if (pos % 8 == 0 && pos / 8 > this._buffer.length) {
      let newBuffer = new Int8Array(this.byteLength * 1.5);
      for (let i = 0; i < this.byteLength; i++) {
        newBuffer[i] = this._buffer[i];
      }
      this.byteLength = this.byteLength * 1.5;
    } else if (pos % 8 != 0) {
      let i = value >> pos % 8;
      this._buffer[this._idx] = (this._buffer[this._idx] + i) << pos % 8;
      this._idx++;
      this._buffer[this._idx] = value - i;
    }
  }

  setUint32(pos: number, value: number): void {
    this.pos = pos;
    if (pos % 8 == 0 && pos / 8 <= this._buffer.length) {
      this._idx++;
      this._buffer[this._idx] = value;
    } else if (pos % 8 == 0 && pos / 8 > this._buffer.length) {
      let newBuffer = new Int8Array(this.byteLength * 1.5);
      for (let i = 0; i < this.byteLength; i++) {
        newBuffer[i] = this._buffer[i];
      }
      this.byteLength = this.byteLength * 1.5;
    } else if (pos % 8 != 0) {
      let i = value >> pos % 8;
      this._buffer[this._idx] = (this._buffer[this._idx] + i) << pos % 8;
      this._idx++;
      this._buffer[this._idx] = value - i;
    }
  }

  setFloat32(pos: number, value: number): void {
    this.pos = pos;
    if (pos % 8 == 0 && pos / 8 <= this._buffer.length) {
      this._idx++;
      this._buffer[this._idx] = value;
    } else if (pos % 8 == 0 && pos / 8 > this._buffer.length) {
      let newBuffer = new Int8Array(this.byteLength * 1.5);
      for (let i = 0; i < this.byteLength; i++) {
        newBuffer[i] = this._buffer[i];
      }
      this.byteLength = this.byteLength * 1.5;
    } else if (pos % 8 != 0) {
      let i = value >> pos % 8;
      this._buffer[this._idx] = (this._buffer[this._idx] + i) << pos % 8;
      this._idx++;
      this._buffer[this._idx] = value - i;
    }
  }

  setFloat64(pos: number, value: number): void {
    this.pos = pos;
    if (pos % 8 == 0 && pos / 8 <= this._buffer.length) {
      this._idx++;
      this._buffer[this._idx] = value;
    } else if (pos % 8 == 0 && pos / 8 > this._buffer.length) {
      let newBuffer = new Int8Array(this.byteLength * 1.5);
      for (let i = 0; i < this.byteLength; i++) {
        newBuffer[i] = this._buffer[i];
      }
      this.byteLength = this.byteLength * 1.5;
    } else if (pos % 8 != 0) {
      let i = value >> pos % 8;
      this._buffer[this._idx] = (this._buffer[this._idx] + i) << pos % 8;
      this._idx++;
      this._buffer[this._idx] = value - i;
    }
  }
}
