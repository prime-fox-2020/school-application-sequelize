'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    let teachers = [
      {
        "first_name": "Bambang",
        "last_name": "Suprapto",
        "email": "bambangsuprapto@sekolah.id",
        "gender": "male",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "first_name": "Rukmana",
        "last_name": "Fatmawati",
        "email": "rukmanafatmawati@sekolah.id",
        "gender": "female",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "first_name": "Butet",
        "last_name": "Naiborhu",
        "email": "butetnaiborhu@sekolah.id",
        "gender": "female",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "first_name": "Yulius",
        "last_name": "Prawiranegara",
        "email": "yuliusprawrianegara@sekolah.id",
        "gender": "male",
        "createdAt": new Date(),
        "updatedAt": new Date()
      }
    ]

    return queryInterface.bulkInsert('Teachers', teachers, {});
  },

  down: (queryInterface, Sequelize) => {

    return queryInterface.bulkDelete('Teachers', null, {});
  }
};
