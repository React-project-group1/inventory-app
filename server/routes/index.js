const express = require("express");
// const router = express.Router();
const itemRouter = express.Router();

// different model routers
// router.use('/sauces', require('./sauces'));  // sauces
itemRouter.use('/items', require('./items'))    // items

module.exports = itemRouter;
