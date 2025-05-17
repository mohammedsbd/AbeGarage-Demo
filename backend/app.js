// import express module
const express = require('express');
// invoke the expresss application
const app = express();
//import mysql module mysql2
const mysql = require('mysql2');
// define the connection parameter for the database

const dbConfig = {
  connectionLimit: 10,
  password: "demoapp",
  user: "demoapp",
  host: "localhost",
  database: "demoapp",
};

const pool = mysql.createPool(dbConfig);


// create connection
pool.getConnection((err, connection) => {
  if (err) {
    console.error("Error connecting to the database: ", err);
    return;
  }
  console.log("Connected to the database!");
  connection.release(); // Release it back to the pool
});
// create a get request to the root path
app.get('/', (req, res) => {
    res.send('Hello World!');
});
//create the port
const PORT =4000;
//setup the listener
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})
