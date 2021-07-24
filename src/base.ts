import { ISchema } from "./component-variable";
import type { Domain } from "./domain";
import { compName2ctr } from "./global-record";
import { NULL_NUM } from "./macro";

class ComponentHasNotDecorated extends Error {}
export abstract class IComp {
    private _entity?: Entity | null;
    get entity() {
        return this._entity!;
    }
    init?(domain: Domain, compIdx: number): void;
    update?(domain: Domain, compIdx: number): void;
    fixedUpdate?(domain: Domain, compIdx: number): void;
    destroy?(domain: Domain, compIdx: number): void;
}
/**
 * The unit in a network.It can manager some component.
 * It include id and version, plz don't modify then if you are not undersanding!
 * It is sealed, PLZ NOT implement!!!
 * @example
 ```js
 // Must do decoration
 @NetComp
 class ViewComponent {
     @Param(DataType.bool)
     active = false
 }
 const ent = new Entity();
 ent.add(ViewComponent);
 ent.has(ViewComponent);
 ent.get(ViewComponent);
 Domain.ref(ent);
 ent.rm(ViewComponent);
 ```
 */
export class Entity<ProxyObj extends Object = any> {
    private _id = NULL_NUM;
    get id() {
        return this._id;
    }
    private _version = NULL_NUM;
    get version() {
        return this._version;
    }
    static Event = {
        REG_ENTITY: "reg-entity",
        UNREG_ENTITY: "unreg-entity",
    };

    $comps = new Proxy<ProxyObj>(this as any, {
        get(target: any, p, receiver) {
            return target.get(compName2ctr[String(p)]);
        },
    });

    private readonly _compMap: Map<number, IComp | IComp[]>;
    private readonly _comps: IComp[];
    get comps(): readonly IComp[] {
        return this._comps;
    }

    constructor(..._comps: IComp[]) {
        this._comps = _comps;
        const map = new Map();
        for (let i = 0, len = this._comps.length; i < len; i++) {
            let c = this._comps[i] as ISchema & IComp;
            c["_entity"] = this;
            if (!c.__schema__ || c.__schema__.hash == NULL_NUM) {
                throw new ComponentHasNotDecorated(
                    "Component must use @NetComp"
                );
            }
            const hash = c.__schema__.hash;
            if (map.has(hash)) {
                map.set(hash, [map.get(hash), c]);
            } else {
                map.set(hash, c);
            }
        }
        this._compMap = map;
    }

    toString() {
        return `Entity: id=${this._id},version=${this._version}`;
    }

    get<T extends IComp>(ctr: { new (): T }): T | null {
        const schema = ctr.prototype.__schema__;
        if (!(schema && schema.name)) {
            console.error("Componrnt must use @NetComp");
            return null;
        }

        if (!this._compMap.has(schema.hash)) return null;
        const insOrArr = this._compMap.get(schema.hash)!;
        if (!Array.isArray(insOrArr)) return insOrArr as T;
        return insOrArr[insOrArr.length - 1] as T;
    }

    mget<T extends IComp>(ctr: { new (): T }): T[] {
        const schema = ctr.prototype.__schema__;
        if (!(schema && schema.name)) {
            console.error("Componrnt must use @NetComp");
            return [];
        }

        return (this._compMap.get(schema.hash) as T[]) ?? [];
    }

    has(ctr: { new (): any }): boolean {
        const schema = ctr.prototype.__schema__;
        if (!(schema && schema.name)) {
            console.error("Componrnt must use @NetComp");
            return false;
        }
        return this._compMap.has(schema.hash);
    }

    indexOf(ins: IComp) {
        if (ins == null) return -1;
        return this._comps.indexOf(ins);
    }

    private _init(domain: Domain) {
        for (let i = 0, len = this._comps.length; i < len; i++) {
            const c = this._comps[i];
            c.init && c.init(domain, i);
        }
    }

    private _update(domain: Domain) {
        for (let i = 0, len = this._comps.length; i < len; i++) {
            const c = this._comps[i];
            c.update && c.update(domain, i);
        }
    }

    private _fixedUpdate(domain: Domain) {
        for (let i = 0, len = this._comps.length; i < len; i++) {
            const c = this._comps[i];
            c.fixedUpdate && c.fixedUpdate(domain, i);
        }
    }

    private _destroy(domain: Domain) {
        for (let i = 0, len = this._comps.length; i < len; i++) {
            const c = this._comps[i];
            c.destroy && c.destroy(domain, i);
            c["_entity"] = null;
        }
        this._comps.length = 0;
        this._compMap.clear();
    }
}
