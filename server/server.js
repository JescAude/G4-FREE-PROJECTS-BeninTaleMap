const express = require("express");
const { connection } = require("./src/config/db"); // Fix: destructure connection
const app = express();
const port = process.env.PORT || 8000;
const importDataFromFile = require("./importData");

app.get("/", (req, res) => {
  res.set("Content-Type", "text/html");
  res.send("Hello world !!");
});

const startServer = async () => {
  try {
    await importDataFromFile();
    console.log("Data import finished");
    app.listen(port, () => {
      console.log("Server app listening on port " + port);
    });
  } catch (err) {
    console.error("Failed to import data:", err);
  }
};

startServer();

app.get("/villes", async (req, res) => {
  try {
    const query = `
      SELECT name, origin, myths
      FROM city
    `;

    const [results] = await connection.query(query);

    const villes = results.map((ville) => ({
      name: ville.name,
      origin: ville.origin,
      description: `Ville de ${ville.name} fondée par des ${ville.origin}, elle est connue pour ses ${ville.myths}.`,
      myths: ville.myths,
    }));

    res.status(200).json(villes);
  } catch (err) {
    console.error("Error fetching cities:", err);
    res.status(500).send("Internal Server Error");
  }
});

app.get("/villes/:id", async (req, res) => {
  const name = req.params.id;
  const query = `
        SELECT name, origin, myths
        FROM city
        WHERE name = ?
    `;

  try {
    const [results] = await connection.query(query, [name]);

    if (results.length === 0) {
      return res.status(404).send("City not found");
    }

    const ville = results[0];
    res.status(200).json({
      name: ville.name,
      origin: ville.origin,
      description: `Ville de ${ville.name} fondée par des ${ville.origin}, elle est connue pour ses ${ville.myths}.`,
      historique: `Histoire de ${ville.name}, située en ${ville.origin}.`,
    });
  } catch (err) {
    console.error("Error fetching city:", err);
    res.status(500).send("Internal Server Error");
  }
});
