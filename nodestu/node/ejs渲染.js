var http=require('http')
var ejs=require('ejs')
var fs=require('fs')

let str='今天<%=name%>好高兴啊'
ejs.render(str,{
    name:'王俊杰'
})
console.log(str);
//今天<%=name%>好高兴啊   没有渲染成功
let str1 =ejs.render(str,{
    name:'王大大'
});
console.log(str1);
//今天王大大好高兴啊    故渲染的结果  是新的字符串


http.createServer(function (req,res) {
    fs.readFile('./node/template.html',function (err,data) {
        if(err){
            return res.end('404')
        }
        let ejsStr = ejs.render(data.toString(),{
            name:'王俊杰',
            age:21
        });

        res.end(ejsStr)
    })
}).listen(8080,'127.0.0.1');

/*
*   ejs 模版的初体验
*   1。书写好需要渲染的页面  template.html  tpl.ejs  模版使用<%= 属性名 %>
*   2。readfile（模板名字，function(err,data)）
*   3.let newstr = ejs.render(字符串，对象{})
*   4.渲染好的字符串 newstr
*
*   页面中需要遍历的话  可以使用<%   书写符合JS语法的循环   %>
        <%  for(let i=0; i<news.length; i++)    {   %>
*       <%= news[i] %>
        <%   }  %>
*
* */