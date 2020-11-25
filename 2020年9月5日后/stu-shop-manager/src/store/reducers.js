/**
 * 里面存放所有于redux相关的函数 
 * 
 * 在 Redux 应用中，所有的 state 都被保存在一个单一对象中。建议在写代码前先想一下这个对象的结构。如何才能以最简的形式把应用的 state 用对象描述出来？
 * 现在我们已经确定了 state 对象的结构，就可以开始开发 reducer。reducer 就是一个纯函数，接收旧的 state 和 action，返回新的 state。
    (previousState, action) => newState
    注意: 只要传入参数相同，返回计算得到的下一个 state 就一定相同。没有特殊情况、没有副作用，没有 API 请求、没有变量修改，单纯执行计算。
        不要修改 state。 使用 Object.assign() 新建了一个副本,或者es6新写法,
        必须返回新的对象!! 不要改变原有的state对象
        在 default 情况下返回旧的 state。遇到未知的 action 时，一定要返回旧的 state。
    举例: 
    function todoApp(state = initialState, action) {
    // 这里暂不处理任何 action，
    // 仅返回传入的 state。
        return state
    }

    合并多个 reducer  => combineReducers(a,b)   取用的时候注意一下路径变了
    如果redux中的数据是异步的  使用 redux-thunk
 */
//书写reducers---
export function notices(state = {isAllRead: false,count: 8}, action) {
    switch (action.type) {
        case 'readAll':
            return {...state,isAllRead: true}
        default:
            return state
    }
}