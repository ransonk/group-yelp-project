'use strict';
module.exports = (sequelize, DataTypes) => {
  const Review = sequelize.define('Review', {
    rating: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    description: {
      allowNull: false,
      type: DataTypes.TEXT(5000),
    },
    userId: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    restaurantId: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    // what is the parent id? it is null
    parentId: {
      type: DataTypes.INTEGER
    }
  }, {});
  Review.associate = function (models) {
    Review.belongsTo(models.User, { foreignKey: 'userId' })
    Review.belongsTo(models.Restaurant, { foreignKey: 'restaurantId' })
    Review.belongsTo(models.Review, { foreignKey: 'parentId' })
    Review.hasMany(models.Like, { foreignKey: 'reviewId' })
  };
  return Review;
};
