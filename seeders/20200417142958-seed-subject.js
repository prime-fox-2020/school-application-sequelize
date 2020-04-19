'use strict';
let data = require('../data/subjects.json')

module.exports = {
  up: (queryInterface, Sequelize) => {
    let objects = data.map(elem => {
      let obj = {
        subjectName: elem.subject_name,
        createdAt: new Date(),
        updatedAt: new Date()
      }
      return obj
    })

    return queryInterface.bulkInsert('Subjects', objects, {})
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
    return queryInterface('Subjects', null, {})
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
