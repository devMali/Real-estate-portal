'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
   
    await queryInterface.bulkInsert('inquiries', [
      {
        uid:2,
        pid:2,
        message:"can the price be changed to 80 lacs",
        createdAt:new Date(),
        updatedAt:new Date()  
      },
      ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('inquiries', null, {});
  }
};
