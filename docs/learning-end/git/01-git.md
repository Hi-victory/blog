# git

> git add

> git commit -m "xxx"

> git fetch 

> git push


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