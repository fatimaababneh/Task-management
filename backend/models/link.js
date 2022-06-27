'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Cars extends Model {
    
    static associate(models) {
      // define association here
    }
  }
  Cars.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
  }, {
    sequelize,
    modelName: 'Cars',
  });
  return Cars;
};