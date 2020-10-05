'use strict';
module.exports = (sequelize, DataTypes) => {
  const Image = sequelize.define('Image', {
    imageCategory: {
      type: DataTypes.STRING(50),
      allowNull: false,
      unique: true
    },
    restaurantId: {
      type: DataTypes.INTEGER,
      unique: true,
      allowNull: false
    },
    imageUrl: {
      type: DataTypes.STRING,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: true,
      references: {
        model: 'Users',
        key: 'id'
      }
      
    }
  }, {});
  Image.associate = function(models) {
    // associations can be defined here
    Image.belongsTo(models.User, {
      foreignKey: 'userId'
    })
  };
  return Image;
};