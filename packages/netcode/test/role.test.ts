import { Domain, Entity, Role, RpcType, StringDomainOption } from "../src";
import { genLoop, wait } from "./util";

beforeEach(() => {
    Domain.Clear();
});

test("rpc", async () => {
    const server = Domain.Create(
        "server",
        new StringDomainOption(RpcType.SERVER)
    );
    const client = Domain.Create(
        "client",
        new StringDomainOption(RpcType.CLIENT)
    );

    const loop = genLoop(server, client);

    const characterServer = new Entity();
    server.reg(characterServer);

    await loop();

    const characterClient = client.get(characterServer.id)!;
    expect(characterClient).toBeTruthy();

    let upgradeResult = false;
    let upgradeResultAgain = false;
    characterClient.role.upgrade().then((res) => {
        upgradeResult = res;
    });
    characterClient.role.upgrade().then((res) => {
        upgradeResultAgain = res;
    });
    await loop();
    expect(upgradeResult).toStrictEqual(true);
    expect(upgradeResultAgain).toStrictEqual(false);
    expect(Role[characterClient.role.local]).toEqual(
        Role[Role.AUTONMOUS_PROXY]
    );
    expect(Role[characterClient.role.remote]).toEqual(Role[Role.AUTHORITY]);

    let downgradeResult = false;
    let downgradeResultAgain = false;
    characterClient.role.downgrade().then((res) => {
        downgradeResult = res;
    });
    characterClient.role.downgrade().then((res) => {
        downgradeResultAgain = res;
    });
    await loop();
    expect(downgradeResult).toStrictEqual(true);
    expect(downgradeResultAgain).toStrictEqual(false);
    expect(Role[characterClient.role.local]).toEqual(
        Role[Role.SIMULATED_PROXY]
    );
    expect(Role[characterClient.role.remote]).toEqual(Role[Role.AUTHORITY]);
});
