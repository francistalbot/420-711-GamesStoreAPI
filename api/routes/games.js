const express = require("express");
const router = express.Router();

// GET /api/games - Récupérer tous les jeux
router.get("/", async (req, res) => {
  try {
    const games = [
      {
        title: "The Legend of Zelda",
        platform: "Switch",
        rating: 9.5,
        date: 2018,
        price: 80,
      },
    ];
    res.json(games);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.post("/", async (req, res) => {
  try {
    const { title, platform, genre, date, price, inStock } = req.body;
    const newGame = {
      title,
      platform,
      genre,
      date,
      price,
      inStock,
    };
    res.status(201).json(newGame);
    console.log("Nouveau jeu ajouté:", newGame);
  } catch (error) {
    res.status(500).json({ message: error.message });
    console.error("Erreur lors de l'ajout du jeu:", error);
  }
});

module.exports = router;
