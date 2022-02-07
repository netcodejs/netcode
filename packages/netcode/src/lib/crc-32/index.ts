/* exports.js (C) 2014-present SheetJS -- http://sheetjs.com */
/* last edit: mooooooi<emwings@outlook.com> */
/* see perf/exportstable.js */
/*global Int32Array */
function signed_crc_table() {
    let c = 0,
        table = new Array(256);

    for (let n = 0; n != 256; ++n) {
        c = n;
        c = c & 1 ? -306674912 ^ (c >>> 1) : c >>> 1;
        c = c & 1 ? -306674912 ^ (c >>> 1) : c >>> 1;
        c = c & 1 ? -306674912 ^ (c >>> 1) : c >>> 1;
        c = c & 1 ? -306674912 ^ (c >>> 1) : c >>> 1;
        c = c & 1 ? -306674912 ^ (c >>> 1) : c >>> 1;
        c = c & 1 ? -306674912 ^ (c >>> 1) : c >>> 1;
        c = c & 1 ? -306674912 ^ (c >>> 1) : c >>> 1;
        c = c & 1 ? -306674912 ^ (c >>> 1) : c >>> 1;
        table[n] = c;
    }

    return typeof Int32Array !== "undefined" ? new Int32Array(table) : table;
}

const T = signed_crc_table();
export function bstr(bstr: string, seed = 0) {
    let C = seed ^ -1,
        L = bstr.length - 1;
    for (var i = 0; i < L; ) {
        C = (C >>> 8) ^ T[(C ^ bstr.charCodeAt(i++)) & 0xff];
        C = (C >>> 8) ^ T[(C ^ bstr.charCodeAt(i++)) & 0xff];
    }
    if (i === L) C = (C >>> 8) ^ T[(C ^ bstr.charCodeAt(i)) & 0xff];
    return C ^ -1;
}

export function buf(buf: number[] | Uint8Array, seed: number = 0) {
    if (buf.length > 10000) return exports_buf_8(buf, seed);
    let C = seed ^ -1,
        L = buf.length - 3;
    for (var i = 0; i < L; ) {
        C = (C >>> 8) ^ T[(C ^ buf[i++]) & 0xff];
        C = (C >>> 8) ^ T[(C ^ buf[i++]) & 0xff];
        C = (C >>> 8) ^ T[(C ^ buf[i++]) & 0xff];
        C = (C >>> 8) ^ T[(C ^ buf[i++]) & 0xff];
    }
    while (i < L + 3) C = (C >>> 8) ^ T[(C ^ buf[i++]) & 0xff];
    return C ^ -1;
}

function exports_buf_8(buf: number[] | Uint8Array, seed: number = 0) {
    let C = seed ^ -1,
        L = buf.length - 7;
    for (var i = 0; i < L; ) {
        C = (C >>> 8) ^ T[(C ^ buf[i++]) & 0xff];
        C = (C >>> 8) ^ T[(C ^ buf[i++]) & 0xff];
        C = (C >>> 8) ^ T[(C ^ buf[i++]) & 0xff];
        C = (C >>> 8) ^ T[(C ^ buf[i++]) & 0xff];
        C = (C >>> 8) ^ T[(C ^ buf[i++]) & 0xff];
        C = (C >>> 8) ^ T[(C ^ buf[i++]) & 0xff];
        C = (C >>> 8) ^ T[(C ^ buf[i++]) & 0xff];
        C = (C >>> 8) ^ T[(C ^ buf[i++]) & 0xff];
    }
    while (i < L + 7) C = (C >>> 8) ^ T[(C ^ buf[i++]) & 0xff];
    return C ^ -1;
}

export function str(str: string, seed = 0) {
    let C = seed ^ -1;
    for (let i = 0, L = str.length, c, d; i < L; ) {
        c = str.charCodeAt(i++);
        if (c < 0x80) {
            C = (C >>> 8) ^ T[(C ^ c) & 0xff];
        } else if (c < 0x800) {
            C = (C >>> 8) ^ T[(C ^ (192 | ((c >> 6) & 31))) & 0xff];
            C = (C >>> 8) ^ T[(C ^ (128 | (c & 63))) & 0xff];
        } else if (c >= 0xd800 && c < 0xe000) {
            c = (c & 1023) + 64;
            d = str.charCodeAt(i++) & 1023;
            C = (C >>> 8) ^ T[(C ^ (240 | ((c >> 8) & 7))) & 0xff];
            C = (C >>> 8) ^ T[(C ^ (128 | ((c >> 2) & 63))) & 0xff];
            C =
                (C >>> 8) ^
                T[(C ^ (128 | ((d >> 6) & 15) | ((c & 3) << 4))) & 0xff];
            C = (C >>> 8) ^ T[(C ^ (128 | (d & 63))) & 0xff];
        } else {
            C = (C >>> 8) ^ T[(C ^ (224 | ((c >> 12) & 15))) & 0xff];
            C = (C >>> 8) ^ T[(C ^ (128 | ((c >> 6) & 63))) & 0xff];
            C = (C >>> 8) ^ T[(C ^ (128 | (c & 63))) & 0xff];
        }
    }
    return C ^ -1;
}

export const version = "1.2.0";
export const table = T;
