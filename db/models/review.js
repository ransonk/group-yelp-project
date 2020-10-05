'use strict';
module.exports = (sequelize, DataTypes) => {
  const Review = sequelize.define('Review', {
    rating: DataTypes.INTEGER,
    description: DataTypes.TEXT,
    userId: DataTypes.INTEGER,
    restaurantId: DataTypes.INTEGER,
    parentId: DataTypes.INTEGER
  }, {});
  Review.associate = function(models) {
    // associations can be defined here
  };
  return Review;
};