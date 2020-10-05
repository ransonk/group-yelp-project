'use strict';
module.exports = (sequelize, DataTypes) => {
  const Restaurant = sequelize.define('Restaurant', {
    name: DataTypes.STRING,
    phone: DataTypes.INTEGER,
    city: DataTypes.STRING,
    state: DataTypes.STRING,
    address: DataTypes.STRING,
    foodCategory: DataTypes.STRING,
    dineIn: DataTypes.BOOLEAN,
    takeOut: DataTypes.BOOLEAN,
    delivery: DataTypes.BOOLEAN,
    userId: DataTypes.INTEGER
  }, {});
  Restaurant.associate = function(models) {
    // associations can be defined here
  };
  return Restaurant;
};