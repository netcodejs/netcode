import { RingBuffer } from "../src/ring-buffer";

test("initialization state", () => {
    const buffer = new RingBuffer(2);

    expect(buffer.capacity).toBe(2);
    expect(buffer.isEmpty).toBe(true);
    expect(buffer.isFull).toBe(false);
    expect(buffer.head).toBe(null);
    expect(buffer.tail).toBe(null);
    expect(buffer.length).toBe(0);
    expect(buffer.get(0)).toBe(null);
});

test("normal", () => {
    const buffer = new RingBuffer<number>(2);
    buffer.push(0);

    expect(buffer.capacity).toBe(2);
    expect(buffer.isEmpty).toBe(false);
    expect(buffer.isFull).toBe(false);
    expect(buffer.head).toBe(0);
    expect(buffer.tail).toBe(0);
    expect(buffer.length).toBe(1);
    expect(buffer.get(0)).toBe(0);
});

test("full", () => {
    const buffer = new RingBuffer<number>(2);
    buffer.push(0);
    buffer.push(1);

    expect(buffer.capacity).toBe(2);
    expect(buffer.isEmpty).toBe(false);
    expect(buffer.isFull).toBe(true);
    expect(buffer.head).toBe(0);
    expect(buffer.tail).toBe(1);
    expect(buffer.length).toBe(2);
    expect(buffer.get(0)).toBe(0);
    expect(buffer.get(1)).toBe(1);
    expect(buffer.get(2)).toBe(null);
});

test("overflow", () => {
    const buffer = new RingBuffer<number>(2);
    buffer.push(0);
    buffer.push(1);
    buffer.push(2);

    expect(buffer.capacity).toBe(2);
    expect(buffer.isEmpty).toBe(false);
    expect(buffer.isFull).toBe(true);
    expect(buffer.head).toBe(0);
    expect(buffer.tail).toBe(1);
    expect(buffer.length).toBe(2);
    expect(buffer.get(0)).toBe(0);
    expect(buffer.get(1)).toBe(1);
    expect(buffer.get(2)).toBe(null);
});

test("pop", () => {
    const buffer = new RingBuffer<number>(2);
    buffer.push(0);
    buffer.push(1);

    expect(buffer.pop()).toBe(1);
    buffer.push(2);

    expect(buffer.capacity).toBe(2);
    expect(buffer.isEmpty).toBe(false);
    expect(buffer.isFull).toBe(true);
    expect(buffer.head).toBe(0);
    expect(buffer.tail).toBe(2);
    expect(buffer.length).toBe(2);
    expect(buffer.get(0)).toBe(0);
    expect(buffer.get(1)).toBe(2);
    expect(buffer.get(2)).toBe(null);
});

test("shift-push", () => {
    const buffer = new RingBuffer<number>(2);
    buffer.push(0);
    buffer.push(1);

    expect(buffer.shift()).toBe(0);
    buffer.push(2);

    expect(buffer.capacity).toBe(2);
    expect(buffer.isEmpty).toBe(false);
    expect(buffer.isFull).toBe(true);
    expect(buffer.head).toBe(1);
    expect(buffer.tail).toBe(2);
    expect(buffer.length).toBe(2);
    expect(buffer.get(0)).toBe(1);
    expect(buffer.get(1)).toBe(2);
    expect(buffer.get(2)).toBe(null);

    expect(buffer.shift()).toBe(1);
    buffer.push(3);

    expect(buffer.capacity).toBe(2);
    expect(buffer.isEmpty).toBe(false);
    expect(buffer.isFull).toBe(true);
    expect(buffer.head).toBe(2);
    expect(buffer.tail).toBe(3);
    expect(buffer.length).toBe(2);
    expect(buffer.get(0)).toBe(2);
    expect(buffer.get(1)).toBe(3);
    expect(buffer.get(2)).toBe(null);

    expect(buffer.container).toStrictEqual([3, 1, 2]);
});

test("pop-unshift", () => {
    const buffer = new RingBuffer<number>(2);
    buffer.push(0);
    buffer.push(1);

    expect(buffer.pop()).toBe(1);
    buffer.unshift(1);

    expect(buffer.capacity).toBe(2);
    expect(buffer.isEmpty).toBe(false);
    expect(buffer.isFull).toBe(true);
    expect(buffer.head).toBe(1);
    expect(buffer.tail).toBe(0);
    expect(buffer.length).toBe(2);
    expect(buffer.get(0)).toBe(1);
    expect(buffer.get(1)).toBe(0);
    expect(buffer.get(2)).toBe(null);
    expect(buffer.container).toStrictEqual([0, 1, 1]);

    expect(buffer.pop()).toBe(0);
    buffer.unshift(0);

    expect(buffer.capacity).toBe(2);
    expect(buffer.isEmpty).toBe(false);
    expect(buffer.isFull).toBe(true);
    expect(buffer.head).toBe(0);
    expect(buffer.tail).toBe(1);
    expect(buffer.length).toBe(2);
    expect(buffer.get(0)).toBe(0);
    expect(buffer.get(1)).toBe(1);
    expect(buffer.get(2)).toBe(null);

    expect(buffer.container).toStrictEqual([0, 0, 1]);
});
