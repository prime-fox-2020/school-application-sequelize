'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Subjects', [
      {
        subject_name: 'Matematika',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        subject_name: 'Biologi',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        subject_name: 'Bahasa Indonesia',
        createdAt: new Date(),
        updatedAt: new Date()
      }], {});
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
