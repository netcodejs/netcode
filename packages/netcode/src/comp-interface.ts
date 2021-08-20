import { Entity } from "./entity";

export abstract class IComp {
    private _entity?: Entity | null;
    get entity() {
        return this._entity!;
    }
    get domain() {
        return this._entity!.domain;
    }
    get $comps() {
        return this._entity!.$comps;
    }
    get logicTime() {
        return this.domain?.logicTime;
    }
    get renderTime() {
        return this.domain?.renderTime;
    }

    get<T extends IComp>(ctr: { new (): T }): T | null {
        return this._entity!.get(ctr);
    }

    init?(compIdx: number): void;
    renderUpdate?(compIdx: number): void;
    logicUpdate?(compIdx: number): void;
    destroy?(compIdx: number): void;
}
