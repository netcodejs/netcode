# Overview
This is a game's state-synchronization framework for javascript/typescript.The first adapted game engine is CocosCreator, others would suport in future time.

# Basic Knowledge

## Component
Component is not class in the real sense. All class with `@Comp(className: string)` will be collectively referred to as component.You should mark the property that need synchronize with `@CompProp(type: DataType)`
```typescript
@Comp("Vector")
public class VectorComp {
  @CompProp(DataType.float)
  x: number = 0;
  @CompProp(DataType.float)
  y: number = 0;
}
```
It allows for nested use.
```typescript
@Comp("Transform")
public class TransformComp {
  @CompProp(VectorComp)
  position: VectorComp = new VectorComp();
  @CompProp(DataType.float)
  rotation: number = 0;
}
```
## Entity
In netcode, entity is unit node.It can include and manage a series of *components*. It can be registed by *Domain*. For usage refer to Cocos(Node-Component) or unity(GameObject-Monobehaviour).
```typescript
const people = new Entity();
const transAdd = people.add(TransformComp);
// It is the same as transAdd above.
const transGet = people.get(TransformComp);
people.has(TransformComp); // It will be true;
people.rm(TransformComp); // The function means removing the first component that it's type is Transform.
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
