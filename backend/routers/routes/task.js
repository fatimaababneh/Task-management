const express = require("express");
const taskRoute = express.Router();

const {
  getAlltasks,
  addtask,
  updatetask,
  gettask,
  deleteTask,
} = require("../controllers/task");

taskRoute.get("/", getAlltasks);
taskRoute.get("/info/:id", gettask);
taskRoute.post("/", addtask);
taskRoute.put("/edit/:id", updatetask);
taskRoute.put("/:id", deleteTask);

module.exports = taskRoute;
