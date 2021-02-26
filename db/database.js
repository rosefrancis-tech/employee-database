// Import MySQL
const mysql = require('mysql2');

// Connect to database
var db = mysql.createConnection({
    host: "localhost",
    port: "3001",
    user: "root",
    password: "5.7.32server"
});
/*
db.connect(function(err) {
  if (err) throw err;
  console.log("Connected to MySQL!");
  db.query("CREATE DATABASE mydb", function (err, result) {
    if (err) throw err;
    console.log("Database created");
  });
});
*/
db.connect(function(err) {
    if (err) throw err;
    console.log("Connected to MySQL!");
    db.query("DROP DATABASE mydb", function (err, result) {
      if (err) throw err;
      console.log("Database deleted");
    });
});

module.exports = db;
