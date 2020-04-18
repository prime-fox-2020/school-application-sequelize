'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    return queryInterface.bulkInsert('Students', [
      {
        first_name: 'Joko',
        last_name: 'Santoso',
        email: 'jokosantoso@sekolah.id',
        gender: 'male',
        birth_date: '28/06/2005',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        first_name: 'Lukman',
        last_name: 'Riki',
        email: 'lukmanriki@sekolah.id',
        gender: 'male',
        birth_date: '13/04/2004',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        first_name: 'Siti',
        last_name: 'Nurhayati',
        email: 'sitinurhayati@sekolah.id',
        gender: 'female',
        birth_date: '12/05/2005',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        first_name: 'Rika',
        last_name: 'Risti',
        email: 'rikaristi@sekolah.id',
        gender: 'female',
        birth_date: '03/01/2005',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
    return queryInterface.bulkDelete('Students', null, {});
  }
};
