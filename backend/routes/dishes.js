const router = require('express').Router();
const Dish = require('../models/Dish');

// Get all dishes
router.get('/', async (req, res) => {
  try {
    const dishes = await Dish.find();
    res.status(200).json(dishes);
  } catch (error) {
    res.status(400).json({ message: error });
  }
});

// Add a new dish
router.post('/add', async (req, res) => {
  const { name, image, type, ingredients } = req.body;
  const newDish = new Dish({ name, image, type, ingredients });

  try {
    await newDish.save();
    res.status(201).json({ message: 'Dish added successfully' });
  } catch (error) {
    res.status(400).json({ message: error });
  }
});

// Add more routes for updating, retrieving dishes by ingredients, type, and name

module.exports = router;