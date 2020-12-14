var msg='nihao';
console.log(msg);
var car={type:'宝马',price:2000,year:'2019-09-09'}
console.log(car);
console.log(car.price+'-----'+typeof car);  //输出2000-----object  说明car为对象
var json={'name':'junjie',age:'21'}
console.log(typeof json+json.age);      //输出 object21   说明JSON 数据格式可以不用引号 有引号为String类型

for(var key in car){
    console.log(key);   //遍历JSON
}