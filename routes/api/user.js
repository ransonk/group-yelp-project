const express = require('express');
const routes = express.Router();
const { check, validationResult } = require('express-validator');
const { asyncHandler, handleValidationErrors } = require('../../utils');
const { getUserToken, requireAuth, signedIn } = require('../../auth');
const db = require('../../db/models')
const bcrypt = require("bcryptjs")

const bearerToken = require('express-bearer-token');


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
    check("password")
        .exists({ checkFalsy: true })
        .withMessage('Please provide a value for Password')
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

        const { firstName, lastName, email, password, businessOwner } = req.body;
        const hashedPassword = await bcrypt.hash(password, 10)
        let user = await db.User.create({ profileUrl: "set default here", lastName, firstName, email, hashedPassword, businessOwner })

        const token = getUserToken(user);
        const previousPage = req.session.history[1].split("http://localhost:8080")[1]
        res.status(201).json({
            user: { id: user.id },
            token,
            previousPage
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
    console.log('user', user.email);
    const passwordsMatch = await bcrypt.compareSync(password, user.hashedPassword.toString())
    console.log(passwordsMatch)
    if (!user || !passwordsMatch) {
        const err = new Error("Login failed");
        err.status = 401;
        err.title = "Login failed";
        err.errors = ["The provided credentials were invalid."];
        return next(err);
    }
    console.log('hi')
    const token = getUserToken(user);
    const previousPage = req.session.history[1].split("http://localhost:8080")[1]
    console.log(previousPage)
    res.status(201).json({
        user: { id: user.id },
        token,
        previousPage
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


//back end for checking if the user is logged in when the website is loaded.
routes.post("/check", asyncHandler(async (req, res) => {
    const result = await signedIn(req, res)
    // console.log(result)
    res.json({ result })

}))



module.exports = routes;
