const mongoose = require("mongoose");
// const { Schema } = mongoose;
require("dotenv").config();
// get the connection string of the mongodb
const connectionString = process.env.connectionString;

const connectDB = (url) => {
  return mongoose.connect(url);
};

module.exports = connectDB;
