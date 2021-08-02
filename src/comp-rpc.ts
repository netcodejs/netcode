import { IComp } from "./comp-interface";
import {
    DataType,
    DataTypeVoid,
    genMethodSchema,
    getOrCreateScheme,
    RpcType,
} from "./comp-schema";
import { hash2RpcName } from "./global-record";
import { str as hash } from "./lib/crc-32";
import { ProtoOf } from "./misc";
