// console.log(global);
let __VAR__LET = "我是变量";
console.log("__VAR__let: " + global.__VAR__LET);
const __VAR__const = "我是变量";
console.log("__VAR__const: " + global.__VAR__const);
__VAR__ = "我是变量";
console.log("没有标识符: " + global.__VAR__);

/**
 *  如果你正在使用一系列node模块，或许是一个像Express.js一样的框架，突然需要使用几个全局变量。怎样在nodejs里创建全局变量呢？

       对此最常见的建议是“不使用‘var’关键字声明一个变量”或“给object对象添加一个变量”或“给OBJECT对象添加一个变量”。你会使用哪种方式呢？

不使用var关键字声明的变量附加到global对象上。!!!
 */