const express = require("express");

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

let publicFolder = __dirname + "/public";
app.use(express.static(publicFolder));

// Start server
app.listen(3000, () => {
  console.log(`Server is running on port 3000`);
});

module.exports = app;
