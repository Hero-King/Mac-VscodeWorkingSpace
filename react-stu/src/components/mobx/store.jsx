import { action, observable, makeAutoObservable, toJS } from "mobx";

class AppStore {
  // https://juejin.cn/post/6978852090881769486 Mobx5 6 的使用
  constructor() {
    // 将参数对象中的属性设置为 observable state
    // 将参数对象中的方法设置为 action
    // Mobx6 使用这种方式自动注册obeservable 和 action

    // 在版本6之前，Mobx鼓励使用ES.next中的decorators,将某个对象标记为observable, computed 和 action。然而，装饰器语法尚未定案以及未被纳入ES标准，标准化的过程还需要很长时间，且未来制定的标准可能与当前的装饰器实现方案有所不同。出于兼容性的考虑，我们在MobX 6中放弃了它们，并建议使用makeObservable / makeAutoObservable代替。
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

  @observable.shallow
  shallowList = [{id:0,name:"wang"}]

  @observable.ref
  testShallowObj={
    first: {
      second: 1
    }
  }

  setTestShallowObj(level){
    if(level == 0){
      this.testShallowObj = {}
    }else if(level == 1){
      this.testShallowObj.first = {}
    }else if (level == 2){
      this.testShallowObj.first.second = 2
    }
  }

  addShallowItem(item){
    this.shallowList.push(item)
  }

  addTodo(item) {
    this.todoList.push(item);
  }

  setToDoListItem(index){
    this.todoList[index].name = index
  }

  setToDoList(todoList) {
    this.todoList = todoList
  }
  resetToDoList() {
    this.todoList = []
  }
  deleteAllToDoList() {
    // 一个一个删除 只会渲染一次 因为是一个action 一个事务
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
