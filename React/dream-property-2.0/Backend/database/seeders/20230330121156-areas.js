'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('areas', [
      {
         aname: 'Thaltej',
         cid:1,
         createdAt:new Date(),
         updatedAt:new Date()
      },
      {
        aname: 'Asarwa',
        cid:1,
        createdAt:new Date(),
        updatedAt:new Date()
      },
      {
        aname:'Rampur',
        cid:3,
        createdAt:new Date(),
        updatedAt:new Date()
      },
      {
        aname:'Kalapipur',
        cid:2,
        createdAt:new Date(),
        updatedAt:new Date()
      },
      {
        aname:'sonmarg',
        cid:2,
        createdAt:new Date(),
        updatedAt:new Date()
      }
      ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('areas', null, {});
  }
};
