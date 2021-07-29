import { IComp } from "./base";
import { DataType } from "./comp-schema";
import { NetSerable, NetVar } from "./comp-decorator";

export interface ITime {
    readonly delta: number;
    readonly duration: number;
}

@NetSerable("logic_time")
export class LogicTime extends IComp implements ITime {
    @NetVar(DataType.FLOAT)
    delta: number = 0;
    @NetVar(DataType.DOUBLE)
    duration: number = 0;
}

@NetSerable("render_time")
export class RenderTime extends IComp implements ITime {
    delta: number = 0;
    duration: number = 0;
}
