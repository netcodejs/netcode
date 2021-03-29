<p align="center"><img src="http://cdn.atatakai.cn/netcode-logo-greg.png" /></p>
<p align="center">
  <a href="https://github.com/netcodejs/netcode/actions"><img src="https://github.com/netcodejs/netcode/actions/workflows/main.yml/badge.svg" alt="Build Status"></a>
  <a href="https://npmcharts.com/compare/netcodejs?minimal=true"><img src="https://img.shields.io/npm/dm/netcodejs.svg?sanitize=true" alt="Downloads"></a>
  <a href="https://www.npmjs.com/package/netcodejs"><img src="https://img.shields.io/npm/v/netcodejs.svg?sanitize=true" alt="Version"></a>
  <a href="https://www.npmjs.com/package/netcodejs"><img src="https://img.shields.io/npm/l/netcodejs.svg?sanitize=true" alt="License"></a>
</p>

# Overview

This is a game's state-synchronization framework for javascript/typescript.The first adapted game engine is CocosCreator, others would suport in future time.

# Basic Knowledge

## Component
### Variable
Component is not class in the real sense. All class with `@NetComp(className: string)` will be collectively referred to as component.You should mark the property that need synchronize with `@NetVar(type: DataType)` and `@NetArr(type: DataType)` for array.

```typescript
@NetComp("Vector")
class VectorComp {
    @NetVar(DataType.float)
    x: number = 0;
    @NetVar(DataType.float)
    y: number = 0;
    @NetArr(DataType.string)
    nameArr: string[] = [];
}
```

It allows for nested use.

```typescript
@NetComp("Transform")
class TransformComp {
    @NetVar(VectorComp)
    position: VectorComp = new VectorComp();
    @NetVar(DataType.float)
    rotation: number = 0;
}
```
### Rpc
Component also support rpc. When tagged with `@NetRpc(type: RpcType)`, the method could convert to networking function. 

```typescript
class TransformComp {
// ... as above
    @NetRpc(RpcType.CLIENT)
    move(x: number, y: number) {
        this.position.x += x;
        this.position.y += y;
    }
}
```

## Entity

In netcode, entity is unit node.It can include and manage a series of _components_. It can be registed by _Domain_. For usage refer to Cocos(Node-Component) or unity(GameObject-Monobehaviour).

```typescript
const people = new Entity();
const transAdd = people.add(TransformComp);
// It is the same as transAdd above.
const transGet = people.get(TransformComp);
people.has(TransformComp); // It will be true;
trans.x = 123;
```

Otherwises, it provides a more accessible way that use property `$comps` after `add()`.

```typescript
people.$comps.Vector; // It will be null;
people.$comps.Transform;
```

## Domain

Domain is a shared area between the server and clients.

```typescript
Domain.reg(people);
Domain.unreg(people);
```

##
