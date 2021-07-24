export const hash2compName: Record<number, string> = Object.create(null);
export const compName2ctr: Record<string, { new (): any }> =
    Object.create(null);
export const hash2RpcName = {} as Record<number, string>;
