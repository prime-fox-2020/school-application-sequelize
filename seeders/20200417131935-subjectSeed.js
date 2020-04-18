'use strict';
const subjects = require('../subject.json')
for (let i = 0; i < subjects.length; i++) {
  delete subjects[i].id
  subjects[i].createdAt = new Date()
  subjects[i].updatedAt = new Date()
}

// let subjects = [
//   {
//     subject_name: 'Geografi',
//     createdAt = new Date(),
//     updatedAt = new Date()
//   },
//   {
//     subject_name: 'Pornografi',
//     createdAt = new Date(),
//     updatedAt = new Date()
//   }
// ]

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Subjects', subjects, {});
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
  //  return queryInterface.bulkInsert('Subjects', [
  //     {
  //         subject_name : "Fisika",
  //         createdAt: new Date(),
  //         updatedAt: new Date()
  //     },
  //     {
  //         subject_name : "Ekonomi",
  //         createdAt: new Date(),
  //         updatedAt: new Date()
  //     }
  //   ])
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
   return queryInterface.bulkDelete('Subjects', null, {});
  }
};
