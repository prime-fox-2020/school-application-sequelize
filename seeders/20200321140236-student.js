'use strict';
const fs = require('fs');

module.exports = {
  up: (queryInterface, Sequelize) => {
    let data = JSON.parse(fs.readFileSync('./students.json'));
    let insertData = [];
    data.forEach((student) => {
      insertData.push({
        firstName: student.first_name,
        lastName: student.last_name,
        email: student.email,
        gender: student.gender,
        birthDate: student.birth_date,
        createdAt: new Date(),
        updatedAt: new Date()
      });
    });
    return queryInterface.bulkInsert('students', insertData, {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('students', null, {});
  }
};