import { IComp } from "../comp-interface";
import { Short } from "../base-dirty-data";
import { Role, RpcType } from "../comp-schema";
import { Rpc, Serable, Var } from "../comp.dec";

@Serable
export class RoleComp extends IComp implements ISerable {
    //#region property
    @Var
    $local = new Short(Role.AUTHORITY);
    get local(): Role {
        return this.$local.value;
    }
    // set local(value: Role) {
    //     this.$local.value = value;
    // }

    @Var
    $remote = new Short(Role.SIMULATED_PROXY);
    get remote(): Role {
        return this.$remote.value;
    }
    set remote(value: Role) {
        this.$remote.value = value;
    }
    //#endregion

    //#region interface ISerable implement
    ser(buffer: IDataBufferWriter<any>): void {
        this.$local.ser(buffer);
        this.$remote.ser(buffer);
    }

    deser(buffer: IDataBufferReader<any>): void {
        this.$remote.deser(buffer);
        this.$local.deser(buffer);
    }
    //#endregion

    @Rpc(Role.AUTHORITY)
    upgrade: () => Promise<boolean>;

    async upgrade_impl() {
        if (
            this.local == Role.AUTHORITY &&
            this.remote != Role.AUTONMOUS_PROXY
        ) {
            this.remote = Role.AUTONMOUS_PROXY;
            return true;
        }
        return false;
    }

    @Rpc(Role.AUTHORITY)
    downgrade: () => Promise<boolean>;

    async downgrade_impl() {
        if (
            this.local == Role.AUTHORITY &&
            this.remote != Role.SIMULATED_PROXY
        ) {
            this.remote = Role.SIMULATED_PROXY;
            return true;
        }
        return false;
    }

    init() {
        const type = this.domain.option.type;
        this.$local.value =
            type === RpcType.SERVER ? Role.AUTHORITY : Role.SIMULATED_PROXY;
        this.$remote.value =
            type === RpcType.SERVER ? Role.SIMULATED_PROXY : Role.AUTHORITY;
    }
}
