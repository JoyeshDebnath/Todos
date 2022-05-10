const Task = require("../models/tasks"); //requiring the model we created /
const asyncWrapper = require("../middleware/async"); //cal the async wrapper /...
// get all the tasks items :
const getAllTasks = asyncWrapper(async (req, res) => {
	const All_tasks = await Task.find({}); //find all tasks ..
	res.status(200).json({ All_tasks });
});
// create  a task//post
const createTask = asyncWrapper(async (req, res) => {
	const task = await Task.create(req.body);
	res.satus(201).json({ task });
});
// gett a single task .. get
const getTask = asyncWrapper(async (req, res) => {
	const { id: taskID } = req.params; //get theb val of id from param
	const task = await Task.findOne({ _id: taskID });
	if (!task) {
		return res.status(404).json({ msg: "task does not exists!!" });
	}
	res.status(200).json({ task });
});
// update a task ....
const updateTask = asyncWrapper(async (req, res) => {
	const { id: taskID } = req.params; //1st get the id of the param
	const task = await Task.findOneAndUpdate({ _id: taskID }, req.body, {
		new: true,
		runValidators: true,
	});
	if (!task) {
		return res.status(404).json({ msg: "task could not be found !!" });
	}
	res.status(200).json({ task });
});
// delete a task ...
const deleteTask = asyncWrapper(async (req, res) => {
	const { id: taskID } = req.params; //1st get the if from the param
	//use the id to find the document and delete ..
	const task = await Task.findOneAndDelete({ _id: taskID });
	if (!task) {
		return res.status(404).json({
			msg: `task with task ID =${taskID} does not exists!!`,
		});
	}
	res.status(200).json({ msg: `taskID=${taskID} was deleted successfully!` });
});

// export the controllers ...
module.exports = {
	getAllTasks,
	createTask,
	updateTask,
	deleteTask,
	getTask,
};
