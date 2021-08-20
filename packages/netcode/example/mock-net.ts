import { Deferred } from "@netcodejs/util";

export interface Receiver {
    receive(data: any): void;
}

export class MockTcp<T> {
    private _arr: Deferred<T>[] = [];
    receiver?: Receiver;
    constructor() {}

    send(defer: Deferred<T>) {
        this._arr.push(defer);
    }

    update() {
        let defer: Deferred<T>;
        while (this._arr.length >= 1 && (defer = this._arr[0]).isFulfilled()) {
            this.receiver?.receive(defer.value);
            this._arr.shift();
        }
    }
}

export class Net {
    static delay = 0;
    static jitter = 0;

    private static _serverTcp = new MockTcp<string | ArrayBuffer>();
    private static _client1Tcp = new MockTcp<string | ArrayBuffer>();
    private static _client2Tcp = new MockTcp<string | ArrayBuffer>();
    static set server(value: Receiver) {
        this._serverTcp.receiver = value;
    }
    static set client1(value: Receiver) {
        this._client1Tcp.receiver = value;
    }
    static set client2(value: Receiver) {
        this._client2Tcp.receiver = value;
    }

    static clone(src: string | ArrayBuffer) {
        return src;
    }

    static send<T extends string | ArrayBuffer>(obj: T) {
        return {
            server: () => {
                const defer = new Deferred<string | ArrayBuffer>();
                setTimeout(
                    () => defer.resolve(this.clone(obj)),
                    this.delay + Math.random() * this.jitter
                );
                this._serverTcp.send(defer);
            },
            c1: () => {
                const defer = new Deferred<string | ArrayBuffer>();
                setTimeout(
                    () => defer.resolve(this.clone(obj)),
                    this.delay + Math.random() * this.jitter
                );
                this._client1Tcp.send(defer);
            },
            c2: () => {
                const defer = new Deferred<string | ArrayBuffer>();
                setTimeout(
                    () => defer.resolve(this.clone(obj)),
                    this.delay + Math.random() * this.jitter
                );
                this._client2Tcp.send(defer);
            },
        };
    }

    static startUpdate() {
        setTimeout(() => this.startUpdate());
        this._serverTcp.update();
        this._client1Tcp.update();
        this._client2Tcp.update();
    }
}
