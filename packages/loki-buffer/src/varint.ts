const MSB = 0x80;
const REST = 0x7f;
const MSBALL = ~REST;
const INT = Math.pow(2, 31);

export class VarInt {
  bytes = 0;

  encode(num: number, out: Array<number>, offset: number) {
    if (Number.MAX_SAFE_INTEGER && num > Number.MAX_SAFE_INTEGER) {
      this.bytes = 0;
      throw new RangeError('Could not encode varint');
    }
    out = out || [];
    offset = offset || 0;
    var oldOffset = offset;

    while (num >= INT) {
      out[offset++] = (num & 0xff) | MSB;
      num /= 128;
    }
    while (num & MSBALL) {
      out[offset++] = (num & 0xff) | MSB;
      num >>>= 7;
    }
    out[offset] = num | 0;

    this.bytes = offset - oldOffset + 1;

    return out;
  }

  decode(buf: Uint8Array, offset: number) {
    let res = 0,
      shift = 0,
      counter = offset,
      b,
      l = buf.length;
    offset = offset || 0;

    do {
      if (counter >= l || shift > 49) {
        this.bytes = 0;
        throw new RangeError('Could not decode varint');
      }
      b = buf[counter++];
      res += shift < 28 ? (b & REST) << shift : (b & REST) * Math.pow(2, shift);
      shift += 7;
    } while (b >= MSB);

    this.bytes = counter - offset;

    return res;
  }
}
