const express = require('express');
const routes = express.Router();
const db = require('../../db/models')
const { asyncHandler } = require('../../utils');
const sequelize = require("sequelize")
const Op = sequelize.Op
const { Restaurant, User, Review, Image, Like } = db;


routes.get(`/name/:name`, asyncHandler(async (req, res) => {
  const searchingPhrase = req.params.name;
  console.log(searchingPhrase)
  const results = await db.Restaurant.findAll({
    where: {
      name: {
        [Op.iLike]: `%${searchingPhrase}%`
      }
    },
    include: [Review, Image]
  })
  // console.log("searchval", restaurants);
  res.json({ results })
}))

routes.get(`/dropdown/:category`, asyncHandler(async (req, res) => {
  const searchCategory = req.params.category;
  const results = await db.Restaurant.findAll({
    where: {
      foodCategory: searchCategory
    },
    include: [Review, Image]
  })
  // console.log("dropdown", results);
  res.json({ results });
}))

routes.get(`/services/:type`, asyncHandler(async (req, res) => {
  const serviceType = req.params.type;
  const results = await db.Restaurant.findAll({
    where: {
      [serviceType]: true
    },
    include: [Review, Image]
  })
  console.log("dropdown", results);
  res.json({
    results
  });
}))

// routes.post









module.exports = routes;
