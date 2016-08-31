var mongoose = require('mongoose');

var todoSchema = new mongoose.Schema({
	name: { type: String, required: true},
	description: { type: String }
});

module.exports = todoSchema;