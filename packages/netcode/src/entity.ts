import { RoleComp } from "./builtin-comp/";
import { ISchema } from "./comp-schema";
import type { Domain } from "./domain";
import { compName2ctr } from "./global-record";
import { IComp } from "./comp-interface";
import { NULL_NUM } from "./builtin";

class ComponentHasNotDecorated extends Error {}
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
    private _id: number;
    get id() {
        return this._id;
    }
    private _version: number;
    get version() {
        return this._version;
    }
    private _domain?: Domain;
    get domain() {
        return this._domain!;
    }
    static Event = {
        REG_ENTITY: "reg-entity",
        UNREG_ENTITY: "unreg-entity",
    };

    $comps = new Proxy<ProxyObj>(this as any, {
        get(target: any, p, _receiver) {
            return target.get(compName2ctr[String(p)]);
        },
    });

    private readonly _compMap: Map<number, IComp | IComp[]>;
    private readonly _comps: IComp[];
    get comps(): readonly IComp[] {
        return this._comps;
    }

    readonly role: RoleComp;

    constructor(..._comps: IComp[]) {
        this._id = NULL_NUM;
        this._version = NULL_NUM;
        this._compMap = new Map();
        this.role = new RoleComp();

        this._comps = [this.role, ..._comps];
        for (let i = 0, len = this._comps.length; i < len; i++) {
            this._initComp(this._comps[i] as IComp & ISchema);
        }
    }

    static NewWithoutRole(..._comps: IComp[]) {
        const ent = Object.create(Entity.prototype);

        ent._id = NULL_NUM;
        ent._version = NULL_NUM;
        ent.$comps = new Proxy<any>(ent, {
            get(target: any, p, _receiver) {
                return target.get(compName2ctr[String(p)]);
            },
        });
        ent._compMap = new Map();
        ent.role = _comps[0];

        ent._comps = _comps;
        for (let i = 0, len = ent._comps.length; i < len; i++) {
            ent._initComp(ent._comps[i] as IComp & ISchema);
        }
        return ent;
    }

    protected _initComp(c: ISchema & IComp) {
        const map = this._compMap;
        c["_entity"] = this;
        if (!c.__schema__ || c.__schema__.hash == NULL_NUM) {
            throw new ComponentHasNotDecorated("Component must use @NetComp");
        }
        const hash = c.__schema__.hash;
        if (map.has(hash)) {
            map.set(hash, [map.get(hash) as any, c]);
        } else {
            map.set(hash, c);
        }
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

        if (!this._compMap.has(schema.hash)) return [];
        const insOrArr = this._compMap.get(schema.hash)!;
        if (!Array.isArray(insOrArr)) return [insOrArr as T];
        return insOrArr as T[];
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

    protected _init() {
        for (let i = 0, len = this._comps.length; i < len; i++) {
            const c = this._comps[i];
            c.init && c.init(i);
        }
    }

    protected _renderUpdate() {
        for (let i = 0, len = this._comps.length; i < len; i++) {
            const c = this._comps[i];
            c.renderUpdate && c.renderUpdate(i);
        }
    }

    protected _logicUpdate() {
        for (let i = 0, len = this._comps.length; i < len; i++) {
            const c = this._comps[i];
            c.logicUpdate && c.logicUpdate(i);
        }
    }

    protected _destroy() {
        for (let i = 0, len = this._comps.length; i < len; i++) {
            const c = this._comps[i];
            c.destroy && c.destroy(i);
            c["_entity"] = null;
        }
        this._comps.length = 0;
        this._compMap.clear();
    }
}
