# 技术相关

日期: 2023/02/08

### react哲学
#### 开发理念：
- 设计好的UI划分为组件层级，组件化，便于维护和阅读
- 创建静态版本，然后在添加交互功能，二者分开
- react单向数据流（也叫单向绑定）的思想使得组件模块化
- 单向绑定通过组件onChange事件来进行更新state状态
- 受控和非受控组件：受控：可以通过onChange监听进行修改value值，值有当前react控制，非受控：值由DOM控制， 单一数据源保存在DOM中

#### react-hyperscript
- 可替代jsx，直接使用js进行编码

### Tree shaking(树的优化)
- 使用webpack或者rollup实现，来进行按需加载
- 删除未被调用的模块代码，实现减少包的体积，性能优化
- 去掉冗余代码
- 减少包大小，缩短用户加载时间

+ 原理：
```
程序从入口文件扫描所有模块依赖，以及子模块依赖，
然后将他们连接起来形成一个“抽象语法树”(AST)， 然后运行所有代码，查找那些代码没有使用到，
进行标记，再将“抽象语法树”中没有用到的代码剔除掉，这样就去除了没有用到的代码。
```

### tree-shaking
[Tree shaking原理及应用](https://segmentfault.com/a/1190000040037144)
```
它的实现关键得益于ES Module模块的静态分析功能
在ES Module中，我们将模块加载分为两个阶段：静态分析和编译执行
```

#### js垃圾回收机制
[js垃圾回收原理](https://zhuanlan.zhihu.com/p/80572782)
- 内存生命周期：
- 分配你所需要的内存
- 使用分配到的内存（读、写）
- 不需要时将其释放、归还
- 垃圾回收：当内存不再使用需要释放出来时，这个过程称为垃圾回收

#### 动态生成模板（node端）
[numjacks](https://www.wenjiangs.com/doc/cylmx3thbq)

### Vite
vite使用了esbuild rollup 双引擎进行编译

### kubernetes
k8s或kube，容器引擎，一台机器控制多个容器，每个容器中都是隔离环境，相互不影响

### Rollup
- JavaScript模块打包工具
- 采用ES6中的模块化方案ESM(主要特性)

### 为什么使用Rollup？
- 兼容性
- 支持ESM模块化
- 小，速度快，性能高
- Tree-Shaking
- 输出结构扁平化、执行效果高，自动移除为引用代码

### getInstance 和 new 区别
