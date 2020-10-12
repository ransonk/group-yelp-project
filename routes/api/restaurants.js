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
router.get('/', asyncHandler(async (req, res, next) => {
    const results = await Restaurant.findAll({
        include: [Review, Image]
    });
    res.json({ results });
}));

router.get('/:id(\\d+)', asyncHandler(async (req, res, next) => {
    const restaurantId = parseInt(req.params.id);
    const { currentUserId } = req.body;
    // console.log(currentUserId)
    const restaurant = await Restaurant.findByPk(restaurantId,
        {
            include: [
                {
                    model: Review,
                    include: [User]
                }, Image, User]
        });

    const average = restaurant.Reviews.reduce((accum, ele) => {
        return accum += ele.rating / restaurant.Reviews.length;
    }, 0);
    let averageRating = Math.round(average);
    res.json({ restaurant, averageRating })
}))

router.get('/:id(\\d+)/reviews', asyncHandler(async (req, res, next) => {
    const restaurantId = parseInt(req.params.id);
    const reviews = await Review.findAll({
        where: { restaurantId }, include: [Restaurant, User, Like]
    });

    res.json({ reviews });
}))
// csrfProtection,
router.post('/:id(\\d+)/reviews', validateReviews, handleValidationErrors, asyncHandler(async (req, res, next) => {
    console.log(req.body);
    const validationErrors = validationResult(req);

    if (!validationErrors.isEmpty()) {
        const errors = validationErrors.array().map((error) => error.msg);
        const err = new Error("Bad Request");
        err.status = 400;
        err.title == "Bad Request";
        err.errors = errors;
        return next(err);
    }
    const restaurantId = parseInt(req.params.id);
    const restaurant = await Restaurant.findByPk(restaurantId);
    if (!restaurant) {
        throw new Error('Restaurant not found.')
    } else {
        const { rating, description, userId } = req.body;
        const review = await Review.create({
            rating,
            description,
            userId,
            restaurantId
        })
        res.json({ review });

    }
}))

router.delete('/:id(\\d+)/reviews', requireAuth, asyncHandler(async (req, res, next) => {
    const { reviewId, currentUserId, token } = req.body;
    const review = await Review.findByPk(reviewId);
    if (review.userId.toString() !== currentUserId) {
        const err = new Error("Unauthorized Action");
        err.status = 401;
        err.title = "Unauthorized";
        err.errors = ["Only writer of the review is authorized to delete this review."];
        return next(err);
    } else {
        await review.destroy();
        res.json({ msg: "Review Deleted" });
    }
}))

router.put('/:id(\\d+)/reviews', requireAuth, validateReviews, handleValidationErrors, asyncHandler(async (req, res, next) => {
    const { rating, description, userId, restaurantId, reviewId } = req.body;
    const editedReview = await Review.findByPk(reviewId, {
        include: User
    })
    console.log(editedReview)
    await editedReview.update({
        rating,
        description,
    })
    res.json({ rating, description });
}));

// needs requireAuth middleware ?
router.post('/', validateRestaurants, handleValidationErrors, asyncHandler(async (req, res, next) => {
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
    res.json({ restaurant })
}))

//grab restaurants for index page *recommended restaurants
router.get('/recent', asyncHandler(async (req, res, next) => {
    const restaurants = await Restaurant.findAll({
        // include: [Review, Image],
        // limit: 4,
        // order: [
        //     ['id', 'DESC'] //possibly change to order by rating
        // ]
        include: {
            model: Review,
            order: [
                ['rating', 'DESC']
            ],
        },
        limit: 4
    });
    res.json({ restaurants });
}));


router.delete('/:id(\\d+)', requireAuth, asyncHandler(async (req, res, next) => {
    // const userId = localStorage.getItem("HANGRY_CURRENT_USER_ID");
    const { id, token } = req.body;
    const restaurantId = parseInt(req.params.id);
    const restaurant = await Restaurant.findByPk(restaurantId);
    if (restaurant.userId.toString() !== id) {
        const err = new Error("Unauthorized Action");
        err.status = 401;
        err.title = "Unauthorized";
        err.errors = ["Only business owner is authorized to delete this business."];
        return next(err);
    } else {
        await restaurant.destroy();
        res.json({ msg: "Restaurant Deleted" });
    }
}))

//find restaurant by user id
router.get("/user/:id(\\d+)/restaurant", asyncHandler(async (req, res) => {
    const userId = parseInt(req.params.id);
    const restaurant = await Restaurant.findOne({
        where: { userId: userId }
    })
    res.json({ restaurant });
}))


// router.put('/:id(\\d+)/reviews', requireAuth, validateReviews, handleValidationErrors, asyncHandler(async (req, res, next) => {
//     const { rating, description, userId, restaurantId, reviewId } = req.body;
//     const editedReview = await Review.findByPk(reviewId, {
//         include: User
//     })
//     console.log(editedReview)
//     await editedReview.update({
//         rating,
//         description,
//     })
//     res.json({ rating, description });
// }));





module.exports = router
