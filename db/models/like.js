'use strict';
module.exports = (sequelize, DataTypes) => {
  const Like = sequelize.define('Like', {
    reviewId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER,
    likeType: DataTypes.STRING
  }, {});
  Like.associate = function(models) {
    // associations can be defined here
  };
  return Like;
};