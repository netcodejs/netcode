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
