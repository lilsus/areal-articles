'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Articles', [{
        title: 'Hello world',
        text: 'Hello world',
        createdAt: new Date(),
        updatedAt: new Date()
     }]);
  },

  async down (queryInterface, Sequelize) {
      await queryInterface.bulkDelete('Articles', null, {});
  }
};
