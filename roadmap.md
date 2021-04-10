# netcodejs 项目(5/1 前计划)

## netcode

### Roadmap

-   基本框架大概完成。
    -   Component 属性复制
    -   Component Rpc
    -   NetComp 支持继承
    -   Domain、Entity 的实例获取。 所有 NetComp 必须继承 Comp 类
    -   必须支持回滚。 Case: 回放系统
    -   Test
    -   对比单机和联网状态下的性能差距。
-   ArrayBuffer 序列化库对接。 最简的数据结构。 支持 bits 等其他无缝写入。 Lax
-   支持多序列化库，同时支持 string 和 ArrayBuffer，需要重构。然后 string 是用来作学习用途。
-   上下文/权限管理。
    -   函数自带 Context，分辨来自于哪个客户端
    -   用户自己拓展权限管理，使用 ClientInfo 类似的组件进行认证。
    -   Entity 内置权限校验逻辑，这里 UE 上的自治代理、代理、XXX（后面在讨论）
-   Rpc Return 返回值传输 参考 Socket.IO
    -   必须要求 Rpc 函数的返回值 Promise<RetrunType> | void
    -   封装类型，提供自己的 Promise 类，RpcResp -> IsDone / GetValueAsync: Promise<ReturnType> / Value: ReturnType
-   同步频率。每个 Entity 可以改变自己同步频率。相关性：插值
-   同步优先级。限制每帧同步数量。权重 = 初始权重 + 等待时间。优先处理队首的 Entity。

    -   控制流量。
    -   保证游戏体验。

-   网络同步相关的内置逻辑
    -   属性向内插值 @NetInterplateVar @NetArr 。UE 有类似的做法。必须有前后两个状态。
        -   第一种 前一帧 -> 后一阵 = 最终状态
        -   第二种 逻辑的最终状态 -> 渲染层面的最终状态。
            -   View Pos 快速接近逻辑状态
-   时钟同步
    -   本地时间 客户端时钟
    -   远端时间 远端可以对本地做影响。纠正过程，但是也需要平滑纠正。
    -   Final Time = Local + (Remote - Local) \* 0.5 (待讨论，Valve 本条命有公式， UE)

## loki-buffer (ArrayBuffer)

### Roadmap

-   DataView 版本基础完成。未测试。
-   最小单位为 Bit 的版本。
-   提供一个 Interface 版本。类似 Java-slf4j，仓库引用 Interface，子树的行为引用 Interface。
    -   规范好大版本和小版本。 Npm
-   arraybuffer -> reader
    -   reader.set(arraybuffer)
    -   new Reader(arraybuffer)
-   transfer / append
    -   从其他 Buffer 里拷贝数据添加到末尾。
-   Benchmark 对比原生序列化和 protobuf 之类的性能。
-   Test。

## example

### cases

-   性能消耗。同屏巨量小球同步。
-   应用层面
    -   快照同步（Server 权威）
    -   状态同步
        -   预测+回滚
        -   Demo 回看系统。
        -   优先级同步
    -   跨界
        -   聊天室
