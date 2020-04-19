'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Subjects', [
      {
        subject_name: "Matematika",
        nilai_minimum: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        subject_name: "Pemrograman Komputer",
        nilai_minimum: 8,
        createdAt: new Date(),
        updatedAt: new Date()
      }
  ], {});
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
