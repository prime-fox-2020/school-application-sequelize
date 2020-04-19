'use strict';
module.exports = (sequelize, DataTypes) => {
  const Sequelize = sequelize.Sequelize
  const Model = Sequelize.Model

  class Student extends Model {

  }

  Student.init({
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING,
    gender: DataTypes.STRING,
    birthDate: DataTypes.DATEONLY
  }, {
    sequelize
  })

  // const Student = sequelize.define('Student', {
  //   firstName: DataTypes.STRING,
  //   lastName: DataTypes.STRING,
  //   email: DataTypes.STRING,
  //   gender: DataTypes.STRING
  // }, {});
  Student.associate = function(models) {
    // associations can be defined here
  };
  return Student;
};