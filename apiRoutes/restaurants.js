const express = require('express');
const db = require('../db/models');
const { Restaurant, User, Review, Image, Like } = db;
const csrf = require('csurf');
const csrfProtection = csrf({ cookie: true });

const { check, validationResult } = require('express-validator');

const router = express.Router();

const asyncHandler = handler => (req, res, next) => handler(req, res, next).catch(next);

const validateRestaurants = [
    check('name')
        .exists({ checkFalsy: true })
        .withMessage("Please provide a restaurant name"),
    check('phone')
        .exists({ checkFalsy: true })
        .withMessage("Please provide a phone number"),
    check('city')
        .exists({ checkFalsy: true })
        .withMessage("Please provide a city"),
    check('state')
        .exists({ checkFalsy: true })
        .withMessage("Please provide a State"),
    check('address')
        .exists({ checkFalsy: true })
        .withMessage("Please provide an address"),
    check('foodCategory')
        .exists({ checkFalsy: true })
        .withMessage("Please provide a food category"),
    check('userId')
        .exists({ checkFalsy: true })
        .withMessage("Please provide user ID")
]

router.get('/api/restaurants', validateRestaurants, asyncHandler(async (req, res, next) => {
    const restaurants = await Restaurant.findAll({
        include: [Review, Image]
    });
    res.json({ restaurants });
}));

router.get('/api/restaurants/:id(\\d+)', asyncHandler(async (req, res, next) => {
    const restaurantId = parseInt(req.params.id);
    const restaurant = await Restaurant.findByPk(restaurantId,
        { include: [Review, Image, User] });
    res.json({ restaurant })
}))

router.get('/api/restaurants/:id(\\d+)/reviews', asyncHandler(async (req, res, next) => {
    const restaurantId = parseInt(req.params.id);
    const reviews = await Review.findAll({
        where: { restaurantId }, include: [Restaurant, User, Like]
    });
    res.json({ reviews });
}))

router.post('/api/restaurants/:id(\\d+)/reviews', csrfProtection, asyncHandler(async (req, res, next) => {
    const restaurantId = parseInt(req.params.id);
    const { rating, description, userId } = req.body;
    const review = await Review.create({
        rating,
        description,
        userId,
        restaurantId
    })
    res.json({ review });
}))

router.post('/api/restaurants', csrfProtection, asyncHandler(async (req, res, next) => {
    const {
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
    } = req.body;

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
    res.json({ restaurant, csrfToken: req.csrfToken() })
}))


module.exports = router;
