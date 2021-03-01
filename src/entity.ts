import { compName2ctr } from "./component";
import { NULL_NUM } from "./macro";
// import { fastRemove } from "./misc";

/**
 * The unit in a network.It can manager some component.
 * It include id and version, plz don't modify then if you are not undersanding!
 * It is sealed, PLZ NOT implement!!!
 * @example
 ```js
 // Must do decoration
 @Component
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
export class Entity<T extends object = any> {
    id = NULL_NUM;
    version = NULL_NUM;
    compMap: Map<number, Object | Object[]> = new Map();

    $comps = new Proxy<T>(this as any, {
        get(target: any, p, receiver) {
            return target.get(compName2ctr[String(p)]);
        },
    });
    constructor() {
        Object.seal(this);
    }

    toString() {
        return `Entity: id=${this.id},version=${this.version}`;
    }

    add<T>(ctr: { new (): T }): T | null {
        const schema = ctr.prototype.__schema__;
        if (!(schema && schema.name)) {
            console.error("Componrnt must use @Component");
            return null;
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
        return ins;
    }

    addIns(ctr: { new (): T }, ins: T): T | null {
        const schema = ctr.prototype.__schema__;
        if (!(schema && schema.name)) {
            console.error("Componrnt must use @Component");
            return null;
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
        return ins;
    }

    // rm(comp: any): boolean {
    //     const schema = comp.__schema__;
    //     if (!(schema && schema.name)) {
    //         console.error("Componrnt must use @Component");
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
    //         console.error("Componrnt must use @Component");
    //         return false;
    //     }
    //     return this.compMap.delete(schema.hash);
    // }

    get<T>(ctr: { new (): T }): T | null {
        const schema = ctr.prototype.__schema__;
        if (!(schema && schema.name)) {
            console.error("Componrnt must use @Component");
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
            console.error("Componrnt must use @Component");
            return [];
        }

        return (this.compMap.get(schema.hash) as T[]) ?? [];
    }

    has(ctr: { new (): any }): boolean {
        const schema = ctr.prototype.__schema__;
        if (!(schema && schema.name)) {
            console.error("Componrnt must use @Component");
            return false;
        }
        return this.compMap.has(schema.hash);
    }
}
