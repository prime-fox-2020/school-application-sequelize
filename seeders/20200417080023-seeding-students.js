'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    const data = JSON.parse(require('fs').readFileSync('./data/students.json', 'utf-8'));

    data.map(el => {
        delete el.id;
        el.createdAt = new Date();
        el.updatedAt = new Date();
    });

    return queryInterface.bulkInsert('Students', data, {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Students', null, {});
  }
};