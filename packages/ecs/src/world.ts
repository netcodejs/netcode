import { InstanceStructType, StructDefinition } from ".";
import { Archetype } from "./archetype";
import { Entity, ComponentType } from "./concept";
import { IMatcher } from "./query";
import { resetBit, setBit, testBit } from "./util";

export class World {
    private _archesPacked: Archetype[] = [];
    private _archesSprase: Map<number, number> = new Map();

    private _versions: number[] = [];
    private _masks: number[] = [];
    query(matcher: IMatcher): Entity[] {
        const results: Entity[] = [];
        for (let archId = 0; archId < this._archesPacked.length; archId++) {
            const arch = this._archesPacked[archId];
            if (!matcher.match(arch.mask)) continue;

            const packed = arch.set.packed;
            for (let packId = 0; packId < packed.length; packId++) {
                const entityId = packed[packId];
                results.push({
                    id: entityId,
                    version: this._versions[entityId],
                });
            }
        }

        return results;
    }

    _checkComponent(entity: Entity) {
        const version = this._masks[entity.id];
        if (version !== entity.version)
            throw new Error("Entity is outdate!" + entity);
    }

    _getArchetype(mask: number) {
        let index = this._archesSprase.get(mask) ?? -1;
        return index >= 0 && index < this._archesPacked.length
            ? this._archesPacked[index]
            : null;
    }

    _getOrCreateArchetype(mask: number) {
        let index = this._archesSprase.get(mask) ?? -1;
        if (index < 0) {
            index = this._archesPacked.length;
            this._archesPacked.push(new Archetype(mask));
            this._archesSprase.set(mask, index);
        }
        return this._archesPacked[index];
    }

    _changeArchetype(entity: Entity, oldMask: number, newMask: number) {
        const newArch = this._getOrCreateArchetype(newMask);
        const oldArch = this._getOrCreateArchetype(oldMask);

        newArch.translate(entity, oldArch);
    }

    addComponent<Type extends ComponentType>(
        entity: Entity,
        type: Type,
        ins: InstanceStructType<Type>
    ): void {
        CHECK: this._checkComponent(entity);
        const typeId = type.id;
        const has = testBit(this._masks[entity.id], typeId);
        if (has) return;
        const oldMask = this._masks[entity.id];
        const newMask = setBit(oldMask, typeId);
        this._masks[entity.id] = newMask;

        this._changeArchetype(entity, oldMask, newMask);
    }

    removeComponent(entity: Entity, type: ComponentType): void {
        CHECK: this._checkComponent(entity);
        const typeId = type.id;
        const has = testBit(this._masks[entity.id], typeId);
        if (!has) return;

        const oldMask = this._masks[entity.id];
        const newMask = resetBit(oldMask, typeId);
        this._masks[entity.id] = newMask;

        this._changeArchetype(entity, oldMask, newMask);
    }

    hasComponent(entity: Entity, type: ComponentType): boolean {
        CHECK: this._checkComponent(entity);
        return testBit(this._masks[entity.id], type.id);
    }

    isValid(entity: Entity) {
        const version = this._masks[entity.id];
        return version === entity.version;
    }
}
