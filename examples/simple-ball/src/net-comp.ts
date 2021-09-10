import { Float, IComp, Role, Rpc, Serable, Var } from "netcodejs";

@Serable
export class Vector {
    @Var
    x: int = 0;
    @Var
    y: int = 0;
    @Var
    z: Float[] = [];
}

@Serable
export class Transform extends IComp {
    @Var
    pos = new Vector();

    @Rpc(Role.AUTHORITY)
    serverMove!: (x: float, y: float) => void;

    serverMove_impl(x: float, y: float) {
        if (x != 0 || y != 0) {
            console.log(`${x} : ${y}`);
        }
        this.pos.x += x;
        this.pos.y += y;
    }
}

@Serable
export class View extends IComp {
    @Var
    color: int = 0xffffff;

    @Rpc(Role.AUTHORITY)
    changeColor!: (inColor: int) => void;
    changeColor_impl(inColor: int) {
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

@Serable
export class Controller extends IComp {
    private _input: UserInput = { isLeft: false, isRight: false };
    private _onKeyDownDel: any;
    private _onKeyUpDel: any;
    private _enable = false;
    controlMap!: ControlKeyboarnMap;
    getEnable() {
        return this._enable;
    }

    setEnable(value: false): void;
    setEnable(value: true, controlMap: ControlKeyboarnMap): void;
    setEnable(value: boolean, controlMap?: ControlKeyboarnMap): void {
        if (this._enable == value) return;
        this.controlMap = controlMap!;
        if (value) {
            window.addEventListener("keydown", this._onKeyDownDel);
            window.addEventListener("keyup", this._onKeyUpDel);
        } else {
            window.removeEventListener("keydown", this._onKeyDownDel);
            window.removeEventListener("keyup", this._onKeyUpDel);
        }
        this._enable = value;
    }

    constructor() {
        super();
        this._onKeyDownDel = this.onKeyDown.bind(this);
        this._onKeyUpDel = this.onKeyUp.bind(this);
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

    renderUpdate() {
        if (!this._enable) return;
        const input = this._input;
        const trans = this.get(Transform)!;
        const dirX = (input.isLeft ? -1 : 0) + (input.isRight ? 1 : 0);
        trans.serverMove(dirX * this.domain.renderTime.delta * 100, 0);
    }
}
