import { Chunk } from "./chunk";
import { ComponentType } from "./component";
import { Entity, EntityId } from "./entity";
import { fastRemove } from "./utility";
import { EntityMask } from "./world";

@final
export class Archetype {
    mask: EntityMask;
    size: usize;
    chunks: Chunk[];

    entityIds: EntityId[] = [];
    entityId2UniqueIdInChunkMap: Map<EntityId, i32> = new Map();

    familyId2offsetMap: Map<u32, usize> = new Map();
    constructor(
        readonly componentTypes: StaticArray<ComponentType>,
        readonly elementLengthPerChunk: i32 = 128
    ) {
        let mask: EntityMask = 0;
        let size: u32 = 0;
        for (let i = 0, len = componentTypes.length; i < len; i++) {
            const type = componentTypes[i];
            mask |= 1 << type.id;
            this.familyId2offsetMap.set(type.id, size);
            size += type.size;
        }
        this.mask = mask;
        this.size = size;
        this.chunks = [new Chunk(size, elementLengthPerChunk)];
    }

    getDataViewPtr(entity: Entity, componentType: ComponentType): usize {
        const uniqueId = this.entityId2UniqueIdInChunkMap.get(entity.id);
        const chunkIdx = uniqueId / this.elementLengthPerChunk;
        const idxInChunk = uniqueId % this.elementLengthPerChunk;
        return this.chunks[chunkIdx].getDataViewPtr(
            idxInChunk,
            componentType.size
        );
    }

    addEntity(e: Entity): void {
        const uniqueId = this.entityIds.length - 1;
        this.entityIds.push(e.id);
        this.entityId2UniqueIdInChunkMap.set(e.id, uniqueId);

        const chunkIdx = uniqueId / this.elementLengthPerChunk;

        if (chunkIdx >= this.chunks.length) {
            this.chunks.push(new Chunk(this.size, this.elementLengthPerChunk));
        }
    }

    removeEntity(e: Entity): void {
        assert(this.entityId2UniqueIdInChunkMap.has(e.id));
        const uniqueId = this.entityId2UniqueIdInChunkMap.get(e.id);
        const chunkIdx = uniqueId / this.elementLengthPerChunk;
        const idxInChunk = uniqueId % this.elementLengthPerChunk;

        const replaceIndexInChunk = fastRemove(this.entityIds, idxInChunk);
        assert(replaceIndexInChunk > -1);

        this.entityId2UniqueIdInChunkMap.delete(e.id);

        const chunk = this.chunks[chunkIdx];
        const ptrInChunk = chunk.getPtr(idxInChunk);
        const replacePtrInChunk = chunk.getPtr(replaceIndexInChunk);
        if (replaceIndexInChunk != idxInChunk) {
            this.entityId2UniqueIdInChunkMap.set(
                this.entityIds[replaceIndexInChunk],
                replaceIndexInChunk
            );
            memory.copy(ptrInChunk, replacePtrInChunk, chunk.elementSize);
        }
        memory.fill(replacePtrInChunk, 0, chunk.elementLength);
    }

    transferAndRemoveEntity(dst: Archetype, e: Entity): void {
        assert(this.entityId2UniqueIdInChunkMap.has(e.id));
        const uniqueId = this.entityId2UniqueIdInChunkMap.get(e.id);
        const chunkIdx = uniqueId / this.elementLengthPerChunk;
        const idxInChunk = uniqueId % this.elementLengthPerChunk;

        const replaceIndexInChunk = fastRemove(this.entityIds, idxInChunk);
        assert(replaceIndexInChunk > -1);

        this.entityId2UniqueIdInChunkMap.delete(e.id);

        const chunk = this.chunks[chunkIdx];
        const ptrInChunk = chunk.getPtr(idxInChunk);
        const replacePtrInChunk = chunk.getPtr(replaceIndexInChunk);
        if (replaceIndexInChunk != idxInChunk) {
            this.entityId2UniqueIdInChunkMap.set(
                this.entityIds[replaceIndexInChunk],
                replaceIndexInChunk
            );
            memory.copy(ptrInChunk, replacePtrInChunk, chunk.elementSize);
        }
        memory.fill(replacePtrInChunk, 0, chunk.elementLength);

        const srcMap = this.familyId2offsetMap;
        const dstMap = dst.familyId2offsetMap;
        for (let i = 0; i < this.componentTypes.length; i++) {
            const componentType = this.componentTypes[i];
            if (!dstMap.has(componentType.id)) continue;
            const dstOffset = dstMap.get(componentType.id);
            const srcOffset = srcMap.get(componentType.id);
        }
    }
}
