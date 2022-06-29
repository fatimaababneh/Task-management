const { sequelize } = require("../../models/index");
const { Op } = require("sequelize");
const uuid = require("uuid");

const getAlltasks = async (req, res) => {
    console.log('api is here ');
    try {
        
        const allCars = await sequelize.models.Task.findAll({
            where: {
                recored_status: "latest"
            },
        });
        res.status(200).json(allCars);
    } catch (error) {
        res.status(400).json(error.message);
    }
};

const addtask = async (req, res) => {
    console.log("add");
    const task_id = uuid.v4();
    try {
        const { subject,description,type,claimed,assignee_name,impact,severity,impact_text,severity_text,due_time,due_date,estmated_time } = req.body;
        const newtask = await sequelize.models.Task.create({
            task_id,
            subject,
            description,
            type,
            claimed,
            assignee_name,
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

const gettask = async (req,response)=>{
    try{
        const { id } = req.params;
        const task = await sequelize.models.Task.findOne({
            where: {
                recored_status: "latest",
                task_id:id
            },
        });
        res.status(200).json(task);
    }
    catch(error){
        res.status(400).json(error.message);
    }
}
const updatetask = async (req, res) => {
    try {
        const { id } = req.params;
        const oldtask = await sequelize.models.Task.findOne({
            where: {
                recored_status: "latest",
                task_id: id
            },
        });
        console.log(oldtask.dataValues);
        const update = await sequelize.models.Task.update(
            {
                recored_status: "updated",
            },
            {
                where: {
                    task_id: id,
                },
            }
        );
        // const {subject,description,type,claimed,assignee_name,impact,severity,impact_text,severity_text,due_time,due_date,estmated_time}=oldtask ;
        const newtask = await sequelize.models.Task.create({
            task_id:id,
            subject: (req.body.subject != oldtask.subject) ? req.body.subject : oldtask.subject,
            description:(req.body.description != oldtask.description) ? req.body.description : oldtask.description,
            type:(req.body.type != oldtask.type) ? req.body.type : oldtask.type,
            claimed:(req.body.claimed != oldtask.claimed) ? req.body.claimed : oldtask.claimed,
            assignee_name:(req.body.assignee_name != oldtask.assignee_name) ? req.body.assignee_name : oldtask.assignee_name,
            impact:(req.body.impact != oldtask.impact) ? req.body.impact : oldtask.impact,
            severity:(req.body.severity != oldtask.severity) ? req.body.severity : oldtask.severity,
            impact_text:(req.body.impact_text != oldtask.impact_text) ? req.body.impact_text : oldtask.impact_text,
            severity_text:(req.body.severity_text != oldtask.severity_text) ? req.body.severity_text : oldtask.severity_text,
            due_time:(req.body.due_time != oldtask.due_time) ? req.body.due_time : oldtask.due_time,
            due_date:(req.body.due_date != oldtask.due_date) ? req.body.due_date : oldtask.due_date,
            estmated_time:(req.body.estmated_time != oldtask.estmated_time) ? req.body.estmated_time : oldtask.estmated_time,
            recored_status: "latest",
        });
        res.status(200).json(newtask);
    } catch (error) {
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
