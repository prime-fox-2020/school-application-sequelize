'use strict';
module.exports = (sequelize, DataTypes) => {
  const Sequelize = sequelize.Sequelize
  const Model = Sequelize.Model;

  class Subject extends Model {

  }

  Subject.init({
    subjectName: DataTypes.STRING
  }, {
    sequelize
  })

  Subject.associate = function(models) {

  };
  return Subject;
};