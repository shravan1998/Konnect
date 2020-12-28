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
app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8080');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});


var db = mongo.connect("mongodb://localhost:27017/konnect",function(err){
    if(err){
        console.log(err);
    }else{
        console.log("Connected to db");
    }
});

const server = app.listen(8000,()=>{
    console.log("Backend running at port 8000");
});;

const io = require('socket.io')(server, {
    cors: {
      origin: "http://localhost:8080",
      methods: ["GET", "POST"]
    }
  });

io.on('connection', function(socket) {
    console.log(socket.id)
    socket.on('SEND_MESSAGE', function(data) {
        io.emit('MESSAGE', data)
    });
    
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

app.get('/login/:email',function(req,res){
    console.log(req.params.email);
    model.find({
        'email':req.params.email,
        
    },function(err,data){
        if(err){
            res.send(err);
        }else{
            res.send(data);
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

var post = new Schema({
    id:{type:String},
    post:{type:String},
    firstName:{type:String},
    lastName:{type:String},
    email:{type:String},
    likes:{type:Number}
})

var model2 = mongo.model('post',post);

app.post('/post',function(req,res){
    var mod = new model2({
        'id':req.body.id,
        'post':req.body.post,
        'firstName':req.body.firstName,
        'lastName':req.body.lastName,
        'email':req.body.email,
        'likes':req.body.likes
    })
    mod.save(function(err,data){
        if(err){
            console.log(err);
        }else{
            console.log(data);
        }
    });
});

app.delete('/delete-post/:id',function(req,res){
    let id = req.params.id;
    model2.deleteOne({
        '_id':id
    },function(err,data){
        if(err){
            console.log(err)
        }else{
            console.log(data);
            res.send(data);
        }
    });
});

app.get('/posts',function(req,res){
    model2.find({},function(err,data){
        if(err){
            console.log(err);
        }else{
            res.send(data);
        }
    })
});
app.get('/post/:id',function(req,res){
    model2.find({
        '_id':req.params.id
    },function(err,data){
        if(err){
            console.log(err);
        }else{
            res.send(data);
        }
    })
});

app.patch('/like-post/:id',function(req,res){
    model2.update({
        '_id':req.params.id
    },{
        'likes':req.body.likes
    },function(err,data){
        if(err){
            console.log(err);
        }else{
            res.send(data);
        }
    })
})

var comment =new Schema({
    user_id:{type:String},
    post_id:{type:String},
    comment:{type:String}
});

var model3 = mongo.model('comments',comment);

app.post('/comment',function(req,res){
    let mod = new model3({
        'user_id':req.body.id,
        'post_id':req.body.post_id,
        'comment':req.body.comment
    });
   /* mod.save(function(err,data){
        if(err){
            console.log(err);
        }else{
            console.log(data);
            res.send(data);
        }
    })*/
    model2.aggregate([
        {
            $lookup:
            {
                from:'posts',
                localField:'user_id',
                foreignField:'_id',
                as:'comments'
            }
        }
    ],function(err,data){
        if(err){
            console.log(err);
        }else{
            res.send(data);
            console.log(data);
        }
    })

})



