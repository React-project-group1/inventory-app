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

itemRouter.get("/:id", async (req, res) => {
  try {
    const item = await Item.findByPk(req.params.id)
    res.send(item)
  } catch (error) {
    next(error)
  }
});


itemRouter.post("/", async (req, res) => {
  try {
    const newItem = await User.create({
      where : {
        title: req.body.title,
        price: req.body.price,
        description: req.body.description,
        category: req.body.category,
        image: req.body.image,
      }
    })
    res.status(200).send({ msg: 'New Item successfully added', newItem })
  } catch (error) {
    res.status(400).send('Unable to post new user')
  }
})


itemRouter.delete("/:id", async (req,res) => {
  try {
    await Item.findByPk(req.params.id)
    res.status(200).send(console.log('Item deleted'));
  } catch (error) {
    next(error)
  }
})


module.exports = itemRouter;