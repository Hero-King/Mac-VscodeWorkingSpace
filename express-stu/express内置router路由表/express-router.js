const express = require('express');

var router = express.Router();  //中间件  创建一个路由容器

console.log(router);

// 把所有的路有规则 挂载到router对象下面
router.get('/router',(req, res) => {
    res.send('/router get请求了');
})
console.log(router);


// 暴露router 路由容器
module.exports = router;