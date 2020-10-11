const express = require("express");
const routes = express.Router();
const { asyncHandler, handleValidationErrors } = require('../../utils');
const db = require('../../db/models')

//api/images

// routes.get("/", asyncHandler(async (req, res) => {

// }))