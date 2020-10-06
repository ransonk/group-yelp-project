const express = require('express');
const routes = express.Router();
const { check, validationResult } = require('express-validator');
const { asyncHandler, handleValidationErrors } = require('../utils');
const { getUserToken, requireAuth } = require('../auth');
const db = require('../db/models')
const bcrypt = require("bcryptjs")

const validateSignUpUser = [
    check("firstName")
        .exists({ checkFalsy: true })
        .withMessage("Please provide a firstName"),
    check("lastName")
        .exists({ checkFalsy: true })
        .withMessage("Please provide a lastName"),
    check('email')
        .exists({ checkFalsy: true })
        .withMessage('Please provide a value for Email Address')
        .isLength({ max: 255 })
        .withMessage('Email Address must not be more than 255 characters long')
        .isEmail()
        .withMessage('Email Address is not a valid email')
        .custom((value) => {
            return db.User.findOne({ where: { email: value } })
                .then((user) => {
                    if (user) {
                        return Promise.reject('The provided Email Address is already in use by another account');
                    }
                });
        }),
    check("businessOwner")
        .exists({ checkFalsy: true })
        .withMessage("Please confirm if you are a business owner"),
    check("password")
        .exists({ checkFalsy: true })
        .isLength({ max: 20 })
        .withMessage("Please provide a valid password with max 20 characters"),
    check('confirmPassword')
        .exists({ checkFalsy: true })
        .withMessage('Please provide a value for Confirm Password')
        .isLength({ max: 20 })
        .withMessage('Confirm Password must not be more than 20 characters long')
        .custom((value, { req }) => {
            if (value !== req.body.password) {
                throw new Error('Confirm Password does not match Password');
            }
            return true;
        })
]


const validateLogInUser = [
    check('email')
        .exists({ checkFalsy: true })
        .withMessage("Please provide your email to Log In")
        .isEmail()
        .withMessage("Please provide the correct email format"),
    check("password")
        .exists({ checkFalsy: true })
        .withMessage("Please provide your password to Log In")
]



//localhost:8080/api/user - signup
routes.post(
    '/', validateSignUpUser, handleValidationErrors,
    asyncHandler(async (req, res, next) => {

        const validationErrors = validationResult(req);

        if (!validationErrors.isEmpty()) {
            const errors = validationErrors.array().map((error) => error.msg);
            const err = new Error("Bad Request");
            err.status = 400;
            err.title == "Bad Request";
            err.errors = errors;
            return next(err);
        }

        const { firstName, lastName, email, password, profileUrl, businessOwner } = req.body;

        const hashedPassword = await bcrypt.hash(password, 10)
        let user;
        if (!profileUrl) {
            user = await db.User.create({ firstName, lastName, email, businessOwner, hashedPassword })

        } else {
            user = await db.User.create({ firstName, lastName, email, profileUrl, businessOwner, hashedPassword })

        }

        const token = getUserToken(user);
        res.status(201).json({
            user: { id: user.id },
            token,
        })
    }))


//log in should have a form with email and password.
routes.post('/token', validateLogInUser, asyncHandler(async (req, res, next) => {
    const validationErrors = validationResult(req);

    if (!validationErrors.isEmpty()) {
        const errors = validationErrors.array().map((error) => error.msg);
        const err = new Error("Bad Request");
        err.status = 400;
        err.title == "Bad Request";
        err.errors = errors;
        return next(err);
    }

    const email = req.body.email;
    const password = req.body.password;

    const user = await db.User.findOne({
        where: { email: email }
    });

    const hashedPassword = await bcrypt.hash(password, 10)

    if (!user || hashedPassword !== user.hashedPassword.toString()) {
        const err = new Error("Login failed");
        err.status = 401;
        err.title = "Login failed";
        err.errors = ["The provided credentials were invalid."];
        return next(err);
    }

    const token = getUserToken(user);
    res.json({
        token,
        user: { id: user.id }
    })


}))


//show user profile for certain review
routes.get('/:id(\\d+)', asyncHandler(async (req, res, next) => {
    const user = await db.User.findOne({
        where: {
            id: parseInt(req.params.id)
        },
        include: [Review, Like, Image, Restaurant]
    })
    res.json({ user })
}))






module.exports = routes;
