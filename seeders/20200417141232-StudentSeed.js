'use strict';

const students = require('../students.json')
for (let i = 0; i < students.length; i++) {
  delete students[i].id
  students[i].createdAt = new Date()
  students[i].updatedAt = new Date()
}
console.log(students)

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Students', students, {});
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
    return queryInterface.bulkDelete('Students', null, {})
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};

// return queryInterface.bulkInsert('Students', [{
//   first_name: 'Amin',
//   last_name: 'Richman',
//   email: 'aminrichman@mail.com',
//   gender: 'male',
//   birthdate: new Date(),
//   createdAt: new Date(),
//   updatedAt: new Date()
// },{
//   first_name: 'Chuck',
//   last_name: 'Norris',
//   email: 'chucknorris@mail.com',
//   gender: 'male',
//   birthdate: new Date(),
//   createdAt: new Date(),
//   updatedAt: new Date()
// },{
//   first_name: 'Ada',
//   last_name: 'Wong',
//   email: 'adawong@mail.com',
//   gender: 'female',
//   birthdate: new Date(),
//   createdAt: new Date(),
//   updatedAt: new Date()
// },{
//   first_name: 'Rika',
//   last_name: 'Risti',
//   email: 'rikaristi@sekolah.id',
//   gender: 'female',
//   birthdate: '2005-01-03',
//   createdAt: new Date(),
//   updatedAt: new Date()
// }], {});
