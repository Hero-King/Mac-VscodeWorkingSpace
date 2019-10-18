const path = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
    entry: './src/main.js',      //入口  默认是/src/index.js 遵循默认最好
    mode: 'development',         //模式
    // d不压缩  P压缩
    // output:{                    //出口
    //     path: path.resolve(__dirname, 'dist'),
    //     filename: 'bundle.js'
    // },
    //设置webpack-dev-server
    devServer: {
        open: true,  //自动打开浏览器
        port: 3000,  //设置端口
        hot: true,  //启用热更新
        contentBase: 'src'   //设置托管更目录
    },
    plugins: [
        new htmlWebpackPlugin({       // 创建插件对象 --能够自己导入内存中的bundle。js
            template: path.join(__dirname, './src/index.html'),  //指定用哪个模版，根据他去创建页面
            filename: 'index.html'  //指定内存中生成的文件名
        })
    ],
    /**
     * loader 主要是将webpack不认识的文件 比如CSS LESS 转换成webpack认识的代码进行打包  而babel是将ES6等高级语法转换成低版本浏览器识别的低版本语法
     * module: { // 配置所有第三方loader 模块的
    rules: [ // 第三方模块的匹配规则
      { test: /\.css$/, use: ['style-loader', 'css-loader'] }, // 处理 CSS 文件的 loader
      { test: /\.less$/, use: ['style-loader', 'css-loader', 'less-loader'] }, // 处理 less 文件的 loader
      { test: /\.scss$/, use: ['style-loader', 'css-loader', 'sass-loader'] }, // 处理 scss 文件的 loader
      { test: /\.(jpg|png|gif|bmp|jpeg)$/, use: 'url-loader?limit=7631&name=[hash:8]-[name].[ext]' }, // 处理 图片路径的 loader
      // limit 给定的值，是图片的大小，单位是 byte， 如果我们引用的 图片，大于或等于给定的 limit值，则不会被转为base64格式的字符串， 如果 图片小于给定的 limit 值，则会被转为 base64的字符串
      { test: /\.(ttf|eot|svg|woff|woff2)$/, use: 'url-loader' }, // 处理 字体文件的 loader
      { test: /\.js$/, use: 'babel-loader', exclude: /node_modules/ }, // 配置 Babel 来转换高级的ES语法  npm i babel-loader -D然后在写配置
    ]
  }
     *  */
}