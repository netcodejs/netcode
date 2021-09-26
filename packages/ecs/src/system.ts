import { Archetype } from "./archetype";
import { Chunk, ChunkConstructor } from "./chunk";
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
    onUpdate(world: World, arch: Archetype): void;
}

export interface SystemConstructor {
    new (): ISystem;
}

export abstract class ASystem1<T extends Chunk> {
    matcher!: IMatcher;
    onCreate?(world: World): void;
    onDestroy?(world: World): void;
    abstract onUpdate(
        world: World,
        entity: Entity,
        chunkId: number,
        chunk: [T]
    ): void;
}

export abstract class ASystem2<T1 extends Chunk, T2 extends Chunk> {
    matcher!: IMatcher;
    onCreate?(world: World): void;
    onDestroy?(world: World): void;
    abstract onUpdate(
        world: World,
        entity: Entity,
        chunkId: number,
        chunk: [T1, T2]
    ): void;
}

export abstract class ASystem3<
    T1 extends Chunk,
    T2 extends Chunk,
    T3 extends Chunk
> {
    matcher!: IMatcher;
    onCreate?(world: World): void;
    onDestroy?(world: World): void;
    abstract onUpdate(
        world: World,
        entity: Entity,
        chunkId: number,
        chunk: [T1, T2, T3]
    ): void;
}

export function System<T extends ChunkConstructor[]>(
    matcher: IAllOfMatcher<T> | IAnyOfMatcher<T> | INoneOfMatcher<T>
): abstract new () => /* T extends { length: 1 }
    ? ASystem1<InstanceType<T[0]>>
    : T extends { length: 2 }
    ? ASystem2<InstanceType<T[0]>, InstanceType<T[1]>>
    : T extends { length: 3 }
    ? ASystem3<InstanceType<T[0]>, InstanceType<T[1]>, InstanceType<T[2]>>
    : unknown */ ISystem {
    const newClass = class {} as any;
    newClass.prototype.matcher = matcher;
    return newClass;
}
