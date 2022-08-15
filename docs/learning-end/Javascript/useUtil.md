- jsApi

lodash： remove
remove(state.detail.cashierPlanVos, (o) => o.recordId === recordId);

uniq 基本数据类型去重
uniq(recordIds) as string[]

uniqWith 去重
uniqWith(checkedData, (lsp, rsp) => lsp.userCode === rsp.userCode)

entries // 将对象转换成键值对数组
Object.entries(obj)

let o = { name: 'ada', age: 18 }
Object.entries(o) // [['name', 'ada'], ['age', '18']]
Object.entries(o).map(([name, ]) => [name, undefined])  // [['name', undefined], ['age', undefined]];

fromEntries // 将键值对列表转换成对象

Onject.FromEntries(Object.entries(o).map(([name, ]) => [name, undefined])) // { name: 'ada', age: 18 }