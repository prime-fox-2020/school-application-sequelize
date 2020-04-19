'use strict';
module.exports = (sequelize, DataTypes) => {
  const Sequelize = sequelize.Sequelize
  const Model = Sequelize.Model
  class Subject extends Model {}
  
  
  Subject.init({
    subject_name: DataTypes.STRING,
    nilai_minimum: DataTypes.INTEGER
  }, {sequelize});
  
  Subject.associate = function(models) {
    // associations can be defined here
  };
  return Subject;
};