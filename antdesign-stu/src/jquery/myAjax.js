function myAjax(url,success,err) {
    //1.创建对象
    var xmlhttp;
    if (window.XMLHttpRequest)
    {
        //  IE7+, Firefox, Chrome, Opera, Safari 浏览器执行代码
        xmlhttp=new XMLHttpRequest();
    }
    else
    {
        // IE6, IE5 浏览器执行代码
        xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
    }
    //2.请求
    xmlhttp.open('get',url,true)
    //3.发送
    xmlhttp.send();
    //4.监听
    xmlhttp.onreadystatechange=function()
    {
        if (xmlhttp.readyState==4 && xmlhttp.status==200)
        {
            //5.执行任务
            success(xmlhttp);  //执行success函数  把xmlhttp对象上抛
        }else{
            err(xmlhttp);
        }
    }

}