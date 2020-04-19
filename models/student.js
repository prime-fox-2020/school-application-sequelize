'use strict';
module.exports = (sequelize, DataTypes) => {
  const Sequelize = sequelize.Sequelize
  const Model = Sequelize.Model;
  class Student extends Model {}

  // const Student = sequelize.Sequelize('Student', {
  //   first_name: DataTypes.STRING,
  //   last_name: DataTypes.STRING,
  //   email: DataTypes.STRING,
  //   gender: DataTypes.STRING,
  //   birth_date: DataTypes.DATE
  // }, {});

Student.init({
  first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    email: DataTypes.STRING,
    gender: DataTypes.STRING,
    birth_date: DataTypes.DATEONLY,
    createdAt: new Date(),
    updatedAt: new Date()
}, {sequelize})

//   Student.associate = function(models) {
//     // associations can be defined here
//   };
  return Student;
};