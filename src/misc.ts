export function fastRemove(arr: any[], index: number) {
    arr[index] = arr[arr.length - 1];
    arr.length--;
}

// prettier-ignore
export enum DataType {
    i8 = 1, u8, i16, u16, i32, u32, f32, f64,
    short, ushort, int, uint, long, ulong, float, double, string, bool,
}

export function getDataTypeByteLength<
    T extends Exclude<DataType, DataType.string>
>(type?: T) {
    if (type) {
        switch (type) {
            case DataType.i8:
            case DataType.u8:
            case DataType.short:
            case DataType.ushort:
            case DataType.bool:
                return 1;
            case DataType.i16:
            case DataType.u16:
            case DataType.int:
            case DataType.uint:
                return 2;
            case DataType.i32:
            case DataType.u32:
            case DataType.f32:
            case DataType.long:
            case DataType.ulong:
            case DataType.float:
                return 4;
            case DataType.f64:
            case DataType.double:
                return 8;
        }
    }
    return 0;
}

const MAX_VERSION = (1 << 30) - 1;
export function composeVersion(num: number, destoryed: boolean | 0 | 1) {
    num = num % MAX_VERSION;
    return destoryed ? -num : num;
}

export function decomposeVersion(version: number) {
    return [version > 0 ? version : -version, version < 0];
}
