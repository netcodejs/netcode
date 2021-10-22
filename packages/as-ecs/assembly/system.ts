import World from "./world";

export interface ISystem {
    onCreate(): void;
    onUpdate(world: World): void;
    onDestroy(): void;
}

export class Match {
    // @ts-ignore
    allOf<T>(): void {}
}
