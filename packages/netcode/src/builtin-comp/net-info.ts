import { NetSerable } from "../comp-decorator";
import { IComp } from "../comp-interface";

@NetSerable("net-info")
export class NetInfo extends IComp {
    lastReceivedTime = 0;
    lastReceviedRemoteTime = 0;

    rtt = 0;
    smoothingRTT = 0;
    deviationRTT = 0;

    update(localTime: number, remoteTime: number, localTimePlusRTT: number) {
        if (remoteTime == 0 || localTimePlusRTT == 0) return;
        this.rtt = localTime - localTimePlusRTT;
        if (this.smoothingRTT == 0) {
            this.smoothingRTT = this.rtt;
        } else {
            this.smoothingRTT = this.smoothingRTT * 0.825 + this.rtt * 0.125;
        }
        this.deviationRTT =
            this.deviationRTT * 0.75 +
            Math.abs(this.rtt - this.smoothingRTT) * 0.25;
    }
}
