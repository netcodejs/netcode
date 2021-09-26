import {
    Type,
    World,
    System,
    Matcher,
    Component,
    ComponentConstructor,
    Entity,
    ComponentType,
} from "../src";

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
    const trs = w.getComponent(e, Transform);
    trs.pos().x(123);
    trs.pos().z(124);
    expect(trs.pos().x()).toBe(123);
    expect(trs.pos().y()).toBe(0);
    expect(trs.pos().z()).toBe(124);

    trs.angles(0, 123);
    expect(trs.angles(0)).toBe(123);
    expect(trs.angles(3)).toBe(0);

    const pot = trs.pots(0);
    pot.x(111);
    pot.y(112);

    expect(pot.x()).toBe(111);
    expect(pot.y()).toBe(112);
    expect(pot.z()).toBe(0);

    expect(trs.potsLength).toBe(10);

    expect(trs.pots(0).x()).toBe(111);
    expect(trs.pots(0).y()).toBe(112);
    expect(trs.pots(0).z()).toBe(0);

    trs.pots(0).x(123);
    expect(trs.pots(1).x()).toBe(0);
    expect(trs.pots(1).y()).toBe(0);
    expect(trs.pots(1).z()).toBe(0);

    expect(trs.pots(0) !== trs.pots(1)).toBe(true);
    expect(trs.pots(0) !== trs.pos()).toBe(true);
});

test("system", () => {
    const w = new World();
    const arch = w.createArchetype(Transform);
    const arch1 = w.createArchetype(Transform, Speed);
    const e = w.createEntityByArchetype(arch);
    const e1 = w.createEntityByArchetype(arch1);
    class MovableSystem extends System(Matcher.allOf(Transform, Speed)) {
        onUpdate(
            world: World,
            entity: Entity,
            trs: Transform,
            speed: Speed
        ): void {
            const p = trs.pos();
            p.x(p.x() + speed.value());
        }
    }
    w.addSystem(new MovableSystem());
    {
        const trs1 = w.getComponent(e1, Transform);
        const speed1 = w.getComponent(e1, Speed);

        expect(trs1.pos().x()).toBe(0);
        expect(trs1.pos().y()).toBe(0);
        speed1.value(1);
    }

    {
        w.update();
        const trs1 = w.getComponent(e1, Transform);
        expect(trs1.pos().x()).toBe(1);
    }

    {
        w.update();
        const trs1 = w.getComponent(e1, Transform);
        expect(trs1.pos().x()).toBe(2);
    }
});
