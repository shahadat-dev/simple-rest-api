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
	todoModel.create(req.body, function(err, result){
		if(err){
			return next(err);
		}
		res.send({message: "1 todo added", data: result});
	})
}

// delete a todo
function del(req, res, next){
	console.log(req.method, req.path, req.params);
	todoModel.remove({_id:req.params.id}, function(err){
		if(err){
			console.log(err);
			return next(err);
		}
		res.send({message: "1 todo deleted"});
	})
}

module.exports = {
	getAll: getAll,
	add: add,
	delete: del
}