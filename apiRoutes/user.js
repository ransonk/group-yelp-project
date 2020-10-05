const express = require('express');
const routes = express.Router();
const { check, validationResult } = require('express-validator');
const { asyncHandler, handleValidationErrors } = require('../utils');
const { getUserToken, requireAuth } = require('../auth');
const db = require('../db/models')
const bcrypt = require("bcryptjs")

const validateUser = [

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



//localhost:8080/api/user - signup
routes.post(
    '/', validateUser, handleValidationErrors,
    asyncHandler(async (req, res, next) => {

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








module.exports = routes;
