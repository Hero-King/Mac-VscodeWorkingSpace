const express = require('express');
const path = require('path');
const app = express();
let antdesignstuPath = __dirname;
app.use(express.static(antdesignstuPath + '/build'));
app.get('/index-cn', function (req, res) {
	console.log(req.query,'response index-cn.html')
    res.sendFile(path.join(antdesignstuPath, 'build', 'index-cn.html'));
});

app.get('/*',function(req, res){
     console.log('express have not route')   
res.end('express have not route')
});

app.listen(80);
