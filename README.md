### 开发环境
远程主机一台
安装 code-server 
配置文件: 
> host: "::"      
port: 8000    
auth: password

安装vscode windows和linux 相同版本
> arm64 架构需要 vscode Insiders    sshd配置: AllowTcpForwarding yes
插件: 
>> remote-ssh 用于本地vscode连接远程主机   
   auto close tag   
   beautify 格式化代码   
   git history   
   git project manager
   html css support   
   html snippets
   indent-rainbow 方法左边的不同层级不同颜色 ES7 React/redux snippets es7语法提示   
   live server html变化自动刷新   
   todo tree 解析TODOS   
   ant design snippets   
   better align 代码上下对齐   
Bracket Pair Colorizer 安装了这个插件之后的效果。各个结对的括号兄弟都有了不同的颜色。 


### 项目说明
comment应用是学习react时候 写的最简单的评论列表
create-react-app-study 是学习react,豆瓣电影/github用户搜索 react-redux
helloes6 学习es6简单项目
qianduan-stu  学习underscore moment mysql  git等工具
react-stu 学习react 杂碎东西
vue-stu 学习Vue 使用脚手架搭建，基础内容使用*.html的方式学习

### 框架比较
- create-react-app 算是把babel webpack封装起来,方便开发react程序,是脚手架 不支持SSR 定制困难 使用react-rewired 定制配置
- nextjs 是一个构建 React 应用的框架 支持ts 懒加载 server rendering和code splitting
- umi 基于路由的框架, 配合antd使用特别适合企业级别的平台管理系统的框架


