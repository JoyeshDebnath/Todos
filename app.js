const connectDB = require("./db/connect");
const express = require("express");
const TaskRoutes = require("./routes/tasks");
const NotFoundMiddleware = require("./middleware/NotFound"); //not Found
const ErrorHandlerMiddleWare = require("./middleware/ErrorHandle");

require("dotenv").config();
// assign the express to app
const app = express();
// call the Port from the .env
var PORT = process.env.PORT;
// middlewares ..
app.use(express.static("./public"));
app.use(express.json());
app.use("/api/v1/tasks", TaskRoutes);
app.use(NotFoundMiddleware);
app.use(ErrorHandlerMiddleWare);
const start = async () => {
	try {
		await connectDB(process.env.connectionString);
		app.listen(PORT, console.log(`Listening to PORT > ${PORT}...`));
	} catch (err) {
		console.log(err);
	}
};

start();
