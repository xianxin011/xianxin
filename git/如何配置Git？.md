# 如何配置Git？

# 基础配置

当首次安装Git后，全局环境变量中并没有提交人的相关信息。需要配置下：

## git --version 查看对应的Git版本

## ![image](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/1X3lE6gNNkkXnJbv/img/241bfe02-627f-4557-b474-4882d3ee0c0e.png)

可以通过观察Git版本确认是否已经安转上Git

## git config --global --list  查看当前全局的配置情况

![image](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/1X3lE6gNNkkXnJbv/img/2b16371b-b80a-476d-a061-5a0210858293.png)

时时刻刻可以检查一下自己的全局配置

## git config --global user.name "xxx" 配置提交人名字

让与你协同开发的成员知道你是谁

## git config --global user.email "xxx" 配置提交人邮箱

让与你协同开发的成员能通过邮箱联系到你本人

# SSH密钥及配置

由于本地Git仓库和GitHub仓库之间的传输是通过SSH加密的，所以必须要让github仓库认证你SSH key，在此之前，必须要生成SSH key。

## 第1步：创建SSH Key

### 查找自己的SSH Key

在windows下查看\[c盘->用户->自己的用户名->.ssh下是否有id\_rsa、id\_rsa.pub文件，如果没有需要手动生成。

在开始菜单中打开git下的git bash（当然，在其他目录下打开git bash也是一样的）：然后执行：

> cd ~/.ssh

如果能进入到.ssh文件目录下 ，则证明，之前生成过.ssh秘钥，可以直接使用里面的秘钥。如果不能进入到.ssh文件目录下，检测下自己之前有没有配置：git config user.name 和 git config user.email（直接分别输入这两个命令）

### 生成自己的SSH Key

> ssh-keygen -t rsa -C ‘上面的邮箱’

输入这命令可以生成自己的SSH key，可以在全局目录下生成.ssh文件夹，里面包含id\_rsa(私有秘钥)和id\_rsa.pub(公有密钥)

## 第2步：添加自己的公有密钥到远程仓库

打开 个人设置>[SSH公钥](https://account-devops.aliyun.com/settings/ssh)

![image](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/1X3lE6gNNkkXnJbv/img/615512d9-78c9-4c65-8ea7-8503995cd644.png)

直接复制id\_rsa.pub文件里面的内容到文本输入框里面，输入对应的公钥标题，配置对应的过期日期，完成SSH Key配置。通过以上的配置，我们可以不用每次提交代码时都需要手动输入用户名和密码进行账户的验证。