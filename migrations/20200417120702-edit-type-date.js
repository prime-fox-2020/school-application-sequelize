'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('Students', 'birth_date', Sequelize.DATEONLY);

  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('Students', 'birthDate');

  }
};
