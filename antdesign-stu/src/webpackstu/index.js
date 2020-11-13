import aa from './index.css'  // 需要webpack中配置loader,这样webpack就能够把项目中import css 给打包到bundle.js中
import touXiang from './touxiang.jpg'
import './index.less'
// import _ from 'underscore'
import { funaa } from './index2'
// import mymodule from './mymodule'   //之前引入本地公共模块只能使用相对路径方式 现在可以使用 webpack配置resolve.alias
// import mymoduleByAlias from 'mymodule'
// import $ from 'jquery'         //并没有把node_modules目录下的jquery代码打包，是因为webpack中配置了externals
// import jQuery from 'jquery'    // 因为使用了ProvidePlugin插件，所以这里不用手动导入了  其实通过script标签引入的可以直接使用
console.log(1111);
const log = (str) => {
    console.log(str);
}
let div1 = document.getElementById("div2")
let newImg = document.createElement("img")
console.log(aa.imgsmall);
newImg.classList.add(aa.imgsmall)
newImg.src = touXiang
div1.appendChild(newImg)
log(2222)
$.map([1, 2, 3], (item, index) => {
    console.log(item);
})

console.info(_.max([1, 2, 3]))  // 控制台正常输出了  也就是通过script标签引入的可以直接使用
export default {
    name11: 11
}




