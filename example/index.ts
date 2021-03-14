import {
    DataType,
    Domain,
    Entity,
    NetComp,
    NetVar,
    StringDataBuffer,
} from "../src";

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
}

export class Base {
    readonly domain: Domain;
    protected ctx: CanvasRenderingContext2D;
    bg = "#947A6D";
    yelloBall = "#F7D94C";
    whiteBall = "#F8C3CD";
    myLoop: FrameRequestCallback;
    constructor(name: string, readonly canvas: HTMLCanvasElement) {
        this.domain = Domain.Create(name, StringDataBuffer);
        this.ctx = canvas.getContext("2d")!;
        this.canvas.width = 1000;
        this.canvas.height = 70;
        this.ctx.fillStyle = this.bg;
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
        this.myLoop = this.loop.bind(this);
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
        const c1 = d.get(0)!;
        if (c1) {
            const p1 = c1.$comps.trans as Transform;
            ctx.fillStyle = this.whiteBall;
            ctx.beginPath();
            ctx.arc(p1.pos.x, p1.pos.y, 26, 0, 2 * Math.PI);
            ctx.fill();
        }

        const c2 = d.get(1)!;
        if (c2) {
            const p2 = c2.$comps.trans as Transform;
            ctx.fillStyle = this.yelloBall;
            ctx.beginPath();
            ctx.arc(p2.pos.x, p2.pos.y, 26, 0, 2 * Math.PI);
            ctx.fill();
        }
    }
}

export class Server extends Base {
    c1: Entity;
    c1Dir = 5;
    c2: Entity;
    constructor(readonly canvas: HTMLCanvasElement) {
        super("server", canvas);
        const client1 = new Entity();
        this.c1 = client1;
        const t1 = client1.add(Transform);
        t1.pos.y = 35;
        t1.pos.x = 50;
        const client2 = new Entity();
        this.c2 = client2;
        const t2 = client2.add(Transform);
        t2.pos.y = 35;
        t2.pos.x = 30;

        this.domain.reg(client1);
        this.domain.reg(client2);
    }

    loop(time: number) {
        this.c1.$comps.trans.pos.x += this.c1Dir;
        if (
            this.c1.$comps.trans.pos.x > 800 ||
            this.c1.$comps.trans.pos.x < 0
        ) {
            this.c1Dir = -this.c1Dir;
        }
        super.loop(time);
    }
}

export class Client extends Base {
    static clients: Client[] = [];
    constructor(readonly canvas: HTMLCanvasElement) {
        super("client" + Math.random(), canvas);
    }
}
