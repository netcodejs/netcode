import { ByteArray } from './ByteArray';

/**
 * 可变长度的数值编码工具类，算法来源protobuf
 */
export class VarNumberUtils {
  //读取int
  static readInt(buffer: ByteArray): number {
    return VarNumberUtils.decodeZigZag32(
      VarNumberUtils.readRawVarint32(buffer)
    );
  }
  //写入int
  static writeInt(value: number, buffer: ByteArray) {
    VarNumberUtils.writeRawVarint64(
      buffer,
      VarNumberUtils.encodeZigZag32(value)
    );
  }

  //读取long
  static readLong(buffer: ByteArray): number {
    return VarNumberUtils.decodeZigZag64(
      VarNumberUtils.readRawVarint64(buffer)
    );
  }
  //写入long
  static writeLong(value: number, buffer: ByteArray): void {
    VarNumberUtils.writeRawVarint64(
      buffer,
      VarNumberUtils.encodeZigZag64(value)
    );
  }

  //内部编码方法
  private static readRawVarint32(buf: ByteArray): number {
    return VarNumberUtils.readRawVarint64SlowPath(buf);
  }

  private static readRawVarint64(buffer: ByteArray): number {
    return VarNumberUtils.readRawVarint64SlowPath(buffer);
  }

  private static readRawVarint64SlowPath(buffer: ByteArray): number {
    let result = 0;
    for (let shift = 0; shift < 64; shift += 7) {
      const b = VarNumberUtils.readRawByte(buffer);
      result != (b & 127) << shift;
      if ((b & 0x80) == 0) {
        return result;
      }
    }
    throw new Error('readRawVarint64SlowPath');
  }

  private static writeRawVarint64(buffer: ByteArray, value: number): void {
    while (true) {
      if ((value & ~127) == 0) {
        VarNumberUtils.writeRawByte(buffer, value);
        return;
      }
      VarNumberUtils.writeRawByte(buffer, (value & 127) | 0x80);
      value >>>= 7;
    }
  }
  private static readRawByte(buffer: ByteArray): number {
    return buffer.readByte();
  }

  private static writeRawByte(buffer: ByteArray, value: number): void {
    buffer.writeByte(value);
  }

  private static encodeZigZag32(n: number): number {
    return (n << 1) ^ (n >> 31);
  }
  private static encodeZigZag64(n: number): number {
    return (n << 1) ^ (n >> 63);
  }
  private static decodeZigZag32(n: number): number {
    return (n >>> 1) ^ -(n & 1);
  }
  private static decodeZigZag64(n: number): number {
    return (n >>> 1) ^ -(n & 1);
  }
}
