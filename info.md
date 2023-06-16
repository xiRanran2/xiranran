\#git是什么

集中式版本控制系统(vcs) => svn

分布式版本控制系统(dvcs) => git

#git的作用
在项目开发的进程中，对值得记录的时间节点进行"备份" 方便后期恢复(后悔药)
方便团队协作开发

Git有三种状态，你的文件可能处于其中之一：
 已提交（committed）：表示数据已经安全地保存在本地数据库中
 已修改（modified） ：表示修改了文件，但还没保存到数据库中
 已暂存（staged）：表示对一个已修改文件的当前版本做了标记，使之包含在下次提交的快照中

这会让我们的 Git 项目拥有三个阶段：工作区、暂存区以及 Git 目录。

_配置用户名和邮箱_
```bash

$ git config --global user.name "xiranran"
$ git config --global user.email "2449500848@qq.com"

git config --list

git config user.name
git config user.email

#获取Git仓库(repo)

-自行初始化git仓库(git init)
-克隆远程仓库(git clone [repo_url])
http://192.168.122.33:3080/shenhongchun/SLXM.git

_查看配置信息


U未跟踪 (新增)

A (added)

M 跟踪后被修改

#创建快照(备份)

git add . 将所有文件放到暂存区 (经常做的)

git commit -m "提交信息" 将暂存区文件提交到仓库(某个功能完成的时候/在必要)

[工作区] -- git add. ---> [暂存区]  ---- git commit -m "xxxx"  ----> [repo]

[工作区] -- git commit -a -m "xxx" ---> [repo](vim 编辑器操作)

git reset --soft commit_id   提交的id 将d当前版本的内容回退到暂存区
git reset --hard commit_id  将当前版本的内容删除
git reset  commit_id(默认)  将当前版本的内容回退工作区

HEAD      => 当前版本
HEAD^     => 当前版本的上一个版本
HEAD ~ n  => 当前版本上的 n个版本
[暂存区] <--------  git reset --soft commit_id   --- [repo] >
[工作区] <--------  git reset commit_id (默认)   --- [repo] >
[移除]   <--------  git reset --hard commit_id   --- [repo] >

//新提交的文本
