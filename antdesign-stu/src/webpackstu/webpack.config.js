const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
    mode: "development",    // "production" | "development" | "none"
    devServer: {},          // 配置webpack-dev-server
    entry: './index.js',    //等价于 entry: {main : './index.js'} 其中key 可以在 output配置中使用占位符读取 [name]
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
        // publicPath: "http://www.heroking.top/", //html文件中引入打包后的js文件前添加了URL网址
        // publicPath: "/public/", //html文件中引入打包后的js文件前添加了相对于html文件的路径 <script src="/public/bundle.js"></script></body>
        

        // 这样导出的模块就将export导出的 属性以umd方式重命名为 name11   clg(window.name11.default.name11)  => 11
        // webpack打出的包是自调用函数
        library: "name11",
        libraryTarget: "umd"
    },
    // externals 配置选项提供了「从输出的 bundle 中排除依赖」的方法。相反，所创建的 bundle 依赖于那些存在于用户环境(consumer's environment)中的依赖。此功能通常对 library 开发人员来说是最有用的，然而也会有各种各样的应用程序用到它。
    // jquery 就不会再node_modules中查找，而是通过其他方式引入 jQuery是指全局对象（window/global）下的这个属性  而不是通过webpack打包node_modules里面jquery到 bundle.js中
    externals: {
        // jquery: 'jquery',   // error index.js中$.map就报错了 $ is undefined
        jquery: 'jQuery'
    },
    plugins: [
        // 自动加载模块，而不必到处 import 或 require 。
        new webpack.ProvidePlugin({
            // identifier: 'module1',
            // 任何时候，当 identifier 被当作未赋值的变量时，module 就会自动被加载，并且 identifier 会被这个 module 输出的内容所赋值。  
            $: 'jquery',
            // jQuery: 'jquery'
        }),
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: "index.html"
        })
    ],
    module: {
        rules: [{
            // 处理import 的css
            test: /\.css$/,
            use: [
                'style-loader',
                'css-loader'
            ]
        }, {
            // 处理require的图片  当你 import MyImage from './my-image.png'，该图像将被处理并添加到 output 目录，_并且_ MyImage 变量将包含该图像在处理后的最终 url
            test: /\.(png|svg|jpg|gif)$/,
            use: [
                'file-loader'
            ]
        }]
    }
};