const MAX_VERSION = (1 << 30) - 1;
export function composeVersion(num: number, destoryed: boolean | 0 | 1) {
    num = num % MAX_VERSION;
    return destoryed ? -num : num;
}

export function decomposeVersion(version: number): [number, boolean] {
    return [version > 0 ? version : -version, version < 0];
}

export function isPrimitive(test: any) {
    return test !== Object(test);
}

export function asSerable<T extends {}>(obj: T): (ISerable & T) | null {
    if (!obj) return null;
    // @ts-ignore
    return typeof obj.ser === "function" && typeof obj.deser === "function"
        ? (obj as ISerable & T)
        : null;
}

export function assert(
    b: boolean | Object | null,
    errrorClass: new (...args: any[]) => Error
) {
    if (!b) {
        throw new errrorClass();
    }
}

export type ProtoOf<T> = Pick<T, keyof T>;
