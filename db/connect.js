const mongoose = require("mongoose");
// const { Schema } = mongoose;
require("dotenv").config();
// get the connection string of the mongodb
// const connectionString = process.env.connectionString;

const connectDB = (url) => {
	console.log(url);
	return mongoose.connect(url, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	});
};

module.exports = connectDB;
