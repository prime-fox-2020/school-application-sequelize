'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Students', [
      {
        firstName: "Joko",
        lastName: "Santoso",
        email: "jokosantoso@sekolah.id",
        gender: "male",
        birth_date: '2005-06-28',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        firstName: "Lukman",
        lastName: "Riki",
        email: "lukmanriki@sekolah.id",
        gender: "male",
        birth_date: '2004-04-13',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        firstName: "Siti",
        lastName: "Nurhayati",
        email: "sitinurhayati@sekolah.id",
        gender: "female",
        birth_date: '2005-05-12',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        firstName: "Rika",
        lastName: "Risti",
        email: "rikaristi@sekolah.id",
        gender: "female",
        birth_date: '2005-01-03',
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
