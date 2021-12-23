import React from "react";
// observer 可以用作包裹 React 组件的高阶组件。
import { observer, Provider, inject } from "mobx-react";
import appStore from "./store";
import './mobxobservable'

const MobxTest = observer(({ store }) => {
  const value = store.inputValue;
  const { inputObj: { secondObj: { input } } } = store
  console.log(value);
  return <div>MobxTest
    <input value={value} onChange={e => appStore.inputValue = e.target.value} />
    深层对象:
    <input value={input} onChange={e => store.updateDeepValue(e.target.value)} />
  </div>
});

@inject("appstore")
@observer
class ToDoList extends React.Component {
  render() {
    const { todoList } = this.props.appstore;
    console.log("ToDoList Component render");
    return <ul>
      {
        todoList.map(i => <li key={i.name}>{i.name || ""}</li>)
      }
    </ul>

  }
}

@inject("appstore")
@observer
class AddList extends React.Component {
  handleClick(){
    // 不要解构函数  会影响函数内部this指向
    const { appstore } = this.props;
    let name = "Init" + Math.random()
    appstore.addTodo({name})
    // this.props.appstore.addTodo({name})
  }
  render() {
    const { appstore } = this.props;
    const {map} = appstore;
    console.log("AddList Component render");
    return <div>
      <button onClick={e => this.handleClick(e)}>
      添加List (ToDoList 会重新渲染一遍)
    </button>
    <button onClick={e => appstore.resetToDoList()}>
      重置List (ToDoList 会重新渲染一遍)
    </button>
    <button onClick={e => appstore.deleteAllToDoList()}>
      store中一个一个删除List
    </button>
    <button onClick={e => appstore.updateInputObj({name: "wang",age: 24})}>
      挨个属性添加到inputObj中 
      {/* MObx真的做的很好  render()中使用到哪个属性  属性变化了才刷新 只引用对象不刷新 用到数组中的元素变化了才刷新, 只引用数组不刷新
        观察: 添加List时候 MobxContext 组件不刷新
              更新updateInputObj  MobxContext组件打印inputObj不刷新  打印inputObj.name 组件刷新
      */}
    </button>
    <button onClick={e => appstore.updateMap("name","123")}>
      更新map一个key
    </button>
    <button onClick={e => {
      let object = {name: "wang", age: 18,money: 1000,time: Date.now()}
      // 1. 批量更新Store中map的数据  mobx也会优化渲染一次
      // 2. render中直接引用的数据没变化, 组件不刷新
      for (const key in object) {
        if (Object.hasOwnProperty.call(object, key)) {
          const value = object[key];
          console.log(key,value);
          appstore.updateMap(key,value)
        }
      }
    }}>
      更新map多个key
    </button>
    <div>map.size: {map.size} map.time: {map.get("time")}</div>
    </div>

  }
}

// 注入store  Provider提供的参数是什么就注入什么
@inject("appstore")
// 监听store变化
@observer
class MobxContext extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { todoList, num, inputValue ,inputObj} = this.props.appstore;
    console.log(todoList, inputValue, inputObj.name);
    return (
      <div>
        使用装饰器获取store数据绑定到this.props 并监听变化
        {num}
        <button
          onClick={(e) => {
            this.props.appstore.addNum();
          }}
        >
          +
        </button>
        <ToDoList />
        <AddList/>
      </div>
    );
  }
}

class Mobx extends React.Component {
  render() {
    return (
      <div>
        安装: npm install mobx-react --save 更适合中小型的项目 Observable
        state(可观察的状态) MobX
        为现有的数据结构(如对象，数组和类实例)添加了可观察的功能。 通过使用
        @observable
        装饰器(ES.Next)来给你的类属性添加注解就可以简单地完成这一切。
        Computed values(计算值) 使用 MobX， 你可以定义在相关数据发生变化时自动更新的值。
        通过@computed 装饰器或者利用 (extend)Observable 时调用 的getter / setter函数来进行使用。
        Reactions(反应) Reactions
        和计算值很像，但它不是产生一个新的值，而是会产生一些副作用，比如打印到控制台、网络请求、递增地更新
        React 组件树以修补DOM、等等。
        <div>
          MObx核心思想: 状态变化引起的副作用应该被自动化触发: action ---》 state
          ---》 Reaction        </div>
        <MobxTest store={appStore} />
        <Provider appstore={appStore}>
          <MobxContext />
        </Provider>
      </div>
    );
  }
}

export default Mobx;
