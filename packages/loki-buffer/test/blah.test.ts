import { ByteArray } from '../src';
// import { Compress } from '../src/Compress';

test('blah', () => {
  const writerBuf = new ArrayBuffer(100);
  const writer = new ByteArray(writerBuf);
  writer.writeBoolean(true);
  writer.writeByte(1);
  writer.writeDouble(2.1);
  writer.writeFloat(3.1);
  writer.writeInt(4);
  writer.writeShort(5);
  writer.writeBoolean(true);
  writer.writeLong(123);
  writer.writeVarInt(1);
  writer.writeVarInt(512); //1000000000 -> 11000000 00001000 -128 8
  writer.writeVarLong(123);
  writer.writeVarLong(123);
  writer.writeString('hhh');

  const readerBuf = writerBuf;
  const reader = new ByteArray(readerBuf);
  expect(reader.readBoolean()).toBe(true);
  expect(reader.readByte()).toBe(1);
  expect(reader.readDouble()).toBe(2.1);
  expect(reader.readFloat()).toBe(3.1);
  expect(reader.readInt()).toBe(4);
  expect(reader.readShort()).toBe(5);
  expect(reader.readBoolean()).toBe(true);
  expect(reader.readLong()).toBe(123);
  expect(reader.readVarInt()).toBe(1);

  expect(reader.readByte()).toBe(-128);
  expect(reader.readByte()).toBe(8);

  expect(reader.readVarLong()).toBe(123);
  expect(reader.readUByte()).toBe(123);
  expect(reader.readString()).toBe('hhh');

  // const compress = new ArrayBuffer(100);
  // const conpressbyte = new Compress(compress);
});

test.todo('support float!');
