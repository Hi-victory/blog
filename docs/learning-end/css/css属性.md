# 层叠样式


### box-shadow
属性用于在元素的框架上添加阴影效果。你可以在同一个元素上设置多个阴影效果，并用逗号将他们分隔开。该属性可设置的值包括阴影的 X 轴偏移量、Y 轴偏移量、模糊半径、扩散半径和颜色。

```html
p {
  box-shadow: 0 0 0 2em #F4AAB9,
              0 0 0 4em #66CCFF;
  margin: 4em;
  padding:1em;
}

<div>
    <p>hello world</p>
</div>
```

![效果](/img/life_end/box-shadow.png)

### box-sizing
计算一个元素的总宽度和总高度

值
- content-box：内容的宽度
- border-box：内容宽度但不含边框宽度

### word-break
单词断行

normal
- 使用默认的断行规则。

break-all
- 可在任意字符间断行。

keep-all
- 文本不断行。

break-word
- 按单词换行
- 他的效果是word-break: normal 和 overflow-wrap: anywhere 的合。

