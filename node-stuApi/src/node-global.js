/**
 * 全局成员概述 global 是一个全局对象，可以省略
 * process 进程对象
 * node入门+++ES6语法
 * 模版字符串--重要
 * 箭头函数--重要   函数默认值  解构赋值  ...
 */
console.log(__filename); ///Users/wangjunjie/VScodeWorkingSpace/node-stu/src/node-global.js
console.log(__dirname); ///Users/wangjunjie/VScodeWorkingSpace/node-stu/src 不含文件名
setTimeout(function () {
    console.log('11111')
}, 2000)  //注意异步

//argv是一个数组，默认情况下前两项是命令地址和被执行文件地址
console.log(process.argv);
/*[ '/usr/local/bin/node',
'/Users/wangjunjie/VScodeWorkingSpace/node-stu/src/node-global.js' ]
*/
console.log(process.arch);  //当前系统的架构 X64
console.log(`Current directory: ${process.cwd()}`);  //process.cwd() 是当前执行node命令时候的文件夹地址 ——工作目录，保证了文件在不同的目录下执行时，路径始终不变  __dirname 是被执行的js 文件的地址 ——文件所在目录

//模块化开发  
/**
 * 传统非模块化开发有如下缺点：
 *   1.命名冲突
 *   2.文件依赖
 * 前端标准的模块化规范：
 *  1.AMD -requirejs    国外开发
 *  2.CMD -seajs   阿里巴巴开发
 * 服务器端模块化规范：
 *  1.CommonJS  -NodeJS
 * 模块化开发规则：
 *  1.如何定义模块： 一个JS文件就是一个模块。模块内部的成员都是相互独立的
 *  2.模块之间的导入导出
 *  require / exports
 */
var sum = function (a, b) {
    return parseInt(a) + parseInt(b);
}
exports.sum = sum //导出一个对象，有sum属性，是一个函数
module.exports = sum //导出了一个函数 ，名字是 sum 
global.flag = 123; //也是导出 把flag添加到global全局对象中 引用就不太一样了，直接require('XXX.js')  console.log(global.flag);
const var0 = require('./00000')
//require 一个JS文件就会执行里面的代码 当我们require多次时候，只会执行一次，是直接从缓存里面读文件（是一个性能优化）
require('./00000')
require('./00000')
require('./00000')

// .js的拓展名可以省略，加载顺序.js .json .node (C++/C语言写的模块) 注意哦JSON文件也可以通过require加载哦
// var person = require('./111111.json')
// console.log(person.name);

//ES6语法  --let:没有预解析，块作用域  --const定义常量，定义时候必须赋值，不可二次赋值
let var1 = 111;
//解构赋值--数组
let [a, b, c] = [1, 2, 3]
let [d = 4, e, f] = [, 33,]
console.log(a, b, c, d, e, f);  //1 2 3 4 33 undefined
//解构赋值--对象
let { foo, bar } = { foo: 'hello', bar: 'hi' }
console.log(foo, bar);  //hello hi
//对象属性别名
let { foo: ssh, bb } = { foo: 'hello', bb: 'hi' }
console.log(ssh, bb);   //hello hi
// 对象的解构赋值指定默认值
let { fo: abc = 'hello', barr } = { bar: 'hi' };
console.log(abc, barr);

// let {cos,sin,random} = Math;
// console.log(typeof cos); //function
// console.log(typeof sin);
// console.log(typeof random);
// --------------------------------------
// 字符串的解构赋值
// let [a,b,c,d,e,length] = "hello";
// console.log(a,b,c,d,e);	//h e l l o
// console.log(length);		//undifined

// console.log("hello".length);  //5

// let {length} = "hi";
// console.log(length); //2


/*
    字符串相关扩展
    includes() 判断字符串中是否包含指定的字串（有的话返回true，否则返回false）
               参数一：匹配的字串；参数二：从第几个开始匹配
    startsWith()  判断字符串是否以特定的字串开始
    endsWith()  判断字符串是否以特定的字串结束

    模板字符串
*/
// console.log('hello world'.includes('world'));    //true
// console.log('hello world'.includes('world',7));  //从第7个位置匹配

// let url = 'admin/index.php';
// console.log(url.startsWith('aadmin')); true 
// console.log(url.endsWith('phph')); false

// ----------------------------------
let obj = {
    username: 'lisi',
    age: '12',
    gender: 'male'
}

let tag = '<div><span>' + obj.username + '</span><span>' + obj.age + '</span><span>' + obj.gender + '</span></div>';
console.log(tag);
// 反引号表示模板，模板中的内容可以有格式，通过${}方式填充数据
let fn = function (info) {
    return info;
}
let tpl = `
    <div>
        <span>${obj.username}</span>
        <span>${obj.age}</span>
        <span>${obj.gender}</span>
        <span>${1 + 1}</span>
        <span>${fn('nihao')}</span>
    </div>
`;
console.log(tpl);



/*
    函数扩展
    1、参数默认值
    2、参数解构赋值
    3、rest参数
    4、...扩展运算符
*/

// 参数默认值
// function foo(param){
//     let p = param || 'hello'; //有参数是参数，无参数是hello
//     console.log(p);
// }
// foo();   //hello
// foo('hi');   //hi

// 给函数设置默认值
// function foo(param = 'nihao') {
//     console.log(param);
// }
// foo();   //nihao
// foo('hello kitty');  //hello kitty
// ----------------------------------
// 函数参数默认值
// function foo(uname='lisi',age=12){
//     console.log(uname,age);
// }
// // foo('zhangsan',13); //zhangsan 13
// foo();   //lisi 12
// 参数解构赋值
// function foo({uname='lisi',age=13}={}){
//     console.log(uname,age);
// }
// foo({uname:'zhangsan',age:15});
// --------------------------------------
// rest参数（剩余参数）
// function foo(a,b,...param){
//     console.log(a);
//     console.log(b);
//     console.log(param); param变成数组，存了剩余参数
// }
// foo(1,2,3,4,5);

// 扩展运算符 ...
// function foo(a, b, c, d, e, f, g) {
//     console.log(a + b + c + d + e + f + g);
// }
// foo(1,2,3,4,5);
// let arr = [1, 2, 3, 4, 5, 6, 7];
// // foo.apply(null,arr);
// foo(...arr);

// // 合并数组
// let arr1 = [1, 2, 3];
// let arr2 = [4, 5, 6];
// let arr3 = [...arr1, ...arr2];
// console.log(arr3);


//箭头函数 --重要
/*
    箭头函数
*/
// function foo(){
//     console.log('hello');
// }
// foo();

// let foo = () => console.log('hello');//生明了一个foo函数 有名字函数有let 函数名 =
// foo();

// function foo(v){
//     return v;
// }
// let foo = v => v;
// let ret = foo(111);
// console.log(ret); //111

// 多个参数必须用小括号包住
// let foo = (a,b) => {let c = 1; console.log(a + b + c);}
// foo(1,2);

//匿名函数使用
// let arr = [123,456,789];
// arr.forEach(function(element,index){
//     console.log(element,index);
// });
// arr.forEach((element,index)=>{
//     console.log(element,index);
// });

// 箭头函数的注意事项：
// 1、箭头函数中this取决于函数的定义，而不是调用
// function foo(){
//     // 使用call调用foo时，这里的this其实就是call的第一个参数
//     // console.log(this); //浏览器里面返回Windows对象  node里面没有Windows，返回一大串全局对象。
//     setTimeout(()=>{
//         console.log(this.num);
//     },100);
// }
// foo.call({num:1});
// ----------------------------------
// 2、箭头函数不可以new
// let foo = () => { this.num = 123;};
// new foo();
// ------------------------------------
// 3、箭头函数不可以使用arguments获取参数列表，可以使用rest参数代替
// let foo = (a,b) => {
//     // console.log(a,b);
//     console.log(arguments);//这种方式获取不到实参列表
// }
// foo(123,456);
// let foo = (...param) => {
//     console.log(param);
// }
// foo(123, 456);



/*
    类与继承
*/
// function Animal(name){
//     this.name = name;
// }
// Animal.abc = function(){};
// $.ajax = function(){};
// Animal.prototype.showName = function(){
//     console.log(this.name);
// }
// var a = new Animal('Tom');
// a.showName();
// var a1 = new Animal('Jerry');
// a1.showName();
// -------------------------
class Animal {
    // 静态方法(静态方法只能通过类名调用，不可以使用实例对象调用)
    static showInfo() {
        console.log('hi');
    }
    // 构造函数
    constructor(name) {
        this.name = name;
    }

    showName() {
        console.log(this.name);
    }
}
// let a = new Animal('spike');
// a.showName();
// a.showInfo();
// Animal.showInfo();
// ------------------------------
// 类的继承extends
class Dog extends Animal {
    constructor(name, color) {
        super(name);//super用来调用父类
        this.color = color;
    }

    showColor() {
        console.log(this.color);
    }
}

let dog = new Dog('doudou', 'yellow');
dog.showName();
dog.showColor();
// d.showInfo();
Dog.showInfo();