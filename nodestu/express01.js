var express=require('express')
var app=express();

app.get('/name',(req,res)=>{   // /name /name?a=a dou都可以
    console.log('fangwen')
    res.end('hhhhh')
})
app.use('/wang',(req,res)=>{    //wang /wang/wa  都可以
    console.log('fangwen')
    res.end('hhhhh')
})
app.listen(80)
