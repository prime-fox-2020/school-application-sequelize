'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Students', [
    {
      firstName: 'Joko',
      lastName: 'Santoso',
      email: 'jokosantoso@sekolah.id',
      gender: 'male',
      birthDate: '1995-02-01',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      firstName: 'Lukman',
      lastName: 'Riki',
      email: 'lukmanriki@sekolah.id',
      gender: 'female',
      birthDate: '1945-10-10',
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
