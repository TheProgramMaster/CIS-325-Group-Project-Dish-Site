const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const dishSchema = new Schema({
  name: { type: String, required: true },
  image: { type: String, required: true },
  type: { type: String, required: true },
  ingredients: [String],
});

const Dish = mongoose.model('Dish', dishSchema);

module.exports = Dish;