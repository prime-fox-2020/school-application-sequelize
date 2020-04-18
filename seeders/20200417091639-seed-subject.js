'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    const data = [
      {
        subject_name : "Fisika",
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        subject_name : "Ekonomi",
        createdAt : new Date(),
        updatedAt : new Date()
      }
  ]
   return queryInterface.bulkInsert('Subjects', data, {})
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
   return queryInterface.bulkDelete('Subjects', null, {truncate:true,restartIdentity:true},{})
  }
};
