document.addEventListener("DOMContentLoaded", function () {
  loadGames();
  setupForm();
});

async function loadGames() {
  try {
    const response = await fetch("/games");
    const games = await response.json();
    console.log("Liste des jeux:", games);

    const tableBody = document.getElementById("gameTableBody");
    tableBody.innerHTML = "";

    games.forEach((game) => {
      const row = createGameRow(game);
      tableBody.appendChild(row);
    });
  } catch (error) {
    console.error("Erreur lors du chargement des jeux:", error);
  }
}

function createGameRow(game) {
  const row = document.createElement("tr");

  row.innerHTML = `
        <td>${game.title}</td>
        <td>${game.platform}</td>
        <td>${game.genre || "-"}</td>
        <td>${game.date}</td>
        <td>${game.price.toFixed(2)}</td>
        <td>
            <span class="badge ${game.inStock ? "bg-success" : "bg-danger"}">
                ${game.inStock ? "En stock" : "Rupture"}
            </span>
        </td>
    `;

  return row;
}

function setupForm() {
  const form = document.getElementById("gameForm");

  form.addEventListener("submit", async function (e) {
    e.preventDefault();

    const gameData = {
      title: document.getElementById("title").value,
      platform: document.getElementById("platform").value,
      genre: document.getElementById("genre").value,
      date:
        parseInt(document.getElementById("releaseYear").value) ||
        new Date().getFullYear(),
      price: parseFloat(document.getElementById("price").value),
      inStock: document.getElementById("inStock").checked,
    };

    try {
      const response = await fetch("/games", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(gameData),
      });

      if (response.ok) {
        console.log("Jeu ajouté avec succès!");
        loadGames(); // Recharger la liste
        form.reset();
      } else {
        const error = await response.json();
        console.error("Erreur lors de l'ajout:", error);
      }
    } catch (error) {
      console.error("Erreur lors de l'ajout:", error);
    }
  });
}
