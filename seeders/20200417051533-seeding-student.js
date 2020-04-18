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
      return queryInterface.bulkInsert('Students', [{
        first_name: "Joko",
        last_name: "Santoso",
        email: "jokosantoso@sekolah.id",
        gender: "male",
        birth_date: "2005/6/28",
        createdAt:new Date(),
        updatedAt:new Date()
    },
    {
        first_name: "Lukman",
        last_name: "Riki",
        email: "lukmanriki@sekolah.id",
        gender: "male",
        birth_date: "2004/4/13",
        createdAt:new Date(),
        updatedAt:new Date()
    },
    {
        first_name: "Siti",
        last_name: "Nurhayati",
        email: "sitinurhayati@sekolah.id",
        gender: "female",
        birth_date: "2005/5/12",
        createdAt:new Date(),
        updatedAt:new Date()
    },
    {
        first_name: "Rika",
        last_name: "Risti",
        email: "rikaristi@sekolah.id",
        gender: "female",
        birth_date: "2005/1/3",
        createdAt:new Date(),
        updatedAt:new Date()
    }], {});
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
