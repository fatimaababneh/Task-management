const { sequelize } = require("../../models/index");
const { Op } = require("sequelize");
const uuid = require("uuid");

const getAllassignee = async (req, res) => {
  try {
    const allAssignee = await sequelize.models.Assignee.findAll({});
    res.status(200).json(allAssignee);
  } catch (error) {
    res.status(400).json(error.message);
  }
};
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

const getExpensiveCars = async (req, res) => {
  try {
    const { id } = req.params;
    const { name } = req.body;
    const newCar = await sequelize.models.Cars.update(
      {
        name: name,
      },
      {
        where: {
          id: id,
        },
      }
    );
    const one = await sequelize.models.Cars.findOne({
      where: {
        id: id,
      },
    });
    res.status(200).json(one);
  } catch (error) { }
};

module.exports = {
  getAllassignee,
  addAssignee,
  getExpensiveCars,
};
