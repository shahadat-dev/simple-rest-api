var todo = require('./routers/todo');

var routes = function(app){
	app.get('/', function(req, res) {
		res.send("Welcome to ToDo app.");
	});
	
	app.use('/todo', todo)
}

module.exports = routes;