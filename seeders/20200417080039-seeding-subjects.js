'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    const data = JSON.parse(require('fs').readFileSync('./data/subjects.json', 'utf-8'));

    data.map(el => {
        delete el.id;
        el.createdAt = new Date();
        el.updatedAt = new Date();
    });

    return queryInterface.bulkInsert('Subjects', data, {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Subjects', null, {});
  }
};