const mongoose = require("mongoose");

const gameSchema = new mongoose.Schema({
  title: { type: String, required: true },
  platform: { type: String, required: true },
  rating: { type: Number, required: true, min: 0, max: 10 },
  price: { type: Number, required: true, min: 0 },
  date: { type: Number, required: true }
}, { timestamps: true });

module.exports = mongoose.model("Game", gameSchema);
