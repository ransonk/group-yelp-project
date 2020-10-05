'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    profileUrl: DataTypes.STRING,
    lastName: DataTypes.STRING,
    firstName: DataTypes.STRING,
    email: DataTypes.STRING,
    hashedPassword: DataTypes.STRING,
    businessOwner: DataTypes.BOOLEAN
  }, {});
  User.associate = function(models) {
    // associations can be defined here
  };
  return User;
};