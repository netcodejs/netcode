@unmanaged
export class Tuple2<T1, T2> {
    constructor(public item1: T1, public item2: T2) {
        assert(!isManaged<T1>());
        assert(!isManaged<T2>());
    }
}
@unmanaged
export class Tuple3<T1, T2, T3> {
    constructor(public item1: T1, public item2: T2, public item3: T3) {
        assert(!isManaged<T1>());
        assert(!isManaged<T2>());
        assert(!isManaged<T3>());
    }
}
@unmanaged
export class Tuple4<T1, T2, T3, T4> {
    constructor(
        public item1: T1,
        public item2: T2,
        public item3: T3,
        public item4: T4
    ) {
        assert(!isManaged<T1>());
        assert(!isManaged<T2>());
        assert(!isManaged<T3>());
        assert(!isManaged<T4>());
    }
}
