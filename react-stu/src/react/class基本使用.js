//传统创建对象
function Person() {
    
}

const per =new Person();
console.log(per)

function User(name,age) {
    this.name=name  //this，需要new出来实例是实例属性
    this.age=age
}
const user=new User('wang',21)
console.log(user)

//静态属性 通过构造函数访问
Person.info='aaa'
console.log(per.info)   //输出 undefined
console.log(Person.info)   //aaa

//传统方式创建实例方法
Person.prototype.say=function () {
    console.log('这是Person的实例方法')
}

//静态方法
Person.show = function () {
    console.log('这是person的静态方法')
}


//使用ES6 中的class
class Animal {
    constructor(name,age){//构造器
        this.name = name
        this.age = age
    }

    //静态属性通过static关键字修饰
    static info='bbb'
    static show(){
        
    }
}

const a1=new Animal('dahuang',2)
console.log(a1);    //Animal {name: "dahuang", age: 2}
console.log(Animal.info) //bbb