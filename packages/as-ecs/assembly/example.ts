// The entry file of your WebAssembly module.
import "wasi";
import { IComponentData } from "./component";
import World from "./world";
export function add(a: i32, b: i32): i32 {
    return a + b;
}

@unmanaged
export class Abc extends IComponentData {
    x: u32;
    onDispose(): usize {
        return offsetof<Abc>();
    }
}
@unmanaged
export class Cde extends IComponentData {
    c: u32;
    onDispose(): usize {
        return offsetof<Cde>();
    }
}

export function ecsTest(): u32 {
    const w = new World();
    const e = w.createEntity();
    const abc = w.addAndGetComponent<Abc>(e);
    const abc1 = w.getComponent<Abc>(e);
    assert(changetype<usize>(abc1) != changetype<usize>(abc));
    abc.x = 123;
    w.addComponent<Cde>(e);
    assert(w.hasComponent<Abc>(e));

    assert(abc.x == 123);
    assert(abc1.x != 123);

    w.setComponent(e, abc);
    const abc2 = w.getComponent<Abc>(e);
    assert(abc2.x == 123);

    w.removeComponent<Cde>(e);
    assert(!w.hasComponent<Cde>(e));
    assert(w.hasComponent<Abc>(e));

    const abc3 = w.getComponent<Abc>(e);
    assert(abc3.x == 123);

    ~abc;
    ~abc1;
    ~abc2;
    ~abc3;
    return abc3.x;
}
