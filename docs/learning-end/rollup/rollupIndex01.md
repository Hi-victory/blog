# rollup

## 预备知识
1. 什么是ESM？
2. 有哪些JavaScript模块化方案？

## 什么是Rollup?

1. JavaScript模块打包工具
2. 采用ES6中的模块化方案ESM(主要特性)

## 为什么使用Rollup？
1. 可以多个零碎的代码片段编译为完整的类库/应用
2. ESM
3. Tree-Shaking
4. 兼容性
5. 小，配合插件可以完成前端工程化的绝大多数工作

## 如何使用Rollup？

### 命令行

**01. quick-start**

指定入口文件、以及输出目录

```shell
pnpm exec rollup src/index.js -d dist
```

### 配置文件

**02.config**

支持6种类型

**amd, cjs, es, iife, umd, system**

### 使用插件

**03.plugin**

`@rollup/plugin-json`

从一个JSON中导入数据

### 压缩打包

**04.compression**

`rollup-plugin-terser`

会删除一些没有必要的代码、去掉换行、空格等等。



### 加载npm第三方模块

**05.npm-modules**

默认情况下，rollup无法解析npm_modules下的包

```
(!) Missing global variable names
Use output.globals to specify browser global variable names corresponding to external modules
lodash-es (guessing 'lodashEs')
lodash-es (guessing 'lodashEs')
(!) Unresolved dependencies
https://rollupjs.org/guide/en/#warning-treating-module-as-external-dependency
lodash-es (imported by src/index.js)
```



`@rollup/plugin-node-resolve`

打包npm_modules 第三方库



### 加载CommonJS模块

**06.commonjs**

默认情况下，Rollup无法解析CommonJS

```
[!] Error: 'default' is not exported by src/commonjs.js, imported by src/index.js
https://rollupjs.org/guide/en/#error-name-is-not-exported-by-module
src/index.js (5:7)
3: import { add } from "./BigDecimal";
4: import { version, name } from "../package.json";
5: import common from "./commonjs";
          ^
6: 
7: console.log(message.hello);
Error: 'default' is not exported by src/commonjs.js, imported by src/index.js
```



`@rollup/plugin-commonjs`

加载CommonJS模块



### 代码拆分

**07.code-splitting**

1. 代码拆分必须使用dir，不能指定单文件了。因为需要多个文件
2. 为什么iife umd不支持

#### 代码拆分优缺点？



### 多入口打包

**08.multi-entry**

#### 应用场景在哪里？



### typescript

默认情况下也是无法识别typescript语法的

```
[!] Error: Could not resolve './helloTypescript' from src/index.js
Error: Could not resolve './helloTypescript' from src/index.js
```



`@rollup/plugin-typescript`



1. 安装typescript

2. 修改配置文件module:"next"



### 可视化

**10.visualizer**

`rollup-plugin-visualizer`



## 打包一个web app

1. 安装serve，简单部署一个静态页面



### 实践

组件库



## 问题

### 如何按需加载？

1. JavaScript按需加载
2. CSS(Less、Scss/Sass)按需加载

### Rollup缺点？

1. 打包非ESM模块方案比较复杂
2. 最终都打包在同一个函数，无法实现HMR，开发体验不好
3. 浏览器环境中，代码拆分依赖AMD库

### Rollup优点？

1. 输出结构扁平化、执行效果高
2. 自动移除未引用代码
3. 打包后代码可读性高

### Rollup vs webpack

| 特点\工具    | Rollup     | Webpack        |
| ------------ | ---------- | -------------- |
| ESM          | 支持       | 不完全支持     |
| Tree Shaking | 支持       | 不完全支持     |
| HMR          | 不支持     | 支持           |
| 构建产物     | 小         | 大             |
| 扩展         | plugin方法 | loader、plugin |

1. 合适原则

### 多入口打包应用场景

### 代码拆分的优缺点

### Rollup 如何打包一个web app？

### 如何区别开发环境、生产环境？



## 资料

[Rollup官网文档](https://rollupjs.org/guide/en/)

[Rollup中文文档](https://rollup.docschina.org/guide/zh/)

[Rollup插件](https://github.com/rollup/awesome)
