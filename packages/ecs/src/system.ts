import { Component, ComponentConstructor } from "./component";
import { Entity } from "./entity";
import {
    IAllOfMatcher,
    IAnyOfMatcher,
    INoneOfMatcher,
    IMatcher,
} from "./query";
import { World } from "./world";

export interface ISystem {
    matcher: IMatcher;
    onCreate?(world: World): void;
    onDestroy?(world: World): void;
    onUpdate(world: World, entity: Entity, ...args: Component[]): void;
}

export interface SystemConstructor {
    new (): ISystem;
}

export abstract class ASystem1<T extends Component> {
    matcher!: IMatcher;
    onCreate?(world: World): void;
    onDestroy?(world: World): void;
    abstract onUpdate(world: World, entity: Entity, comp1: T): void;
}

export abstract class ASystem2<T1 extends Component, T2 extends Component> {
    matcher!: IMatcher;
    onCreate?(world: World): void;
    onDestroy?(world: World): void;
    abstract onUpdate(world: World, entity: Entity, comp1: T1, comp2: T2): void;
}

export abstract class ASystem3<
    T extends Component,
    T2 extends Component,
    T3 extends Component
> {
    matcher!: IMatcher;
    onCreate?(world: World): void;
    onDestroy?(world: World): void;
    abstract onUpdate(
        world: World,
        entity: Entity,
        omp1: T,
        comp2: T2,
        comp3: T3
    ): void;
}

export function System<T extends ComponentConstructor[]>(
    matcher: IAllOfMatcher<T> | IAnyOfMatcher<T> | INoneOfMatcher<T>
): abstract new () => T extends { length: 1 }
    ? ASystem1<InstanceType<T[0]>>
    : T extends { length: 2 }
    ? ASystem2<InstanceType<T[0]>, InstanceType<T[1]>>
    : T extends { length: 3 }
    ? ASystem3<InstanceType<T[0]>, InstanceType<T[1]>, InstanceType<T[2]>>
    : unknown {
    const newClass = class {} as any;
    newClass.prototype.matcher = matcher;
    return newClass;
}
