/**
 * 用于生产store 对象---》需要reducer函数  导入
 */

import { createStore } from 'redux'
import { counter } from './reducers'
const store = createStore(counter)      //  根据reducer创建全局store
export default store