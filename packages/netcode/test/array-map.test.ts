import { ArrayMap } from "../src";

test("basic", () => {
    const map = new ArrayMap<number, string>([
        [0, "0"],
        [1, "1"],
        [2, "2"],
    ]);

    expect(map.values).toStrictEqual(map.readonlyValues);
    expect(map.readonlyValues).toStrictEqual(["0", "1", "2"]);

    expect(map.get(0)).toBe("0");
    expect(map.get(1)).toBe("1");
    expect(map.get(2)).toBe("2");

    expect(map.delete(2)).toStrictEqual(["2", 2]);
    expect(map.delete(2)).toStrictEqual([null, -1]);
    expect(map.get(2)).toBeNull();
    expect(map.getByIndex(1)).toBe("1");

    map.set(1, "11");
    expect(map.get(1)).toBe("11");

    map.set(3, "3");
    expect(map.get(3)).toBe("3");
});
