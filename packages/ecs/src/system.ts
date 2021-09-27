import { World } from "./world";

export interface ISystem {
    onCreate?(world: World): void;
    onDestroy?(world: World): void;
    onUpdate(world: World): void;
}

export interface SystemConstructor {
    new (): ISystem;
}
