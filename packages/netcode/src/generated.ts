import { LogicTimeComp, RenderTimeComp } from "./builtin-comp/time";
import { Float } from "./base-dirty-data";

// AUTO GENERAOTE!, PLZ DONT EDIT!!
LogicTimeComp.prototype.ser = serlogic_time;
LogicTimeComp.prototype.deser = deserlogic_time;

RenderTimeComp.prototype.ser = serrender_time;
RenderTimeComp.prototype.deser = deserrender_time;

declare module "./base-dirty-data" {}

declare module "./builtin-comp/role" {}

declare module "./builtin-comp/time" {
    interface LogicTimeComp {
        ser(buffer: IDataBufferWriter): void;
        deser(buffer: IDataBufferReader): void;
    }

    interface RenderTimeComp {
        ser(buffer: IDataBufferWriter): void;
        deser(buffer: IDataBufferReader): void;
    }
}

function serlogic_time(this: LogicTimeComp, buffer: IDataBufferWriter) {
    this.$delta.ser(buffer);
    buffer.writeLong(this.duration);

    // AUTO GEN - test start
    if (!this.test) {
        buffer.writeUint(0);
    } else {
        buffer.writeUint(this.test.length);
        for (let i = 0, len = this.test.length; i < len; i++) {
            buffer.writeUint(this.test[i]);
        }
    }
    // AUTO GEN - test end

    // AUTO GEN - test1 start
    if (!this.test1) {
        this.test1 = [];
    }
    buffer.writeUint(this.test1.length);
    for (let i = 0, len = this.test1.length; i < len; i++) {
        let obj = this.test1[i];
        if (!obj) {
            obj = this.test1[i] = Object.create(Float.prototype);
        }
        obj.ser(buffer);
    }
    // AUTO GEN - test1 end
}

function deserlogic_time(this: LogicTimeComp, buffer: IDataBufferReader) {
    this.$delta.deser(buffer);
    this.duration = buffer.readLong();

    // AUTO GEN - test start
    if (!this.test) {
        this.test = [];
    }
    this.test.length = buffer.readUint();
    for (let i = 0, len = this.test.length; i < len; i++) {
        this.test[i] = buffer.readUint();
    }
    // AUTO GEN - test end

    // AUTO GEN - test1 start
    if (!this.test1) {
        this.test1 = [];
    }
    this.test1.length = buffer.readUint();
    for (let i = 0, len = this.test1.length; i < len; i++) {
        let obj = this.test1[i];
        if (!obj) {
            obj = this.test1[i] = Object.create(Float.prototype);
        }
        obj.deser(buffer);
    }
    // AUTO GEN - test1 end
}

function serrender_time(this: RenderTimeComp, buffer: IDataBufferWriter) {}

function deserrender_time(this: RenderTimeComp, buffer: IDataBufferReader) {}
