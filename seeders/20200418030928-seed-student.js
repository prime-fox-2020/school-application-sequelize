'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('Students', [
      {
        first_name : 'Joko',
        last_name : 'Santoso',
        email : 'jokosantoso@sekolah.id',
        gender: 'male',
        birthdate: '2005-01-21',
        createdAt : new Date(),         
        updatedAt : new Date()
      }, 
      {
        first_name : 'Lukman',
        last_name : 'Riki',
        email : 'likmanriki@sekolah.id',
        gender: 'male',
        birthdate: '2004-01-21',
        createdAt : new Date(),         
        updatedAt : new Date()
      }, 
      {
        first_name : 'Siti',
        last_name : 'Nurhaya',
        email : 'sitinurhayati@sekolah.id',
        gender: 'female',
        birthdate: '2003-01-21',
        createdAt : new Date(),         
        updatedAt : new Date()
      }, 
      {
        first_name : 'Rika',
        last_name : 'Risti',
        email : 'rikaristi@sekolah.id',
        gender: 'female',
        birthdate: '2005-01-25',
        createdAt : new Date(),         
        updatedAt : new Date()
      }, 
    ], {});

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

    return queryInterface.bulkDelete('Students', null, {});

    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
