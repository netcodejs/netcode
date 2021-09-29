import { Type, World, Matcher, ComponentType, ISystem } from "../src";

const Vector = World.define({
    x: Type.i16, // 2
    y: Type.i16, // 2
    z: Type.i16, // 2
});
type Vector = ComponentType<typeof Vector>;

const NumArr = World.define({
    val: [Type.i16, 2],
});
type NumArr = ComponentType<typeof NumArr>;

const Transform = World.define({
    pos: Vector, // 4
    angles: [Type.i16, 10], // 2 * 10
    pots: [Vector, 10], // 4 * 10
});
type Transform = InstanceType<typeof Transform>;

const Speed = World.define({
    value: Type.i8,
});
type Speed = ComponentType<typeof Speed>;

test("first", () => {
    expect(Vector.byteLength).toBe(6);
    expect(Transform.byteLength).toBe(6 + 2 * 10 + 6 * 10);
});

test("component", () => {
    const w = new World();
    const arch = w.createArchetype(Transform);
    const e = w.createEntityByArchetype(arch);
    const [trs, trsId] = w.getComponent(e, Transform);
    trs.pos.x[trsId] = 123;
    trs.pos.z[trsId] = 124;
    expect(trs.pos.x[trsId]).toBe(123);
    expect(trs.pos.y[trsId]).toBe(0);
    expect(trs.pos.z[trsId]).toBe(124);

    trs.angles[0][trsId] = 123;
    expect(trs.angles[0][trsId]).toBe(123);
    expect(trs.angles[3][trsId]).toBe(0);

    const pot = trs.pots[0];
    pot.x[trsId] = 111;
    pot.y[trsId] = 112;

    expect(pot.x[trsId]).toBe(111);
    expect(pot.y[trsId]).toBe(112);
    expect(pot.z[trsId]).toBe(0);

    expect(trs.pots[0].x[trsId]).toBe(111);
    expect(trs.pots[0].y[trsId]).toBe(112);
    expect(trs.pots[0].z[trsId]).toBe(0);

    trs.pots[0].x[trsId] = 123;
    expect(trs.pots[1].x[trsId]).toBe(0);
    expect(trs.pots[1].y[trsId]).toBe(0);
    expect(trs.pots[1].z[trsId]).toBe(0);
});

class MovableSystem implements ISystem {
    matcher = Matcher.allOf(Transform, Speed);
    onUpdate(world: World): void {
        const queries = world.query(this.matcher);
        for (const [entities, [trs, speed]] of queries) {
            for (let id = 0; id < entities.length; id++) {
                const p = trs.pos;
                p.x[id] += speed.value[id];
            }
        }
    }
}

test("system", () => {
    const w = new World();
    const arch = w.createArchetype(Transform);
    const arch1 = w.createArchetype(Transform, Speed);
    const e = w.createEntityByArchetype(arch);
    const e1 = w.createEntityByArchetype(arch1);
    w.addSystem(new MovableSystem()).finishAddSystem();
    {
        const [trs1, id] = w.getComponent(e1, Transform);
        const [speed1] = w.getComponent(e1, Speed);

        expect(trs1.pos.x[id]).toBe(0);
        expect(trs1.pos.y[id]).toBe(0);
        speed1.value[id] = 1;
    }

    {
        w.update();
        const [trs1, id] = w.getComponent(e1, Transform);
        expect(trs1.pos.x[id]).toBe(1);
    }

    {
        w.update();
        const [trs1, id] = w.getComponent(e1, Transform);
        expect(trs1.pos.x[id]).toBe(2);
    }
});

test("addComp", () => {
    const w = new World();
    const e = w.createEntity();
    const [trs1, id1] = w.addComponent(e, Transform);
    trs1.pos.x[id1] = 13;
    w.addComponent(e, Speed);

    const [trs2, id2] = w.getComponent(e, Transform);
    expect(trs2.pos.x[id2]).toBe(13);
    expect(w.hasComponent(e, Speed)).toBeTruthy();

    expect(trs1 === trs2).toBeFalsy();
});
