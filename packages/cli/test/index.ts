import { param, auto, cls, prop } from "./abc.dec";

type u32 = number;

@auto
export class Abcf {
    @auto
    a?: Abce;
}

@auto
export class Abc {
    @auto
    a: number = 0;
    @auto
    b: u32[] = [1];
}

@cls("hhh")
export class Abcd {
    @auto
    a: number = 0;

    @auto
    heihei(nihao: u32, @param("u16") hihi: number) {}
}

@auto
export class Abce {
    @auto
    a: number = 0;
}

export class Abcg {
    @auto
    a: number = 0;
}

export * from "./heihei";
