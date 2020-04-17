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
      last_name : "Suprapto",
      first_name : "Bambang",
      email : "bambangsuprapto@sekolah.id",
      gender : "male",
      createdAt : new Date(),
      updatedAt : new Date()
      
  },
  {
      first_name : "Rukmana",
      last_name : "Fatmawati",
      email : "rukmanafatmawati@sekolah.id",
      gender : "female",
      createdAt : new Date(),
      updatedAt : new Date()
  },
  {
      first_name : "Butet",
      last_name : "Naiborhu",
      email : "butetnaiborhu@sekolah.id",
      gender : "female",
      createdAt : new Date(),
      updatedAt : new Date()
  },
  {
      first_name : "Yulius",
      last_name : "Prawiranegara",
      email : "yuliusprawiranegara@sekolah.id",
      gender : "male",
      createdAt : new Date(),
      updatedAt : new Date()
  }], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */

   return queryInterface.bulkDelete('Teachers', null, {});
  }
};
