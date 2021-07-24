import {
    DataType,
    IComp,
    Int,
    NetComp,
    NetVar,
    Rpc,
    RpcType,
    RpcVar,
} from "../src";

@NetComp("vec")
export class Vector extends IComp {
    @NetVar(DataType.INT)
    x: number = 0;
    @NetVar(DataType.INT)
    y: number = 0;
}

@NetComp("trans")
export class Transform extends IComp {
    @NetVar(Vector)
    pos = new Vector();

    @Rpc(RpcType.SERVER)
    serverMove(
        @RpcVar(DataType.INT) x: number,
        @RpcVar(DataType.INT) y: number
    ) {
        this.pos.x += x;
        this.pos.y += y;
    }
}

@NetComp("view")
export class View extends IComp {
    @NetVar(DataType.INT)
    color = 0xffffff;

    @Rpc(RpcType.SERVER)
    changeColor(@RpcVar(DataType.INT) inColor: number) {
        this.color = inColor;
    }
}

@NetComp("time")
export class ServerTime extends IComp {
    @NetVar(DataType.INT)
    timestamp: number = 0;

    @NetVar(Int)
    deltaTime: Int = new Int();
}
