'use strict';
module.exports = (sequelize, DataTypes) => {
  const Sequelize =sequelize.Sequelize
  const Model = Sequelize.Model;

  class Subject extends Model{}

  Subject.init({
    name: DataTypes.STRING
  },{
    sequelize
  })
  
  
  // const Subject = sequelize.define('Subject', {
  //   name: DataTypes.STRING
  // }, {});
  Subject.associate = function(models) {
    // associations can be defined here
  };
  return Subject;
};