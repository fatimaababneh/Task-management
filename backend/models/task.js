'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Task extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Task.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    task_id: DataTypes.STRING,
    subject: DataTypes.STRING,
    description: DataTypes.STRING,
    type: DataTypes.STRING,
    claimed: DataTypes.BOOLEAN,
    impact: DataTypes.STRING,
    severity: DataTypes.STRING,
    impact_text: DataTypes.STRING,
    severity_text: DataTypes.STRING,
    due_time: DataTypes.STRING,
    due_date: DataTypes.STRING,
    estmated_time: DataTypes.STRING,
    recored_status:DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Task',
  });
  return Task;
};