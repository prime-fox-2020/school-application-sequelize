'use strict';
module.exports = (sequelize, DataTypes) => {
  const Sequelize = sequelize.Sequelize
  const Model = Sequelize.Model;

  class Teacher extends Model{}
  
  Teacher.init({
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    email: DataTypes.STRING,
    gender: DataTypes.STRING
  },{
    sequelize
  })

  // const Teacher = sequelize.define('Teacher', {
  //   first_name: DataTypes.STRING,
  //   last_name: DataTypes.STRING,
  //   email: DataTypes.STRING,
  //   gender: DataTypes.STRING
  // }, {});
  Teacher.associate = function(models) {
    // associations can be defined here
  };
  return Teacher;
};