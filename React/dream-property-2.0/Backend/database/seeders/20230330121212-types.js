'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('types', [
      {
         tname: 'Agricultural land',
         createdAt:new Date(),
         updatedAt:new Date()
      },
      {
        tname: 'Flat',
        createdAt:new Date(),
        updatedAt:new Date()
      },
      {
        tname:'House',
        createdAt:new Date(),
        updatedAt:new Date()
      },
      {
        tname:'Hospital',
        createdAt:new Date(),
        updatedAt:new Date()
      },
      {
        tname:'Gym',
        createdAt:new Date(),
        updatedAt:new Date()
      }
      ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('types', null, {});

  }
};
