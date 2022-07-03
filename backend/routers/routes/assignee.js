const express = require("express");
const assigneeRoute = express.Router();

const {
  getAllassignee,
  addAssignee,

} = require("../controllers/assignee");

assigneeRoute.get("/", getAllassignee);
assigneeRoute.post("/:id", addAssignee);


module.exports = assigneeRoute;
