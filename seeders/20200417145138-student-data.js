'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Students', [
      {
        first_name:"Michelle",
        last_name:"Marika",
        email:"michellemarika@sekolah.id",
        gender:"Female",
        birth_date:"23-08-2003",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        first_name:"Lukman",
        last_name:"Riki",
        email:"lukmanriki@sekolah.id",
        gender:"Male",
        birth_date:"13-04-2004",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        first_name:"Siti",
        last_name:"Nurhayati",
        email:"sitinurhayati@sekolah.id",
        gender:"Female",
        birth_date:"12-05-2005",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        first_name:"Rika",
        last_name:"Risti",
        email:"rikaristi@sekolah.id",
        gender:"Female",
        birth_date:"03-01-2005",
        createdAt: new Date(),
        updatedAt: new Date()
      }
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
