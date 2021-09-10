import { IComp } from "../comp-interface";
import { Float } from "../base-dirty-data";
import { Serable, Var } from "..";

export interface ITime {
    readonly delta: number;
    readonly duration: number;
}

@Serable
export class LogicTimeComp extends IComp implements ITime {
    @Var
    $delta = new Float(0);

    get delta() {
        return this.$delta.value;
    }
    set delta(value: number) {
        this.$delta.value = value;
    }

    @Var
    duration: long = 0;

    @Var
    test: u32[] = [];

    @Var
    test1: Float[] = [];
}

@Serable
export class RenderTimeComp extends IComp implements ITime {
    delta: number = 0;
    duration: number = 0;
}
