const express = require('express');
const db = require('../../db/models');
const { Restaurant, User, Review, Image, Like } = db;
const csrf = require('csurf');
const csrfProtection = csrf({ cookie: true });
const { handleValidationErrors } = require('../../utils');
const { requireAuth } = require('../../auth');

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

const validateReviews = [
    check('rating')
        .exists({ checkFalsy: true })
        .withMessage('Please provide a rating')
        .isInt({ max: 5, min: 1 })
        .withMessage('Please provide a value between 1 and 5'),
    check('description')
        .exists({ checkFalsy: true })
        .withMessage('Please provide a description')
        .isLength({ min: 30, max: 5000 })
        .withMessage('Please provide a description between 30 and 5000 characters')
]
router.get('/api/restaurants', asyncHandler(async (req, res, next) => {
    const restaurants = await Restaurant.findAll({
        include: [Review, Image]
    });
    res.json({ restaurants });
}));

router.get('/api/restaurants/:id(\\d+)', asyncHandler(async (req, res, next) => {
    const restaurantId = parseInt(req.params.id);
    const restaurant = await Restaurant.findByPk(restaurantId,
        {
            include: [
                {
                    model: Review,
                    include: [User]
                }, Image, User]
        });
    res.json({ restaurant })
}))

router.get('/api/restaurants/:id(\\d+)/reviews', asyncHandler(async (req, res, next) => {
    const restaurantId = parseInt(req.params.id);
    const reviews = await Review.findAll({
        where: { restaurantId }, include: [Restaurant, User, Like]
    });
    res.json({ reviews });
}))

router.post('/api/restaurants/:id(\\d+)/reviews', csrfProtection, validateReviews, handleValidationErrors, asyncHandler(async (req, res, next) => {
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

router.post('/api/restaurants', csrfProtection, validateRestaurants, handleValidationErrors, asyncHandler(async (req, res, next) => {
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

//grab restaurants for index page *recommended restaurants
router.get('/api/restaurants/recent', asyncHandler(async (req, res, next) => {
    const restaurants = await Restaurant.findAll({
        include: [Review, Image],
        limit: 4,
        order: [
            ['id', 'DESC'] //possibly change to order by rating
        ]
    });
    res.json({ restaurants });
}));

module.exports = router;
