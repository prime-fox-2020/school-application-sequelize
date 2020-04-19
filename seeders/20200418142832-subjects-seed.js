'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    let record = JSON.parse(require('fs').readFileSync('./data/subjects.json', 'utf8'));
    let result = [];
    for (let i in record) {
      let obj = {
        subject_name: record[i].subject_name,
        createdAt: new Date(),
        updatedAt: new Date()
      }
      result.push(obj);
    }
    return queryInterface.bulkInsert('Subjects', result, {});

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
    return queryInterface.bulkDelete('Subjects', null, {});
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
