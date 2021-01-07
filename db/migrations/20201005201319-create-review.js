'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Reviews', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      rating: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      description: {
        allowNull: true,
        type: Sequelize.TEXT(5000)
      },
      userId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: 'Users' }
      },
      restaurantId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: 'Restaurants' }
      },
      parentId: {
        type: Sequelize.INTEGER,
        references: { model: 'Reviews' }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Reviews');
  }
};
