'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
      await queryInterface.bulkInsert('Comments', [{
          text: 'Test comment 1',
          articleId: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        }, {
          text: 'Test comment 2',
          articleId: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        }]);
      },

  async down (queryInterface, Sequelize) {
      await queryInterface.bulkDelete('Comments', null, {});
  }
};
