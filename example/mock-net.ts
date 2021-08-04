import { Client, Server } from ".";

export interface Receiver {
    receive(data: any): void;
}

export class Net {
    static delay = 0;
    static jitter = 0;

    static server: Receiver;
    static client1: Receiver;
    static client2: Receiver;
    static send<T extends string | ArrayBuffer>(obj: T) {
        const promise = new Promise((resolve) => {
            setTimeout(resolve, this.delay + Math.random() * this.jitter, obj);
        });

        return {
            server: () => {
                return promise.then((res) => {
                    this.server.receive(res);
                });
            },
            c1: () => {
                return promise.then((res) => {
                    this.client1.receive(res);
                });
            },
            c2: () => {
                return promise.then((res) => {
                    this.client2.receive(res);
                });
            },
        };
    }
}
