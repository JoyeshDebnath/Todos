const mongoose = require("mongoose");

const TaskSchema = new mongoose.Schema({
	name: {
		type: String,
		trim: true,
		maxlength: [20, "Have to be within 20 characters !"],
		required: [true, "name Must be provided !"],
	},
	isCompleted: {
		type: Boolean,
		default: false,
	},
});

module.exports = mongoose.model("Task", TaskSchema);
