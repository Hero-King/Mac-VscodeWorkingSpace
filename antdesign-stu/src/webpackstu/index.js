import aa from './index.css'  // 需要webpack中配置loader,这样webpack就能够把项目中import css 给打包到bundle.js中
import touXiang from './touxiang.jpg'
import $ from 'jquery'         //并没有把node_modules目录下的jquery代码打包，是因为webpack中配置了externals
// import jQuery from 'jquery'    // 因为使用了ProvidePlugin插件，所以这里不用手动导入了  其实通过script标签引入的可以直接使用
console.log(1111);
const log = (str) => {
    console.log(str);
}
let div1 = document.getElementById("div1")
let newImg = document.createElement("img")
newImg.src = touXiang
div1.appendChild(newImg)
log(2222)
$.map([1,2,3],(item,index) => {
    console.log(item);
})
jQuery.map([1,2,3],(item,index) => {
    console.log(item);      // 控制台正常输出了
})
console.error( _.max([1,2,3]))  // 控制台正常输出了  也就是通过script标签引入的可以直接使用
export default {
    name11: 11
}


