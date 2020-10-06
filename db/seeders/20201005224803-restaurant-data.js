'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Restaurants', [
      {name: 'Memphis Taproom', phone: 5555050, city: 'Philadelphia', state: 'PA', address: '123 Memphis Ave', foodCategory: 'Bar', dineIn: true, takeOut: true, delivery: false, userId: 1, createdAt: new Date(), updatedAt: new Date()},
      {name: 'Zahav', phone: 5557070, city: 'Philadelphia', state: 'PA', address: '999 Chestnut Street', foodCategory: 'Middle Eastern', dineIn: true, takeOut: true, delivery: false, userId: 2, createdAt: new Date(), updatedAt: new Date()},
      {name: 'McDonalds', phone: 5559090, city: 'East Stroudsburg', state: 'PA', address: '44 Main Street', foodCategory: 'Fast Food', dineIn: true, takeOut: true, delivery: false, userId: 3, createdAt: new Date(), updatedAt: new Date()},
      {name: 'Sarah Street Cafe', phone: 5553030, city: 'East Stroudsburg', state: 'PA', address: '123 Bluebird Lane', foodCategory: 'Cafe', dineIn: true, takeOut: true, delivery: false, userId: 4, createdAt: new Date(), updatedAt: new Date()},
      {name: 'LA Galbi', phone: 5552020, city: 'Los Angeles', state: 'CA', address: '22 North Lee Street', foodCategory: 'Pizza', dineIn: true, takeOut: true, delivery: true, userId: 5, createdAt: new Date(), updatedAt: new Date()},
      {name: 'Pizzeria Beddia', phone: 5552050, city: 'Philadelphia', state: 'PA', address: '123 Memphis Ave', foodCategory: 'Bar', dineIn: true, takeOut: true, delivery: false, userId: 6, createdAt: new Date(), updatedAt: new Date()},
      {name: 'Hong Kong Express', phone: 5553333, city: 'Bushkill', state: 'PA', address: '22 Smith Street', foodCategory: 'Chinese', dineIn: true, takeOut: true, delivery: true, userId: 7, createdAt: new Date(), updatedAt: new Date()},
      {name: 'Loco Pez', phone: 5554444, city: 'Cleveland', state: 'OH', address: '123 High Street', foodCategory: 'Mexican', dineIn: true, takeOut: true, delivery: true, userId: 8, createdAt: new Date(), updatedAt: new Date()},
      {name: 'We Serve Coffee', phone: 5550050, city: 'Austin', state: 'TX', address: '123 Street Road', foodCategory: 'Coffee', dineIn: true, takeOut: true, delivery: false, userId: 9, createdAt: new Date(), updatedAt: new Date()},
    ])
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Restaurants', null, {});
  }
};
