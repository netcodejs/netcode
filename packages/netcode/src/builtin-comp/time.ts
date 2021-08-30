import { IComp } from "../comp-interface";
import { NetArr, NetSerable, NetVar } from "../comp.dec";
import { Float } from "../base-dirty-data";

export interface ITime {
    readonly delta: number;
    readonly duration: number;
}

@NetSerable("logic_time")
export class LogicTimeComp extends IComp implements ITime {
    @NetVar()
    $delta = new Float(0);

    get delta() {
        return this.$delta.value;
    }
    set delta(value: number) {
        this.$delta.value = value;
    }

    @NetVar()
    duration: long = 0;

    @NetArr()
    test: u32[] = [];

    @NetArr()
    test1: Float[] = [];
}

@NetSerable("render_time")
export class RenderTimeComp extends IComp implements ITime {
    delta: number = 0;
    duration: number = 0;
}
