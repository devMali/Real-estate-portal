'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('properties', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      padd: {
        type: Sequelize.STRING,
        allowNull:false,
      },
      price:{
        type: Sequelize.STRING,
        allowNull:false,
      },
      description:{
        type: Sequelize.STRING,
        allowNull:false,
      },
      size:{
        type: Sequelize.STRING,
        allowNull:false,
      },
      img:{
        type: Sequelize.TEXT,
        allowNull:true,
      },
      is_sell:{
        type: Sequelize.BOOLEAN,
        allowNull:false,
      },
      is_rent:{
        type: Sequelize.BOOLEAN,
        allowNull:false,
      },
      aid:{
        type: Sequelize.INTEGER,
        allowNull:false,
        onDelete:'CASCADE',
        references: {
          model: 'areas',
          key: 'id'
        }
      },
      tid:{
        type: Sequelize.INTEGER,
        allowNull:false,
        onDelete:'CASCADE',
        references: {
          model: 'types',
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
    await queryInterface.dropTable('properties');
  }
};