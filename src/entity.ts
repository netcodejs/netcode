import { NULL_NUM } from "./macro";
import { fastRemove } from "./misc";

export class Entity {
    id = NULL_NUM;
    version = NULL_NUM;
    compMap: Map<number, Object | Object[]> = new Map();
    constructor() {
        Object.seal(this);
    }

    toString() {
        return `Entity: id=${this.id},version=${this.version}`;
    }

    add<T>(ctr: { new (): T }): T | null {
        const clsId = ctr.prototype.__classId__;
        if (!(clsId >= 0 && ctr.prototype.__schema__)) {
            console.error("Componrnt must use @Component");
            return null;
        }
        const ins = new ctr();
        if (this.compMap.has(clsId)) {
            const insOrArr = this.compMap.get(clsId);
            if (Array.isArray(insOrArr)) {
                insOrArr.push(ins);
            } else {
                this.compMap.set(clsId, [insOrArr, ins]);
            }
        } else {
            this.compMap.set(clsId, ins);
        }
        return ins;
    }

    rm(comp: any): boolean {
        const clsId = comp.__classId__;
        if (!(clsId >= 0 && comp.__schema__)) {
            console.error("Componrnt must use @Component");
            return false;
        }
        if (this.compMap.has(clsId)) {
            const comps = this.compMap.get(clsId);
            if (Array.isArray(comps)) {
                const index = comps.lastIndexOf(comp);
                if (index > -1) {
                    fastRemove(comps, index);
                    return true;
                } else {
                    console.warn("Cannot find the comp: ", comp);
                    return false;
                }
            } else if (comp === comps) {
                return this.compMap.delete(clsId);
            }
        }
        return false;
    }

    mrm<T>(ctr: { new (): T }): boolean {
        const clsId = ctr.prototype.__classId__;
        if (!(clsId >= 0 && ctr.prototype.__schema__)) {
            console.error("Componrnt must use @Component");
            return false;
        }
        return this.compMap.delete(clsId);
    }

    get<T>(ctr: { new (): T }): T | null {
        const clsId = ctr.prototype.__classId__;
        if (!(clsId >= 0 && ctr.prototype.__schema__)) {
            console.error("Componrnt must use @Component");
            return null;
        }

        if (!this.compMap.has(clsId)) return null;
        const insOrArr = this.compMap.get(clsId)!;
        if (!Array.isArray(insOrArr)) return insOrArr as T;
        return insOrArr[insOrArr.length - 1] as T;
    }

    mget<T>(ctr: { new (): T }): T[] {
        const clsId = ctr.prototype.__classId__;
        if (!(clsId >= 0 && ctr.prototype.__schema__)) {
            console.error("Componrnt must use @Component");
            return [];
        }

        return (this.compMap.get(clsId) as T[]) ?? [];
    }

    has(ctr: { new (): any }): boolean {
        const clsId = ctr.prototype.__classId__;
        if (!(clsId >= 0 && ctr.prototype.__schema__)) {
            console.error("Componrnt must use @Component");
            return false;
        }
        return this.compMap.has(clsId);
    }
}
