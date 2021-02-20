export function fastRemove(arr: any[], index: number) {
    arr[index] = arr[arr.length - 1];
    arr.length--;
}
