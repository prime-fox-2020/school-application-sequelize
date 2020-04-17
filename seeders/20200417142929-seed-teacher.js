'use strict';
let data = require('../data/teachers.json')

module.exports = {
  up: (queryInterface, Sequelize) => {
    let objects = data.map(elem => {
      let obj = {
        firstName: elem.first_name,
        lastName: elem.last_name,
        gender: elem.gender,
        email: elem.email,
        createdAt: new Date(),
        updatedAt: new Date()
      }
      return obj
    })

    return queryInterface.bulkInsert('Teachers', objects, {})
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
    return queryInterface.bulkDelete('Teachers', null, {})
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
