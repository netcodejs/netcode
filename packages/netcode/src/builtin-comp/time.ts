import { IComp } from "../comp-interface";
import { DataType } from "../comp-schema";
import { NetSerable, NetVar } from "../comp.dec";
import { Float } from "../base-dirty-data";

export interface ITime {
    readonly delta: number;
    readonly duration: number;
}

@NetSerable("logic_time")
export class LogicTimeComp extends IComp implements ITime {
    @NetVar(Float)
    $delta = new Float(0);

    get delta() {
        return this.$delta.value;
    }
    set delta(value: number) {
        this.$delta.value = value;
    }

    @NetVar(DataType.DOUBLE)
    duration: number = 0;
}

@NetSerable("render_time")
export class RenderTimeComp extends IComp implements ITime {
    delta: number = 0;
    duration: number = 0;
}
