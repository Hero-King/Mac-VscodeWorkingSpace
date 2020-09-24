var express=require('express');
var app=express();

app.all('/aa',function (req,res) {
    console.log('aab被访问了')
})
app.get('/',function (req,res) {
    res.send('我收到了');
    console.log('woshoudaol');

})
app.all('*',function (req,res) {
    res.end('jieshu')
})
app.listen(3000);