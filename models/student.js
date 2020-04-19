'use strict';
module.exports = (sequelize, DataTypes) => {
  const Sequelize = sequelize.Sequelize
  const Model = Sequelize.Model

  class Student extends Model {}

  Student.init({
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    birthDate: DataTypes.DATEONLY,
    gender: DataTypes.STRING,
    email: DataTypes.STRING
  }, {sequelize});

  Student.associate = function(models) {
    // associations can be defined here
  };

  return Student;
};