import React from "react";

function log(WrapperComponent) {
  class Log extends React.Component {
    render() {
      console.log(this.props, "Hoc: log props when wrappedComponent render");
      return <WrapperComponent />;
    }
  }
  // 给高阶组件命名 方便 devtools 调试
  Log.displayName = `Log(${getDisplayName(WrapperComponent)})`;
  return Log;
}
function getDisplayName(WrappedComponent) {
  return WrappedComponent.displayName || WrappedComponent.name || "Component";
}

function funLog(target) {
  const desc = Object.getOwnPropertyDescriptors(target.prototype)
  console.log(desc);
  for (const key of Object.keys(desc)) {
    if (key === "constructor") continue;

    const func = desc[key].value;
    if(typeof func === "function"){
      target.prototype[key] = function(...arg){
        console.log("before func");
        const res = func.call(this,...arg)
        console.log("after func");
        return res
      }
    }
  }
}

function readonly(target, key, description){
  // console.log(arguments);
  description.writeable = false
}

@funLog
class TestFunLog {
  @readonly 
  name = "testFunLogName";
  sayName(param) {
    console.log(this.name,param);
  }
}
new TestFunLog().sayName(11);

@log
class Decorator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  handleClick = (e) => {
    this.setState({ count: this.state.count + 1 });
  };
  render() {
    const { count } = this.state;
    return (
      <div className="module">
        decorator {count} <button onClick={this.handleClick}>+</button>
      </div>
    );
  }
}

// 使用装饰器替换下面的写法  先安装依赖: npm install --save-dev @babel/plugin-proposal-decorators 配置.babelrc文件 直接在类上添加@ + 包装函数
// export default log(Decorator)
export default Decorator;
