import { RoleComp } from "./builtin-comp/role";
import { Float } from "./base-dirty-data";
import { LogicTimeComp, RenderTimeComp } from "./builtin-comp/time";

// AUTO GENERAOTE!, PLZ DONT EDIT!!
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
RoleComp.prototype.upgrade = async function (this: RoleComp) {
    return this.upgrade_impl();
};

RoleComp.prototype.downgrade = async function (this: RoleComp) {
    return this.downgrade_impl();
};

LogicTimeComp.prototype.ser = function (
    this: LogicTimeComp,
    buffer: IDataBufferWriter
) {
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
};

LogicTimeComp.prototype.deser = function (
    this: LogicTimeComp,
    buffer: IDataBufferReader
) {
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
};

RenderTimeComp.prototype.ser = function (
    this: RenderTimeComp,
    _buffer: IDataBufferWriter
) {};

RenderTimeComp.prototype.deser = function (
    this: RenderTimeComp,
    _buffer: IDataBufferReader
) {};
