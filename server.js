'use strict';

var express = require('express');
var http = require('http');
var bodyParser = require('body-parser');
var cors = require('cors');
var mongoose = require('mongoose');
var routes = require('./routes');

//application
var app = express();

var server = http.createServer(app);

// middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(cors());

//routes
routes(app);

// connect with db
mongoose.connect('mongodb://localhost/todo');

var db = mongoose.connection;
db.on('error', function(){
	console.log("Error connecting MongoDb!");
});
db.once('open', function(){
	console.log("Server connected with MongoDb.");
})

//listen
server.listen(3001, function(){
	console.log("Todo app, server started at 3001.");
});