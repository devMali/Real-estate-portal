'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
   
    await queryInterface.bulkInsert('users', 
    [
      {
        fname:'dev',
        lname:'mali',
        email:'dev@gmail.com',
        password:'dev123',
        mobile:'8487910356',
        address:'near meghaninagar,asarwa',
        uimg:'./images/myimg.jpg',
        role:'admin',
        aid:2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        fname:'jay',
        lname:'prajapati',
        email:'jay@gmail.com',
        password:'jay123',
        mobile:'7787910356',
        address:'near the lake',
        uimg:'./images/myimg2.jpg',
        role:'user',
        aid:3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        fname:'hardik',
        lname:'gohel',
        email:'hardik@gmail.com',
        password:'har123',
        mobile:'8487910356',
        address:'old building road',
        uimg:'./images/myimg3.jpg',
        role:'user',
        aid:2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ],{});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('users', null, {});
  }
};
