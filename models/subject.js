'use strict';
module.exports = (sequelize, DataTypes) => {
  const subject = sequelize.define('subject', {
    subjectName: DataTypes.STRING
  }, {});
  subject.associate = function(models) {
    // associations can be defined here
  };
  return subject;
};