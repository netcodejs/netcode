import { asSerable, assert, DomainOption, isPrimitive, RpcType } from "../src";

test("isPrimitive", () => {
    expect(isPrimitive(true)).toBe(true);
    expect(isPrimitive(false)).toBe(true);
    expect(isPrimitive("123")).toBe(true);
    expect(isPrimitive(1)).toBe(true);
    expect(isPrimitive({})).toBe(false);
    expect(isPrimitive([])).toBe(false);
    class FakeClass {}
    expect(isPrimitive(new FakeClass())).toBe(false);
});

test("asset", () => {
    expect(() => assert(false, Error)).toThrowError(Error);
    expect(() => assert(true, Error)).not.toThrowError(Error);
});

test("asSerable", () => {
    class S {
        ser() {}
        deser() {}
    }

    expect(asSerable("heihei")).toBe(null);
    const s = new S();
    expect(s).toBe(s);
    expect(asSerable(null!)).toBe(null);
    expect(asSerable(false!)).toBe(null);
});

test("DomainOption", () => {
    const option = new DomainOption(
        {
            newBufferWriter() {
                throw "";
            },
            newBufferReader() {
                throw "";
            },
        },
        RpcType.CLIENT
    );

    expect(option.capacity).toBe(50);
    expect(option.autoResize).toBe(true);
    expect(option.fixedTimeSec).toBe(0.2);
    expect(option.type).toBe(RpcType.CLIENT);
});
