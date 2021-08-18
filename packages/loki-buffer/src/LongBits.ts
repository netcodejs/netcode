const charCodeAt = String.prototype.charCodeAt;
const Big = 4294967296;

export class LongBits {
  lo = 0;
  hi = 0;

  constructor(lo: number, hi: number) {
    this.lo = lo >>> 0;
    this.hi = hi >>> 0;
  }

  setTo(lo: number, hi: number): LongBits {
    this.lo = lo >>> 0;
    this.hi = hi >>> 0;
    return this;
  }

  setToNumber(value: number): LongBits {
    if (value === 0) {
      this.lo = 0;
      this.hi = 0;
      return this;
    }
    const sign = value < 0;
    if (sign) value = -value;
    let lo = value >>> 0;
    let hi = ((value - lo) / Big) >>> 0;
    if (sign) {
      hi = ~hi >>> 0;
      lo = ~lo >>> 0;
      if (++lo > Big) {
        lo = 0;
        if (++hi > Big) hi = 0;
      }
    }
    this.lo = lo;
    this.hi = hi;
    return this;
  }

  toNumber(unsigned: boolean): number {
    if (!unsigned && this.hi > 31) {
      const lo = (~this.lo + 1) >>> 0;
      let hi = ~this.hi >>> 0;
      if (!lo) hi = (hi + 1) >>> 0;
      return -(lo + hi * Big);
    }
    return this.lo + this.hi * Big;
  }

  toHash(): string {
    return String.fromCharCode(
      this.lo & 255,
      (this.lo >>> 8) & 255,
      (this.lo >>> 16) & 255,
      this.lo >>> 24,
      this.hi & 255,
      (this.hi >>> 8) & 255,
      (this.hi >>> 16) & 255,
      this.hi >>> 24
    );
  }

  zzEncode(): LongBits {
    const mask = this.hi >> 31;
    this.hi = (((this.hi << 1) | (this.lo >>> 31)) ^ mask) >>> 0;
    this.lo = ((this.lo << 1) ^ mask) >>> 0;
    return this;
  }

  zzDecode(): LongBits {
    const mask = -(this.lo & 1);
    this.lo = (((this.lo >>> 1) | (this.hi << 31)) ^ mask) >>> 0;
    this.hi = ((this.hi >>> 1) ^ mask) >>> 0;
    return this;
  }

  length(): number {
    const part0 = this.lo;
    const part1 = ((this.lo >>> 28) | (this.hi << 4)) >>> 0;
    const part2 = this.hi >>> 24;
    return part2 === 0
      ? part1 === 0
        ? part0 < 16384
          ? part0 < 128
            ? 1
            : 2
          : part0 < 2097152
          ? 3
          : 4
        : part1 < 16384
        ? part1 < 128
          ? 5
          : 6
        : part1 < 2097152
        ? 7
        : 8
      : part2 < 128
      ? 9
      : 10;
  }

  static zero: LongBits = new LongBits(0, 0);

  static zeroHash = '\0\0\0\0\0\0\0\0';

  static fromNumber(value: number): LongBits {
    if (value === 0) return zero;
    const sign = value < 0;
    if (sign) value = -value;
    let lo = value >>> 0;
    let hi = ((value - lo) / Big) >>> 0;
    if (sign) {
      hi = ~hi >>> 0;
      lo = ~lo >>> 0;
      if (++lo > Big) {
        lo = 0;
        if (++hi > Big) hi = 0;
      }
    }
    return new LongBits(lo, hi);
  }

  static from(value: number | string): LongBits {
    if (typeof value == 'number') {
      return LongBits.fromNumber(value);
    }
    return LongBits.fromNumber(parseInt(value, 10));
  }

  static fromHash(hash: string) {
    if (hash == zeroHash) return zero;
    return new LongBits(
      (charCodeAt.call(hash, 0) |
        (charCodeAt.call(hash, 1) << 8) |
        (charCodeAt.call(hash, 2) << 16) |
        (charCodeAt.call(hash, 3) << 24)) >>>
        0,
      (charCodeAt.call(hash, 4) |
        (charCodeAt.call(hash, 5) << 8) |
        (charCodeAt.call(hash, 6) << 16) |
        (charCodeAt.call(hash, 7) << 24)) >>>
        0
    );
  }
}
const zero = LongBits.zero;
const zeroHash = LongBits.zeroHash;

zero.toNumber = function zeroToNumber() {
  return 0;
};

zero.zzEncode = function zeroEmptyReturnFurn() {
  return this;
};

zero.zzDecode = zero.zzEncode;

zero.length = function zeroLength() {
  return 1;
};
