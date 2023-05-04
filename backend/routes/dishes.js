const express = require("express");
const router = express.Router();
const Dish = require("../models/dish");

// Retrieve all dishes
router.get("/", async (req, res) => {
  const { type, ingredient, name } = req.query;
  let query = {};

  if (type) query.type = type;
  if (ingredient) query.ingredients = { $in: [ingredient] };
  if (name) query.name = { $regex: name, $options: "i" };

  try {
    const dishes = await Dish.find(query);
    res.json(dishes);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Add a dish
router.post("/", async (req, res) => {
    const { name, image, type, ingredients } = req.body;
    const dish = new Dish({ name, image, type, ingredients });
  
    try {
      const newDish = await dish.save();
      res.status(201).json(newDish);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  });

  // Update a dish
router.put("/:id", async (req, res) => {
    const { id } = req.params;
    const { name, image, type, ingredients } = req.body;
    const update = {};
  
    if (name) update.name = name;
    if (image) update.image = image;
    if (type) update.type = type;
    if (ingredients) update.ingredients = ingredients;
  
    try {
      await Dish.updateOne({ _id: id }, { $set: update });
      res.status(200).json({ message: "Dish updated successfully" });
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  });
  
  // Retrieve dishes by ingredient, type, and name are already handled in the "Retrieve all dishes" route

module.exports = router;