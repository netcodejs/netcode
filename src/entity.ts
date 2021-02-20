import { Macro } from "./macro";
import { fastRemove } from "./misc";

export class Entity {
    id = Macro.NULL_NUM;
    version = Macro.NULL_NUM;
    compMap: Map<number, Object | Object[]> = new Map();
    constructor() {
        Object.seal(this);
    }

    toString() {
        return `Entity: id=${this.id},version=${this.version}`;
    }

    addComp<T>(ctr: { new (): T }): T | null {
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

    rmComp(comp: any) {
        const clsId = comp.__classId__;
        if (!(clsId >= 0 && comp.__schema__)) {
            console.error("Componrnt must use @Component");
            return;
        }
        if (this.compMap.has(clsId)) {
            const comps = this.compMap.get(clsId);
            if (Array.isArray(comps)) {
                const index = comps.lastIndexOf(comp);
                if (index > -1) {
                    fastRemove(comps, index);
                } else {
                    console.warn("Cannot find the comp: ", comp);
                }
            } else if (comp === comps) {
                this.compMap.delete(clsId);
            }
        }
    }

    getComp<T>(ctr: { new (): T }): T | null {
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

    hasComp(ctr: { new (): any }): boolean {
        const clsId = ctr.prototype.__classId__;
        if (!(clsId >= 0 && ctr.prototype.__schema__)) {
            console.error("Componrnt must use @Component");
            return false;
        }
        return this.compMap.has(clsId);
    }
}
