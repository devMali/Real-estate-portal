'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      fname: {
        type: Sequelize.STRING
      },
      
      lname: {
        type: Sequelize.STRING
      },
      
      email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
      },

      password: {
        type: Sequelize.STRING,
        allowNull: false
      },

      mobile: {
        type: Sequelize.STRING,
        allowNull: false
      },
      
      address: {
        type: Sequelize.STRING
      },

      uimg:{
        type: Sequelize.TEXT,
        allowNull: true
      },

      role:{
        type: Sequelize.STRING,
        allowNull: true,
        defaultValue:'user'
      },

      aid:{
        type: Sequelize.INTEGER,
        allowNull: false,
        onDelete:'CASCADE',
        references: {
          model: 'areas',
          key: 'id'
        }
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
    await queryInterface.dropTable('users');
  }
};