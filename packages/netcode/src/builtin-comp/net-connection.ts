import { NetSerable } from "../comp-decorator";
import { IComp } from "../comp-interface";
import { SupportNetDataType } from "../data";
import { RingBuffer } from "@netcodejs/util";

export interface ISocket<T extends SupportNetDataType> {
    send(data: T): void;
    receive(data: T): void;
    get buffer(): RingBuffer<T>;
}

@NetSerable("net-connection")
export class NetConnection<T extends SupportNetDataType> extends IComp {
    socket?: ISocket<T>;

    connect(inSocket: ISocket<T>) {
        this.socket = inSocket;
    }
}
