'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    profileUrl: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false
    },
    hashedPassword: {
      type: DataTypes.STRING.BINARY,
      allowNull: false
    },
    businessOwner: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    }
  }, {});
  User.associate = function (models) {
    User.hasMany(models.Like, { foreignKey: 'userId' })
  };
  return User;
};
