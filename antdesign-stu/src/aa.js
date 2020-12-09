const result = [
    { fieldId: 20000, fieldValue: "1111" },
    { fieldId: 20008, fieldValue: [101, 102, 103] },
]

//console.log(result.find((item, index) => { item.fieldId === 20008 }))  error   箭头函数的{} 必须和return一起省略   不可以只省略return
result.find(item => {
    return item.fieldId === 20008
}).fieldValue.map((item) => {
    console.log(item)
})

var f = (a, b) => a + b;
//8
console.log(f(6, 2))

const obj = {
    name: 'wang',
    age: 12
}
const aa = JSON.stringify(obj)
console.log(aa);

console.log( typeof exports === 'object' && typeof module !== 'undefined');

// (function (global, factory) {
//     !(typeof exports === 'object' && typeof module !== 'undefined') ? module.exports = factory() :
//             (function () {
//                 console.log("----",global);
//                 var current = global.aaaa;
//                 var exports = factory();
//                 global.aaaa = exports;
//                 // exports.noConflict = function () { global._ = current; return exports; };
//             })();
//     console.log("函数自调用");
// })(this, function (params) {
//     console.log("1111");
//     let _ = {}
//     _.add = function(a,b) { return a+b}
//     return _
// })
