import './index.css'  // 需要webpack中配置loader,这样webpack就能够把项目中import css 给打包到bundle.js中
import touXiang from './touxiang.jpg'
import $ from 'jquery'
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
export default {
    name11: 11
}
