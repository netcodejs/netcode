export type EntityId = i32;
export type EntityVersion = i32;

@final
export class Entity {
    id: EntityId;
    version: EntityVersion;
}
