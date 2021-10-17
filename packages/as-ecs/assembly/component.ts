import { familyof } from "./builtins";

@unmanaged
export abstract class IComponentData {
    abstract onDispose(): void;

    @operator.prefix("~")
    dispose(): void {
        this.onDispose();
        heap.free(changetype<usize>(this));
    }
}

@final
export class ComponentType {
    static Get<T extends IComponentData>(): ComponentType {
        const fid = familyof<T>();
        if (ComponentType.map.has(fid)) {
            const ins = ComponentType.map.get(fid);
            return ins;
        }
        const ins = new ComponentType(offsetof<T>(), offsetof<T>() == 0, fid);
        ComponentType.map.set(fid, <ComponentType>ins);
        return ins;
    }
    static map: Map<u32, ComponentType> = new Map();

    constructor(readonly size: u32, readonly isFlag: bool, readonly id: u32) {}
}
