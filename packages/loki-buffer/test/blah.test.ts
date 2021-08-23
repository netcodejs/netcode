import { ByteArray } from '../src';

test('blah', () => {
  const writerBuf = new ArrayBuffer(30);
  const writer = new ByteArray(writerBuf);
  writer.writeBoolean(true);
  writer.writeByte(1);
  writer.writeDouble(2.1);
  // writer.writeFloat(3.1);
  writer.writeInt(4);
  writer.writeShort(5);
  writer.writeBoolean(true);
  writer.writeVarInt(1);
  writer.writeVarLong(123);
  writer.writeString('hhh');

  const readerBuf = writerBuf;
  const reader = new ByteArray(readerBuf);
  expect(reader.readBoolean()).toBe(true);
  expect(reader.readByte()).toBe(1);
  expect(reader.readDouble()).toBe(2.1);
  // expect(reader.readFloat()).toBe(3.1);
  expect(reader.readInt()).toBe(4);
  expect(reader.readShort()).toBe(5);
  expect(reader.readBoolean()).toBe(true);
  expect(reader.readVarInt()).toBe(1);
  expect(reader.readVarLong()).toBe(123);
  expect(reader.readString()).toBe('hhh');
});

test.todo('support float!');
