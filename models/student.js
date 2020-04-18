'use strict';
module.exports = (sequelize, DataTypes) => {
  const student = sequelize.define('student', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING,
    gender: DataTypes.STRING,
    birthDate: DataTypes.STRING
  }, {});
  student.associate = function(models) {
    // associations can be defined here
  };
  return student;
};