# regExp

#### form rules

请输入正确的手机号码
```js
let mobileReg = /^1\d{10}$/;
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
reg.test("正则");
cReg.test("正则");

```

非中文字符

```js
let reg = new RegExp("[\u3002\uff1b\uff0c\uff1a\u201c\u201d\uff08\uff09\u3001\uff1f\u300a\u300b]+", "g");
reg.test("，");

```

