const fs = require("fs");
const path = require("path");
const { connection, rootConnection, insertCity } = require("./src/config/db");

async function createTables() {
  try {
    // Create database if it doesn't exist using rootConnection
    await rootConnection.query(`CREATE DATABASE IF NOT EXISTS BeninTaleMap`);
    console.log("Database created/verified");

    // Create country table using the main connection (which targets BeninTaleMap)
    await connection.query(`
      CREATE TABLE IF NOT EXISTS country (
        name VARCHAR(100) NOT NULL,
        cities JSON,
        population INTEGER,
        PRIMARY KEY (name)
      )
    `);

    // Create city table
    await connection.query(`
      CREATE TABLE IF NOT EXISTS city (
        name VARCHAR(100) NOT NULL,
        presentation TEXT,
        myths JSON,
        celebrity VARCHAR(100),
        religion JSON,
        origin VARCHAR(100) NOT NULL,
        about_reg JSON,
        PRIMARY KEY (name),
        FOREIGN KEY (origin) REFERENCES country(name)
      )
    `);

    console.log("Tables created successfully");
  } catch (error) {
    console.error("Error creating tables:", error);
    throw error;
  }
}

async function importDataFromFile() {
  // First create the tables
  await createTables();

  // Make sure country exists for foreign key
  await connection.query(
    `INSERT IGNORE INTO country (name, cities, population) VALUES (?, ?, ?)`,
    [
      "Bénin",
      JSON.stringify([
        "Abomey",
        "Ouidah",
        "Porto-Novo",
        "Allada",
        "Nikki",
        "Parakou",
        "Savalou",
        "Natitingou",
        "Dassa-Zoumè",
        "Kétou",
        "Cotonou",
        "Tchaourou",
        "Bohicon",
      ]),
      13600000,
    ],
  );
  console.log("Country setup complete");

  const filePath = path.join(__dirname, "data.txt");
  const data = fs.readFileSync(filePath, "utf8");

  // Split the data into city blocks
  const cityBlocks = data.split("\n\n\n").filter((block) => block.trim());

  for (const block of cityBlocks) {
    const lines = block.split("\n").filter((line) => line.trim());

    if (lines.length === 0) continue;

    const cityName = lines[0].trim();

    const cityData = {
      name: cityName,
      presentation: "",
      myths: [],
      celebrity: "",
      religion: [],
      origin: "Bénin",
      about_reg: [],
    };

    // Parse the data
    for (let i = 1; i < lines.length; i++) {
      const line = lines[i].trim();

      if (line.startsWith("Présentation :")) {
        cityData.presentation = line.replace("Présentation :", "").trim();
      } else if (line.startsWith("Mythe :")) {
        const mytheContent = line.replace("Mythe :", "").trim();
        if (mytheContent && mytheContent !== "...") {
          cityData.myths.push(mytheContent);
        }
      } else if (line.startsWith("Figures clés :")) {
        const figuresContent = line.replace("Figures clés :", "").trim();
        if (figuresContent) {
          const figures = figuresContent.split(",").map((f) => f.trim());
          cityData.celebrity = figures[0] || "";
          cityData.about_reg.push({
            type: "figures_historiques",
            content: figures,
          });
        }
      } else if (line.startsWith("Culte :")) {
        const culteContent = line.replace("Culte :", "").trim();
        if (culteContent) {
          cityData.religion = [culteContent];
        }
      } else if (line.startsWith("Anecdotes :")) {
        const anecdotesContent = line.replace("Anecdotes :", "").trim();
        if (anecdotesContent) {
          const anecdotes = anecdotesContent
            .split(";")
            .map((a) => a.trim())
            .filter((a) => a);
          cityData.about_reg.push({
            type: "anecdotes",
            content: anecdotes,
          });
        }
      }
    }

    try {
      // Use the existing insertCity function
      await insertCity(cityData);
      console.log(`Inserted city: ${cityData.name}`);
    } catch (e) {
      console.error(`Error inserting city ${cityData.name}:`, e.message);
    }
  }
}

module.exports = importDataFromFile;
