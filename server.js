var express = require('express');
var app = express();

var moment = require('moment');
var port = process.env.PORT || 8080;

app.use(express.static(__dirname + '/views'));

app.get('/', function(req,res){
    res.render('index');
});

app.get('/:timeInput', function(req, res){
    var time;
    if(/\d{8,}$/.test(req.params.timeInput)){
        time = moment(req.params.timeInput, "X");
    } else {
        time = moment(req.params.timeInput, 'MMMM D, YYYY');
    }
    
    if(time.isValid()){
        res.json({
            'date' : time.format('MMMM DD, YYYY'),
            'unix' : time.format('X')
        });
    } else {
        res.json({
            'date' : null,
            'unix' : null
        });
    }
});

app.listen(port, function(){
    console.log("Listening on port: " + port);
});