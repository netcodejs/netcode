import { Domain, Entity, Rpc, RpcType, StringDataBuffer } from "../src";
import { Net } from "./mock-net";
import { ServerTime, Transform, Vector, View } from "./net-comp";
export * from "./net-comp";
export * from "./mock-net";

export class Time {
    deltaTime: number = 0;
    fixedDeltaTime: number = (1 / 10) * 1000;

    fixedTimestamp: number = 0;
    timestamp: number = 0;
}

export abstract class Base {
    readonly domain: Domain;
    protected ctx: CanvasRenderingContext2D;
    bg = "#947A6D";
    yelloBall = 0xf7d94c;
    whiteBall = 0xf8c3cd;
    myLoop: FrameRequestCallback;
    time = new Time();
    doInterpolating = false;

    c1!: Entity;
    c2!: Entity;
    remote!: Entity;
    isPrediction = false;
    isInterpolation = false;
    isRollback = false;

    private _preTimestamp = 0;
    private _fixedTimeAccumulator = 0;
    constructor(
        name: string,
        readonly canvas: HTMLCanvasElement,
        rpcType: RpcType
    ) {
        this.domain = Domain.Create(name, {
            dataBufCtr: StringDataBuffer,
            type: rpcType,
        });
        this.ctx = canvas.getContext("2d")!;
        this.canvas.width = 950;
        this.canvas.height = 70;
        this.ctx.fillStyle = this.bg;
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
        this.myLoop = this.loop.bind(this);
        this.initScene();
        this.render();
    }

    update() {}

    fixedUpdate() {}

    lateUpdate() {}

    loop(timestamp: number) {
        const Time = this.time;
        if (this._preTimestamp === 0) {
            Time.deltaTime = (1 / 60) * 1000;
        } else {
            Time.deltaTime = timestamp - this._preTimestamp;
        }

        Time.timestamp += Time.deltaTime;
        this.update();

        this._preTimestamp = timestamp;
        this._fixedTimeAccumulator += Time.deltaTime;

        let count = 0;
        while (this._fixedTimeAccumulator >= Time.fixedDeltaTime && count < 3) {
            count++;
            this._fixedTimeAccumulator -= Time.fixedDeltaTime;
            Time.fixedTimestamp += Time.fixedDeltaTime;
            this.fixedUpdate();
        }
        this.render();
        this.lateUpdate();
    }

    render() {
        requestAnimationFrame(this.myLoop);
        const Time = this.time;
        const d = this.domain;

        this.canvas.width = this.canvas.width;
        const ctx = this.ctx;

        ctx.fillStyle = this.bg;
        ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
        const c1 = this.c1;
        if (c1) {
            const p1 = c1.$comps.trans as Transform;
            const v1 = c1.$comps.view as View;
            this._drawBall(ctx, p1.pos, "#" + v1.color.toString(16));
        }

        const c2 = this.c2;
        if (c2) {
            const p2 = c2.$comps.trans as Transform;
            const v2 = c2.$comps.view as View;
            this._drawBall(ctx, p2.pos, "#" + v2.color.toString(16));
        }
    }

    protected _drawBall(
        ctx: CanvasRenderingContext2D,
        pos: Vector,
        color: string
    ) {
        ctx.fillStyle = color;
        ctx.beginPath();
        ctx.arc(pos.x, pos.y, 26, 0, 2 * Math.PI);
        ctx.fill();
    }

    initScene() {
        const trans1 = new Transform();
        trans1.pos.y = 35;
        trans1.pos.x = 50;
        const view1 = new View();
        const ent1 = new Entity(trans1, view1);

        const trans2 = new Transform();
        trans2.pos.y = 35;
        trans2.pos.x = 30;
        const view2 = new View();
        const ent2 = new Entity(trans2, view2);

        const remote = new Entity(new ServerTime());

        this.c1 = ent1;
        this.c2 = ent2;
        this.remote = remote;
        this.domain.reg(remote);
        this.domain.reg(ent1);
        this.domain.reg(ent2);
    }

    onKeyDown(ev: KeyboardEvent): void {}

    onKeyUp(ev: KeyboardEvent): void {}

    receive(data: any) {
        if (this.isPrediction) return;
        this.domain.setData(data);
    }
}

export class Server extends Base {
    constructor(readonly canvas: HTMLCanvasElement) {
        super("server", canvas, RpcType.SERVER);
    }

    loop(dt: number) {
        super.loop(dt);
        const t1 = this.c1.$comps.trans as Transform;
        const t2 = this.c2.$comps.trans as Transform;
    }

    fixedUpdate() {
        const Time = this.time;
        const serverTime = this.remote.get(ServerTime)!;
        serverTime.timestamp = Time.fixedTimestamp;

        const c1 = Net.client1;
        const c2 = Net.client2;
        const data = this.domain.asData();
        Net.send(data).recv(c1.receive, c1);
        Net.send(data).recv(c2.receive, c2);
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

export class Client extends Base {
    private _input: UserInput = { isLeft: false, isRight: false };
    constructor(
        readonly index: number,
        readonly canvas: HTMLCanvasElement,
        readonly controlMap: ControlKeyboarnMap
    ) {
        super("client" + index, canvas, RpcType.CLIENT);
        this.mine.$comps.view.changeColor(this.color);
        window.addEventListener("keydown", this.onKeyDown.bind(this));
        window.addEventListener("keyup", this.onKeyUp.bind(this));
    }

    get mine() {
        return this.index == 1 ? this.c1 : this.c2;
    }

    get color() {
        return this.index == 1 ? this.yelloBall : this.whiteBall;
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

    fixedUpdate() {
        const input = this._input;
        const trans = this.mine.get(Transform)!;
        const dirX = (input.isLeft ? -1 : 0) + (input.isRight ? 1 : 0);
        trans.serverMove(dirX * this.time.fixedDeltaTime * 0.1, 0);

        const data = this.domain.asData();
        Net.send(data).recv(Net.server.receive, Net.server);

        const serverTime = this.remote.get(ServerTime)!;
        this.time.timestamp =
            this.time.timestamp * 0.5 + serverTime.timestamp * 0.5;
        console.log(serverTime.timestamp - this.time.timestamp);
    }
}
