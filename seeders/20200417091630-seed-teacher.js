'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    const data = [
      {
        first_name : "Bambang",
        last_name : "Suprapto",
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
      }
    ]

    return queryInterface.bulkInsert('Teachers', data, {})

  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
   return queryInterface.bulkDelete('Teachers', null, {truncate:true,restartIdentity:true},{})
  //  return queryInterface.bulkDelete('Teacher', null, {})
  }
};
