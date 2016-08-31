function getAll(req, res) {
	console.log("get request from ", req.path);
	res.send(["Hello todo.", "Another todo"]);
}

module.exports = {
	getAll: getAll
}