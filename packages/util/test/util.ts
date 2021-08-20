export function wait(sec = 0) {
    return new Promise<void>((resolve) => {
        setTimeout(() => {
            resolve();
        }, sec);
    });
}
