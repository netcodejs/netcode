import {
    ComponentTuple,
    ComponentType,
    ISystem,
    MatchTyple as IMatchUnion,
} from ".";
import { Archetype } from "./archetype";
import {
    ChunkConstructor,
    ChunkSchema,
    SortedChunkSchema,
    Type2TypedArray,
} from "./chunk";
import { Entity } from "./entity";
import {
    InstanceTypeTuple,
    resetBit,
    setBit,
    sortDefine,
    testBit,
} from "./util";

const MAX_ENTITY = (1 << 16) - 1;
export class World {
    private static _compCtrs: ChunkConstructor[] = [];
    private _syss: ISystem[] = [];

    static define<T extends ChunkSchema = undefined>(
        define?: T
    ): T extends undefined ? ChunkConstructor<T, true> : ChunkConstructor<T> {
        const [sorted, byteLength] = sortDefine(define);
        const ctr = class {
            static typeId: number;
            static definition: ChunkSchema;
            static sortedDefinition: SortedChunkSchema;
            static isFlag: boolean;
            static byteLength: number;
            static TEMP: any;

            constructor(insLen: number) {
                if (ctr.isFlag) return;
                for (let i = 0, j = sorted.plains.length; i < j; i++) {
                    const sign = sorted.plains[i];
                    // @ts-ignore
                    this[sign.name] = new Type2TypedArray[sign.type](insLen);
                }
                for (let i = 0, j = sorted.plainArrays.length; i < j; i++) {
                    const sign = sorted.plainArrays[i];
                    const arr = (this[sign.name] = new Array(sign.length));
                    for (let k = 0; k < sign.length; k++) {
                        // @ts-ignore
                        arr[k] = new Type2TypedArray[sign.type](insLen);
                    }
                }
                for (let i = 0, j = sorted.complexs.length; i < j; i++) {
                    const sign = sorted.complexs[i];
                    this[sign.name] = new sign.type(insLen);
                }
                for (let i = 0, j = sorted.complexArrays.length; i < j; i++) {
                    const sign = sorted.complexArrays[i];
                    const arr = (this[sign.name] = new Array(sign.length));
                    for (let k = 0; k < sign.length; k++) {
                        arr[k] = new sign.type(insLen);
                    }
                }
            }

            copyTo(other: this, srcIdx: number, dstIdx: number) {
                if (ctr.isFlag) return;
                for (let i = 0, j = sorted.plains.length; i < j; i++) {
                    const sign = sorted.plains[i];
                    const src = this[sign.name] as any;
                    const dst = other[sign.name] as any;
                    dst[dstIdx] = src[srcIdx];
                }
                for (let i = 0, j = sorted.plainArrays.length; i < j; i++) {
                    const sign = sorted.plainArrays[i];
                    const srcArr = this[sign.name];
                    const dstArr = other[sign.name];
                    for (let k = 0; k < sign.length; k++) {
                        const src = srcArr[k];
                        const dst = dstArr[k];
                        dst[dstIdx] = src[srcIdx];
                    }
                }
                for (let i = 0, j = sorted.complexs.length; i < j; i++) {
                    const sign = sorted.complexs[i];
                    this[sign.name].copyTo(other[sign.name], srcIdx, dstIdx);
                }
                for (let i = 0, j = sorted.complexArrays.length; i < j; i++) {
                    const sign = sorted.complexArrays[i];
                    const srcArr = this[sign.name];
                    const dstArr = other[sign.name];
                    for (let k = 0; k < sign.length; k++) {
                        srcArr[k].copyTo(dstArr[k], srcIdx, dstIdx);
                    }
                }
            }
        };

        ctr.typeId = this._compCtrs.length;
        ctr.definition = define;
        ctr.sortedDefinition = sorted;
        ctr.isFlag = !define || Object.keys(define).length === 0;
        ctr.byteLength = byteLength;

        this._compCtrs.push(ctr as any);
        return ctr as any;
    }

    private _entityComps = new Uint32Array(MAX_ENTITY);
    private _entityIdxEnd = 0;
    private _entityVersions = new Uint8Array(MAX_ENTITY);
    private _removalEntityIdx: number[] = [];
    private _archetypeMap = new Map<number, Archetype>();
    private _archetypes: Archetype[] = undefined;

    constructor(readonly archetypeOpacity: number = 100) {
        this._entityVersions.fill(0);
    }

    validate(entity: Entity) {
        if (entity.index < 0 || entity.index >= MAX_ENTITY) return false;
        const currentVersion = this._entityVersions[entity.index];
        return entity.version === currentVersion;
    }

    //#region entity
    createEntity(index?: number): Entity {
        if (index == null) {
            index =
                this._removalEntityIdx.length > 0
                    ? this._removalEntityIdx.pop()
                    : this._entityIdxEnd++;
        }
        return {
            index,
            version: this._entityVersions[index],
        };
    }

    destroyEntity(entity: Entity) {
        if (!this.validate(entity)) return false;
        const index = entity.index;
        this._entityComps[index] = 0;
        this._entityVersions[index]++;
        this._removalEntityIdx.push(index);
        return true;
    }
    //#endregion

    //#region component
    addComponent<T extends ChunkConstructor<ChunkSchema, any>>(
        entity: Entity,
        ctr: T
    ): [chunk: InstanceType<T>, chunkId: number] {
        if (!this.validate(entity)) return null;
        const compId = ctr.typeId;
        const oldMask = this._entityComps[entity.index];
        if (testBit(oldMask, compId)) return this.getComponent(entity, ctr);
        const newMask = setBit(oldMask, compId);
        this._entityComps[entity.index] = newMask;
        if (ctr.isFlag) {
            return null;
        }

        let newArchetype = this._archetypeMap.get(newMask);
        const oldArchetype = this._archetypeMap.get(oldMask);
        if (!newArchetype) {
            newArchetype = new Archetype(
                oldArchetype ? [ctr, ...oldArchetype.ctrs] : [ctr],
                this.archetypeOpacity
            );
            this._archetypeMap.set(newArchetype.mask, newArchetype);
            this._archetypes = undefined;
        }
        const newChunkId = newArchetype.addEntity(entity.index);

        if (oldArchetype != null) {
            const oldChunkId = oldArchetype.getChunkId(entity.index);

            for (let oldCtr of oldArchetype.ctrs) {
                const oldChunk = oldArchetype.getChunk(oldCtr);
                const newChunk = newArchetype.getChunk(oldCtr);
                oldChunk.copyTo(newChunk, oldChunkId, newChunkId);
                oldArchetype.removeEntity(entity.index);
            }
        }

        return [
            newArchetype.chunks[
                newArchetype.chunkTypeIdSet.sparse[ctr.typeId]
            ] as InstanceType<T>,
            newChunkId,
        ];
    }

    getComponent<T extends ChunkConstructor>(
        entity: Entity,
        ctr: T
    ): [chunk: InstanceType<T>, chunkId: number] {
        if (!this.validate(entity)) return null;
        const compId = ctr.typeId;
        const comps = this._entityComps[entity.index];
        if (!testBit(comps, compId)) return null;

        const mask = this._entityComps[entity.index];
        const arch = this._archetypeMap.get(mask);
        const chunkId = arch.getChunkId(entity.index);

        return [
            arch.chunks[arch.chunkTypeIdSet.sparse[compId]] as InstanceType<T>,
            chunkId,
        ];
    }

    removeComponent<T extends ChunkConstructor<ChunkSchema, any>>(
        entity: Entity,
        ctr: T
    ): boolean {
        if (!this.validate(entity)) return false;
        const compId = ctr.typeId;
        const comps = this._entityComps[entity.index];
        if (!testBit(comps, compId)) return false;
        this._entityComps[entity.index] = resetBit(comps, compId);
        if (ctr.isFlag) {
            return true;
        }
        return true;
    }

    hasComponent<T extends ChunkConstructor<ChunkSchema, any>>(
        entity: Entity,
        ctr: T
    ) {
        if (!this.validate(entity)) return false;
        const compId = ctr.typeId;
        const comps = this._entityComps[entity.index];
        return testBit(comps, compId);
    }
    //#endregion

    //#region archetype
    createArchetype(...ctrs: ChunkConstructor[]): Archetype {
        const arch = new Archetype(ctrs, this.archetypeOpacity);
        this._archetypeMap.set(arch.mask, arch);
        this._archetypes = undefined;
        return arch;
    }

    createEntityByArchetype(archetype: Archetype) {
        const entity = this.createEntity();
        this._entityComps[entity.index] = archetype.mask;
        archetype.addEntity(entity.index);
        return entity;
    }

    getArchetype(mask: number) {
        return this._archetypeMap.get(mask);
    }

    addSystem(...syss: ISystem[]) {
        this._syss.push(...syss);
        return this;
    }

    finishAddSystem(): void {
        for (let i = 0; i < this._syss.length; i++) {
            const sys = this._syss[i];
            sys.onCreate && sys.onCreate(this);
        }
    }

    destroySystems() {
        for (let i = 0; i < this._syss.length; i++) {
            const sys = this._syss[i];
            sys.onDestroy && sys.onDestroy(this);
        }
        this._syss.length = 0;
    }

    update() {
        for (let i = 0, j = this._syss.length; i < j; i++) {
            const sys = this._syss[i];
            this.updateSystem(sys);
        }
    }

    updateSystem(sys: ISystem) {
        sys.onUpdate(this);
    }

    query<T extends ChunkConstructor[]>(
        matcher: IMatchUnion<T>
    ): [number[], InstanceTypeTuple<T>][] {
        if (!this._archetypes) {
            this._archetypes = Array.from(this._archetypeMap.values());
        }
        const len = this._archetypes.length;
        const out = [];
        for (let i = 0; i < len; i++) {
            const arch = this._archetypes[i];
            if (!matcher.match(arch.mask)) continue;
            const chunks = arch.getChunksByMatcher(matcher);
            const entities = arch.entities;
            out.push([entities, chunks]);
        }
        return out as any;
    }

    forEach<T extends ChunkConstructor[]>(
        matcher: IMatchUnion<T>,
        cb: (entity: Entity, ...comp: ComponentTuple<T>) => void
    ) {
        if (!this._archetypes) {
            this._archetypes = Array.from(this._archetypeMap.values());
        }
        const len = this._archetypes.length;
        const versions = this._entityVersions;
        for (let i = 0; i < len; i++) {
            const arch = this._archetypes[i];
            if (!matcher.match(arch.mask)) continue;
            const chunks = arch.getChunksByMatcher(matcher);
            const entities = arch.entities;
            for (let id = 0, len = entities.length; id < len; id++) {
                const index = entities[id];
                const version = versions[index];
                cb(
                    {
                        index,
                        version,
                    },
                    ...chunks
                );
            }
        }
    }
    //#endregion
}
