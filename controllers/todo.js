var todoModel = require('../data/models/todo');

function getAll(req, res, next) {
	
	todoModel.find({}, function(err,result){
		if(err){
			return next(err);
		}
		res.send(result);
	});
	
}

module.exports = {
	getAll: getAll
}