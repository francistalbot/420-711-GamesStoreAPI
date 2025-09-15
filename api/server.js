const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const connectDB = require("./db");
const gamesRoutes = require("./routes/games");

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

let publicFolder = __dirname + "/public";
app.use(express.static(publicFolder));

// Connexion à la base de données
connectDB();

// Routes
app.use("/games", gamesRoutes);

// Route de test
app.get("/", (req, res) => {
  res.json({ message: "Bienvenue sur l’API Jeux Vidéo " });
});

// Démarrage serveur
app.listen(PORT, () => {
  console.log(`🚀 Serveur API démarré sur http://localhost:${PORT}`);
});
