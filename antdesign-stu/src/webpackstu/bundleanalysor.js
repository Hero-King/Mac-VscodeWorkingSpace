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
            // 获取依赖文件的绝对路径
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

// console.log(moduleAnalysor('./index.js'));

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
    return dependenciesArray

}

console.log(makeDependenciesGraph('./indexTlp.js'));