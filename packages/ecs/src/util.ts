export function setBit(source: number, index: number) {
    return source | (1 << index);
}

export function resetBit(source: number, index: number) {
    return source & ~(1 << index);
}

export function testBit(source: number, index: number) {
    return (source & (1 << index)) != 0;
}

export function toggleBit(source: number, index: number) {
    return source ^ (1 << index);
}

export function fastRemove<T>(arr: T[], index: number) {
    const overringIdx = arr.length - 1;
    arr[index] = arr[overringIdx];
    arr.length--;
    return overringIdx;
}

export function entityClone(entity: Entity): Entity {
    const newObj = Object.create(null) as Entity;
    newObj.index = entity.index;
    newObj.version = entity.version;
    return newObj;
}

export function entityEqualTo(e1: Entity, e2: Entity): boolean {
    return e1.index === e2.index && e1.version === e2.version;
}
