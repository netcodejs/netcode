import { Domain } from "../src";

export function wait(sec = 0) {
    return new Promise<void>((resolve) => {
        setTimeout(() => {
            resolve();
        }, sec);
    });
}

export function genLoop(server: Domain, ...clients: Domain[]) {
    return async function () {
        for (let c of clients) {
            server.setData(c.asData());
        }
        await wait();
        const sData = server.asData();
        for (let c of clients) {
            c.setData(sData);
        }
    };
}
