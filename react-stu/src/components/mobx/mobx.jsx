import React from "react";
// observer 可以用作包裹 React 组件的高阶组件。
import { observer, Provider, inject } from "mobx-react";
import appStore from "./store";
const MobxTest = observer(({store}) => {
  const value = store.inputValue;
  const { inputObj:{secondObj: {input}} } = store
  console.log(value);
  return  <div>MobxTest 
  <input value={value} onChange={e => appStore.inputValue = e.target.value}/>
  深层对象:
  <input value={input} onChange={e => appStore.inputObj.secondObj.input = e.target.value}/>
</div>
});


// 注入store  Provider提供的参数是什么就注入什么
@inject("appstore")
// 监听store变化
@observer
class MobxContext extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { todoList, num, inputValue } = this.props.appstore;
    console.log(todoList, inputValue);
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
