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
    const e = w.createArchetypeEntity(arch);
    const trs = w.getComponent(e, Transform);
    trs.pos().x(123);
    trs.pos().z(124);
    expect(trs.pos().x()).toBe(123);
    expect(trs.pos().y()).toBe(0);
    expect(trs.pos().z()).toBe(124);
});
