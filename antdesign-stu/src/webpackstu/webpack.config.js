const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    // context: path.resolve(__dirname,'aaaa'),    // 基础目录，绝对路径，用于从配置中解析入口起点(entry point)和 loader, 传入使得你的配置独立于 CWD(current working directory - 当前执行路径)。 不影响node_modules的查找路径
    //模块中的所有相对路径都是相对这个,配置长上面那样打包回失败，因为aaaa目录下找不打模块ModuleNotFoundError:
    mode: "development",    // "production" | "development" | "none"
    devServer: {
        contentBase: './dist',
        open: true,
        hot: true
    },          // 配置webpack-dev-server
    entry: './index.js',    //等价于 entry: {main : './index.js'} 其中key 可以在 output配置中使用占位符读取 [name]
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist'),
        // publicPath: "http://www.heroking.top/", //html文件中引入打包后的js文件前添加了URL网址
        // publicPath: "/public/", //html文件中引入打包后的js文件前添加了相对于html文件的路径 <script src="/public/bundle.js"></script></body>


        // 这样导出的模块就将export导出的 属性以umd方式重命名为 name11   clg(window.name11.default.name11)  => 11
        // webpack打出的包是自调用函数
        library: "name11",
        libraryTarget: "umd", // 使用什么模块规范导出,AMD CJS UMD(前后端都通吃)   还有一种规范是ES6提出的es module
    },
    // externals 配置选项提供了「从输出的 bundle 中排除依赖」的方法。相反，所创建的 bundle 依赖于那些存在于用户环境(consumer's environment)中的依赖。此功能通常对 library 开发人员来说是最有用的，然而也会有各种各样的应用程序用到它。
    // jquery 就不会再node_modules中查找，而是通过其他方式引入 jQuery是指全局对象（window/global）下的这个属性  而不是通过webpack打包node_modules里面jquery到 bundle.js中
    // 我们开发离线应用避免使用这个模式，或者说我们都推荐使用 node_modules方式引入公共组件而不是通过script标签
    externals: {
        // jquery: 'jquery',   // error index.js中$.map就报错了 $ is undefined
        // jquery: 'jQuery',
        underscore: '_'
    },

    resolve: {
        alias: {
            // mymodule: path.resolve(__dirname,'mymodule.js')
            mymodule: path.resolve(__dirname, 'mymodule')
        },
        extensions: [".js", ".json", '.jsx'],   // 上面的mymodule.js 如果拓展名是前面数组中列举的可以不写 mymodule: path.resolve(__dirname,'mymodule')效果一样
        modules: [__dirname, "node_modules"]         //告诉 webpack 解析模块时应该搜索的目录。 默认值：["node_modules"] 相对目录，会祖先递归 
        // 使用绝对路径，将只在给定目录中搜索!! 举例
        // modules: [__dirname]     只在当前目录寻找 那么jquery将在当前目录查找导入，如果没有就报错了
        // modules: [__dirname,"node_modules"] 先当前目录搜索，找不到在递归向上
        // resolveLoader 这组选项与上面的 resolve 对象的属性集合相同，但仅用于解析 webpack 的 loader 包

    },
    // split code
    optimization: {
        splitChunks: {
            chunks: "all",// all async initial,
            cacheGroups: {
                vendors: {
                    test: /[\\/]node_modules[\\/]/,
                    priority: -10
                },
            }
        }
    },

    plugins: [
        // 自动加载模块，而不必到处 import 或 require 。直接从node_module中引入进来,是node默认的层层往上遍历的方式找组件
        new webpack.ProvidePlugin({
            // identifier: 'module1',
            // 任何时候，当 identifier 被当作未赋值的变量时，module 就会自动被加载，并且 identifier 会被这个 module 输出的内容所赋值。  
            $: 'jquery',
            _: 'underscore'
            // jQuery: 'jquery'
        }),
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: "index.html"
        })
    ],

    resolveLoader: {
        modules: [
            'node_modules',
            path.resolve(__dirname),
        ]
    },

    module: {
        rules: [{
            // 处理import 的css
            test: /\.css$/,
            use: [
                {
                    loader: 'style-loader',
                    options: {
                        insert: "body"  //生成的style标签放在HTML页面的哪里
                        // insert: function insertAtTop(element) {
                        //     var parent = document.querySelector('head');
                        //     // eslint-disable-next-line no-underscore-dangle
                        //     var lastInsertedElement =
                        //       window._lastElementInsertedByStyleLoader;

                        //     if (!lastInsertedElement) {
                        //       parent.insertBefore(element, parent.firstChild);
                        //     } else if (lastInsertedElement.nextSibling) {
                        //       parent.insertBefore(element, lastInsertedElement.nextSibling);
                        //     } else {
                        //       parent.appendChild(element);
                        //     }

                        //     // eslint-disable-next-line no-underscore-dangle
                        //     window._lastElementInsertedByStyleLoader = element;
                        // }
                    }
                }, {
                    loader: 'css-loader',
                    options: {
                        modules: false   // 启用css modules   https://github.com/css-modules/css-modules
                    }
                }, {
                    loader: "px2rem-loader",
                    options: {
                        remUnit: 100,
                        remPrecision: 8
                    }
                }
            ]
        }, {
            // 处理require的图片  当你 import MyImage from './my-image.png'，该图像将被处理并添加到 output 目录，_并且_ MyImage 变量将包含该图像在处理后的最终 url
            test: /\.(png|svg|jpg|gif)$/,
            use: [
                'file-loader'
            ]
        },
        { test: /\.less$/, use: ['style-loader', 'css-loader', 'less-loader'] }, // 处理 less 文件的 loader
        {
            test: /\.js$/,
            loader: 'babel-loader',
            exclude: /node_modules/,
            options: {
                presets: ['@babel/preset-env']
            }
        },
        {
            test: /\.txt$/,
            loader: "my-loader"
        }

        ]
    }
};