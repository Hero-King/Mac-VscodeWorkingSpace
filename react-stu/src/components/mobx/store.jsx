import { action, observable, makeAutoObservable } from "mobx";

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
  inputObj = {
    secondObj: {
      input: "input"
    }
  }

  @observable
  num = 0;

  @observable todoList = [{ name: "init" }];

  @action
  addTodo(item) {
    this.todoList.push(item);
  }

  @action
  addNum() {
    this.num += 1;
  }
}

const store = new AppStore();
export default store;
