/**
 * 主要存放  包装过的组件
 *  App 是包装Counter后生成的组件
 */

import Counter from '../components/counter'
import { connect } from 'react-redux'
import { increment, decrement } from '../redux/actions'
export default connect(
    (state) => ({ count: state })   //是一个函数 将state转换成props
    , { increment, decrement }      //是一个对象，里面存放的是actions里面的函数，就是渲染的组件里面要对数据XX处理 所使用到的XXaction
)(Counter)

