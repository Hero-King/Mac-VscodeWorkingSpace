let duixiang1 = require('./js-duixiang1')
console.log(duixiang1.name);    //wangjunjie
//console.log(duixiang1[name]);   //error;
console.log(duixiang1['name']);     //wangjunjie
console.log(duixiang1["name"]);     //wangjunjie
console.log(duixiang1['gender']);     // 男

// JS 对象访问属性的两种方式 XXX.name  和   XXX['name'] 或者XXX["name"]
//node js 中console对象
console.log('hello world');
// Prints: hello world, to stdout
console.log('hello %s', 'world');
// Prints: hello world, to stdout
//console.error(new Error('Whoops, something bad happened'));     //程序跑不下去了
// Prints: [Error: Whoops, something bad happened], to stderr

const name = 'Will Robinson';
console.warn(`Danger ${name}! Danger!`);
// Prints: Danger Will Robinson! Danger!, to stderr

/**
 *
 * Object.keys() 方法会返回一个由一个给定对象的自身可枚举属性组成的数组，数组中属性名的排列顺序和使用 for...in 循环遍历该对象时返回的顺序一致 。如果对象的键-值都不可枚举，那么将返回由键组成的数组
 */
console.log(Object.keys(duixiang1)); //[ 'person', 'name', 'age', 'gender' ]


/*
js调用函数时传入的参数个数与函数定义时的参数个数不符时的操作：

    在js中函数没有重载的概念，如果声明了多个重名的函数，不管函数的形参个数是否一样，只有最有一个有效，其他的函数声明都是无效的。比如说声明了两个函数fn()，第一次声明时没有形参，第二次声明时形参有两个，则在调用fn()时不管有没有传入参数，都是调用后声明的那个函数。假如说调用时只传入了1个参数，例如fn(1)，则1会赋给函数的第一个形参，而第二个形参不会赋值，如果有用到，就会当undefined处理，可能会报错。如果调用时传入了3个参数，例如fn(1,2,3)，则1会赋给第一个形参，2会赋给第二个形参，3是用不上的，但是不会报错。

理解原因：
ECMAScript函数的参数与大多数其他语言中的函数的参数有所不同。ECMAScript函数不介意传递进来多少个参数，也不在乎穿进来参数是什么数据类型。也就是是说，即便你定义的函数值接受两个参数，在调用这个函数时也未必一定要是两个参数。可以传递一个、三个甚至不传递参数，而解析器永远不会有什么怨言。之所以会这样，原因是ECMAScript中的参数在内部是用一个数组来运行的。函数接受到的永远是这个数组，而不关心数组中包含哪些参数(如果有参数的话)。如果这个数组中不包含任何元素，无所谓；如果包含多个元素，也没问题。实际上，在函数体内可以通过arguments对象来访问这个参数数组，从而获取传递给含糊的每一个参数。






*/