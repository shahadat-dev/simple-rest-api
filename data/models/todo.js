var mongoose = require('mongoose');
var todoSchema = require('../schemas/todo');

var todo = mongoose.model('todo', todoSchema);

module.exports = todo;