'use strict';
module.exports = (sequelize, DataTypes) => {
  const Like = sequelize.define('Like', {
    reviewId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER,
    likeType: DataTypes.STRING
  }, {});
  Like.associate = function (models) {
    // associations can be defined here
    Like.belongsTo(models.Review, { foreignKey: "reviewId" })
    Like.belongsTo(models.User, { foreignKey: "userId" })
  };
  return Like;
};
