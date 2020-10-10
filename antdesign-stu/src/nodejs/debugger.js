/**
 * 
对于web页面：
node --inspect app.js

  
nodejs内部提供一个debug机制，可以让程序进入debug模式，供开发者一步一步分析代码发现问题。
   共有3中启动参数可以让程序进入debug模式，假设我们要对app.js进行调试。
   node debug app.js
   node --debug app.js
   node --debug-brk app.js
 
   3种模式在调试形式上有一定区别。
 
   node debug app.js
   1.这种方式启动程序，程序会进入debug模式，并运行到启动文件的第1行就停止，等待开发者下发往下走的命令。
   2.这种方式启动程序，直接在当前cmd中进入调试模式。
 
   node --debug app.js
   1.这种方式启动程序，程序会进入debug模式，并运行完所有代码。这种启动方式往往用于程序启动的过程中不需要调试，通过触发时间进入回调函数的情况，比如在某个http请求中打上断点，等待客户端访问后进入断点。
   2.这种方式启动程序，会开启一个TCP的端口监听，在本cmd中不进入调试模式，需要另外开启终端用node debug 命令连接调试端口。命令为 node debug localhost debug端口或者  node debug p node进程id。
 
   node --debug-brk app.js
   1.这种方式启动程序，程序会进入debug模式，但是不会运行代码，直到有一个终端连接到了debug端口，才开始执行代码，并在第1行进入断点。
   2.这种方式启动程序，会开启一个TCP的端口监听，在本cmd中不进入调试模式，需要另外开启终端用node debug 命令连接调试端口。
 
   进入debug模式后，可以通过一些命令来设置断点、取消断点以及控制程序执行流程。Nodejs支持js原生的调试，可通过debugger来下断点。通过console.log(var)来显示变量的值。也可以在debug下输入repl再来查看变量的值。
   node.js调试命令

命令    功能
run    执行脚本,在第一行暂停
restart    重新执行脚本
cont,c    继续执行,直到遇到下一个断点
next, n    单步执行
step, s    单步执行并进入函数
out, o    从函数中步出
setBreakpoint(), sb()    当前行设置断点
setBreakpoint(‘f()’), sb(…)    在函数f的第一行设置断点
setBreakpoint(‘script.js’, 20), sb(…)    在 script.js 的第20行设置断点
clearBreakpoint, cb(…)    清除所有断点
cbacktrace, bt    显示当前的调用栈
list(10)    显示当前执行到的前后10行代码
watch(expr)    把表达式 expr 加入监视列表
unwatch(expr)    把表达式 expr 从监视列表移除
watchers    显示监视列表中所有的表达式和值
repl    在当前上下文打开即时求值环境
kill    终止当前执行的脚本
scripts    显示当前已加载的所有脚本
version    显示v8版本

 */

