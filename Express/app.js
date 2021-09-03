var express = require('express');
const bodyParser = require('body-parser');
var mongoose=require('mongoose');
mongoose.connect('mongodb://localhost/mydb');


var app = express();

var userSchema= mongoose.Schema({
    fname:String,
    lname:String,
    user:String,
    pass:String
});

var User=mongoose.model("User",userSchema);

function getRandomNumber(digit) {
    return Math.random().toFixed(digit).split('.')[1];
  }
  
app.use(bodyParser.urlencoded({ extended: false }));
var mailer = require('nodemailer');

var transport = mailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    requireTLS: true,
    auth: {
        user: '17bmiit108@gmail.com',
        pass: '$N!k$7797'
    }
});

app.get("/", (req, res) => {
    res.send("Hello, I am in home page");
});

app.get("/login", (req, res) => {
    res.sendFile(__dirname + "/login.html");
});
app.post("/login", (req, res) => {
    res.send(req.body.user + " " + req.body.pass);
});

app.get("/register", (req, res) => {
    res.sendFile(__dirname + "/register.html");
});

app.post("/register", (req, res) => {
    try{
        var infodata={
            from:'17bmiit108@gmail.com',
            to:req.body.user,
            subject:'Please Verify Code By Email',
            text:'The verification code is '+ getRandomNumber(6),
        };
        var userInfo=req.body;
         var newUser=new User({
             fname:userInfo.fname,
             lname:userInfo.lname,
             user:userInfo.user,
             pass:userInfo.pass
        });
    
        newUser.save();
         
    
        transport.sendMail(infodata,(err,info)=>{
            console.log('error', err);
            console.log('info', info);
        });
        res.send(newUser);
    }
    catch(err){
        console.log(err);
    }
    
    
});

app.get("/about", (req, res) => {
    res.send("Hello, I am in about page");
});

app.listen(8080);

