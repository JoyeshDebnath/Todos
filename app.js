// require the db
// require("./db/connect");
const connectDB = require("./db/connect");
const express = require("express");
const TaskRoutes = require("./routes/tasks");
require("dotenv").config();
// assign the express to app
const app = express();
// call the Port from the .env
var PORT = process.env.PORT;
// middlewares ..
app.use(express.json());
app.use("/api/v1/tasks", TaskRoutes);

const start = async () => {
  try {
    await connectDB(process.env.connectionString);
    app.listen(PORT, console.log(`Listening to PORT > ${PORT}...`));
  } catch (err) {
    console.log(err);
  }
};

start();
