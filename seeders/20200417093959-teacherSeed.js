'use strict';
const teacher = require('../teachers.json')
for (let i = 0; i < teacher.length; i++) {
  delete teacher[i].id
  teacher[i].createdAt = new Date()
  teacher[i].updatedAt = new Date()
}
// console.log(teacher)

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Teachers', teacher, {});
  //   return queryInterface.bulkInsert('Teachers', [
  //     {
  //         first_name : "Bambang",
  //         last_name : "Suprapto",
  //         email : "bambangsuprapto@sekolah.id",
  //         gender : "male",
  //         createdAt: new Date(),
  //         updatedAt: new Date()
          
  //     },
  //     {
  //         first_name : "Rukmana",
  //         last_name : "Fatmawati",
  //         email : "rukmanafatmawati@sekolah.id",
  //         gender : "female",
  //         createdAt: new Date(),
  //         updatedAt: new Date()
  //     },
  //     {
  //         first_name : "Butet",
  //         last_name : "Naiborhu",
  //         email : "butetnaiborhu@sekolah.id",
  //         gender : "female",
  //         createdAt: new Date(),
  //         updatedAt: new Date()
  //     },
  //     {
  //         first_name : "Yulius",
  //         last_name : "Prawinegara",
  //         email : "yuliusprawinegara@sekolah.id",
  //         gender : "male",
  //         createdAt: new Date(),
  //         updatedAt: new Date()
  //     }
  // ], {});
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
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
   return queryInterface.bulkDelete('Teachers', null, {});
  }
};
