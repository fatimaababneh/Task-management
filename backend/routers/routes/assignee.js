const express = require("express");
const assigneeRoute = express.Router();

const {
  getAllassignee,
  addAssignee,
  updateAssignee

} = require("../controllers/assignee");

assigneeRoute.get("/", getAllassignee);
assigneeRoute.post("/:id", addAssignee);
assigneeRoute.put("/edit/:id", updateAssignee);


module.exports = assigneeRoute;
