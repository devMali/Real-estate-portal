'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
   
    await queryInterface.bulkInsert('cities', [
      {
         cname: 'Ahmedabad',
         createdAt:new Date(),
         updatedAt:new Date()
      },
      {
        cname: 'Surat',
        createdAt:new Date(),
        updatedAt:new Date()
      },
      {
        cname:'Gandhinagar',
        createdAt:new Date(),
        updatedAt:new Date()
      },
      {
        cname:'Rajkot',
        createdAt:new Date(),
        updatedAt:new Date()
      },
      {
        cname:'Bhavnagar',
        createdAt:new Date(),
        updatedAt:new Date()
      }
      ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('cities', null, {});
  }
};
