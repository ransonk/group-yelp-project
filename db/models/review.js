'use strict';
module.exports = (sequelize, DataTypes) => {
  const Review = sequelize.define('Review', {
    rating: {
      allowNull: false,
      type: DataTypes.INTEGER(5),
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
    parentId: {
      type: DataTypes.INTEGER
    }
  }, {});
  Review.associate = function (models) {
    Review.belongsTo(models.User, { foreignKey: 'userId' })
    Review.belongsTo(models.Restaurant, { foreignKey: 'restaurantId' })
    Review.belongsTo(models.Review, { foreignKey: 'parentId' })
  };
  return Review;
};
