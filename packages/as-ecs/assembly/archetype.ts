import { Chunk } from "./chunk";
import { ComponentType } from "./component";
import { Entity, EntityId } from "./entity";
import { fastRemove, SparseSet } from "./utility";
import { EntityMask } from "./world";

@final
export class Archetype {
    mask: EntityMask;
    size: usize;
    chunks: Chunk[];

    entityIds: SparseSet<EntityId> = new SparseSet();

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
        const uniqueId = this.entityIds.getIndex(entity.id);
        assert(uniqueId > -1);
        const chunkIdx = uniqueId / this.elementLengthPerChunk;
        const idxInChunk = uniqueId % this.elementLengthPerChunk;
        return this.chunks[chunkIdx].getDataViewPtr(
            idxInChunk,
            this.familyId2offsetMap.get(componentType.id)
        );
    }

    addEntity(e: Entity): usize {
        const uniqueId = this.entityIds.length;
        assert(uniqueId > -1);
        this.entityIds.add(e.id);
        const chunkIdx = uniqueId / this.elementLengthPerChunk;
        const idxInChunk = uniqueId % this.elementLengthPerChunk;
        if (chunkIdx >= this.chunks.length) {
            this.chunks.push(new Chunk(this.size, this.elementLengthPerChunk));
        }
        const chunk = this.chunks[chunkIdx];
        assert(chunk != null);
        return chunk.getBasePtr(idxInChunk);
    }

    removeEntity(e: Entity): void {
        const uniqueId = this.entityIds.getIndex(e.id);
        assert(uniqueId > -1);
        const replaceUniqueId = this.entityIds.remove(e.id);

        const chunkIdx = uniqueId / this.elementLengthPerChunk;
        const idxInChunk = uniqueId % this.elementLengthPerChunk;
        const ptrInchunk = this.chunks[chunkIdx].getBasePtr(idxInChunk);
        if (replaceUniqueId > -1) {
            const replaceChunkIdx =
                replaceUniqueId / this.elementLengthPerChunk;
            const replaceIdxInChunk =
                replaceUniqueId % this.elementLengthPerChunk;
            const replacePtrInChunk =
                this.chunks[replaceChunkIdx].getBasePtr(replaceIdxInChunk);

            memory.copy(ptrInchunk, replacePtrInChunk, this.size);
            memory.fill(replacePtrInChunk, 0, this.size);
        } else {
            memory.fill(ptrInchunk, 0, this.size);
        }
    }

    transferAndRemoveEntity(
        dst: Archetype,
        dstBasePtr: usize,
        e: Entity
    ): void {
        const uniqueId = this.entityIds.getIndex(e.id);
        assert(uniqueId > -1);
        const replaceUniqueId = this.entityIds.remove(e.id);

        const chunkIdx = uniqueId / this.elementLengthPerChunk;
        const idxInChunk = uniqueId % this.elementLengthPerChunk;
        const ptrInchunk = this.chunks[chunkIdx].getBasePtr(idxInChunk);

        const dstTypeMap = dst.familyId2offsetMap;
        const srcTypeMap = this.familyId2offsetMap;
        for (let i = 0, len = dst.componentTypes.length; i < len; i++) {
            const type = dst.componentTypes[i];
            const typeId = type.id;
            if (!srcTypeMap.has(typeId)) continue;

            const dstOffset = dstTypeMap.get(typeId);
            const srcOffset = srcTypeMap.get(typeId);
            memory.copy(
                dstBasePtr + dstOffset,
                ptrInchunk + srcOffset,
                type.size
            );
        }

        if (replaceUniqueId > -1) {
            const replaceChunkIdx =
                replaceUniqueId / this.elementLengthPerChunk;
            const replaceIdxInChunk =
                replaceUniqueId % this.elementLengthPerChunk;
            const replacePtrInChunk =
                this.chunks[replaceChunkIdx].getBasePtr(replaceIdxInChunk);

            memory.copy(ptrInchunk, replacePtrInChunk, this.size);
            memory.fill(replacePtrInChunk, 0, this.size);
        } else {
            memory.fill(ptrInchunk, 0, this.size);
        }
    }
}
