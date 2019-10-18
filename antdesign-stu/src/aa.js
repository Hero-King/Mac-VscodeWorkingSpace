
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
var g = (a, b) => { a + b };
//8
console.log(f(6, 2))
console.log(g(6, 1))    //undefined

const obj = {
    name: 'wang',
    age: 12
}
const aa = JSON.stringify(obj)
console.log(aa);