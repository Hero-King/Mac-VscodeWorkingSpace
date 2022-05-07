import { observable, isObservableArray, action, autorun, computed, when, trace, makeObservable, extendObservable, makeAutoObservable , getDependencyTree} from 'mobx'

// let person = observable({
//     name: "John",
//     age: 42,
//     showAge: false,
//     child: {
//         name: "ha",
//         age: 24
//     }
// }, null, { deep: false });

// autorun(() => console.log(person.name))
// autorun(() => console.log(person.child.name))
// autorun(() => {
//     let { child } = person
//     console.log("autorun执行了")
// })

// person.child.name = "new"   // person.child.name不会重新打印
// person.child = { name: "newObj name" }    // person.child.name会重新打印 child是监控中的 autorun也会重新执行

class Person {
    constructor(props) {
        // makeAutoObservable(this);
        // Mobx6 必须在构造中执行 makeObservable / makeAutoObservable 
        // 不要使用注解了  直接在构造中指明
        makeObservable(this, {
            name: observable,
            age: observable.ref,
            observableArr: observable,
            // child: observable.shallow,
            child: observable,
        })
    }
    // @observable  //没效果
    name = ""
    age = null
    observableArr = []
    child = [{
        name: "shallow",
        age: 10
    }]

    @action setAge(t) {
        this.age = t
    }
}

const p = new Person();
// 测试name
autorun(() => console.log(p.name))
p.name = "new Name" //不使用 makeObservable注册 使用注解 没效果

// 测试age
// autorun(() => {
//     if (Array.isArray(p.age)) {
//         console.log(p.age.join("/"))
//     }else{
//         console.log(p.age);
//     }
// })
// p.age = [1,2,3] //会打印新的age
// p.age[0] = 0    // 不会打印新的age
// p.age = {}

// 测试arr
// autorun(() => console.log(p.observableArr.join('/')))
// p.observableArr = [1,2,3] //会打印 1/2/3
// p.observableArr[3] = 0    // 会打印 1/2/3/0

// 测试child
let t = autorun(() => {
    trace()
    p.child.forEach(i => console.log(i.name + i.age))
})

/**
 * Autorun 通过在响应式上下文运行 effect 来工作。在给定的函数执行期间，MobX 会持续跟踪被 effect 直接或间接读取过的所有可观察对象和计算值。 一旦函数执行完毕，MobX 将收集并订阅所有被读取过的可观察对象，并等待其中任意一个再次发生改变。 一旦有改变发生，autorun 将会再次触发，重复整个过程。
 */
let a = autorun(() => {
    // p.child.forEach(i => console.log(i))    // 只执行了一次  
    // 改成 console.log(mobx.toJS(i)) toJS 创建一个深拷贝的对象，也因此 i.name 被使用
    // console.log({ ...message }) // 创建一个浅拷贝，展开时 message.title 也会被使用
    // console.log(JSON.stringify(message)) // JSON 序列化，也会使用 message.title
})
console.log(getDependencyTree(a), getDependencyTree(t));
p.child[0].name = "new shallow"