const { sequelize } = require("../../models/index");
const { Op } = require("sequelize");
const uuid = require("uuid");
///// get all assignee
const getAllassignee = async (req, res) => {
  try {
    const allAssignee = await sequelize.models.Assignee.findAll({});
    res.status(200).json(allAssignee);
  } catch (error) {
    res.status(400).json(error.message);
  }
};
/////add assignee
const addAssignee = async (req, res) => {
  console.log("add");
  try {
    const { id } = req.params;
    const final = []
    const { user } = req.body;
    for (let i = 0; i < user.length; i++) {
      const element = user[i];
      const assignee_id = uuid.v4();
      const user_id = element.user_id;
      const user_name = element.user_name;
      const newAssignee = await sequelize.models.Assignee.create({
        assignee_id,
        user_name,
        task_id:id,
        user_id,
        recored_status: "latest"
      });
      final.push(newAssignee.dataValues)
    }
console.log(final);
    res.status(201).json(final);

  } catch (error) {
    res.send(error.message);
  }
};
///// update assignee of a task
const updateAssignee = async (req, res) => {
  try {
      const { id } = req.params;
      const oldassignee = await sequelize.models.Assignee.findOne({
          where: {
              recored_status: "latest",
              assignee_id: id
          },
      });
      console.log(oldassignee.dataValues);
      const update = await sequelize.models.Assignee.update(
          {
              recored_status: "updated",
          },
          {
              where: {
                  assignee_id: id,
              },
          }
      );
      const { subject, description, type, claimed, impact, severity, impact_text, severity_text, due_time, due_date, estmated_time } = req.body;
      const newtask = await sequelize.models.Assignee.create({
          task_id: id,
          subject: (subject != "") ? subject : oldtask.subject,
          description: (description != "") ? description : oldtask.description,
          type: (type != "") ? type : oldtask.type,
          claimed: (claimed != "") ? claimed : oldtask.claimed,
          impact: (impact != "") ? impact : oldtask.impact,
          severity: (severity != "") ? severity : oldtask.severity,
          impact_text: (impact_text != "") ? impact_text : oldtask.impact_text,
          severity_text: (severity_text != "") ? severity_text : oldtask.severity_text,
          due_time: (due_time != "") ? due_time : oldtask.due_time,
          due_date: (due_date != "") ? due_date : oldtask.due_date,
          estmated_time: (estmated_time != oldtask.estmated_time) ? estmated_time : oldtask.estmated_time,
          recored_status: "latest",
      });
      res.status(200).json(newtask);
  } catch (error) {
      res.send(error.message);
  }
};



module.exports = {
  getAllassignee,
  addAssignee,
  updateAssignee
};
