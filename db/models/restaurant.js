'use strict';
module.exports = (sequelize, DataTypes) => {
  const Restaurant = sequelize.define('Restaurant', {
    name: {
      allowNull: false,
      type: DataTypes.STRING(100)
    },
    phone: {
      allowNull: false,
      type: DataTypes.INTEGER
    },
    city: {
      allowNull: false,
      type: DataTypes.STRING(50)
    },
    state: {
      allowNull: false,
      type: DataTypes.STRING(50)
    },
    address: {
      allowNull: false,
      type: DataTypes.STRING(50)
    },
    foodCategory: {
      allowNull: false,
      type: DataTypes.STRING(50)
    },
    dineIn: {
      type: DataTypes.BOOLEAN
    },
    takeOut: {
      type: DataTypes.BOOLEAN
    },
    delivery: {
      type: DataTypes.BOOLEAN
    },
    userId: {
      allowNull: false,
      type: DataTypes.INTEGER
    }
  }, {});
  Restaurant.associate = function(models) {
    Restaurant.hasMany(models.Review, { foreignKey: 'restaurantId' })
    Restaurant.hasMany(models.Image, { foreignKey: 'restaurantId' })
    Restaurant.belongsTo(models.User, { foreignKey: 'userId' })
  };
  return Restaurant;
};