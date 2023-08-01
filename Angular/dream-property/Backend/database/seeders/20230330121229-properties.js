'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('properties', [
      {
        padd: 'near civil hospital',
        price:'12k',
        description:'Very Good Hospital',
        size:'120 sqft.',
        img:'./images/hospital.jpg',
        is_sell : false,
        is_rent : true,
        aid:1,
        tid:4,
        createdAt: new Date(),
        updatedAt: new Date()

      },
      {
        padd: 'near the bank of river',
        price:'1 Cr.',
        description:'3BHK flat on the 5th floor',
        size:'150 sqft.',
        img:'./images/home.jpg',
        is_sell : true,
        is_rent : false,
        aid:4,
        tid:2,
        createdAt: new Date(),
        updatedAt: new Date()
      }
      ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('properties', null, {});
  }
};
