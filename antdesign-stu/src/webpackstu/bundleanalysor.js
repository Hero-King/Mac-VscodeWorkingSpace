const fs = require('fs')
const path = require('path');
// 分析代码内容 变成抽象语法树
const parser = require('@babel/parser')
const traverse = require('@babel/traverse').default
// 使用@babel/core 翻译ES6语法代码
const babel = require("@babel/core")
// require('@babel/preset-env')

const moduleAnalysor = (fileName) => {
    const content = fs.readFileSync(fileName, "utf-8");
    const ast = parser.parse(content, { sourceType: "module" })
    const dependencies = {};
    traverse(ast, {
        ImportDeclaration({ node }) {
            // 获取依赖文件的路径
            const dirName = path.dirname(fileName);
            const newFile = "./" + path.join(dirName, node.source.value)
            dependencies[node.source.value] = newFile;
        }
    })
    const { code } = babel.transformFromAst(ast, null, {
        presets: ["@babel/preset-env"]
    })
    // console.log(code);
    return {
        fileName, dependencies, code
    }
}

// console.log(moduleAnalysor('./indexTlp.js'));

// 队列遍历
const makeDependenciesGraph = (entryFile) => {
    const entryModule = moduleAnalysor(entryFile);
    const dependenciesArray = [entryModule];
    for (let i = 0; i < dependenciesArray.length; i++) {
        const item = dependenciesArray[i];
        const { dependencies } = item;
        if (dependencies) {
            for (const key in dependencies) {
                dependenciesArray.push(moduleAnalysor(dependencies[key]))
            }
        }
    }
    const graph = {}
    dependenciesArray.forEach(i => {
        graph[i.fileName] = {
            code: i.code,
            dependencies: i.dependencies
        }
    })
    return graph

}

// console.log(makeDependenciesGraph('./indexTlp.js'));

// 生成浏览器可执行的code

// 依赖图谱中 有require方法,但是浏览器不认识,我们自己定义实现
// 模块与模块之间变量互不打扰  ->闭包
// 依赖图谱中路径是value不是key 需要路径解析
const genderCode = (entryFile) => {
    const graph = JSON.stringify(makeDependenciesGraph(entryFile))
    return `
        (function(graph){
            function require(module){
                function localRequire(relatiPath){
                    return require(graph[module].dependencies[relatiPath])
                }
                const exports = {};
                (function(require, code,exports){
                    eval(code)
                })(localRequire,graph[module].code,exports)
                return exports;
            }
            require('${entryFile}')
        })(${graph});
    `
}
let code = genderCode('./indexTlp.js')

fs.writeFile('./aa', code, function (err) {
    if (err) {
        console.log(err);
    }
})

