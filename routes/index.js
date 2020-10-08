//renders
const express = require('express');
const csrf = require('csurf');
const router = express.Router();
const path = require('path');
const app = express();
const csrfProtection = csrf({ cookie: true });
// const { csrfProtection } = require('./api/restaurants');

app.set('view engine', 'pug');


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


router.get('/search', (req, res) => {
    res.render('search');
})

router.post('/search', (req, res) => {
    const restaurants = req.body.result;
    console.log(restaurants);
    res.render('search', { restaurants });
})

router.get("/sign-up", (req, res) => {



    res.render("sign-up")
})

router.get("/log-in", (req, res) => {
    res.render("log-in")
})

router.get("/restaurants/:id(\\d+)", (req, res) => {
    res.render("restaurant");
})

router.get('/restaurants/:id(\\d+)/reviews/new', csrfProtection, (req, res) => {
    res.render('write-a-review', { csrfToken: req.csrfToken() });
})




module.exports = router;
