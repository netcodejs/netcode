import { Archetype } from "./archetype";
import {
    Component,
    ComponentConstructor,
    ComponentSchema,
    SortedComponentSchema,
} from "./component";
import { Entity } from "./entity";
import {
    genComponentPrototype,
    resetBit,
    setBit,
    sortDefine,
    testBit,
} from "./util";

const MAX_ENTITY = (1 << 16) - 1;
export class World {
    private static _compCtrs: ComponentConstructor[] = [];

    static define<T extends ComponentSchema>(
        define?: T
    ): ComponentConstructor<T> {
        const [sorted, byteLength] = sortDefine(define);
        const ctr = class {
            static typeId: number;
            static definition: ComponentSchema;
            static sortedDefinition: SortedComponentSchema;
            static isFlag: boolean;
            static byteLength: number;
            static TEMP: any;

            archetype: Archetype;
            offset = 0;

            set(archetype: Archetype, offset: number) {
                this.archetype = archetype;
                this.offset = offset;
            }
        };

        ctr.typeId = this._compCtrs.length;
        ctr.definition = define;
        ctr.sortedDefinition = sorted;
        ctr.isFlag = !define || Object.keys(define).length === 0;
        ctr.byteLength = byteLength;
        ctr.TEMP = new ctr();

        const readonlyCtr = ctr as ComponentConstructor<T>;
        genComponentPrototype(sorted, readonlyCtr.prototype);

        this._compCtrs.push(readonlyCtr);
        return readonlyCtr;
    }

    private _entityComps = new Uint32Array(MAX_ENTITY);
    private _entityIdxEnd = 0;
    private _entityVersions = new Uint8Array(MAX_ENTITY);
    private _removalEntityIdx: number[] = [];
    private _archetypes = new Map<number, Archetype>();

    constructor() {
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
    addComponent<T extends ComponentConstructor>(
        entity: Entity,
        ctr: T,
        out?: InstanceType<T>
    ): InstanceType<T> {
        if (!this.validate(entity)) return null;
        const compId = ctr.typeId;
        const oldMask = this._entityComps[entity.index];
        if (testBit(oldMask, compId)) return this.getComponent(entity, ctr);
        const newMask = setBit(oldMask, compId);
        this._entityComps[entity.index] = newMask;
        if (ctr.isFlag) {
            return null;
        }

        const oldArchetype = this._archetypes.get(oldMask);
        const newArchetype = this._archetypes.get(newMask);
        const chunkId = newArchetype.addEntity(entity.index);
        oldArchetype.removeEntity(entity.index);

        if (!out) {
            out = ctr.TEMP as InstanceType<T>;
        }
        out.set(newArchetype, chunkId * newArchetype.byteLength);
        return out;
    }

    getComponent<T extends ComponentConstructor>(
        entity: Entity,
        ctr: T,
        out?: InstanceType<T>
    ): InstanceType<T> | null {
        if (!this.validate(entity)) return null;
        const compId = ctr.typeId;
        const comps = this._entityComps[entity.index];
        if (!testBit(comps, compId)) return null;
        this._entityComps[entity.index] = setBit(comps, compId);

        const mask = this._entityComps[entity.index];
        const arch = this._archetypes.get(mask);
        const chunkId = arch.getChunkId(entity.index);

        if (!out) {
            out = ctr.TEMP as InstanceType<T>;
        }
        out.set(arch, chunkId * arch.byteLength);
        return out;
    }

    removeComponent<T extends ComponentConstructor>(
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
    //#endregion

    //#region archetype
    createArchetype(...ctrs: ComponentConstructor[]): Archetype {
        const arch = new Archetype(ctrs);
        this._archetypes.set(arch.mask, arch);
        return arch;
    }

    createEntityByArchetype(archetype: Archetype) {
        const entity = this.createEntity();
        this._entityComps[entity.index] = archetype.mask;
        archetype.addEntity(entity.index);
        return entity;
    }

    getArchetype(mask: number) {
        return this._archetypes.get(mask);
    }
    //#endregion
}
