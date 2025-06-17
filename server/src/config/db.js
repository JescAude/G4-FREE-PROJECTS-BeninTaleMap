const mysql = require("mysql2");
require("dotenv").config();


//connection to the database
const connection = mysql.createConnection({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_ROOT_PASSWORD,
    database: process.env.MYSQL_DATABASE,
});

connection.connect((err) => {
    if (err) {
      console.log("Error connecting to the database...", err);
    }
    console.log("Connected Succesfully to the database")
});

module.exports = connection;
