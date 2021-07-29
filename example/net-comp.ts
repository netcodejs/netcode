import {
    DataType,
    IComp,
    Int,
    NetSerable,
    NetVar,
    Rpc,
    RpcType,
    RpcVar,
} from "../src";

@NetSerable("vec")
export class Vector extends IComp {
    @NetVar(DataType.INT)
    x: number = 0;
    @NetVar(DataType.INT)
    y: number = 0;
}

@NetSerable("trans")
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

@NetSerable("view")
export class View extends IComp {
    @NetVar(DataType.INT)
    color = 0xffffff;

    @Rpc(RpcType.SERVER)
    changeColor(@RpcVar(DataType.INT) inColor: number) {
        this.color = inColor;
    }

    private _ctx?: CanvasRenderingContext2D;

    bindCanvas(ctx: CanvasRenderingContext2D) {
        this._ctx = ctx;
    }

    update() {
        const trs = this.get(Transform);
        const view = this.get(View);
        if (!this._ctx || !trs || !view) return;
        this.drawBall(this._ctx, trs.pos, "#" + view.color.toString(16));
    }

    protected drawBall(
        ctx: CanvasRenderingContext2D,
        pos: Vector,
        color: string
    ) {
        ctx.fillStyle = color;
        ctx.beginPath();
        ctx.arc(pos.x, pos.y, 26, 0, 2 * Math.PI);
        ctx.fill();
    }
}

@NetSerable("time")
export class ServerTime extends IComp {
    @NetVar(DataType.INT)
    timestamp: number = 0;

    @NetVar(Int)
    deltaTime: Int = new Int();
}
