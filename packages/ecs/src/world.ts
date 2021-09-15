import { ComponentConstructor, ComponentDefinition, Type } from "./component";
import { setBit, testBit } from "./util";

const MAX_ENTITY = (1 << 16) - 1;
export class World {
    private _entityComps = new Uint32Array(MAX_ENTITY);
    private _entityVersions = new Uint8Array(MAX_ENTITY);

    constructor() {
        this._entityVersions.fill(0);
    }

    validate(entity: Entity) {
        if (entity.index < 0 || entity.index >= MAX_ENTITY) return false;
        const currentVersion = this._entityVersions[entity.index];
        return entity.version !== currentVersion;
    }

    static define<T extends ComponentDefinition>(
        define: T
    ): ComponentConstructor<T> {
        return {
            typeId: 1,
            definition: define,
        } as ComponentConstructor<T>;
    }

    addComp(entity: Entity) {
        if (!this.validate(entity)) return null;
        const compId = 1;
        const comps = this._entityComps[entity.index];
        if (testBit(comps, compId)) return null;
        this._entityComps[entity.index] = setBit(comps, compId);
    }

    rmComp() {}
}

const Vector = World.define({ x: Type.i16, y: Type.i16, z: Type.string });
type Vector = InstanceType<typeof Vector>;

const Position = World.define({ pos: Vector, angle: Type.i16 });
type Position = InstanceType<typeof Position>;

let a: Vector;
a.z = "123";
a.x = 123;

let b: Position;
b.angle = 222;
b.pos.x = 123;
b.pos.z = "123";
