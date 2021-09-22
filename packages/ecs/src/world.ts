import { Archetype } from "./archetype";
import {
    ComponentConstructor,
    ComponentDefinition,
    DefineValueType,
    SortedComponentdefinition,
    Type2TypedArray,
} from "./component";
import { Entity } from "./entity";
import {
    generateDefinePrototype,
    resetBit,
    setBit,
    sortDefine,
    testBit,
} from "./util";

const MAX_ENTITY = (1 << 16) - 1;
export class World {
    private static _compCtrs: ComponentConstructor[] = [];

    static define<T extends ComponentDefinition>(
        define?: T
    ): ComponentConstructor<T> {
        const [sorted, byteLength] = sortDefine(define);
        const ctr = class {
            static typeId: number;
            static definition: ComponentDefinition;
            static sortedDefinition: SortedComponentdefinition;
            static isFlag: boolean;
            static byteLength: number;

            constructor(
                readonly archetype: Archetype,
                readonly offset: number
            ) {
                for (let [name, define] of Object.entries(
                    ctr.sortedDefinition
                )) {
                    if (define.isArray) {
                        if (define.type === DefineValueType.COMPLEX) {
                            const arr = new Array(define.length);
                            for (let i = 0, len = define.length; i < len; i++) {
                                arr[i] = new define.sign(
                                    archetype,
                                    offset + define.offset * i
                                );
                            }
                            this[name] = arr;
                        } else if (define.type === DefineValueType.PLAIN) {
                            this[name] = new Type2TypedArray[define.sign](
                                define.length
                            );
                        }
                    } else {
                        if (define.type === DefineValueType.COMPLEX) {
                            this[name] = new define.sign(
                                archetype,
                                offset + define.offset
                            );
                        }
                    }
                }
            }
        };

        ctr.typeId = this._compCtrs.length;
        ctr.sortedDefinition = sorted;
        ctr.definition = define;
        ctr.isFlag = !define || Object.keys(define).length === 0;
        ctr.byteLength = byteLength;

        const readonlyCtr = ctr as ComponentConstructor<T>;
        generateDefinePrototype(readonlyCtr);

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
        ctr: T
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

        const ins = new ctr(newArchetype, chunkId * newArchetype.byteLength);
        return ins as InstanceType<T>;
    }

    getComponent<T extends ComponentConstructor>(
        entity: Entity,
        ctr: T
    ): InstanceType<T> | null {
        if (!this.validate(entity)) return null;
        const compId = ctr.typeId;
        const comps = this._entityComps[entity.index];
        if (!testBit(comps, compId)) return null;
        this._entityComps[entity.index] = setBit(comps, compId);

        const mask = this._entityComps[entity.index];
        const arch = this._archetypes.get(mask);
        const chunkId = arch.getChunkId(entity.index);
        const ins = new ctr(arch, chunkId * arch.byteLength);
        return ins as InstanceType<T>;
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

    createArchetypeEntity(archetype: Archetype) {
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
