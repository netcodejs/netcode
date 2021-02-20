import { Entity } from "./entity";
import { Macro } from "./macro";

class EntityNotValidError extends Error {}
class EntityRepeatRegisteredError extends Error {}
class EntityGroupOutOfRangeYouCanOpenAutoResize extends Error {}
class DomainDefinition {
    private _entities: (Entity | null)[];
    private _entityVersion: number[];
    private _destroyEntityId: number[];
    private _entityIdCursor = 0;

    constructor(public capacity = 50, public autoResize = true) {
        this._entities = new Array<Entity>(capacity);
        this._entityVersion = new Array<number>(capacity);
        this._entityVersion.fill(0);
        this._destroyEntityId = new Array<number>(capacity);
    }

    reg(entity: Entity) {
        if (this.isValid(entity))
            throw new EntityRepeatRegisteredError(entity.toString());
        if (this._entityIdCursor == this.capacity && this.autoResize)
            this.resize(Math.ceil(this.capacity * 1.5));
        else
            throw new EntityGroupOutOfRangeYouCanOpenAutoResize(
                `Domain: capacity: ${this.capacity}; ` + entity.toString()
            );
        entity.id = this._getEntityId();
        entity.version = this._entityVersion[entity.id];
        this._entities[entity.id] = entity;
    }

    unreg(entity: Entity) {
        if (!this.isValid(entity))
            throw new EntityNotValidError(entity.toString());
        this._entityVersion[entity.id]++;
        this._destroyEntityId.push(entity.id);
        this._entities[entity.id] = null;
    }

    resize(newSize: number) {
        const oldSize = this.capacity;
        this._entities.length = newSize;
        this._entityVersion.length = newSize;
        this._entityVersion.fill(0, oldSize, newSize);
        this.capacity = newSize;
    }

    isValid(entity: Entity) {
        return (
            entity.id != Macro.NULL_NUM &&
            entity.version != Macro.NULL_NUM &&
            entity.version == this._entityVersion[entity.id]
        );
    }

    private _getEntityId() {
        return this._destroyEntityId.length > 0
            ? this._destroyEntityId.unshift()
            : this._entityIdCursor++;
    }
}

export const Domain = new DomainDefinition();
