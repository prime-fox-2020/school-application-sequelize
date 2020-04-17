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
        id : 1,
        first_name :"Joko",
        last_name :"Santoso",
        email :"jokosantoso@sekolah.id",
        gender :"male",
        birthdate :"28 Juni 2005",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id :2,
        first_name :"Lukman",
        last_name :"Riki",
        email :"lukmanriki@sekolah.id",
        gender :"male",
        birthdate :"13 April 2004",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id :3,
        first_name :"Siti",
        last_name :"Nurhayati",
        email :"sitinurhayati@sekolah.id",
        gender :"female",
        birthdate :"12 Mei 2005",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id :4,
        first_name :"Rika",
        last_name :"Risti",
        email :"rikaristi@sekolah.id",
        gender :"female",
        birthdate :"3 Januari 2005",
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ])
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
