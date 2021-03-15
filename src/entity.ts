import { compName2ctr } from "./component-variable";
import { NULL_NUM } from "./macro";
// import { fastRemove } from "./misc";

class ComponentHasNotDecorated extends Error {}
class ComponentNotMatchedWhenSetIndex extends Error {}
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
    id = NULL_NUM;
    version = NULL_NUM;
    compMap: Map<number, Object | Object[]> = new Map();
    static Event = {
        ADD_COMP: "add-comp",
        REG_ENTITY: "reg-entity",
        UNREG_ENTITY: "unreg-entity",
    };

    $comps = new Proxy<ProxyObj>(this as any, {
        get(target: any, p, receiver) {
            return target.get(compName2ctr[String(p)]);
        },
    });

    private _comps: Object[] = [];
    get comps() {
        return this._comps;
    }
    constructor() {
        Object.seal(this);
    }

    toString() {
        return `Entity: id=${this.id},version=${this.version}`;
    }

    add<T>(ctr: { new (): T }, index = -1): T {
        const schema = ctr.prototype.__schema__;
        if (!(schema && schema.name)) {
            throw new ComponentHasNotDecorated("Component must use @NetComp");
        }
        if (index >= 0 && this._comps[index]) {
            throw new ComponentNotMatchedWhenSetIndex();
        }
        const ins = new ctr();
        if (this.compMap.has(schema.hash)) {
            const insOrArr = this.compMap.get(schema.hash);
            if (Array.isArray(insOrArr)) {
                insOrArr.push(ins);
            } else {
                this.compMap.set(schema.hash, [insOrArr, ins]);
            }
        } else {
            this.compMap.set(schema.hash, ins);
        }
        if (index < 0) {
            this._comps.push(ins);
        } else {
            this._comps[index] = ins;
        }
        return ins;
    }
    addIns<T>(ctr: { new (): T }, ins: T, index = -1): T | null {
        const schema = ctr.prototype.__schema__;
        if (!(schema && schema.name)) {
            console.error("Componrnt must use @NetComp");
            return null;
        }
        if (index >= 0 && this._comps[index]) {
            throw new ComponentNotMatchedWhenSetIndex();
        }
        if (this.compMap.has(schema.hash)) {
            const insOrArr = this.compMap.get(schema.hash);
            if (Array.isArray(insOrArr)) {
                insOrArr.push(ins);
            } else {
                this.compMap.set(schema.hash, [insOrArr, ins]);
            }
        } else {
            this.compMap.set(schema.hash, ins);
        }
        if (index < 0) {
            this._comps.push(ins);
        } else {
            this._comps[index] = ins;
        }
        return ins;
    }

    // rm(comp: any): boolean {
    //     const schema = comp.__schema__;
    //     if (!(schema && schema.name)) {
    //         console.error("Componrnt must use @NetComp");
    //         return false;
    //     }
    //     if (this.compMap.has(schema.hash)) {
    //         const comps = this.compMap.get(schema.hash);
    //         if (Array.isArray(comps)) {
    //             const index = comps.lastIndexOf(comp);
    //             if (index > -1) {
    //                 fastRemove(comps, index);
    //                 return true;
    //             } else {
    //                 console.warn("Cannot find the comp: ", comp);
    //                 return false;
    //             }
    //         } else if (comp === comps) {
    //             return this.compMap.delete(schema.hash);
    //         }
    //     }
    //     return false;
    // }

    // mrm<T>(ctr: { new (): T }): boolean {
    //     const schema = ctr.prototype.__schema__;
    //     if (!(schema && schema.name)) {
    //         console.error("Componrnt must use @NetComp");
    //         return false;
    //     }
    //     return this.compMap.delete(schema.hash);
    // }

    get<T>(ctr: { new (): T }): T | null {
        const schema = ctr.prototype.__schema__;
        if (!(schema && schema.name)) {
            console.error("Componrnt must use @NetComp");
            return null;
        }

        if (!this.compMap.has(schema.hash)) return null;
        const insOrArr = this.compMap.get(schema.hash)!;
        if (!Array.isArray(insOrArr)) return insOrArr as T;
        return insOrArr[insOrArr.length - 1] as T;
    }

    mget<T>(ctr: { new (): T }): T[] {
        const schema = ctr.prototype.__schema__;
        if (!(schema && schema.name)) {
            console.error("Componrnt must use @NetComp");
            return [];
        }

        return (this.compMap.get(schema.hash) as T[]) ?? [];
    }

    has(ctr: { new (): any }): boolean {
        const schema = ctr.prototype.__schema__;
        if (!(schema && schema.name)) {
            console.error("Componrnt must use @NetComp");
            return false;
        }
        return this.compMap.has(schema.hash);
    }
}
