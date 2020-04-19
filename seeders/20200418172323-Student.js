'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Students', [{
      first_name: 'Budi',
      last_name: 'Doremi',
      email: 'doremi@gmail.com',
      gender: 'Male',
      birth_date: '1990-11-11',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      first_name: 'Agnes',
      last_name: 'Mo',
      email: 'mo@gmail.com',
      gender: 'Female',
      birth_date: '1998-10-12',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      first_name: 'Bams',
      last_name: 'Samson',
      email: 'bams@gmail.com',
      gender: 'Male',
      birth_date: '1990-10-10',
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
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
