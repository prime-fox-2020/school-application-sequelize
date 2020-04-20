'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface
    .removeColumn('Students', 'birth_date')
    .then(()=>queryInterface.addColumn('Students', 'birth_date', Sequelize.DATEONLY))
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface
    .removeColumn('Students', 'birth_date')
    .then(()=> queryInterface.addColumn('Students', 'birth_date', Sequelize.STRING))
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
  }
};
