'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Teachers', [{
      first_name: "Bambang",
      last_name: "Suprapto",
      email: "bambangsuprapto@sekolah.id",
      gender: "male",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      first_name: "Rukmana",
      last_name: "Fatmawati",
      email: "rukmanafatmawati@sekolah.id",
      gender: "female",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      first_name: "Butet",
      last_name: "Naiborhu",
      email: "butetnaiborhu@sekolah.id",
      gender: "female",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      first_name: "Yulius",
      last_name: "Prawiranegara",
      email: "yuliusprawrianegara@sekolah.id",
      gender: "male",
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Teachers', null, {});
  }
};
