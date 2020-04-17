'use strict';
module.exports = (sequelize, DataTypes) => {
  const Sequelize = sequelize.Sequelize
  const Model = Sequelize.Model;

  class Student extends Model {

  }

  Student.init({
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING,
    gender: DataTypes.STRING,
    birth_date: DataTypes.DATEONLY
  }, {
    sequelize
  })

  Student.associate = function(models) {
    
  };
  return Student;
};