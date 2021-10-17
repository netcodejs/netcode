import { Archetype } from "./archetype";
import { familyof } from "./builtins";
import { ComponentType, IComponentData } from "./component";
import { Entity, EntityId } from "./entity";
import { StructUtil } from "./utility";

export type EntityMask = u32;
@final
export default class World {
    destroyEntityIdStack: Array<EntityId> = new Array<EntityId>();
    entityCount: i32 = 0;
    entityVersions: u32[] = new Array<u32>(100);
    entityMasks: Array<EntityMask> = new Array(100);
    archetypeMasks: EntityMask[] = [];
    mask2archetypeMap: Map<EntityMask, Archetype> = new Map();

    createEntity(): Entity {
        const e = new Entity();
        const stack = this.destroyEntityIdStack;
        e.id = stack.length > 0 ? stack.pop() : this.entityCount++;
        if (e.id >= this.entityVersions.length) {
            this._resizeEntityVersionArray();
        }
        e.version = this.entityVersions[e.id];
        return e;
    }

    destroyEntity(e: Entity): void {
        const mask = this.entityMasks[e.id];
        if (this.mask2archetypeMap.has(mask)) {
            const archetype = this.mask2archetypeMap.get(mask);
            archetype.removeEntity(e);
        }
        this.entityVersions[e.id]++;
    }

    @inline
    valiate(entity: Entity): bool {
        return (
            entity != null &&
            entity.id >= 0 &&
            entity.id < this.entityCount &&
            entity.version == this.entityVersions[entity.id]
        );
    }

    @inline
    valiateOrThrow(entity: Entity): void {
        assert(this.valiate(entity), "Entity is not valid!");
    }

    private _resizeEntityVersionArray(): void {
        const newLen = <i32>Math.floor(this.entityVersions.length * 1.5);
        this.entityVersions.length = newLen;
        this.entityMasks.length = newLen;
    }

    private _addComponent(entity: Entity, componentType: ComponentType): usize {
        const fid = componentType.id;
        const oldMask = this.entityMasks[entity.id];
        const newMask = (this.entityMasks[entity.id] = oldMask | (1 << fid));

        let oldArche: Archetype | null = null;
        if (this.mask2archetypeMap.has(oldMask)) {
            oldArche = this.mask2archetypeMap.get(oldMask);
        }

        let newArche: Archetype | null;
        if (this.mask2archetypeMap.has(newMask)) {
            newArche = this.mask2archetypeMap.get(newMask);
        } else {
            let carr: StaticArray<ComponentType>;
            if (oldArche) {
                carr = new StaticArray<ComponentType>(
                    oldArche.componentTypes.length + 1
                );
                for (let i = 0; i < oldArche.componentTypes.length; i++) {
                    carr[i] = oldArche.componentTypes[i];
                }
            } else {
                carr = new StaticArray<ComponentType>(1);
            }
            carr[carr.length - 1] = componentType;
            newArche = new Archetype(carr);
            this.mask2archetypeMap.set(newMask, newArche);
        }

        const ptr = newArche.addEntity(entity);
        if (oldArche != null) {
            oldArche.transferAndRemoveEntity(newArche, ptr, entity);
        }

        return ptr + newArche.familyId2offsetMap.get(componentType.id);
    }

    addComponent<T extends IComponentData>(entity: Entity): void {
        this.valiateOrThrow(entity);
        const componentType = ComponentType.Get<T>();
        this._addComponent(entity, componentType);
    }

    addAndGetComponent<T extends IComponentData>(entity: Entity): T {
        this.valiateOrThrow(entity);
        const componentType = ComponentType.Get<T>();
        const ptr = this._addComponent(entity, componentType);
        const clonedPtr = heap.alloc(componentType.size);
        memory.copy(clonedPtr, ptr, componentType.size);
        return changetype<T>(clonedPtr);
    }

    @inline
    hasComponent<T extends IComponentData>(entity: Entity): bool {
        this.valiateOrThrow(entity);
        const fid = familyof<T>();
        const mask = this.entityMasks[entity.id];
        return (mask & (1 << fid)) > 0;
    }

    @inline
    hasComponentOrThrow<T extends IComponentData>(entity: Entity): void {
        assert(
            this.hasComponent<T>(entity),
            "Entity doesn't has component: " + nameof<T>()
        );
    }

    removeComponent<T extends IComponentData>(entity: Entity): void {
        this.hasComponentOrThrow<T>(entity);
        const oldMask = this.entityMasks[entity.id];
        const type = ComponentType.Get<T>();
        const newMask = (this.entityMasks[entity.id] =
            oldMask & ~(1 << type.id));
        if (type.isFlag) return;
        const oldArche = this.mask2archetypeMap.get(oldMask);

        let newArche: Archetype | null;
        if (this.mask2archetypeMap.has(newMask)) {
            newArche = this.mask2archetypeMap.get(newMask);
        } else {
            const carr = new StaticArray<ComponentType>(
                oldArche.componentTypes.length - 1
            );
            for (
                let i = 0, carrIdx = 0;
                i < oldArche.componentTypes.length;
                i++
            ) {
                const oType = oldArche.componentTypes[i];
                if (oType !== type) {
                    carr[carrIdx++] = oType;
                }
            }
            newArche = new Archetype(carr);
            this.mask2archetypeMap.set(newMask, newArche);
        }

        const ptr = newArche.addEntity(entity);
        oldArche.transferAndRemoveEntity(newArche, ptr, entity);
    }

    getComponent<T extends IComponentData>(entity: Entity): T {
        this.hasComponentOrThrow<T>(entity);
        const mask = this.entityMasks[entity.id];
        const arche = this.mask2archetypeMap.get(mask);
        const componentType = ComponentType.Get<T>();
        const ptr = arche.getDataViewPtr(entity, componentType);
        const clonedPtr = heap.alloc(componentType.size);
        memory.copy(clonedPtr, ptr, componentType.size);
        return changetype<T>(clonedPtr);
    }

    setComponent<T extends IComponentData>(entity: Entity, data: T): void {
        this.hasComponentOrThrow<T>(entity);
        const mask = this.entityMasks[entity.id];
        const arche = this.mask2archetypeMap.get(mask);
        const componentType = ComponentType.Get<T>();
        const offset = arche.familyId2offsetMap.get(familyof<T>());
        const ptr = arche.getDataViewPtr(entity, componentType);

        const srcPtr = changetype<usize>(data);
        memory.copy(ptr + offset, srcPtr + offset, componentType.size);
    }
}
