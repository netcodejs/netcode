import { Vector, Transform, View, Controller } from "./net-comp";
import { Float } from "netcodejs";

// AUTO GENERAOTE!, PLZ DONT EDIT!!
Vector.prototype.ser = servec;
Vector.prototype.deser = deservec;

Transform.prototype.ser = sertrans;
Transform.prototype.deser = desertrans;

View.prototype.ser = serview;
View.prototype.deser = deserview;

Controller.prototype.ser = sercontroller;
Controller.prototype.deser = desercontroller;

declare module "./net-comp" {
    interface Vector {
        ser(buffer: IDataBufferWriter): void;
        deser(buffer: IDataBufferReader): void;
    }

    interface Transform {
        ser(buffer: IDataBufferWriter): void;
        deser(buffer: IDataBufferReader): void;
    }

    interface View {
        ser(buffer: IDataBufferWriter): void;
        deser(buffer: IDataBufferReader): void;
    }

    interface Controller {
        ser(buffer: IDataBufferWriter): void;
        deser(buffer: IDataBufferReader): void;
    }
}

function servec(this: Vector, buffer: IDataBufferWriter) {
    buffer.writeInt(this.x);
    buffer.writeInt(this.y);

    // AUTO GEN - z start
    if (!this.z) {
        this.z = [];
    }
    buffer.writeUint(this.z.length);
    for (let i = 0, len = this.z.length; i < len; i++) {
        let obj = this.z[i];
        if (!obj) {
            obj = this.z[i] = Object.create(Float.prototype);
        }
        obj.ser(buffer);
    }
    // AUTO GEN - z end
}

function deservec(this: Vector, buffer: IDataBufferReader) {
    this.x = buffer.readInt();
    this.y = buffer.readInt();

    // AUTO GEN - z start
    if (!this.z) {
        this.z = [];
    }
    this.z.length = buffer.readUint();
    for (let i = 0, len = this.z.length; i < len; i++) {
        let obj = this.z[i];
        if (!obj) {
            obj = this.z[i] = Object.create(Float.prototype);
        }
        obj.deser(buffer);
    }
    // AUTO GEN - z end
}

function sertrans(this: Transform, buffer: IDataBufferWriter) {
    this.pos.ser(buffer);
}

function desertrans(this: Transform, buffer: IDataBufferReader) {
    this.pos.deser(buffer);
}

function serview(this: View, buffer: IDataBufferWriter) {
    buffer.writeInt(this.color);
}

function deserview(this: View, buffer: IDataBufferReader) {
    this.color = buffer.readInt();
}

function sercontroller(this: Controller, buffer: IDataBufferWriter) {}

function desercontroller(this: Controller, buffer: IDataBufferReader) {}
