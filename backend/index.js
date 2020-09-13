const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const mysql = require("mysql");
var cors = require("cors");
const md5 = require("md5");

app.use(cors());
app.use(bodyParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));









app.listen(8000,()=>{
    console.log("Backend running at port 8000");
});