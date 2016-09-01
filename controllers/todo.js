var todoModel = require('../data/models/todo');

// get all todos
function getAll(req, res, next) {
	
	todoModel.find({}, function(err,result){
		if(err){
			return next(err);
		}
		res.send(result);
	});
	
}

// add a todo
function add(req, res, next){
	console.log(req.body);
	todoModel.create(req.body, function(err, result){
		if(err){
			return next(err);
		}
		res.send({message: "1 todo added", data: result});
	})
}

module.exports = {
	getAll: getAll,
	add: add
}