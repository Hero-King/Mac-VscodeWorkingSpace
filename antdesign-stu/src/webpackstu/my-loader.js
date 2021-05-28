// loader 会返回一个或者两个值。第一个值的类型是 JavaScript 代码的字符串或者 buffer。第二个参数值是 SourceMap，它是个 JavaScript 对象。 
// 当一个 loader 在资源中使用，这个 loader 只能传入一个参数 - 这个参数是一个包含包含资源文件内容的字符串
function changeText(content) {
    console.log(content);
    const newData = content + "1212";
    return `export default ${JSON.stringify(newData)}`
    // return content + "from loader"   报错  Module parse failed: Unexpected token
}
module.exports = changeText