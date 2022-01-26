const ip = require('ip');
const port = process.env.PORT || 8000

const address = ip.address()
const isRemote = address.startsWith('172');

module.exports = {
    // 这个值也可以被设置为空字符串 ('') 或是相对路径 ('./')，这样所有的资源都会被链接为相对路径，这样打出来的包可以被部署在任意路径，也可以用在类似 Cordova hybrid 应用的文件系统中。
    publicPath: isRemote ? `/absproxy/${port}` : '/',

    outputDir: "dist",

    // 放置生成的静态资源 (js、css、img、fonts) 的 (相对于 outputDir 的) 目录。
    assetsDir: 'asset',

    // 生成的静态资源在它们的文件名中包含了 hash 以便更好的控制缓存
    filenameHashing: true,


    // 是否在开发环境下通过 eslint-loader 在每次保存时 lint 代码
    lintOnSave: false,

    // configureWebpack

    devServer: {
        host: "0.0.0.0",
        disableHostCheck: true,
        port,
        // https://www.webpackjs.com/configuration/dev-server/#devserver-public 解决sockPath远程环境总是指向本机IP的问题
        public: isRemote ? `https://code.heroking.top/absproxy/${port}/` : '',
        sockPath: isRemote ? `absproxy/${port}/sockjs-node` : "sockjs-node",
    }

}