//renders
const express = require('express');
const csrf = require('csurf');
const router = express.Router();
const path = require('path');
const { locals } = require('../app');
// const app = express();
const csrfProtection = csrf({ cookie: true });
const fetch = require("node-fetch")
// const { csrfProtection } = require('./api/restaurants');

// app.set('view engine', 'pug');


router.get("/", (req, res) => {

    // const token = localStorage.getItem("HANGRY_ACCESS_TOKEN")
    // const id = localStorage.getItem("HANGRY_CURRENT_USER_ID")
    // const body = { token, id }
    // const res = await fetch("/api/user/check", {
    //     method: "POST",
    //     headers:
    //         { "Content-Type": "application.json" },
    //     body: JSON.stringify({ body })
    // })
    res.render('index', {}) // poas in the result from fetch in this {}
})


// router.get(`/search/:result`, async (req, res) => {
//     const result = await fetch(`http://localhost:8080/api/search/${req.params.result}`)
//     // const restaurants = window.localStorage.getItem("result");
//     // const restaurantName = restaurants[0].name
//     // console.log(restaurantName);
//     const resultJson = await result.json()
//     const restaurants = resultJson.restaurants
//     res.render('search', { restaurants });
// })

router.get('/search', async (req, res) => {
    res.render('search');
})



// router.post(`/search`, (req, res) => {

//     const restaurants = req.body.result.restaurants;
//     const restaurantName = restaurants[0].name
//     console.log(restaurantName);
//     // const name = eachRestaurant[0].name

//     // console.log(name);
//     res.render('search', { restaurantName });
// })



// const db = require('../../db/models')
// router.post(`/search/:name`, async (req, res) => {

//     const searchingPhrase = req.params.name;
//     const restaurants = await db.Restaurant.findAll({
//         where: {
//             name: {
//                 [Op.iLike]: `%${searchingPhrase}%`
//             }
//         },
//         include: [Review, Image]
//     })
//     res.render('search', { restaurants });
// })















router.get("/sign-up", (req, res) => {



    res.render("sign-up")
})

router.get("/log-in", (req, res) => {
    res.render("log-in")
})

router.get("/restaurants/:id(\\d+)", (req, res) => {
    res.render("restaurant");
})


router.get('/user/:id(\\d+)', (req, res) => {
    res.render('profile-page');
});

router.get('/restaurants/:id(\\d+)/reviews/new', csrfProtection, (req, res) => {
    res.render('write-a-review', { csrfToken: req.csrfToken() });

})

router.get('/restaurants/:id(\\d+)/reviews/new', (req, res) => {
    res.render('write-a-review');
})

router.get('/restaurants/:id(\\d+)/reviews/new', (req, res) => {
    res.render('edit-a-review');
})


router.get("/my-business", (req, res) => {
    res.render("my-business")
})


router.get("/demo-user", (req, res) => {
    res.render("demo")
})


module.exports = router;
