'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    const data = JSON.parse(require('fs').readFileSync('./data/teachers.json', 'utf-8'));

    data.map(el => {
        el.createdAt = new Date();
        el.updatedAt = new Date();
    });

    return queryInterface.bulkInsert('Teachers', data, {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Teachers', null, {});
  }
};