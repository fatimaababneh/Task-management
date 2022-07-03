const { sequelize } = require("../../models/index");
const { Op } = require("sequelize");
const uuid = require("uuid");

const getAlltasks = async (req, res) => {
    try {
        const alltasks = await sequelize.models.Task.findAll({
            where: {
                recored_status: "latest"
            },
        });
        res.status(200).json(alltasks);
    }catch (error) {
        res.status(400).json(error.message);
    }
};

const addtask = async (req, res) => {
    console.log("add");
    const task_id = uuid.v4();
    try {
        const { subject,description,type,claimed,impact,severity,impact_text,severity_text,due_time,due_date,estmated_time } = req.body;
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

const gettask = async (req,res)=>{
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
        const {subject,description,type,claimed,impact,severity,impact_text,severity_text,due_time,due_date,estmated_time}=req.body;
        const newtask = await sequelize.models.Task.create({
            task_id:id,
            subject: (subject != "") ? subject : oldtask.subject,
            description:(description != "") ?description : oldtask.description,
            type:(type != "") ? type : oldtask.type,
            claimed:(claimed != "") ? claimed : oldtask.claimed,
            impact:(impact != "") ? impact : oldtask.impact,
            severity:(severity != "") ? severity : oldtask.severity,
            impact_text:(impact_text != "") ? impact_text : oldtask.impact_text,
            severity_text:(severity_text != "") ? severity_text : oldtask.severity_text,
            due_time:(due_time != "") ? due_time : oldtask.due_time,
            due_date:(due_date != "") ? due_date : oldtask.due_date,
            estmated_time:(estmated_time != oldtask.estmated_time) ? estmated_time : oldtask.estmated_time,
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
