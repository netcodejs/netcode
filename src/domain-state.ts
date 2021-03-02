export interface DomainState {
    entities: EntityState[];
}

export interface EntityState {
    id: number;
    version: number;
    comps: CompState[];
}

export interface CompState {
    id: number;
    type: number;
    props: PropState[];
}

export interface PropState {
    isDirty: boolean;
    value: any;
}
