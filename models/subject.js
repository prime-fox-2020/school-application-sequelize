'use strict';

module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.Sequelize.Model
  class Subject extends Model {

  }

  Subject.init({
    subject_name: DataTypes.STRING
  }, {
    sequelize
  });
  Subject.associate = function(models) {
    // associations can be defined here
  };
  return Subject;
};