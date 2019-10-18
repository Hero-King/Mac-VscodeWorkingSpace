//暴露配置对象
const path = require('path')
module.exports = {
    entry: './src/index.js',    //默认就是此文件
    mode: 'development',
    output: {
        filename: 'main.js',
        path: path.join(__dirname, 'dist')
    },
    devServer: {
        open: true,  //自动打开浏览器
        port: 3000,  //设置端口
        hot: true,  //启用热更新
        contentBase: 'src'   //设置托管更目录
    },
    module: {
        rules: [
            // { test: /\.css$/, use: 'css-loader' },
            // { test: /\.ts$/, use: 'ts-loader' },
            { test: /\.jsx?$/, use: 'babel-loader', exclude: /node_modules/ } //配置js jsx 文件的处理方式
        ]
    }
}