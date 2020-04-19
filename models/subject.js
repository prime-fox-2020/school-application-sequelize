'use strict';
module.exports = (sequelize, DataTypes) => {
  const Sequelize = sequelize.Sequelize
  const Model = Sequelize.Model;
  class Subject extends Model { }

   Subject.init({
    subject_name: DataTypes.STRING,
    createdAt: new Date(),
    updatedAt: new Date()
   }, { sequelize
   })

  // const Subject = sequelize.define('Subject', {
  //   subject_name: DataTypes.STRING
  // }, {});
  // Subject.associate = function (models) {
  //   // associations can be defined here
  // };
  return Subject;
};