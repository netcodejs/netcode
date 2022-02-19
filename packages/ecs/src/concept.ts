import { StructType } from ".";
import { struct, StructDefinition } from "./data-types";
import { World } from "./world";

const componentTypes: ComponentType[] = [];
export const COMPONENT_TYPES: ReadonlyArray<ComponentType> = componentTypes;

//#region Entity
export class Entity {
    id: number = 0;
    version: number = 0;

    toString() {
        return `Entity{id: ${this.id}, version: ${this.version}}`;
    }
}
//#endregion

//#region Component
export interface ComponentType<Def extends StructDefinition = any>
    extends StructType<Def> {
    readonly id: number;
}

export function component<Def extends StructDefinition>(
    definition: Def
): ComponentType<Def> {
    let structType = struct(definition);
    const id = componentTypes.length;
    const compType: ComponentType<Def> = {
        id,
        ...structType,
    };
    componentTypes.push(compType);
    return Object.freeze(compType);
}

//#endregion

//#region System
export interface ISystem {
    onCreate?(world: World): void;
    onDestroy?(world: World): void;
    onUpdate(world: World): void;
}
//#endregion
