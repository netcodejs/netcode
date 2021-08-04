import {
    DataType,
    IComp,
    NetSerable,
    NetVar,
    Role,
    Rpc,
    RpcType,
    RpcVar,
} from "../src";

@NetSerable("vec")
export class Vector {
    @NetVar(DataType.INT)
    x: number = 0;
    @NetVar(DataType.INT)
    y: number = 0;
}

@NetSerable("trans")
export class Transform extends IComp {
    @NetVar(Vector)
    pos = new Vector();

    @Rpc(Role.AUTHORITY)
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

    @Rpc(Role.AUTHORITY)
    changeColor(@RpcVar(DataType.INT) inColor: number) {
        this.color = inColor;
    }

    private _ctx?: CanvasRenderingContext2D;

    bindCanvas(ctx: CanvasRenderingContext2D) {
        this._ctx = ctx;
    }

    renderUpdate() {
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

export interface ControlKeyboarnMap {
    left: string;
    right: string;
}

export interface UserInput {
    isLeft: boolean;
    isRight: boolean;
}

export class Controller extends IComp {
    private _input: UserInput = { isLeft: false, isRight: false };

    constructor(readonly controlMap: ControlKeyboarnMap) {
        super();
        window.addEventListener("keydown", this.onKeyDown.bind(this));
        window.addEventListener("keyup", this.onKeyUp.bind(this));
    }

    onKeyDown(ev: KeyboardEvent) {
        const map = this.controlMap;
        if (ev.key === map.left) {
            this._input.isLeft = true;
        } else if (ev.key === map.right) {
            this._input.isRight = true;
        }
    }

    onKeyUp(ev: KeyboardEvent) {
        const map = this.controlMap;
        if (ev.key === map.left) {
            this._input.isLeft = false;
        } else if (ev.key === map.right) {
            this._input.isRight = false;
        }
    }

    logicUpdate() {
        const input = this._input;
        const trans = this.get(Transform)!;
        const dirX = (input.isLeft ? -1 : 0) + (input.isRight ? 1 : 0);
        trans.serverMove(dirX * this.domain.logicTime.delta * 0.1, 0);
    }
}
