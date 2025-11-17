### JS是单线程，为什么JS能有异步任务？

> JavaScript (JS) 是单线程的，意味着它一次只能执行一个任务。
但是，它能够处理异步任务，这是因为它使用了事件循环（Event Loop）和回调队列（Callback Queue）来实现非阻塞的异步操作。
简单来说，当JS执行到异步任务（如网络请求、定时器等）时，它不会停下来等待这些任务完成，而是将这些任务交给浏览器或其他系统去处理。
这些异步任务完成后，它们的回调函数会被放入回调队列中。主线程（也就是JS的执行线程）在执行完当前的同步代码后，会检查回调队列，如果有回调函数，就按照顺序执行它们。
> 这样，JS就可以在不阻塞主线程的情况下，处理异步任务了。这个过程是循环进行的，这就是所谓的事件循环。


#### css水平垂直居中

```css
.container {
    display: flex;
    justify-content: center;
    align-items: center;
}

.container {
  display: grid;
  place-items: center; /* 同时水平和垂直居中 */
  height: 100vh;       /* 容器高度，例如100%视口高度 */
}

绝对定位

.centered {
    width: 50%;    /* 设置宽度 */
    margin: auto;  /* 上下左右自动外边距，实现垂直居中 */
    position: absolute; /* 使用绝对定位 */
    top: 0; bottom: 0; left: 0; right: 0; /* 上下左右都为0，配合margin: auto实现水平和垂直居中 */
}

.centered {
    width: 50%;    /* 设置宽度 */
    position: absolute; /* 使用绝对定位 */
    top: 50%;
    left: 50%; /* 定位到容器的中心 */
    transform: translate(-50%, -50%); /* 调整位置使其真正居中 */
}

```

### 前端安全XSS、CSFR详解
+ 同源策略：协议、域名、端口号三者相同，就是同源。
+ csfr: 跨站请求伪造，利用用户身份执行操作，防御措施：使用token，验证请求来源
+ xss：跨站脚本攻击，注入恶意脚本（可执行的恶意代码），防御措施：输入输出过滤，避免使用eval(),innerHtml等危险API


### React Fiber工作原理

> 核心目标
+ 1.解决阻塞问题：将同步递归渲染改为异步可中断任务，避免长时间占用主线程导致页面卡顿。
+ 2.优先级调度：区分高/低优先级任务（如用户交互 vs 数据加载），确保高优先级任务优先执行。
+ 3.增量渲染：将渲染任务拆分为多个小单元（时间片），在浏览器空闲时逐步完成。 下面是一段JSX 代码到 DOM 节点的转换过程:

> 任务调度
+ 1.任务拆分：将渲染任务分解为多个小单元（Work Unit），每个单元处理一个 Fiber 节点。
+ 2.优先级判断：根据任务类型分配优先级，高优先级任务可中断低优先级任务。
+ 3.时间切片：通过 requestIdleCallback 控制单帧执行时间，避免阻塞主线程。

> 双缓存 Fiber 树

+ React 中存在两棵树，一颗为current Fiber tree，另外一颗为workInProgress Fiber tree，在全局变量中有workInProgress
+ 1.构造过程中, fiberRoot.current指向当前界面对应的fiber树
+ 2.构造完成并渲染, 切换fiberRoot.current指针, 使其继续指向当前界面对应的fiber树(原来代表界面的 fiber 树, 变成了内存中).

#### React版面对比

| 特性    | React 15（Stack Reconciler）| React 16+（Fiber Reconciler）|
|-------| ------ | ----------- |
| 渲染方式  | 同步递归，不可中断 | 异步迭代，可中断/恢复 |
| 优先级支持 | 无    | 支持动态优先级调度   |
| 性能表现  | 复杂树渲染易卡顿 | 分片渲染，保持 UI 响应 |
| 适用场景  | 简单应用   | 大型/复杂应用         |



























