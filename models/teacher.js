'use strict';
module.exports = (sequelize, DataTypes) => {
  const Sequelize = sequelize.Sequelize
  const Model = Sequelize.Model

  class Teacher extends Model{}

  Teacher.init({
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    gender: DataTypes.STRING,
    email: DataTypes.STRING
  }, {sequelize});

  Teacher.associate = function(models) {
    // associations can be defined here
  };
  
  return Teacher;
};