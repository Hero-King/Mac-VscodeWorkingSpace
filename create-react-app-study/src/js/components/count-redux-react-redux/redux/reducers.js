/**
 * 里面存放所有于redux相关的函数
 */
//书写reducers---counter
export function counter(state = 0, action) {
    switch (action.type) {
        case 'increment':
            return state + action.data * 1
        case 'decrement':
            return state - action.data * 1
        default:
            return state
    }
}