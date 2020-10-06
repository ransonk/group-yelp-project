//renders
const express = require('express');
const router = express.Router();
const path = require('path');


router.get("/", (req, res) => {
    // res.json({ message: "this is the root of the api" })
    res.render('index')
})








module.exports = router;
