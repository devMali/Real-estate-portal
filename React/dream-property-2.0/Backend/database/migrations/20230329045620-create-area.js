'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('areas', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      aname: {
        type: Sequelize.STRING,
        allowNull:false,
      },
      cid:{
        type: Sequelize.INTEGER,
        allowNull:false,
        onDelete:'CASCADE',
        references:
          {
            model:'cities',
            key:'id'
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
    })
    },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('areas');
  }
};