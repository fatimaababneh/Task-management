'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Tasks', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      subject: {
        type: Sequelize.STRING
      },
      descrition: {
        type: Sequelize.STRING
      },
      type: {
        type: Sequelize.STRING
      },
      claimed: {
        type: Sequelize.BOOLEAN
      },
      assignee_name: {
        type: Sequelize.STRING
      },
      impact: {
        type: Sequelize.STRING
      },
      severity: {
        type: Sequelize.STRING
      },
      due_time: {
        type: Sequelize.STRING
      },
      due_date: {
        type: Sequelize.STRING
      },
      estmated_time: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Tasks');
  }
};