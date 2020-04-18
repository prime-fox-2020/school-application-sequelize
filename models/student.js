'use strict';
module.exports = (sequelize, DataTypes) => {
  const Sequelize = sequelize.Sequelize
  const Model = Sequelize.Model

  class Student extends Model{

  }

  Student.init({
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    email: DataTypes.STRING,
    gender: DataTypes.STRING,
    birth_date: DataTypes.DATEONLY
  }, {
    sequelize
  })
  // const Student = sequelize.define('Student', {
  //   first_name: DataTypes.STRING,
  //   last_name: DataTypes.STRING,
  //   email: DataTypes.STRING,
  //   gender: DataTypes.STRING,
  //   birth_date: DataTypes.DATEONLY
  // }, {});
  Student.associate = function(models) {
    // associations can be defined here
  };
  return Student;
};