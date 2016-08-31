var router = require('express').Router();
var todoCtrl = require('../../controllers/todo');

router.route('/')
	.get(todoCtrl.getAll);


module.exports = router;