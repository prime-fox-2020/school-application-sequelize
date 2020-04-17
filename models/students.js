'use strict';
module.exports = (sequelize, DataTypes) => {
  const Sequelize = sequelize.Sequelize;
  const Model = Sequelize.Model;

  class Students extends Model {}

  Students.init({
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    email: DataTypes.STRING,
    gender: DataTypes.STRING,
    birthdate: DataTypes.STRING
  }, { sequelize });

  Students.associate = function(models) {
    // associations can be defined here
  };
  return Students;
};
