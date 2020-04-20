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
        birth_date: "2005-04-13",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        first_name: "Siti",
        last_name: "Nurhayati",
        email: "sitinurhayati@sekolah.id",
        gender: "female",
        birth_date: "2005-05-15",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        first_name: "Rika",
        last_name: "Risti",
        email: "rikaristi@sekolah.id",
        gender: "female",
        birth_date: "2005-01-03",
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Students', null, {});
  }
};
