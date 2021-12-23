import { action, observable, makeAutoObservable, toJS } from "mobx";

class AppStore {
  // https://juejin.cn/post/6978852090881769486 Mobx5 6 的使用
  constructor() {
    // 将参数对象中的属性设置为 observable state
    // 将参数对象中的方法设置为 action
    // Mobx6 使用这种方式自动注册obeservable 和 action
    makeAutoObservable(this);
  }

  @observable   //有了makeAutoObservable 可写可不写了
  time = "";

  inputValue = "init";
  map = new Map();
  inputObj = {
    secondObj: {
      input: "input"
    },
    // name: "defaultname",
    // age: 0
  };

  updateDeepValue(value) {
    this.inputObj.secondObj.input = value
  };

  updateInputObj(object) {
    for (const key in object) {
      const element = object[key];
      this.inputObj[key] = element
    }
    console.log(toJS(this.inputObj));
  }

  @observable
  num = 0;

  @observable
  todoList = [{ name: "init" }];

  addTodo(item) {
    this.todoList.push(item);
  }

  setToDoList(todoList) {
    this.todoList = todoList
  }
  resetToDoList() {
    this.todoList = []
  }
  deleteAllToDoList() {
    const { todoList: { length } } = this;
    for (let i = 0; i < length; i++) {
      this.todoList.pop()
    }
  }

  addNum() {
    this.num += 1;
  }

  updateMap(key, value) {
    this.map.set(key, value)
  }
}

const store = new AppStore();
export default store;
