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

    return queryInterface.bulkInsert('Teachers', [{
        id : 1,
        first_name :"Bambang",
        last_name :"Suprapto",
        email :"bambangsuprapto@sekolah.id",
        gender :"male",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id :2,
        first_name :"Rukmana",
        last_name :"Fatmawati",
        email :"rukmanatifatmawati@sekolah.id",
        gender :"female",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id :3,
        first_name :"Butet",
        last_name :"Naiborhu",
        email :"butetnaiborhu@sekolah.id",
        gender :"male",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id :4,
        first_name :"Yulius",
        last_name :"Prawiranegara",
        email :"yuliusprawiranegara@sekolah.id",
        gender :"male",
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

    return queryInterface.bulkDelete('Teahcers', null, {} );
  }
};
