/**
 * 路径的操作
 *
 *
 */
const path = require('path')
console.log(path.basename('foo/heihei/aa.html')); //返回路径的最后一部分  aa.html
console.log(__dirname); ///Users/wangjunjie/VScodeWorkingSpace/node-stu/src

console.log(path.dirname('/foo/heihie/aa.html')); //   /foo/heihie

//path.format() //Returns a path string from an object - the opposite of parse().

console.log(path.parse(__filename));// Returns an object from a path string - the opposite of format()
/**
 * { root: '/',
  dir: '/Users/wangjunjie/VScodeWorkingSpace/node-stu/src',
  base: 'node-path.js',
  ext: '.js',
  name: 'node-path' }
 *
 */

console.log(path.isAbsolute('/home/wang')); //返回true  Linux是判断是否是/打头的

console.log(path.join('/foo', 'heihie', 'heihie/haha'));    //拼接路径 /foo/heihie/heihie/haha 可以加入‘..’ 上层目录哦
console.log(path.join('foo', 'heihie', 'heihie/haha'));    //拼接路径 foo\heihie\heihie\haha

console.log(path.normalize('foo/heihie//haha//xixi'));//规范华路径 oo/heihie/haha/xixi

console.log(path.resolve());    // 返回绝对路径 D:\Git\Mac-VscodeWorkingSpace\node-stuApi\src  默认相对路径是当前目录
console.log(path.resolve("webframe")); //D:\Git\Mac-VscodeWorkingSpace\node-stuApi\src\webframe
console.log(path.resolve("/home/wangjj","webframe"));   // D:\home\wangjj\webframe

//path.relative()  ; 计算两个路径的关系

//两个特殊的属性
path.delimiter();//定界符，分隔符;  路径分隔符 Linux /
path.sep();  // Linux ： 
