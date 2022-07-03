'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Assignee extends Model {
    static associate(models) {

    }
  }
  Assignee.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    assignee_id: DataTypes.STRING,
    task_id: DataTypes.STRING,
    user_id: DataTypes.STRING,
    user_name: DataTypes.STRING,
    recored_status: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Assignee',
  });
  return Assignee;
};