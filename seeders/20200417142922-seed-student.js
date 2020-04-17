'use strict';
let data = require('../data/students.json')
module.exports = {
  up: (queryInterface, Sequelize) => {
    let objects = data.map(elem => {
      let obj = {
        firstName: elem.first_name,
        lastName: elem.last_name,
        birthDate: elem.birth_date,
        gender: elem.gender,
        email: elem.email,
        createdAt: new Date(),
        updatedAt: new Date()
      }
      return obj
    })

    return queryInterface.bulkInsert('Students', objects, {})
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
    return queryInterface.bulkDelete('Students', null, {})
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
