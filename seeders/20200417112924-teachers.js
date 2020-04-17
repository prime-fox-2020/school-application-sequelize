'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Teachers', [
      {
        first_name: 'Johan',
        last_name: "Pramono",
        email: "johan@sekolah.id",
        gender: "male",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        first_name: 'Joko',
        last_name: "Pambudi",
        email: "joko@sekolah.id",
        gender: "male",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        first_name: 'Riko',
        last_name: "Donal",
        email: "riko@sekolah.id",
        gender: "male",
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
    return queryInterface.bulkDelete('Teachers', null, {});

    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
