import { ISerable } from "./data/serializable";

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

export class Deferred<T = unknown> {
    public promise: Promise<T>;

    private fate: "resolved" | "unresolved";
    private state: "pending" | "fulfilled" | "rejected";

    private _resolve!: (value: T | PromiseLike<T>) => void;
    private _reject!: (reason?: any) => void;
    private _value: any;
    public get value() {
        return this._value;
    }

    constructor() {
        this.state = "pending";
        this.fate = "unresolved";
        this.promise = new Promise((resolve, reject) => {
            this._resolve = resolve;
            this._reject = reject;
        });
        this.promise.then(
            (res) => {
                this.state = "fulfilled";
                this._value = res;
            },
            () => (this.state = "rejected")
        );
    }

    resolve(value: T | PromiseLike<T>) {
        if (this.fate === "resolved") {
            throw "Deferred cannot be resolved twice";
        }
        this.fate = "resolved";
        this._resolve(value);
    }

    reject(reason?: any) {
        if (this.fate === "resolved") {
            throw "Deferred cannot be resolved twice";
        }
        this.fate = "resolved";
        this._reject(reason);
    }

    isResolved() {
        return this.fate === "resolved";
    }

    isPending() {
        return this.state === "pending";
    }

    isFulfilled() {
        return this.state === "fulfilled";
    }

    isRejected() {
        return this.state === "rejected";
    }
}
