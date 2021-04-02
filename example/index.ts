import { Domain, Entity, Rpc, RpcType, StringDataBuffer } from "../src";
import { Transform, View } from "./net-comp";
export * from "./net-comp";
export * from "./mock-net";

export class Base {
    readonly domain: Domain;
    protected ctx: CanvasRenderingContext2D;
    bg = "#947A6D";
    yelloBall = 0xf7d94c;
    whiteBall = 0xf8c3cd;
    myLoop: FrameRequestCallback;

    c1!: Entity;
    c2!: Entity;

    constructor(
        name: string,
        readonly canvas: HTMLCanvasElement,
        rpcType: RpcType
    ) {
        this.domain = Domain.Create(name, StringDataBuffer, rpcType);
        this.ctx = canvas.getContext("2d")!;
        this.canvas.width = 950;
        this.canvas.height = 70;
        this.ctx.fillStyle = this.bg;
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
        this.myLoop = this.loop.bind(this);
        this.initScene();
        this.render(0);
    }

    loop(time: number) {
        this.render(time);
    }
    render(time: number) {
        requestAnimationFrame(this.myLoop);
        this.canvas.width = this.canvas.width;
        const d = this.domain;
        const ctx = this.ctx;

        ctx.fillStyle = this.bg;
        ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
        const c1 = this.c1;
        if (c1) {
            const p1 = c1.$comps.trans as Transform;
            const v1 = c1.$comps.view as View;
            ctx.fillStyle = "#" + v1.color.toString(16);
            ctx.beginPath();
            ctx.arc(p1.pos.x, p1.pos.y, 26, 0, 2 * Math.PI);
            ctx.fill();
        }

        const c2 = this.c2;
        if (c2) {
            const p2 = c2.$comps.trans as Transform;
            const v2 = c2.$comps.view as View;
            ctx.fillStyle = "#" + v2.color.toString(16);
            ctx.beginPath();
            ctx.arc(p2.pos.x, p2.pos.y, 26, 0, 2 * Math.PI);
            ctx.fill();
        }
    }

    initScene() {
        const ent1 = new Entity();
        const trans1 = ent1.add(Transform);
        trans1.pos.y = 35;
        trans1.pos.x = 50;
        const view1 = ent1.add(View);

        const ent2 = new Entity();
        const trans2 = ent2.add(Transform);
        const view2 = ent2.add(View);
        trans2.pos.y = 35;
        trans2.pos.x = 30;

        this.c1 = ent1;
        this.c2 = ent2;
        this.domain.reg(ent1);
        this.domain.reg(ent2);
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

        t1.move(1, 0);
    }
}

export class Client extends Base {
    constructor(readonly index: number, readonly canvas: HTMLCanvasElement) {
        super("client" + index, canvas, RpcType.CLIENT);
        this.mine.$comps.view.changeColor(this.color);
    }

    get mine() {
        return this.index == 1 ? this.c1 : this.c2;
    }

    get color() {
        return this.index == 1 ? this.yelloBall : this.whiteBall;
    }
}
