'use strict';
const fs = require('fs');

module.exports = {
  up: (queryInterface, Sequelize) => {
    let data = JSON.parse(fs.readFileSync('./subjects.json'));
    let insertData = [];
    data.forEach((subject) => {
      insertData.push({
        subjectName: subject.subject_name,
        createdAt: new Date(),
        updatedAt: new Date()
      });
    });
    return queryInterface.bulkInsert('subjects', insertData, {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('subjects', null, {});
  }
};