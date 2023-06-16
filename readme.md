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

A 

M 跟踪后被修改