const mongoose = require("mongoose");

const gameSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    platform: { type: String, required: true },
    genre: { type: String, required: false },
    price: { type: Number, required: true, min: 0 },
    date: { type: Number, required: true },
    inStock: { type: Boolean, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Game", gameSchema);
