const mysql = require("mysql2/promise");
require("dotenv").config();

// Create connection pool (better than single connection)
const connection = mysql.createPool({
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_ROOT_PASSWORD,
  database: process.env.MYSQL_DATABASE || "BeninTaleMap", // Ensure database is specified
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
  multipleStatements: true, // Allow multiple statements if needed
});

// Create a separate connection for database creation (without specifying database)
const rootConnection = mysql.createPool({
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_ROOT_PASSWORD,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

// Fetch data function
async function fetchData() {
  try {
    const [rows] = await connection.query("SELECT * FROM city");
    return rows;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
}

// Insert data function
async function insertCity(cityData) {
  try {
    // Use INSERT IGNORE to skip duplicates, or use ON DUPLICATE KEY UPDATE to update existing records
    const sql = `INSERT INTO city (name, presentation, myths, celebrity, religion, origin, about_reg)
                 VALUES (?, ?, ?, ?, ?, ?, ?)
                 ON DUPLICATE KEY UPDATE
                 presentation = VALUES(presentation),
                 myths = VALUES(myths),
                 celebrity = VALUES(celebrity),
                 religion = VALUES(religion),
                 about_reg = VALUES(about_reg)`;

    const values = [
      cityData.name,
      cityData.presentation,
      JSON.stringify(cityData.myths || []),
      cityData.celebrity,
      JSON.stringify(cityData.religion || []),
      cityData.origin,
      JSON.stringify(cityData.about_reg || []),
    ];

    const [result] = await connection.query(sql, values);
    return result;
  } catch (error) {
    console.error("Error inserting city:", error);
    throw error;
  }
}

module.exports = { connection, rootConnection, insertCity, fetchData };
