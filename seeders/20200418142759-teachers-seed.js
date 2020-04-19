'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    let record = JSON.parse(require('fs').readFileSync('./data/teachers.json', 'utf8'));
    let result = [];
    for (let i in record) {
      let obj = {
        first_name: record[i].first_name,
        last_name: record[i].last_name,
        email: record[i].email,
        gender: record[i].gender,
        createdAt: new Date(),
        updatedAt: new Date()
      }
      result.push(obj);
    }
    return queryInterface.bulkInsert('Teachers', result, {});
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
    return queryInterface.bulkDelete('Teachers', null, {});
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};