'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Teachers', [{
      first_name: 'Adi',
      last_name: 'Susanto',
      email: 'adisusanto@gmail.com',
      gender: 'Male',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      first_name: 'Budi',
      last_name: 'Susanto',
      email: 'budisusanto@gmail.com',
      gender: 'Male',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      first_name: 'Yuni',
      last_name: 'Susanti',
      email: 'ysusanti@gmail.com',
      gender: 'Female',
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
    return queryInterface.bulkDelete('Teachers', null, {});
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
