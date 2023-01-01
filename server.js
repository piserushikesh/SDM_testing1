var express=require('express');
var app = express();
var path =require("path");
//var fs=require("fs");

// app.use(express.static(path.join(__dirname,'public')));


// app.get('/',function (req,res){

//     res.sendFile(path.join(__dirname + '/index.html'));
// });

app.get('/',(req,res)=>{
    res.sendFile('public/index.html',{root:__dirname})
});

app.get('/about_us',function(req,res){

    var person={firstName:'Rushikesh',lastName:'Pise',age:25};
    res.send(person);
});

app.get('/contactus',(req,res)=>{
    var number={num:8605145620};
   res.send(number);
});
app.listen(5000);
console.log("startted");