'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('inquiries', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },

      uid:{
        type:Sequelize.INTEGER,
        allowNull: false,
        onDelete:'CASCADE',
        references: {
          model: 'users',
          key: 'id'
        }
      },

      pid:{
        type:Sequelize.INTEGER,
        allowNull: false,
        onDelete:'CASCADE',
        references:{
          model: 'properties',
          key: 'id'
        }
      },

      message: {
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
    await queryInterface.dropTable('inquiries');
  }
};