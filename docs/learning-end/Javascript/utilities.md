# 工具函数

合计
```ts
  const reduceHandler = <T, K extends { [P in keyof T]: Number }>(
    dataSource: T[],
    keys: keyof K
  ) => (dataSource as unknown as T[])?.reduce((total, next) => plus(total, next[key]), 0);
```

List 合计
```ts
  const reduceHandlers = <T, K extends { [P in keyof T]: string }>(
    dataSource: T[],
    keys: string[]
  ) => {
    const amount: any = {};
    keys.forEach((key: any) => {
      amount[key] = (dataSource as unknown as T[])?.reduce((total, next) => {
        // @ts-ignore
        return plus(total, next[key]);
      }, 0);
    });
    return amount;
  };
```

函数柯里化
- 描述: 将函数作为参数传给函数

```markdown

```

文件流下载生成文件

```ts
/***
 * 
 * @param url
 * @param credentials 同源情况下发生cookies
 */
export const downloadFile = async (url, credentials: "same-origin") => {
    const response = await fetch(url, { credentials });
    if (response.status >= 200) {
        const blob = response.blob();
        exportData(blob, getFileName(response));
    }
}

export const getFileName = (response: AxiosResponse | any): string => {
    let contentDisposition = response?.headers?.["content-disposition"];
    let fileName = "";
    if (contentDisposition) {
        let filenameRegex = /filename[^;=\n]*=((['"]).*?\2|[^;\n]*)/;
        let matches = filenameRegex.exec(contentDisposition);
        if (matches != null && matches[1]) {
            fileName = matches[1].replace(/['"]/g, "");
        }
        fileName = decodeURI(fileName);
    }
    return fileName;
};

export const exportData = (Blob: any, fileName: string) => {
    let link = document.createElement("a");
    const objectUrl = window.URL.createObjectURL(Blob);
    link.href = objectUrl;
    link.download = fileName;
    link.click();
    window.URL.revokeObjectURL(objectUrl);
    link.remove();
}
```