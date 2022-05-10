const errorHandlerMiddleWare = (err, req, res, next) => {
	return res.status(500).json({ errMsg: err });
};

module.exports = errorHandlerMiddleWare;
