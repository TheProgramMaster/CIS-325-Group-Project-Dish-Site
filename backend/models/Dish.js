const mongoose = require("mongoose");

const dishSchema = new mongoose.Schema({
  name: { type: String, required: true },
  image: { type: String, required: true },
  type: { type: String, required: true, enum: ["soup", "appetizer", "entree"] },
  ingredients: [{ type: String }]
});

module.exports = mongoose.model("Dish", dishSchema);