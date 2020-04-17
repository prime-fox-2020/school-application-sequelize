'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Students', [
      {
      first_name: 'John',
      last_name: 'Doe',
      email: 'john@oke.id',
      gender: 'male',
      birth_date: '1995-08-12',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      first_name: 'Don',
      last_name: 'Corleon',
      email: 'don@sekolah.id',
      gender: 'male',
      birth_date: '1994-09-14',
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
    return queryInterface.bulkDelete('Students', null, {});

    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
