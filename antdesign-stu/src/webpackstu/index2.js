import touXiang from './touxiang.jpg'
let div1 = document.getElementById("div2")
let newImg = document.createElement("img")
newImg.src = touXiang
newImg.className = "imgsmall"
div1.appendChild(newImg)
export function funaa(params) {
    console.log("funaa" + params);
}

export function funbb(params) {
    console.log("funbb" + params);
}