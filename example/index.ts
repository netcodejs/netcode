import { Domain, Entity, Rpc, RpcType, StringDataBuffer } from "../src";
import { Net } from "./mock-net";
import { Controller, Transform, Vector, View } from "./net-comp";
export * from "./net-comp";
export * from "./mock-net";

const COLOR_YELLOW = 0xf7d94c;
const COLOR_WHITE = 0xf8c3cd;
const CONTROLLER_MAP = {
    1: { left: "a", right: "d" },
    2: { left: "", right: "" },
} as any;
export abstract class Base {
    readonly domain: Domain;
    protected ctx: CanvasRenderingContext2D;
    bg = "#947A6D";
    myLoop: FrameRequestCallback;

    isPrediction = false;
    isInterpolation = false;
    isRollback = false;

    lastTimeStamp = 0;
    actorArr: Entity[] = [];

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
        this.loop(0);
    }

    loop(timestamp: number) {
        const dt = this.lastTimeStamp == 0 ? 0 : timestamp - this.lastTimeStamp;
        this.lastTimeStamp = timestamp;
        this.renderBg();
        this.domain.update(dt / 1000);
    }

    initScene() {
        const v1 = new View();
        v1.bindCanvas(this.ctx);
        const t1 = new Transform();
        t1.pos.x = 30;
        t1.pos.y = 35;
        const c1 = new Entity(v1, t1, new Controller());

        const v2 = new View();
        v2.bindCanvas(this.ctx);
        const t2 = new Transform();
        t2.pos.x = 50;
        t2.pos.y = 35;
        const c2 = new Entity(v2, t2, new Controller());

        this.domain.reg(c1);
        this.domain.reg(c2);

        v1.changeColor(COLOR_YELLOW);
        v2.changeColor(COLOR_WHITE);

        this.actorArr.push(c1, c2);
    }

    renderBg() {
        this.canvas.width = this.canvas.width;
        const ctx = this.ctx;

        ctx.fillStyle = this.bg;
        ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
    }

    receive(data: any) {
        if (this.isPrediction) return;
        this.domain.setData(data);
    }
}

export class Server extends Base {
    sendAccumulator = 0;
    constructor(readonly canvas: HTMLCanvasElement) {
        super("server", canvas, RpcType.SERVER);
    }

    loop(dt: number) {
        super.loop(dt);
        this.sendAccumulator += this.domain.renderTime.delta;
        if (this.sendAccumulator >= 1 / 20) {
            const outData = this.domain.asData();
            Net.send(outData).c1();
            Net.send(outData).c2();
            this.sendAccumulator = 0;
        }
    }
}

export class Client extends Base {
    constructor(readonly index: number, readonly canvas: HTMLCanvasElement) {
        super("client" + index, canvas, RpcType.CLIENT);
        this.actorArr[index - 1]
            .get(Controller)
            ?.setEnable(true, CONTROLLER_MAP[index]);
    }

    loop(dt: number) {
        super.loop(dt);
        const outData = this.domain.asData();
        Net.send(outData).server();
    }
}
