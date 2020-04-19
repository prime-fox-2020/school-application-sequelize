'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Students', [
      {
        first_name: "Joko",
        last_name: "Santoso",
        email: "jokosantoso@sekolah.id",
        gender: "male",
        birth_date: "2005-06-28",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        first_name: "Lukman",
        last_name: "Riki",
        email: "lukmanriki@sekolah.id",
        gender: "male",
        birth_date: "2004-04-13",
        createdAt: new Date(),
        updatedAt: new Date()
      }
  ], {});
  },

  /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */

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
