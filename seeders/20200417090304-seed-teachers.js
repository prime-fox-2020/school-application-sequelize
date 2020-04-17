'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    let data = JSON.parse(require('fs').readFileSync('./data/teachers.json', 'utf-8'));

    data.map(el => {
      el.createdAt = new Date()
      el.updatedAt = new Date()
    })

    return queryInterface.bulkInsert('Teachers', data , {});
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
    */
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Teachers', null, {});
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
    */
  }
};
