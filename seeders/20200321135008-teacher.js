'use strict';
const fs = require('fs');

module.exports = {
  up: (queryInterface, Sequelize) => {
    let data = JSON.parse(fs.readFileSync('./teachers.json'));
    let insertData = [];
    data.forEach((teacher) => {
      insertData.push({
        firstName: teacher.first_name,
        lastName: teacher.last_name,
        email: teacher.email,
        gender: teacher.gender,
        createdAt: new Date(),
        updatedAt: new Date()
      });
    });
      return queryInterface.bulkInsert('teachers', insertData, {});
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('teachers', null, {});
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
