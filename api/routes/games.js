const express = require("express");
const Game = require("../models/Game");
const router = express.Router();

// GET /games => liste tous les jeux
router.get("/", async (req, res) => {
  try {
    const games = await Game.find();
    res.json(games);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// GET /games/:id => détail d’un jeu
router.get("/:id", async (req, res) => {
  try {
    const game = await Game.findById(req.params.id);
    if (!game) return res.status(404).json({ message: "Jeu non trouvé" });
    res.json(game);
  } catch (err) {
    res.status(500).json({ error: err.message });
  } 
});

// POST /games => ajouter un jeu
router.post("/", async (req, res) => {
  try {
    const game = new Game(req.body);
    const savedGame = await game.save();
    res.status(201).json(savedGame);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// PUT /games/:id => modifier un jeu
router.put("/:id", async (req, res) => {
  try {
    const updatedGame = await Game.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    if (!updatedGame) return res.status(404).json({ message: "Jeu non trouvé" });
    res.json(updatedGame);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// DELETE /games/:id => supprimer un jeu
router.delete("/:id", async (req, res) => {
  try {
    const deletedGame = await Game.findByIdAndDelete(req.params.id);
    if (!deletedGame) return res.status(404).json({ message: "Jeu non trouvé" });
    res.json({ message: "Jeu supprimé avec succès" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
