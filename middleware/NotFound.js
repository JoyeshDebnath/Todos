const NotFound = (req, res) => {
	res
		.status(404)
		.json({ status: "NOT FOUND", msg: "The Requested URL can not be Found!!" });
};

module.exports = NotFound;
