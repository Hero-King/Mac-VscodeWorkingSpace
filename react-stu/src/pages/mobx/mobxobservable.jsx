import React from 'react'
import { observable,isObservableArray, action, autorun , computed, when, trace, extendObservable} from 'mobx'

// https://zh.mobx.js.org/README.html 官网
// mobx可以用在多个平台
// mobx-react是将react组件转换成可观察数据的反应,准确来说是将组件的render方法做成观察熟悉的autorun, 内部也重写了shouldComponentUpdate方法,不需要在处理
// mobx 能精确定位到那个对象变化,哪一层对象发生变化, 注解应该放在真正使用observable观察的数据变化的组件中
// action的作用是使得多次对装填数据的变化合并成一次从而减少视图render或者autoRun的次数, 出了在store中定义action 还支持使用runInAction随时随地定义匿名的action

// 工具: toJs()是把obserable的数据转换成js类型数据
    // oberserve observe(target, propertyName?, listener, invokeImmediately?) 监听参数变化 执行回调函数 observe 会响应对应的变动，而像是 autorun 或 reaction 则会对新值做出响应。
    // trace() 用于放在组件的render函数中调用, 跟踪组件渲染的次数和重新渲染的原因

// observable 把对象 数组 map 类型的数据转换成可观察的对象
const arr = observable([1,2,3])
console.log(arr, Array.isArray(arr), isObservableArray(arr), "----");   // true true

// map类型
const arrT = [{name: "wang"},{name: "jun"},{name: "jie"}]
arrT.forEach((i, index) => i.id = index)
let map1 = new Map(arrT.map(i => [i.id,i]))
const deepmap = observable(map1)
autorun(() => console.log(deepmap,"deepmap的大小是: " + deepmap.size))    // ObservableMap, map中的每个value也是ObservableValue可监听的
autorun(() => {
    let value = deepmap.get(0);
    console.log(value.name,"value.name")
})
// map1.set(4,{name: "name4"}) 设置map1是没有用的  要设置deepmap
deepmap.set(4,{name: "name4"})
let object = {
    "like": "like",
    "other": "other",
    "some": "some"
}
for (const key in object) {
    if (Object.hasOwnProperty.call(object, key)) {
        const element = object[key];
        deepmap.set(key,element)
    }
}
const map = observable(map1,{deep: false,name: "myMap"})
console.log(map)    // ObservableMap, 指定name方便调试;

autorun(() => {
    console.log(map.get(0).name,"map")
})


// 转换常规类型需要用observable.box()
let num = observable(10)
let str = observable("str")
let bool = observable(true)
console.log(num, str, bool)
console.log(num.get(), str.get(), bool.get());  // 10 "str" true
num.set(100)
console.log(num.get(), str.get(), bool.get());  // 100 "str" true

// objects
// 默认情况下，observable 是递归应用的，所以如果对象的某个值是一个对象或数组，那么该值也将通过 observable 传递。
// mobx只能对已存在的属性进行监控  需要对新添加的属性监控 --> extendObservable
var person = observable({
    // observable 属性:
    name: "John",
    age: 42,
    showAge: false,

    // 计算属性:
    get labelText() {
        return this.showAge ? `${this.name} (age: ${this.age})` : this.name;
    },

    // 动作:
    setAge(age) {
        this.age = age;
    }
}, {
    setAge: action
});
console.log(person,person.name,person.labelText)    //   'John' 'John'
// 对象属性没有暴露 'observe' 方法,
// 但不用担心, 'mobx.autorun' 功能更加强大
// autorun 会创建一个 action，这个 action 会先自动运行一次，之后每当小函数用到的任意一个 observable 数据发生了改变，它也会自动重新运行。
autorun(() => console.log(person.labelText));
// 输出: "John"

person.name = "Dave";
// 输出: 'Dave'

person.showAge = true;
// 输出: "Dave (age: 42)"


//  对 observables 作出响应
// (@)computed 计算值(computed values)是可以根据现有的状态或其它计算值衍生出的值。
// 不要把 computed 和 autorun 搞混。它们都是响应式调用的表达式，但是，如果你想响应式的产生一个可以被其它 observer 使用的值，请使用 @computed，如果你不想产生一个新值，而想要达到一个效果，请使用 autorun。 举例来说，效果是像打印日志、发起网络请求等这样命令式的副作用。
const name = observable.box("myname")
const upperName =  computed(() => name.get().toUpperCase())
console.log(upperName.get());   // MYNAME
var disposer = autorun(() => console.log("upperName变化自动监听:", upperName.get()));   // autorun依赖upperName 会在这个监听属性变化后自动执行autorun  disposer() 取消autorun

// when
// when(predicate: () => boolean, effect?: () => void, options?)  when 观察并运行给定的 predicate，直到返回true。 一旦返回 true，给定的 effect 就会被执行，然后 autorunner(自动运行程序) 会被清理。 该函数返回一个清理器以提前取消自动运行程序。 如果条件直接是真,那么后面的条件函数就直接执行
when(() => upperName.get().length > 6, () => console.log("upperName.length > 6啦"));
name.set("newname")
console.log(upperName.get());   // NEWNAME

