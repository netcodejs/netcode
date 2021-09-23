import { Type, World } from "../src";

export const Vector = World.define({
    x: Type.i16, // 2
    y: Type.i16, // 2
    z: Type.i16, // 2
});
export type Vector = InstanceType<typeof Vector>;

export const Transform = World.define({
    pos: Vector, // 4
    angles: [Type.i16, 10], // 2 * 10
    pots: [Vector, 10], // 4 * 10
});
export type Transform = InstanceType<typeof Transform>;

test("first", () => {
    expect(Vector.byteLength).toBe(6);
    expect(Transform.byteLength).toBe(6 + 2 * 10 + 6 * 10);
});

test("component", () => {
    const w = new World();
    const arch = w.createArchetype(Transform);
    const e = w.createEntityByArchetype(arch);
    const trs = w.getComponent(e, Transform);
    trs.pos.x(123);
    trs.pos.z(124);
    expect(trs.pos.x()).toBe(123);
    expect(trs.pos.y()).toBe(0);
    expect(trs.pos.z()).toBe(124);

    trs.angles(0, 123);
    expect(trs.angles(0)).toBe(123);
    expect(trs.angles(3)).toBe(0);

    const pot = trs.pots[0];
    pot.x(111);
    pot.y(112);

    expect(pot.x()).toBe(111);
    expect(pot.y()).toBe(112);
    expect(pot.z()).toBe(0);
    expect(trs.pots[0].x()).toBe(111);
    expect(trs.pots[0].y()).toBe(112);
    expect(trs.pots[0].z()).toBe(0);

    expect(trs.pots[1].x()).toBe(0);
    expect(trs.pots[1].y()).toBe(0);
    expect(trs.pots[1].z()).toBe(0);

    expect(Array.isArray(trs.pots)).toBe(true);
    expect(ArrayBuffer.isView(trs.angles)).toBe(true);
});
