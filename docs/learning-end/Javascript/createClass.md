# 类

## 定义

### 类申明
```js
class User {}
```
### 类表达式
```js
const User = class {}
```
### 匿名类
```js
const User = class {}
```
### 命名类
```js
const User = class User {}
```
## 构造函数

```js
class User {
    constructor(age) {
        super(); // 调用父类构造函数
        this.name = "lucas";
        this.age = age;
    }
}
```
## 字段
```js
class User {
    name;
    age;
}
```

### 静态字段
```js
class User {
    static displayName = "User";
}
```

### 公有字段
```js
class User {
    username;
}
```

### 私有字段
[TC39](https://github.com/tc39/proposal-class-fields)

```js
class User {
    #height;
    #weight;
}
```

## 属性
**getter**、**setter**方法
### 公有属性
```js
class User {
    name;
    age;

    constructor(age) {
        this.name = "lucas";
        this.age = age;
    }

    get name() {
        return name;
    }

    set name(name) {
        this.name = name;
    }
}
```

### 私有属性
```js
class User {
    name;
    age;

    constructor(age) {
        this.name = "lucas";
        this.age = age;
    }

    get #name() {
        return name;
    }

    set #name(name) {
        this.name = name;
    }
}
```


## 方法
### 公有方法
```js
class User {
    name;
    age;
    getUser() {
        return {
            name,
            age,
        };
    }
}
```
### 私有方法

```js
class User {
    name;
    age;
    #getUser() {
        return {
            name,
            age,
        };
    }
}
```

### 静态公有方法（类方法）
```js
class User {
  static options() {
  }
}
```
### 静态私有方法（类方法）
```js
class User {
  static #options() {
  }
}
```

## 抽象基类（父类）
```js
class Base {
    
}
```
## 继承
```js
class User extends Base {
}
```


