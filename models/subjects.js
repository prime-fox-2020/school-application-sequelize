'use strict';
module.exports = (sequelize, DataTypes) => {
  const Sequelize = sequelize.Sequelize;
  const Model = Sequelize.Model;

  class Subjects extends Model {}

  Subjects.init({
    subject_name: DataTypes.STRING
  }, { sequelize });
  Subjects.associate = function(models) {
    // associations can be defined here
  };
  return Subjects;
};
