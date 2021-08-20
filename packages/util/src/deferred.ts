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
