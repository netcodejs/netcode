import {
    DomainOption,
    RpcType,
    MessageManagerBufferInitializer,
    MessageManagerBufferType,
} from "netcodejs";
import { StringDataBuffer } from "./string-databuffer";

const stringInitializer: MessageManagerBufferInitializer<string> = {
    newBufferReader(_type: MessageManagerBufferType) {
        return new StringDataBuffer();
    },

    newBufferWriter(_type: MessageManagerBufferType) {
        return new StringDataBuffer();
    },
};

export class StringDomainOption extends DomainOption<string> {
    constructor(type: RpcType) {
        super(stringInitializer, type);
    }
}
