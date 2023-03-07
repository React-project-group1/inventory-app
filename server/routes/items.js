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


// GET a single item
itemRouter.get("/:id", async (req, res) => {
  try {
    const item = await Item.findByPk(req.params.id)
    res.send(item)
  } catch (error) {
    next(error)
  }
});


// ADD a new item
itemRouter.post("/", async (req, res) => {
  try {
    const newItem = await Item.create(req.body);
    res.status(201).send({ msg: 'New Item successfully added', newItem })
  } catch (error) {
    res.status(400).send('Unable to post new user')
  }
})


// DELETE an item
itemRouter.delete("/:id", async (req,res) => {
  try {
    await Item.destroy({ where: { id: req.params.id } })
    res.status(200).send('Item successfully deleted');
  } catch (error) {
    res.status(400).send('Unable to delete Item')
  }
})


// EDIT an item
itemRouter.put("/:id", async (req, res) => {
  try {
    const updateItem = await Item.update({
      title: req.body.title,
      price: req.body.price,
      description: req.body.description,
      category: req.body.category,
      image: req.body.image
    }, {
      where: {
        id: req.params.id
      }
    });
    res.status(200).send({ msg: 'Item successfully updated', updateItem })
  } catch (error) {
    res.status(400).send('Unable to edit Item information');
  }
})


module.exports = itemRouter;