const express = require('express');
const routes = express.Router();
const db = require('../../db/models')
const { asyncHandler } = require('../../utils');
const sequelize = require("sequelize")
const Op = sequelize.Op
const { Restaurant, User, Review, Image, Like } = db;


routes.get(`/:name`, asyncHandler(async (req, res) => {
  const searchingPhrase = req.params.name;
  const restaurants = await db.Restaurant.findAll({
    where: {
      name: {
        [Op.iLike]: `%${searchingPhrase}%`
      }
    },
    include: [Review, Image]
  })
  res.json({ restaurants })
}))

// routes.post









module.exports = routes;
