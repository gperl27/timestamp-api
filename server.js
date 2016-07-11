var express = require('express');
var app = express();

app.get('/', function(req,res){
    res.send('Hello World!');
});

app.listen(8080, function(){
    console.log("Example app is listening to port 3000");
});