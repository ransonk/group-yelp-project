//renders
const express = require('express');
const router = express.Router();
const path = require('path');
const app = express();




router.get("/", (req, res) => {

    res.render('index', {})
})


router.get('/search', (req, res) => {
    res.render('search');
})

router.get("/sign-up", (req, res) => {
    res.render("sign-up")
})

router.get("/log-in", (req, res) => {
    res.render("log-in")
})





module.exports = router;
