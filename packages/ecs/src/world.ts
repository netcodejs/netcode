import { Archetype } from "./archetype";
import { ComponentConstructor, ComponentDefinition, Type } from "./component";
import { resetBit, setBit, testBit } from "./util";

const MAX_ENTITY = (1 << 16) - 1;
export class World {
    private static _compCtrs: ComponentConstructor[] = [];

    static define<T extends ComponentDefinition>(
        define?: T
    ): ComponentConstructor<T> {
        const ctr = {
            typeId: this._compCtrs.length,
            definition: define,
            isFlag: !define || Object.keys(define).length === 0,
            byteLength: 0,
        } as ComponentConstructor<T>;
        this._compCtrs.push(ctr);
        return ctr;
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
        return entity.version !== currentVersion;
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
    addComponent<T extends ComponentConstructor>(entity: Entity, ctr: T): void {
        if (!this.validate(entity)) return;
        const compId = ctr.typeId;
        const oldMask = this._entityComps[entity.index];
        if (testBit(oldMask, compId)) return;
        const newMask = setBit(oldMask, compId);
        this._entityComps[entity.index] = newMask;
        if (ctr.isFlag) {
            return;
        }

        const oldArchetype = this._archetypes.get(oldMask);
        const newArchetype = this._archetypes.get(newMask);
        newArchetype.addEntity(entity.index);
        oldArchetype.removeEntity(entity.index);
    }

    getComponent<T extends ComponentConstructor>(
        entity: Entity,
        ctr: T
    ): InstanceType<T> | null {
        if (!this.validate(entity)) return null;
        const compId = ctr.typeId;
        const comps = this._entityComps[entity.index];
        if (testBit(comps, compId)) return null;
        this._entityComps[entity.index] = setBit(comps, compId);
        return null;
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
        archetype.addEntity(entity);
        return entity;
    }

    getArchetype(mask: number) {
        return this._archetypes.get(mask);
    }
    //#endregion
}

const Vector = World.define({ x: Type.i16, y: Type.i16, z: Type.string });
type Vector = InstanceType<typeof Vector>;

const Position = World.define({ pos: Vector, angle: [Type.i16] });
type Position = InstanceType<typeof Position>;

let w: World;
let ent = w.createEntity();
let vec = w.addComponent(ent, Vector);
w.removeComponent(ent, Vector);

let pos: Position;
pos.angle[0];
