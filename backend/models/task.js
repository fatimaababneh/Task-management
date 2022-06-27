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
    subject: DataTypes.STRING,
    description: DataTypes.STRING,
    type: DataTypes.STRING,
    claimed: DataTypes.BOOLEAN,
    assignee_name: DataTypes.STRING,
    impact: DataTypes.STRING,
    severity: DataTypes.STRING,
    due_time: DataTypes.STRING,
    due_date: DataTypes.STRING,
    estmated_time: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Task',
  });
  return Task;
};