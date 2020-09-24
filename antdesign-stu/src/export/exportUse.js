// export default命令用于指定模块的默认输出。显然，一个模块只能有一个默认输出，因此export default命令只能使用一次。所以，import命令后面才不用加大括号，因为只可能唯一对应export default命令。
//  本质上，export default就是输出一个叫做default的变量或方法，然后系统允许你为它取任意名字。所以，下面的写法是有效的。


var aaaa = {
    name : "new"
}

export let name = 20
export let getName = function(){return "getName"}
export function nameFun() {
    console.log(111);
}
export {aaaa}         //ES6暴露对象的方式
export default {nn:22}
