'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Students', [{
      first_name: 'Elvan',
      last_name: 'Rafif',
      email: 'Elvan@sekolah.id',
      gender: 'Male',
      birth_date: '1995-01-01',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      first_name: 'Raihan',
      last_name: 'Rahmatullah',
      email: 'Raihan@sekolah.id',
      gender: 'Male',
      birth_date: '1999-01-01',
      createdAt: new Date(),
      updatedAt: new Date(),
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
    return queryInterface.bulkDelete('Students', null, {});
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
