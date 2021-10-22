// The entry file of your WebAssembly module.
import "wasi";
import { IComponentData, release } from "./component";
import { Tuple2 } from "./tuple";
import World from "./world";
export function add(a: i32, b: i32): i32 {
    return a + b;
}

@unmanaged
export class Abc extends IComponentData {
    x: u32;
    onDispose(): void {
        console.log("OnDispose: Abc");
    }
}
@unmanaged
export class Cde extends IComponentData {
    c: u32;
    onDispose(): void {
        console.log("OnDispose: Cde");
    }
}

export function ecsTest(): u32 {
    const w = new World();
    const e = w.createEntity();
    const abc = w.addGetComponent<Abc>(e);
    const abc1 = w.getComponent<Abc>(e);
    assert(changetype<usize>(abc1) != changetype<usize>(abc));
    abc.x = 123;

    const cde1 = new Cde();
    cde1.c = 222;
    w.addComponentData<Cde>(e, cde1, true);

    const cde2 = w.getComponent<Cde>(e);
    assert(cde2.c == 222);

    assert(w.hasComponent<Abc>(e));

    assert(abc.x == 123);
    assert(abc1.x != 123);

    w.setComponent(e, abc);
    w.forEach2<Abc, Cde>((e, abc, cde) => {
        console.log(`${abc.x}, ${cde.c}`);
        assert(abc.x == 123);
        assert(cde.c === 222);
    });
    const abc2 = w.getComponent<Abc>(e);
    assert(abc2.x == 123);
    w.forEach1<Abc>((e, c1) => {
        assert(c1.x == 123);
    });

    w.removeComponent<Cde>(e);
    assert(!w.hasComponent<Cde>(e));
    assert(w.hasComponent<Abc>(e));

    const abc3 = w.getComponent<Abc>(e);
    assert(abc3.x == 123);

    release(abc);
    release(abc1);
    release(abc2);
    release(abc3);
    return abc3.x;
}
