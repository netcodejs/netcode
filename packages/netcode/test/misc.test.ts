import { asSerable, assert, Deferred, isPrimitive } from "../src";
import { wait } from "./util";

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

describe("Deferred", () => {
    test("basic", () => {
        const defer = new Deferred<void>();
        expect(defer.promise).toBeTruthy();
        expect(defer.value).toBeFalsy();
        expect(defer.isFulfilled()).toBe(false);
        expect(defer.isPending()).toBe(true);
        expect(defer.isResolved()).toBe(false);
        expect(defer.isRejected()).toBe(false);
    });

    test("resolved", async () => {
        let outResult = 0;
        const inResult = 1;
        const defer = new Deferred<number>();
        defer.resolve(inResult);
        expect(() => defer.resolve(inResult)).toThrow(
            "Deferred cannot be resolved twice"
        );
        outResult = await defer.promise;

        expect(outResult).toBe(inResult);
        expect(defer.value).toBe(inResult);
        expect(defer.isFulfilled()).toBe(true);
        expect(defer.isPending()).toBe(false);
        expect(defer.isResolved()).toBe(true);
        expect(defer.isRejected()).toBe(false);
    });

    test("rejected", async () => {
        const inReason = 1;
        let outReason = 0;
        const defer = new Deferred<number>();
        defer.promise.then(undefined, (r) => {
            outReason = r;
        });
        defer.reject(inReason);
        expect(() => defer.reject(inReason)).toThrow(
            "Deferred cannot be resolved twice"
        );
        await wait();

        expect(outReason).toBe(inReason);
        expect(defer.value).toBeFalsy;
        expect(defer.isFulfilled()).toBe(false);
        expect(defer.isPending()).toBe(false);
        expect(defer.isResolved()).toBe(true);
        expect(defer.isRejected()).toBe(true);
    });
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
