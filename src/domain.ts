import { LogicTimeComp, RenderTimeComp, Role } from "./builtin-comp";
import { DataTypeVoid, ISchema, RpcType, SCHEME_KEY } from "./comp-schema";
import { IDataBuffer, SupportNetDataType } from "./data/serializable";
import { Entity } from "./entity";
import { IComp } from "./comp-interface";
import { NULL_NUM } from "./macro";
import {
    MessageEntityInfo,
    MessageManager,
    MessageRpcCallbackInfo,
    MessageRpcInfo,
} from "./message-manager";
import { asSerable, assert } from "./misc";
import { ArrayMap } from "./array-map";
import { compName2ctr, hash2compName, hash2RpcName } from "./global-record";
import { StringDataBuffer } from "./data/string-databuffer";
import { deserValue, serValue } from "./comp-fixup";

class EntityNotValidError extends Error {}
class EntityRepeatRegisteredError extends Error {}
class EntityGroupOutOfRangeYouCanOpenAutoResize extends Error {}
class DomainDuplicated extends Error {}
class DomainLengthLimit extends Error {}
class DomainCompCountNotMatch extends Error {}

export type DomainConstructorParamters<TT extends new (...args: any) => any> =
    TT extends new (_: any, ...args: infer P) => Domain ? P : never;

export interface DomainOption<T extends SupportNetDataType = string> {
    dataBufCtr?: { new (...args: any[]): IDataBuffer<T> };
    type: RpcType;
    capacity?: number;
    autoResize?: boolean;
    fixedTimeSec?: number;
}

function HandleDomainDefautlValue<T extends DomainOption<any>>(option: T) {
    if (typeof option.dataBufCtr === "undefined") {
        option.dataBufCtr = StringDataBuffer;
    }
    if (typeof option.capacity === "undefined") {
        option.capacity = 50;
    }
    if (typeof option.autoResize === "undefined") {
        option.autoResize = true;
    }
    if (typeof option.fixedTimeSec === "undefined") {
        option.fixedTimeSec = 0.2;
    }
    return option as Required<Readonly<T>>;
}

export class Domain<T extends SupportNetDataType = any> {
    private static _name2domainMap: ArrayMap<string, Domain> = new ArrayMap();
    //#region static methods
    static Create<T extends SupportNetDataType = any>(
        name: string,
        option: DomainOption<T>
    ) {
        if (this._name2domainMap.has(name)) {
            throw new DomainDuplicated(name);
        }
        const news: Domain<T> = new Domain(option);
        const domainIndex = this._name2domainMap.set(name, news);
        news._index = domainIndex;
        return news;
    }

    static Get<T extends SupportNetDataType>(name: string = "main") {
        return this._name2domainMap.get(name) as Domain<T>;
    }

    static GetByEntity(entity: Entity) {
        const domainIndex = entity.id;
        const domain = this._name2domainMap.values[domainIndex];
        if (domain.isValid(entity)) {
            return domain;
        }
        return null;
    }

    static Clear() {
        this._name2domainMap.clear();
    }
    //#endregion

    //#region member variables
    get index() {
        return this._index;
    }
    private _index = -1;
    private _entities: (Entity | null)[];
    private _entitiesLength = 0;
    public get entities() {
        return this._entities;
    }
    public get length() {
        return this._entitiesLength;
    }
    private _entityVersion: number[];
    private _destroyEntityId: number[];
    private _entityIdCursor = 0;
    private _internalMsgMng: MessageManager<T>;
    public readonly readonlyInternalMsgMng!: MessageManager<T>;

    private _fixedSecAccumulator = 0;
    public readonly time: Entity;
    public readonly logicTime: LogicTimeComp;
    public readonly renderTime: RenderTimeComp;

    private readonly _option: DomainOption<T>;
    get option() {
        return this._option as Required<Readonly<DomainOption<T>>>;
    }
    //#endregion
    public constructor(option: DomainOption<T>) {
        var requiredOption = HandleDomainDefautlValue(option);
        this._option = requiredOption;
        this._entities = new Array<Entity>(requiredOption.capacity);
        this._entityVersion = new Array<number>(requiredOption.capacity);
        this._entityVersion.fill(0);
        this._destroyEntityId = new Array<number>();
        this._internalMsgMng = new MessageManager(requiredOption.dataBufCtr);
        this.readonlyInternalMsgMng = this._internalMsgMng;

        this.logicTime = new LogicTimeComp();
        this.renderTime = new RenderTimeComp();
        this.time = new Entity(this.logicTime, this.renderTime);
        this.logicTime.delta = this.option.fixedTimeSec;

        this.reg(this.time);
    }

    //#region public methods
    reg(entity: Entity) {
        if (this.isValid(entity))
            throw new EntityRepeatRegisteredError(entity.toString());
        if (this._entityIdCursor == this._option.capacity) {
            if (this._option.autoResize) {
                this.resize(Math.ceil(this._option.capacity * 1.5));
            } else
                throw new EntityGroupOutOfRangeYouCanOpenAutoResize(
                    `Domain: capacity: ${this._option.capacity}; ` +
                        entity.toString()
                );
        }

        const id = this._getEntityId();
        const version = this._entityVersion[id];
        this._reg(entity, id, version);
        entity["_init"]();
    }

    hasReg(entity: Entity) {
        return this.isValid(entity);
    }

    unregWithoutValidation(entity: Entity) {
        const index = entity.id;
        this._entityVersion[index]++;
        this._unreg(entity);
        this._destroyEntityId.push(entity.id);
        this._entities[index] = null;
        entity["_destroy"]();
    }

    unreg(entity: Entity) {
        if (!this.isValid(entity))
            throw new EntityNotValidError(entity.toString());
        this.unregWithoutValidation(entity);
    }

    get(id: number) {
        return this._entities[id];
    }

    resize(newSize: number) {
        const oldSize = this._option.capacity;
        this._entities.length = newSize;
        this._entityVersion.length = newSize;
        this._entityVersion.fill(0, oldSize, newSize);
        this._option.capacity = newSize;
    }

    isValid(entity: Entity) {
        return (
            entity.id != NULL_NUM &&
            entity.version != NULL_NUM &&
            entity.version == this._entityVersion[entity.id]
        );
    }

    asData(): T {
        const isServer = this._option.type == RpcType.SERVER;
        const outBuf = this._internalMsgMng.inoutbuffer;
        const stateBuf = this._internalMsgMng.statebuffer;
        const rpcBuf = this._internalMsgMng.rpcbuffer;
        const rpcCbBuf = this._internalMsgMng.rpcCallbackBuffer;

        outBuf.reset();

        if (isServer) {
            this._internalMsgMng.startSendEntityAndComps();
            this._internalMsgMng.startSendRpc();
            this._internalMsgMng.startSendRpcCallback();

            this._serEntityAndComps();
            const stateLen = stateBuf.writerCursor;
            const rpcLen = rpcBuf.writerCursor;
            const rpcCbLen = rpcCbBuf.writerCursor;

            outBuf
                .writeBoolean(isServer)
                .writeUlong(stateLen)
                .writeUlong(rpcLen)
                .writeUlong(rpcCbLen)
                .append(stateBuf)
                .append(rpcBuf)
                .append(rpcCbBuf);

            this._internalMsgMng.endSendEntityAndComps();
            this._internalMsgMng.endSendRpc();
            this._internalMsgMng.endSendRpcCallback();
        } else {
            this._internalMsgMng.startSendRpc();
            this._internalMsgMng.startSendRpcCallback();

            const rpcLen = rpcBuf.writerCursor;
            const rpcCbLen = rpcCbBuf.writerCursor;

            outBuf
                .writeBoolean(isServer)
                .writeUlong(rpcLen)
                .writeUlong(rpcCbLen)
                .append(rpcBuf)
                .append(rpcCbBuf);

            this._internalMsgMng.endSendRpc();
            this._internalMsgMng.endSendRpcCallback();
        }

        return outBuf.get();
    }

    setData(source: T) {
        const inBuf = this._internalMsgMng.inoutbuffer;
        const stateBuf = this._internalMsgMng.statebuffer;
        const rpcBuf = this._internalMsgMng.rpcbuffer;
        const rpcCbBuf = this._internalMsgMng.rpcCallbackBuffer;

        inBuf.set(source);
        const isServer = inBuf.readBoolean();

        if (isServer) {
            const stateLen = inBuf.readUlong();
            const rpcLen = inBuf.readUlong();
            const rpcCbLen = inBuf.readUlong();

            const stateStart = inBuf.readerCursor;
            const stateEnd = stateStart + stateLen;

            const rpcStart = stateEnd;
            const rpcEnd = rpcStart + rpcLen;

            const rpcCbStart = rpcEnd;
            const rpcCbEnd = rpcCbStart + rpcCbLen;

            stateBuf.set(source, stateStart, stateEnd);
            rpcBuf.set(source, rpcStart, rpcEnd);
            rpcCbBuf.set(source, rpcCbStart, rpcCbEnd);

            this._internalMsgMng.startRecvEntityAndComps();
            this._derEntityAndComps();
            this._internalMsgMng.endRecvEntityAndComps();

            this._internalMsgMng.startRecvRpc();
            this._deserRpcs();
            this._internalMsgMng.endRecvRpc();

            this._internalMsgMng.startRecvRpcCallback();
            this._deserRpcCallbacks();
            this._internalMsgMng.endRecvRpcCallback();
        } else {
            const rpcLen = inBuf.readUlong();
            const rpcCbLen = inBuf.readUlong();

            const rpcStart = inBuf.readerCursor;
            const rpcEnd = rpcStart + rpcLen;

            const rpcCbStart = rpcEnd;
            const rpcCbEnd = rpcCbStart + rpcCbLen;

            rpcBuf.set(source, rpcStart, rpcEnd);
            rpcCbBuf.set(source, rpcCbStart, rpcCbEnd);

            this._internalMsgMng.startRecvRpc();
            this._deserRpcs();
            this._internalMsgMng.endRecvRpc();

            this._internalMsgMng.startRecvRpcCallback();
            this._deserRpcCallbacks();
            this._internalMsgMng.endRecvRpcCallback();
        }
    }

    update(dtSec: number) {
        this._fixedSecAccumulator += dtSec;
        const fixedDeltaTime = this.logicTime.delta;
        while (this._fixedSecAccumulator > fixedDeltaTime) {
            this._fixedSecAccumulator -= fixedDeltaTime;
            this.logicTime.duration += fixedDeltaTime;
            for (let i = 0, len = this._entitiesLength; i < len; i++) {
                const ent = this._entities[i];
                if (!ent) continue;
                if (
                    ent.role.local === Role.AUTHORITY ||
                    ent.role.local === Role.AUTONMOUS_PROXY
                ) {
                    ent["_logicUpdate"]();
                }
            }
        }

        this.renderTime.delta = dtSec;
        this.renderTime.duration += dtSec;
        for (let i = 0, len = this._entitiesLength; i < len; i++) {
            const ent = this._entities[i];
            if (!ent) continue;
            ent["_renderUpdate"]();
        }
    }

    //#endregion

    //#region protected methods
    protected _reg(entity: Entity, id: number, version: number) {
        entity["_id"] = id;
        entity["_version"] = version;
        entity["_domain"] = this;
        const index = entity.id;
        this._entities[index] = entity;
        if (index >= this._entitiesLength) {
            this._entitiesLength = index + 1;
        }
    }

    protected _unreg(entity: Entity) {
        entity["_id"] = NULL_NUM;
        entity["_version"] = NULL_NUM;
        entity["_domain"] = undefined;
    }

    protected _serEntityAndComps() {
        for (let i = 0, len = this._entitiesLength; i < len; i++) {
            const ent = this._entities[i];
            if (!ent) {
                this._internalMsgMng.sendEntity(
                    i,
                    this._entityVersion[i],
                    0,
                    true
                );
                continue;
            }
            this._internalMsgMng.sendEntity(
                ent.id,
                ent.version,
                ent.comps.length,
                false
            );
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
            ent.role.ser(this._internalMsgMng.statebuffer);
        }
    }

    protected _derEntityAndComps() {
        let params: MessageEntityInfo | null;
        while ((params = this._internalMsgMng.recvEntity())) {
            let ent = this._entities[params.entityId];
            if (
                ent &&
                (ent.version != params.entityVersion || params.destoryed)
            ) {
                this.unreg(ent);
                ent = null;
            }
            if (!params.destoryed) {
                ent = ent
                    ? this._derEntityAndCompsUnderExisted(params, ent)
                    : this._derEntityAndCompsUnderUnExsited(params);
            }
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
        entity.role.deser(this._internalMsgMng.statebuffer);
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
        e.role.deser(this._internalMsgMng.statebuffer);
        this.reg(e);
        return e;
    }

    protected _deserRpcs() {
        let param: MessageRpcInfo | null;
        while ((param = this._internalMsgMng.recvRpc())) {
            const ent = this.get(param.entityId);
            if (!ent) continue;
            const comp = ent.comps[param.compIdx] as IComp &
                ISchema &
                Record<string, Function>;
            if (!comp) continue;
            const argus = comp["deser" + param.methodHash](
                this._internalMsgMng.rpcbuffer
            );
            const methodName = hash2RpcName[param.methodHash];
            const unknown = comp[methodName].apply(comp, argus);

            const s = comp[SCHEME_KEY];
            const ms = s.methods[methodName];
            if (ms.returnType != DataTypeVoid) {
                unknown?.then((result: any) => {
                    this._internalMsgMng.sendRpcCallback(param!);
                    serValue(
                        ms.returnType,
                        result,
                        this._internalMsgMng.rpcCallbackBuffer
                    );
                });
            }
        }
    }

    protected _deserRpcCallbacks() {
        let param: MessageRpcCallbackInfo | null;
        while ((param = this._internalMsgMng.recvRpcCallback())) {
            const ent = this.get(param.entityId);
            if (!ent) continue;
            const comp = ent.comps[param.compIdx] as IComp &
                ISchema &
                Record<string, Function>;
            if (!comp) continue;
            const s = comp[SCHEME_KEY];
            const methodName = hash2RpcName[param.methodHash];
            const ms = s.methods[methodName];
            let result: any;
            if (ms.returnType != DataTypeVoid) {
                result = deserValue(
                    ms.returnType,
                    this._internalMsgMng.rpcCallbackBuffer,
                    undefined,
                    ms.returnRefCtr
                );
            }
            const callbackRecord =
                this._internalMsgMng.getRpcCallbackRecord(param);
            if (!callbackRecord) continue;
            callbackRecord.deferred.resolve(result);
        }
    }

    protected _getEntityId() {
        return this._destroyEntityId.length > 0
            ? this._destroyEntityId.unshift()
            : this._entityIdCursor++;
    }
    //#endregion
}
