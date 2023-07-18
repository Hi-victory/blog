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
> git reset

```
查看提交记录: git log
回退到指定版本: git reset --HEAD code
强行推送至远程: git push --force // -f
```

```markdown
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
- Git hooks 工具

husky 可以防止使用 Git hooks 的一些不好的 commit 或者 push。