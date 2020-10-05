const express = require('express');
const db = require('../db/models');
const { Restaurant, User, Review, Image, Like } = db;

const router = express.Router();

const asyncHandler = handler => (req, res, next) => handler(req, res, next).catch(next);


router.get('/api/restaurants', asyncHandler(async (req, res, next) => {
    const restaurants = await Restaurant.findAll({ 
        include: [ User, Review, Image, ], 
        order: [['name', 'DESC']]
    });
    res.json({ restaurants })
}))

router.get('/api/restaurants/:id(\\d+)', asyncHandler(async (req, res, next) => {
    const restaurantId = parseInt(req.params.id);
    const restaurant = await Restaurant.findByPk(restaurantId, 
        { include: [ User, Review, Image, ] });
        res.json({ restaurant })
}))

router.get('/api/restaurants/:id(\\d+)/reviews', asyncHandler(async (req, res, next) => {
    const restaurantId = parseInt(req.params.id);
    const reviews = await Review.findAll({where: { restaurantId}, include: [User, Review, Image, Likes ]
    });
}))


router.post('/api/restaurants/create', asyncHandler(async (req, res, next) => {
    const { name, 
        phone, 
        city, 
        state, 
        address, 
        foodCategory, 
        dineIn, 
        takeOut, 
        delivery, 
        userId } = req.body;

    const restaurant = await Restaurant.create({
        name,
        phone,
        city,
        state,
        address,
        foodCategory,
        dineIn,
        takeOut,
        delivery,
        userId
    })
    res.redirect('/')
}))


module.exports = router;