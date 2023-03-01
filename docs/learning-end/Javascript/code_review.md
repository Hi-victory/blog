# 代码审查

## 柯里化函数运用

```typescript

export const checkCondition = (
    conditionType: string,
    data: any
) => {
    return request.post<any>(
        cloudFinanceApiV1(`voucher/list_select_condition/${conditionType}`),
        data
    );
};

const request = getFilterRequest(checkSummaryCondition);

export const getFilterRequest =
  <K extends string, P extends object = any>(request: (a: K, b: P) => Promise<InvokeResult<any>>) =>
  ({ conditionType, name, keyword }: IExtendsConditionMapItem<K>, params: P) => {
    return (infoKeyword?: string) => {
      return request(conditionType, { ...params, [keyword!]: infoKeyword, [name!]: undefined });
    };
  };

export interface FilterNodesProps<T extends string> {
    conditionMaps: ConditionMaps<T>;
    request?: (
        conditionMapItem: IExtendsConditionMapItem<T>,
        params: any
    ) => FilterSelectProps["request"];
    activeStatus?: string;
    params: any;
}
```

