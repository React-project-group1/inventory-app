const express = require("express");
const itemRouter = express.Router();
const { Item } = require("../models");

// GET all items
itemRouter.get("/", async (req, res, next) => {
  try {
    const items = await Item.findAll();
    res.send(items);
  } catch (error) {
    next(error);
  }
});

module.exports = itemRouter;