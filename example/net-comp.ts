import { DataType, Int, NetComp, NetVar, Rpc, RpcType, RpcVar } from "../src";

@NetComp("vec")
export class Vector {
    @NetVar(DataType.int)
    x: number = 0;
    @NetVar(DataType.int)
    y: number = 0;
}

@NetComp("trans")
export class Transform {
    @NetVar(Vector)
    pos = new Vector();

    @Rpc(RpcType.SERVER)
    serverMove(
        @RpcVar(DataType.int) x: number,
        @RpcVar(DataType.int) y: number
    ) {
        this.pos.x += x;
        this.pos.y += y;
    }
}

@NetComp("view")
export class View {
    @NetVar(DataType.int)
    color = 0xffffff;

    @Rpc(RpcType.SERVER)
    changeColor(@RpcVar(DataType.int) inColor: number) {
        this.color = inColor;
    }
}

@NetComp("time")
export class ServerTime {
    @NetVar(DataType.int)
    timestamp: number = 0;

    @NetVar(Int)
    deltaTime: Int = new Int();
}
