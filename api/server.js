const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const gamesRoutes = require("./routes/games");

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// Connexion MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log("Connecté à MongoDB"))
.catch(err => console.error("Erreur MongoDB :", err));

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
