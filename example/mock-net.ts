export class Net {
    static delay = 0;
    static jitter = 0;

    static send<T extends string | ArrayBuffer>(obj: T) {
        const promise = new Promise((resolve) => {
            setTimeout(resolve, this.delay + Math.random() * this.jitter, obj);
        });

        return {
            recv: function (func: (param: any) => void, context?: any) {
                promise.then((res) => {
                    func.call(context, res);
                });
            },
        };
    }
}
