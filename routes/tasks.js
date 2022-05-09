const express = require("express");

const router = express.Router();
const {
  getAllTasks,
  getTask,
  deleteTask,
  updateTask,
  createTask,
} = require("../controllers/tasks"); //access the comtrollers for the routes
// setup the routes
router.route("/").get(getAllTasks).post(createTask);
router.route("/:id").get(getTask).patch(updateTask).delete(deleteTask);

module.exports = router;
