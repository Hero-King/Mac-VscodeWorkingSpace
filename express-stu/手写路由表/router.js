/**
 * 开始一个项目之前，需要做好路由设计（类似接口）
 * 路由模块的提取（36期7天node学习视频day4/13）
 * 书写一个router.js 用于路由  但是要用到app 怎么导入进来呢？ app.js中需要require('./router.js') node中都是通过回调传递
 */

module.exports = (app) => {     //向外暴露函数，就可以把app传入进来； 这是我们自己封装的router express提供了类似功能
    app.get('/', (req, res) => {
        res.send('/路径get被访问')
    })
    app.post('/', (req, res) => {
        res.send('/路径post被访问')
    })
    app.get('/aa', (req, res) => {
        res.send('/aa路径get被访问')
    })
    app.post('/aa', (req, res) => {
        res.send('/aa路径post被访问')
    })
}