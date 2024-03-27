 # regExp

#### 基础api

| 方法                   | 描述 | 事例 |
|-----------------------|-----|------|
| exec |    一个在字符串中执行查找匹配的 RegExp 方法，它返回一个数组（未匹配到则返回 null）|  |
| test |    一个在字符串中测试是否匹配的 RegExp 方法，它返回 true 或 false。||
| match |    一个在字符串中执行查找匹配的 String 方法，它返回一个数组，在未匹配到时会返回 null。| |
| matchAll |    一个在字符串中执行查找所有匹配的 String 方法，它返回一个迭代器（iterator）。| |
| search |      一个字符串中测试匹配的方法，它返回匹配到的位置索引，或者在失败时返回-1| |
| replace |     一个字符串中执行查找匹配的String方法，并且使用替换字符串换掉匹配到的子字符串 | |
| split |       一个使用正则表达式或者一个固定字符串分隔一个字符串，并将分隔后的字符串存储到数组中的String方法。

#### exec
```js
获取字符串中的百分比
const RegExp = /(?<=\D|^)(?:(?:\d{1,2}(?:\.\d+)?\-)?(?:(?:\d{1,2}(?:\.\d+)?)|100))%/;
const current = RegExp.exec("20.25% 小a缅a");
const [value, groups, index, input, length] = current;
// 20.25% ,undefined, 0, 20.25% 小a缅a, 1;
```

邮箱
```markdown
/^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/
```

匹配替换
```js
let key = "totalQuantity";
let newKey = key?.replace(/^total/, "")
newKey = newKey?.charAt(0)?.toLowerCase() + newKey?.slice(1);
// newKey = "quantity";
```

获取请求头`content-disposition`内容
```tsx
export const getIntegratedName = (response: AxiosResponse): string => {
    let contentDisposition = response?.headers?.["content-disposition"];
    let fileName = "";
    if (contentDisposition) {
        /** 匹配文件名 **/
        let filenameRegex = /filename[^;=\n]*=((['"]).*?\2|[^;\n]*)/;
        let matches = filenameRegex.exec(contentDisposition);
        if (matches != null && matches[1]) {
            fileName = matches[1].replace(/['"]/g, "");
        }
        fileName = decodeURI(fileName);
    }
    return fileName;
};
```

非汉字
```js
const reg = /^[\u4e00-\u9fa5]{0,}$/; 
const cReg = new RegExp("[\\u4E00-\\u9FFF]+", "g");

```

非中文字符

```js
let reg = new RegExp("[\u3002\uff1b\uff0c\uff1a\u201c\u201d\uff08\uff09\u3001\uff1f\u300a\u300b]+", "g");
reg.test("，");

```

