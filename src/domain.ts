import { RpcType } from "./component-schema";
import { ISchema } from "./component-variable";
import { IDataBuffer, ISerable, SupportNetDataType } from "./data/serializable";
import { Entity, IComp } from "./base";
import { NULL_NUM } from "./macro";
import {
    MessageEntityInfo,
    MessageManager,
    MessageRpcInfo,
} from "./message-manager";
import { asSerable, assert } from "./misc";
import { ArrayMap } from "./array-map";
import { compName2ctr, hash2compName, hash2RpcName } from "./global-record";

class EntityNotValidError extends Error {}
class EntityRepeatRegisteredError extends Error {}
class EntityGroupOutOfRangeYouCanOpenAutoResize extends Error {}
class DomainDuplicated extends Error {}
class DomainLengthLimit extends Error {}
class DomainCompCountNotMatch extends Error {}

const DOMAIN_INDEX_BITS = 2;
const DOMAIN_MAX_INDEX = (1 << DOMAIN_INDEX_BITS) - 1;

export type DomainConstructorParamters<TT extends new (...args: any) => any> =
    TT extends new (_: any, ...args: infer P) => Domain ? P : never;
export class Domain<T extends SupportNetDataType = any> {
    private static _name2domainMap: ArrayMap<string, Domain> = new ArrayMap();

    static Create<T extends SupportNetDataType = any>(
        name: string,
        dataBufferType: new (...args: any) => IDataBuffer<T>,
        ...args: DomainConstructorParamters<typeof Domain>
    ) {
        if (this._name2domainMap.has(name)) {
            throw new DomainDuplicated(name);
        }
        if (this._name2domainMap.readonlyValues.length >= DOMAIN_MAX_INDEX) {
            throw new DomainLengthLimit();
        }
        const news: Domain<T> = new Domain(dataBufferType, ...args);
        const domainIndex = this._name2domainMap.set(name, news);
        news._index = domainIndex;
        return news;
    }

    static Get<T extends SupportNetDataType>(name: string = "main") {
        return this._name2domainMap.get(name) as Domain<T>;
    }

    static GetByEntity(entity: Entity) {
        const domainIndex = entity.id & DOMAIN_MAX_INDEX;
        const domain = this._name2domainMap.values[domainIndex];
        if (domain.isValid(entity)) {
            return domain;
        }
        return null;
    }

    static Clear() {
        this._name2domainMap.clear();
    }

    get index() {
        return this._index;
    }
    private _index = -1;
    private _entities: (Entity | null)[];
    public get entities() {
        return this._entities;
    }
    private _entityVersion: number[];
    private _destroyEntityId: number[];
    private _entityIdCursor = 0;
    private _internalMsgMng: MessageManager<T>;
    public readonly readonlyInternalMsgMng!: MessageManager<T>;

    public constructor(
        public dataBufCtr: { new (...args: any[]): IDataBuffer<T> },
        readonly type: RpcType,
        public capacity = 50,
        public autoResize = true
    ) {
        this._entities = new Array<Entity>(capacity);
        this._entityVersion = new Array<number>(capacity);
        this._entityVersion.fill(0);
        this._destroyEntityId = new Array<number>();
        this._internalMsgMng = new MessageManager(
            new dataBufCtr(),
            new dataBufCtr(),
            new dataBufCtr()
        );
        this.readonlyInternalMsgMng = this._internalMsgMng;
    }

    reg(entity: Entity) {
        if (this.isValid(entity))
            throw new EntityRepeatRegisteredError(entity.toString());
        if (this._entityIdCursor == this.capacity) {
            if (this.autoResize) {
                this.resize(Math.ceil(this.capacity * 1.5));
            } else
                throw new EntityGroupOutOfRangeYouCanOpenAutoResize(
                    `Domain: capacity: ${this.capacity}; ` + entity.toString()
                );
        }

        const id = this._getEntityId();
        const version = this._entityVersion[id];
        this._reg(entity, id, version);
        entity["_init"](this);
    }

    private _reg(entity: Entity, id: number, version: number) {
        entity["_id"] = id;
        entity["_version"] = version;
        const index = this._getEntityIndexById(entity.id);
        this._entities[index] = entity;
    }

    hasReg(entity: Entity) {
        return this.isValid(entity);
    }

    unregWithoutValidation(entity: Entity) {
        const index = this._getEntityIndexById(entity.id);
        this._entityVersion[index]++;
        this._unreg(entity);
        this._destroyEntityId.push(entity.id);
        this._entities[index] = null;
        entity["_destroy"](this);
    }

    unreg(entity: Entity) {
        if (!this.isValid(entity))
            throw new EntityNotValidError(entity.toString());
        this.unregWithoutValidation(entity);
    }

    private _unreg(entity: Entity) {
        entity["_id"] = NULL_NUM;
        entity["_version"] = NULL_NUM;
    }

    get(id: number) {
        const domainId = id & DOMAIN_MAX_INDEX;
        if (domainId != this._index) return null;
        return this.getWithoutCheck(id);
    }

    getWithoutCheck(id: number) {
        return this._entities[this._getEntityIndexById(id)];
    }

    resize(newSize: number) {
        const oldSize = this.capacity;
        this._entities.length = newSize;
        this._entityVersion.length = newSize;
        this._entityVersion.fill(0, oldSize, newSize);
        this.capacity = newSize;
    }

    isValid(entity: Entity) {
        return (
            entity.id != NULL_NUM &&
            entity.version != NULL_NUM &&
            entity.version ==
                this._entityVersion[this._getEntityIndexById(entity.id)]
        );
    }

    protected _serEntityAndComps() {
        for (let ent of this._entities) {
            if (!ent) continue;
            this._internalMsgMng.sendEntity(ent, false);
            const comps = ent.comps;
            for (
                let compIdx = 0, len = comps.length;
                compIdx < len;
                compIdx++
            ) {
                const comp = comps[compIdx] as ISchema & IComp;
                const serableComp = asSerable(comp);
                if (!serableComp) {
                    console.warn(
                        `[Domain#_ser(compIdx: ${compIdx}, entity: ${ent})]comp is not Serable!`
                    );
                    continue;
                }
                this._internalMsgMng.sendComp(compIdx, serableComp);
            }
        }
    }

    protected _derEntityAndComps() {
        let params: MessageEntityInfo | null;
        while ((params = this._internalMsgMng.recvEntity())) {
            let ent = this._entities[this._getEntityIndexById(params.entityId)];
            if (ent && ent.version != params.entityVersion) {
                this.unreg(ent);
                ent = null;
            }
            ent = ent
                ? this._derEntityAndCompsUnderExisted(params, ent)
                : this._derEntityAndCompsUnderUnExsited(params);
        }
    }

    protected _derEntityAndCompsUnderExisted(
        params: MessageEntityInfo,
        entity: Entity
    ) {
        const entComps = entity.comps;
        assert(params.compCount == entComps.length, DomainCompCountNotMatch);
        for (let i = 0, len = params.compCount; i < len; i++) {
            const compHeaderInfo = this._internalMsgMng.recvCompHeader();
            const comp = asSerable(entComps[compHeaderInfo.compIdx]);
            if (!comp) continue;
            this._internalMsgMng.recvCompBody(comp);
        }
        return entity;
    }

    protected _derEntityAndCompsUnderUnExsited(params: MessageEntityInfo) {
        const compArr = new Array<IComp>(params.compCount);
        for (let i = 0, len = params.compCount; i < len; i++) {
            const compHeaderInfo = this._internalMsgMng.recvCompHeader();
            const compName = hash2compName[compHeaderInfo.hash];
            const CompCtr = compName2ctr[compName];
            const comp = new CompCtr();
            this._internalMsgMng.recvCompBody(comp);
            compArr[compHeaderInfo.compIdx] = comp;
        }
        const e = new Entity(...compArr);
        this.reg(e);
        return e;
    }

    protected _deserRpcs() {
        let param: MessageRpcInfo | null;
        while ((param = this._internalMsgMng.recvRpc())) {
            const ent = this.getWithoutCheck(param.entityId);
            if (!ent) continue;
            const comp = ent.comps[param.compIdx] as any;
            if (!comp) continue;
            const argus = comp["deser" + param.methodHash](
                this._internalMsgMng.rpcbuffer
            );
            const methodName = hash2RpcName[param.methodHash];
            comp[methodName].apply(comp, argus);
        }
    }

    asData(): T {
        const isServer = this.type == RpcType.SERVER;
        const outBuf = this._internalMsgMng.inoutbuffer;
        const stateBuf = this._internalMsgMng.statebuffer;
        const rpcBuf = this._internalMsgMng.rpcbuffer;

        outBuf.reset();

        if (isServer) {
            this._internalMsgMng.startSendEntityAndComps();
            this._internalMsgMng.startSendRpc();

            this._serEntityAndComps();
            const stateLen = stateBuf.writerCursor;
            const rpcLen = rpcBuf.writerCursor;

            outBuf
                .writeBoolean(isServer)
                .writeUlong(stateLen)
                .writeUlong(rpcLen)
                .append(stateBuf)
                .append(rpcBuf);

            this._internalMsgMng.endSendEntityAndComps();
            this._internalMsgMng.endSendRpc();
        } else {
            this._internalMsgMng.startSendRpc();

            const rpcLen = rpcBuf.writerCursor;

            outBuf.writeBoolean(isServer).writeUlong(rpcLen).append(rpcBuf);

            this._internalMsgMng.endSendRpc();
        }

        return outBuf.get();
    }

    setData(source: T) {
        const inBuf = this._internalMsgMng.inoutbuffer;
        const stateBuf = this._internalMsgMng.statebuffer;
        const rpcBuf = this._internalMsgMng.rpcbuffer;

        inBuf.set(source);
        const isServer = inBuf.readBoolean();

        if (isServer) {
            const stateLen = inBuf.readUlong();
            const rpcLen = inBuf.readUlong();

            const stateStart = inBuf.readerCursor;
            const stateEnd = stateStart + stateLen;

            const rpcStart = stateEnd;
            const rpcEnd = rpcStart + rpcLen;

            stateBuf.set(source, stateStart, stateEnd);
            rpcBuf.set(source, rpcStart, rpcEnd);

            this._internalMsgMng.startRecvEntityAndComps();
            this._derEntityAndComps();
            this._internalMsgMng.endRecvEntityAndComps();

            this._internalMsgMng.startRecvRpc();
            this._deserRpcs();
            this._internalMsgMng.endRecvRpc();
        } else {
            const rpcLen = inBuf.readUlong();

            const rpcStart = inBuf.readerCursor;
            const rpcEnd = rpcStart + rpcLen + 1;

            rpcBuf.set(source, rpcStart, rpcEnd);

            this._internalMsgMng.startRecvRpc();
            this._deserRpcs();
            this._internalMsgMng.endRecvRpc();
        }
    }

    private _getEntityIndexById(id: number) {
        return id >> DOMAIN_INDEX_BITS;
    }

    private _getEntityId() {
        return this._destroyEntityId.length > 0
            ? this._destroyEntityId.unshift()
            : (this._entityIdCursor++ << DOMAIN_INDEX_BITS) + this._index;
    }
}
