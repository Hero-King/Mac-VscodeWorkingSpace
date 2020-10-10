const path = require('path');

module.exports = {
    entry: './index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),

        // 这样导出的模块就将export导出的 属性以umd方式重命名为 name11   clg(window.name11.default.name11)  => 11
        // webpack打出的包是自调用函数
        library: "name11",
        libraryTarget: "umd"
    },
    // externals 配置选项提供了「从输出的 bundle 中排除依赖」的方法。相反，所创建的 bundle 依赖于那些存在于用户环境(consumer's environment)中的依赖。此功能通常对 library 开发人员来说是最有用的，然而也会有各种各样的应用程序用到它。
    // jquery 就可以通过其他方式引入 jQuery是指全局对象（window/global）下的这个属性  而不是通过webpack打包node_modules里面jquery到 bundle.js中
    externals: {
        jquery: 'jQuery'
    },
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