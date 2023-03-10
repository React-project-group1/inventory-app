const express = require("express");
const itemRouter = express.Router();
const { Item } = require("../models");
const { check, validationResult } = require('express-validator');

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
itemRouter.post("/", 
  [check("title").not().isEmpty().trim()], 
  [check("price").isNumeric()],
  [check("description").not().isEmpty().trim().isLength({ min: 20 })],
  [check("category").not().isEmpty().trim()],
  [check("image").not().isEmpty().trim()],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.json({ error: errors.array() });
    } else {
      
      try {
        const newItem = await Item.create(req.body);
        res.status(201).send({ msg: 'New Item successfully added', newItem })
        alert('Item successfully added')
      } catch (error) {
        res.status(400).send('Unable to post new user')
      }
    }

})


// DELETE an item
itemRouter.delete("/:id", async (req,res) => {
  try {
    await Item.destroy({ where: { id: req.params.id } })
    res.status(200).json('Item successfully deleted');
  } catch (error) {
    res.status(400).send('Unable to delete Item')
  }
})


// EDIT an item
itemRouter.put("/:id", 
  // [check("title").isString().trim().isLength({ min: 3 })],
  // [check("price").isNumeric()],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.json({ error: errors.array() });
    } else {

      try {
        const updateItem = await Item.update(req.body, {
          where: {
            id: req.params.id
          }
        });
        res.status(200).send({ msg: 'Item successfully updated', updateItem })
      } catch (error) {
        res.status(400).send('Unable to edit Item information');
      }

    }
})


module.exports = itemRouter;