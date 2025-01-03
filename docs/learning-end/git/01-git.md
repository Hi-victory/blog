---
id: git-note
slug: /learning-end/git/01-git
title: git
date: 2020-12-30
tags: [git, 工具]
keywords: [git, 工具]
---


> git add

> git commit -m "xxx"

> git fetch 

> git push

> git remote add origin "url"

## git stash

```
将所有未提交的修改（工作区和暂存区）保存至堆栈中
```

> 暂存：git stash 

```
查看暂存列表：git stash list
```

> git stash apply

```
取出指定缓存
git stash apply stash@{num}
```

```
取出并clear指定缓存
git stash pop stash@{num}
```

git pre-checkout

> git reset

```
查看提交记录: git log
回退到指定版本: git reset --HEAD code
强行推送至远程: git push origin master --force // -f
// git push -f origin master
// git push --force origin master
```

```
git pull 提示错误 fatal: refusing to merge unrelated histories
解决办法是：
在git pull添加–allow-unrelated-histories

: git pull origin master --allow-unrelated-histories

让git允许提交不关联的历史代码。
```

## ssh密钥
+ [x] 1.生成密钥
    - ssh-keygen -t rsa -C your_email
+ [x] 2.查看密钥
    - cd ~/.ssh
+ [x] 3.获取密钥
    - cat ~/.ssh/id_rsa.pub

## Husky 

**规范代码工具**

- Git hooks 工具

在package.json中配置

```json
{
  "name": "app",
  "version": "0.0.1",
  "devDependencies": {
    "husky": "^7.0.4",
    "lint-staged": "^12.3.4",
    "lerna": "^4.0.0",
    "less": "^4.1.3",
    "prettier": "^2.3.1",
    "tsx": "^3.8.2",
    "typescript": "~4.6.3",
    "vite": "3.0.0",
    "eslint": "^8.18.0",
    "eslint-config-prettier": "^8.4.0",
    "eslint-plugin-prettier": "^4.0.0"
  },
  "lint-staged": {
    "packages/**/*.{ts,tsx,less}": [
      "prettier --write"
    ]
  },
  "eslintConfig": {
    "extends": [
      "prettier"
    ],
    "rules": {
      "max-lines": [
        "error",
        {
          "max": 500
        }
      ]
    }
  }
}
```

husky 可以防止使用 Git hooks 的一些不好的 commit 或者 push。