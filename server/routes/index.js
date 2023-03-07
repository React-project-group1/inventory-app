const express = require("express");
// const router = express.Router();
const itemRouter = express.Router();
const bodyParser = require('body-parser');
itemRouter.use(bodyParser.json());

// different model routers
// router.use('/sauces', require('./sauces'));  // sauces
itemRouter.use('/items', require('./items'))    // items

module.exports = itemRouter;
