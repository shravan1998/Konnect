const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const mongo = require("mongoose");
var cors = require("cors");
const md5 = require("md5");

var app = express();
app.use(cors());
app.use(bodyParser());
app.use(bodyParser.json({limit:'5mb'}));
app.use(bodyParser.urlencoded({extended:false}));


var db = mongo.connect("mongodb://localhost:27017/konnect",function(err){
    if(err){
        console.log(err);
    }else{
        console.log("Connected to db");
    }
});

var router = express.Router();

app.use(function(req,res,next){
    res.setHeader('Access-Control-Allow-Origin','http://localhost:8080');
    res.setHeader('Allow-Access-Allow-Methods','GET,POST,OPTIONS,PUT,PATCH,DELETE');
    res.setHeader('Allow-Access-Allow-Headers','Origin,X-Requested-With,Content-Type,Accept');
    res.setHeader("Access-Control-Allow-Credentials",true);
    next();
});

var Schema = mongo.Schema;

var users = new Schema({
    //id:{type:Number},
    fname:{type:String},
    lname:{type:String},
    email:{type:String},
    password:{type:String}
});

var model = mongo.model('users',users);

app.post('/login',function(req,res){
    console.log(req.body);
    var mod = new model({
        
        'fname':req.body.fname,
        'lname':req.body.lname,
        'email':req.body.email,
        'password':req.body.password
    });
    mod.save(function(err,data){
        if(err){
            res.send(err);
        }
        else{
            res.send({data:"Record Inserted"});
            console.log(data);
        }
    });
});

app.get('/login',function(req,res){
    let password = md5(req.body.password)
    //console.log(res);
    model.find({
        'email':req.body.email,
        'password':password
    },function(err,data){
        if(err){
            res.send(err);
        }else{
            res.send({data:"Record inserted"});
            console.log(data);
        }
    });
});

var userData = new Schema({
    email:{type:String},
    dob:{type:Date},
    relation:{type:String},
    gender:{type:String},
    music:{type:String},
    interest:{type:Array},
    education:{type:Array},
    job:{type:Array}
});

var model1 = mongo.model('user_details',userData);

app.post('/user/:email',function(req,res){
    console.log(req.body);
    var mod = new model1({
        'email':req.query.email,
        'dob':req.body.dob,
        'gender':req.body.lname,
        'music':req.body.music,
        'interest':req.body.interest
    });
    mod.save(function(err,data){
        if(err){
            console.log(err);
        }else{
            console.log(data);
        }
    });
    
});

app.listen(8000,()=>{
    console.log("Backend running at port 8000");
});