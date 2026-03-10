// Import mysql package
const mysql = require("mysql2");

// Create database connection
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Kamat999",   // put your mysql password
  database: "crm"
});

// Connect to database
db.connect((err) => {
  if (err) {
    console.log("Database connection failed");
  } else {
    console.log("Connected to MySQL database");
  }
});

// Export database
module.exports = db;