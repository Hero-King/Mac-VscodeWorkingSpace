const gulp = require('gulp')
const path = require('path')
const fs = require('fs')
const htmlmin = require('gulp-htmlmin')
const watch = require('gulp-watch')
const clean = require('gulp-clean')
const cleanCss = require('gulp-clean-css')
//gulp --tasks   显示所有tasks
//npm i --save-dev  <packname> 工程构建（开发时、“打包”时）依赖 ；例：xxx - cli, less - loader, babel - loader...
//npm i --save <packname> 项目（运行时、发布到生产环境时）依赖；例：antd, element, react...
//于我们啥时候用--save、啥时候用--save-dev 感觉是个规范问题，用反了项目一样可以跑起来（对于安装依赖正确时），但会给其他看你项目的人带来误解、可能会导致一些bug的出现，还有一些配置的错乱等
gulp.task('html', function () {
    console.log('html任务被执行');
    var path = 'src/html/*.html'
    return gulp.src(path)
        .pipe(htmlmin())
        .pipe(watch(path, {}, function () { //文件一旦变化执行回调函数，并且函数返回新的IWatchStream流  
            console.log('文件变化了');
        }))
        .pipe(gulp.dest('./dist')) //把内存中的文件流打入硬盘，文件更新
})

gulp.task('css', function () {
    var path = './src/css/*.css'
    return gulp.src(path)
        //.pipe(watch(path, {}, fun(0)))  //不输出msg
        .pipe(watch(path, {}, fun))         //不写参数  默认有一个参数是Stream
        //.pipe(watch(path, {}, fun, fun2)) //fun2并不会执行，说明提示（鼠标放在wactch函数上）的watch函数中的回调函数中的？ 是正则表达式 代表出现0或者1次
        .pipe(cleanCss())
        .pipe(gulp.dest('./dist/css'))
})
function fun(msg) {
    console.log('我是函数');
    // console.log(msg2);  //undefined

    if (msg) {
        console.log(msg);
    }
    if (msg.event) {
        console.log(msg.event)  //返回了change
    }
}
function fun2() {
    console.log('2222');

}

gulp.task('clean', function () {
    return gulp.src('./dist')
        .pipe(clean())
})

//执行shell命令
var exec = require('child_process').exec;
gulp.task('task', function (cb) {
    console.log(121);
    exec('ls', function (err, stdout, stderr) {
        console.log(stdout);
        console.log(stderr);
        cb(err);
    });
})

/**
 * yargs
 * yargs模块能够解决如何处理命令行参数。
 * 安装：npm install yargs --save
 * yargs模块提供了argv对象，用来读取命令行参数：
 * 执行  node gulpfile.js --name=aa  返回hello aa
 * 还可以指定别名：let argv = require('yargs').alias('n','name').argv
 */
let argv = require('yargs').argv;
console.log('hello ', argv.name);
if (argv.all) {     //如果执行的命令有--all参数 返回true
    console.log('11111');   //node gulpfile.js --all  输出了
    console.log(argv.all);   //执行node gulpfile.js --all  返回true
}


/**
 * 背景：gulp.watch()无法监听到新增加的文件，这样一来，我们每次增加文件时都要执行gulp命令来重启服务。这并不是我们希望的结果。可以引入gulp-watch模块解决这个问题：
 * npm install --save-dev gulp-watch
 * watch(glob, [options, callback])
 *   @param glob 需要监听的文件
 *   @param options
 *   @param callback 监听的文件发生变化后执行的函数  This function is called when events happen on the file-system. All incoming files that are piped in are grouped and passed to the events stream as is.

vinyl — is vinyl object that corresponds to the file that caused the event. Additional event field is added to determine what caused changes.
Possible events:

add - file was added to watch or created
change - file was changed
unlink - file was deleted
 *
 *  */
//   gulp.task('watch', function () {
//     return watch('./src/**/*.html', function () {
//     gulp.start('html');	//执行html任务
//     browserSync.reload(); //刷新浏览器
//         });
//     });
/**
 */

/* gulp-plumber : 一个专门为gulp而生的错误处理库,使用方法很简单，直接在流的最开始打个补丁就ok
   gulp的错误处理有点坑，假如发生错误进程就挂了。相对的解决办法不少，但是这个是我个人比较推荐的，比特么在容易出错的地方写错误监听靠谱。所以这个插件可以阻止 gulp 插件发生错误导致进程退出并输出错误日志。

   在刚开始使用gulp时，对于错误处理也没太在意，可是每次sass编写错误，然后整个gulp进程就崩掉，coffee一不小心多打了个;，进程也崩掉。好吧，我以为是简单地在流上添加个.on('error',function(err){})就行，好吧，这下一旦有错误不会导致整个进程崩掉，但是尼玛，这个gulp功能实际上就没跑了，再次改动sass，还是那个样。整来整去，这都不是我想要的。
   ---------------------
   正确的错误处理应该是能遇到错误时输出错误，并且能够保证整个gulp进程不挂，而且功能还能正常用。通俗地讲，就是遇到错误时gulp能正确地输出错误信息，然后进程不挂，当改正错误以后，gulp又能继续正常运行。
*/
const plumber = require('gulp-plumber')


/**
 *  log4js
 *  关于 log4js ，此处不做过多介绍，你如果有关注过日志系统，那就应该听说过类似 log4cpp、log4net、log4j、log4p 等名词。是的，log4xxx 是 Apache 提供的开源日志框架，它可以将日志信息按指定的格式、分级不同的级别输出到多种介质（控制台、文件、数据库等），并且还支持日志文件的自动备份等功能。不同的编程语言有不同的 log4xxx 版本，其中 log4js 便是 node.js 版本的，本文将从总体上介绍 log4js 的一些概念和使用方法
原文链接：https://blog.csdn.net/Iron_Ye/article/details/84076747
 *
 *  安装； npm install log4js
 * 
 *  默认的 level 是 off，不会输入任何信息，info 方法会报错。除了 info 方法外，还有 error、warn 等方法，只有启用了相应的 level 的情况下才能调用相关的方法。级别的顺序为:
 * ALL          低级别   输出所有日志
 * TRACE
 * DEBUG
 * INFO
 * WARN                 输出级别相同或者更高级别日志
 * ERROR
 * FATAL
 * MARK
 * OFF          高级别  不输出日志
 * 
 *  加载配置项
log4js 支持两种配置方式，一种是 json 文件，另一种是 json 对象。两种方式的原理是一样的，下面以 json 对象为例来说明如何进行配置： 
var log4js = require('log4js');
log4js.configure({
    appenders:{
        std: { type: "stdout", level: "all", layout:{type: "basic", } },
        file: { type: "file", filename: "log.txt", encoding: "utf-8" }
    },
    categories: {
        default: {appenders: ["std"], level: "debug"},
        custom: {appenders: ["std", "file"], level: "all"}
    }
});

var logger = log4js.getLogger("custom");
logger.warn("I will be logged both in console and log.txt");
先是配置了 default 和 custom 两个日志器，后面调用了 custom 日志器来输出一条 warm 级别的日志。由于 custom 日志器引用了 std 和 file 两个 appender，所以该条日志将同时被输出到 stdout（控制台） 和 log.txt（文件）

总的来说，log4js 由 category（种类：存储器default还是啥啥）、appender（存在哪里） 、layout（如何存） 三大部分构成，其中 category 是日志器实例，每个实例中可以包含多个 appender，而每个 appender 中包含一个 layout，appender 用于指定日志的输出位置（控制台、文件等），layout 用于定义日志的输出格式
 */
var log4js = require('log4js');
var logger = log4js.getLogger();
logger.level = 'debug';
logger.debug("Some debug messages");
logger.level = "info"; // default level is OFF - which means no logs at all.
logger.info("Log from default logger");

gulp.task('default', ['html', 'css'])   //gulp 4 版本已经不支持这种写法了 执行gulp 命令 会去执行这个gulpfile.js文件 从上到下找到default任务 
// //node js 中console对象
// console.log('hello world');
// // Prints: hello world, to stdout
// console.log('hello %s', 'world');
// // Prints: hello world, to stdout
// console.error(new Error('Whoops, something bad happened'));
// // Prints: [Error: Whoops, something bad happened], to stderr

// const name = 'Will Robinson';
// console.warn(`Danger ${name}! Danger!`);
// // Prints: Danger Will Robinson! Danger!, to stderr

//gulp-shell的使用 方便的命令行 
/**
 * shell ( 命令，选项) 或者 shell.task(commands, options )
 */
const shell = require('gulp-shell')
gulp.task('greet', shell.task('echo Hello, World!')) //推荐使用
gulp.task('example', () => {
    return gulp
        .src('*.js', { read: false })
        .pipe(shell(['echo <%= file.path %>']))
})