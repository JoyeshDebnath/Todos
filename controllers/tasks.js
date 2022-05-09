const Task = require("../models/tasks"); //requiring the model we created /

// get all the tasks items :
const getAllTasks = async (req, res) => {
	try {
		const All_tasks = await Task.find({}); //find all tasks ..
		res.status(200).json({ All_tasks });
	} catch (error) {
		res.status(500).json({ msg: error });
	}
};
// create  a task//post
const createTask = async (req, res) => {
	try {
		const task = await Task.create(req.body);
		res.satus(201).json({ task });
	} catch (err) {
		res.status(500).json({ message: err });
	}
};
// gett a single task .. get
const getTask = async (req, res) => {
	try {
		const { id: taskID } = req.params; //get theb val of id from param
		const task = await Task.findOne({ _id: taskID });
		if (!task) {
			return res.status(404).json({ msg: "task does not exists!!" });
		}
		res.status(200).json({ task });
	} catch (err) {
		res.status(500).json({ msg: err });
	}
};
// update a task ....
const updateTask = async (req, res) => {
	try {
		const { id: taskID } = req.params; //1st get the id of the param
		const task = await Task.findOneAndUpdate({ _id: taskID }, req.body, {
			new: true,
			runValidators: true,
		});
		if (!task) {
			return res.status(404).json({ msg: "task could not be found !!" });
		}
		res.status(200).json({ task });
	} catch (err) {
		req.status(500).json({ msg: err });
	}
};
// delete a task ...
const deleteTask = async (req, res) => {
	try {
		const { id: taskID } = req.params; //1st get the if from the param
		//use the id to find the document and delete ..
		const task = await Task.findOneAndDelete({ _id: taskID });
		if (!task) {
			return res.status(404).json({
				msg: `task with task ID =${taskID} does not exists!!`,
			});
		}
		res.status(200).json({ msg: `taskID=${taskID} was deleted successfully!` });
	} catch (err) {
		res.status(500).json({ msg: err });
	}
};

// export the controllers ...
module.exports = {
	getAllTasks,
	createTask,
	updateTask,
	deleteTask,
	getTask,
};
