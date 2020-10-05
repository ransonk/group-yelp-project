'use strict';
module.exports = (sequelize, DataTypes) => {
  const Image = sequelize.define('Image', {
    imageCategory: DataTypes.STRING,
    restaurantId: DataTypes.INTEGER,
    imageUrl: DataTypes.STRING,
    userId: DataTypes.INTEGER
  }, {});
  Image.associate = function(models) {
    // associations can be defined here
  };
  return Image;
};