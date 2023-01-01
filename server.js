var express=require('express');
var app = express();
var path =require("path");
var fs=require("fs");

app.use(express.static(path.join(__dirname,'public')));


app.get('/',function (req,res){

    res.sendFile(path.join(__dirname + '/index.html'));
});

app.get('/about_us',function(req,res){

    var person={firstName:'Rushikesh',lastName:'Pise',age:25};
    res.send(person);
});

var server=app.listen(5000,function(){

    var host=server.address().address
    var port=server.address().port
});