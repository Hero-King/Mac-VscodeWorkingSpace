var mo =require('./module模块化.js')//.js .json .node拓展名可以省略(优先加载排在前面的)
console.log(mo.sum(1, 2));
//error   mo.sum is not a function  原因是 默认情况模块之前的成员是相互隔离的

//需要模块导出成员 export.sum =sum;


/*
* 或者用module。exports=sum
* var sum =require('./module模块化.js')
* console.log(sum(1,2))
* */