'use strict';
const student = require('../students.json')
for (let i = 0; i < student.length; i++) {
  delete student[i].id
  student[i].createdAt = new Date()
  student[i].updatedAt = new Date()
}

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
   return queryInterface.bulkInsert('Students', student, {});
  //  return queryInterface.bulkInsert('Students', [
  //   {
  //     first_name: "Joko",
  //     last_name: "Santoso",
  //     email: "jokosantoso@sekolah.id",
  //     gender: "male",
  //     birth_date: "2005-06-28",
  //     createdAt: new Date(),
  //     updatedAt: new Date()

  //   },
  //   {
  //     first_name: "Lukman",
  //     last_name: "Riki",
  //     email: "lukmanriki@sekolah.id",
  //     gender: "male",
  //     birth_date: "2004-04-13",
  //     createdAt: new Date(),
  //     updatedAt: new Date()
  //   },
  //   {
  //     first_name: "Siti",
  //     last_name: "Nurhayati",
  //     email: "sitinurhayati@sekolah.id",
  //     gender: "female",
  //     birth_date: "2005-05-12",
  //     createdAt: new Date(),
  //     updatedAt: new Date()
  //   },
  //   {
  //     first_name: "Rika",
  //     last_name: "Risti",
  //     email: "rikaristi@sekolah.id",
  //     gender: "female",
  //     birth_date: "2005-01-03",
  //     createdAt: new Date(),
  //     updatedAt: new Date()
  //   },
  //   {
  //     first_name: "King",
  //     last_name: "Slayer",
  //     email: "witcher@gmail.com",
  //     gender: "male",
  //     birth_date: "2005-03-01",
  //     createdAt: new Date(),
  //     updatedAt: new Date()
  //   }
  //  ], {});
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
