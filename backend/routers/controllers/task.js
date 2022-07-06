const { sequelize } = require("../../models/index");
const { Op } = require("sequelize");
const uuid = require("uuid");

const getAlltasks = async (req, res) => {
    try {
        const response = []
        const alltasks = await sequelize.models.Task.findAll({
            where: {
                recored_status: "latest"
            },
        });
        for (let i = 0; i < alltasks.length; i++) {
            const element = alltasks[i];
            const assighend = await sequelize.models.Assignee.findAll({
                where: {
                    recored_status: "latest",
                    task_id: element.task_id
                }
            });
            response.push({
                ...element.dataValues,
                assignee_name: assighend
            })
        }
        res.status(200).json(response);
    } catch (error) {
        res.status(400).json(error.message);
    }
};

const addtask = async (req, res) => {
    console.log("add");
    const task_id = uuid.v4();
    try {
        const { subject, description, type, claimed, impact, severity, impact_text, severity_text, due_time, due_date, estmated_time } = req.body;
        const newtask = await sequelize.models.Task.create({
            task_id,
            subject,
            description,
            type,
            claimed,
            impact,
            severity,
            impact_text,
            severity_text,
            due_time,
            due_date,
            estmated_time,
            recored_status: "latest",
        });
        res.status(201).json(newtask);
    } catch (error) {
        res.send(error.message);
    }
};

const gettask = async (req, res) => {
    try {
        const { id } = req.params;
        const task = await sequelize.models.Task.findOne({
            where: {
                recored_status: "latest",
                task_id: id
            },
        });
        res.status(200).json(task);
    }
    catch (error) {
        res.status(400).json(error.message);
    }
}

const updatetask = async (req, res) => {
// console.log(req.body)
    try {
        const { id } = req.params;
        const oldtask = await sequelize.models.Task.findOne({
            where: {
                recored_status: "latest",
                task_id: id
            },
        });
        // console.log(oldtask.dataValues);
        const updatet = await sequelize.models.Task.update(
            {
                recored_status: "updated",
            },
            {
                where: {
                    task_id: id,
                },
            }
        );
        const { subject, description, type, claimed, impact, severity, impact_text, severity_text, due_time, due_date, estmated_time } = req.body;
        const newtask = await sequelize.models.Task.create({
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
        const oldassignee = await sequelize.models.Assignee.findOne({
            where: {
                recored_status: "latest",
                task_id: id
            },
        });

        const update = await sequelize.models.Assignee.update(
            {
                recored_status: "updated",
            },
            {
                where: {
                    task_id: id,
                },
            }
            );
            const assigne =req.body.assignee ;
            // console.log(req.body)
            // console.log(assigne)
            if(assigne.length != 0){
            for (let i = 0; i < assigne.length; i++) {
            const element = assigne[i];
            let assignee_id =element.assignee_id
            if(assigne[i].assignee_id == null || assigne[i].assignee_id == undefined){
                assignee_id =uuid.v4()
            }
            const user_id = element.user_id;
            const user_name = element.user_name;
            const newAssignee = await sequelize.models.Assignee.create({
              assignee_id,
              user_name,
              task_id:id,
              user_id,
              recored_status: "latest"
            });
            console.log(res)
          }
        }
        
    }
    catch (error) {
        res.send(error.message);
    }


};

const deleteTask = async (req, res) => {
    try {
        const { id } = req.params;
        const newtask = await sequelize.models.Task.update(
            {
                recored_status: "deleted",
            },
            {
                where: {
                    task_id: id,
                },
            }
        );
        res.send("deleted");
    } catch (error) {
        res.send("errer");
    }
};

module.exports = {
    getAlltasks,
    addtask,
    gettask,
    updatetask,
    deleteTask,
};
