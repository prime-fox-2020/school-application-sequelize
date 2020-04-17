'use strict';
module.exports = (sequelize, DataTypes) => {
  const Sequelize = sequelize.Sequelize;
  const Model = Sequelize.Model;

  class Teachers extends Model {}

  Teachers.init({
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    email: DataTypes.STRING,
    gender: DataTypes.STRING
  }, { sequelize });
  Teachers.associate = function(models) {
    // associations can be defined here
  };
  return Teachers;
};
