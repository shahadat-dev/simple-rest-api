'use strict';

var express = require('express');
var http = require('http');
var bodyParser = require('body-parser');
var cors = require('cors');

//application
var app = express();

var server = http.createServer(app);

// middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(cors());


//routes
app.get('/', function(req, res) {
	res.send("Hello todo app.");
});

app.get('/todo', function(req, res) {
	console.log("get request from ", req.path);
	res.send(["Hello todo."]);
});

//listen
server.listen(3001, function(){
	console.log("Todo app, server started at 3001.");
});