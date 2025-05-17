const express = require("express");
const app = express();
const mysql = require("mysql2");

app.use(express.json()); // Middleware to parse JSON

const pool = mysql.createPool({
  connectionLimit: 10,
  password: "demoapp",
  user: "demoapp",
  host: "localhost",
  database: "demoapp",
});

pool.getConnection((err, connection) => {
  if (err) {
    console.error("Error connecting to the database: ", err);
    return;
  }
  console.log("Connected to the database!");
  connection.release();
});

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post("/add_employee", (req, res) => {
  console.log("Request body: ", req.body);
  res.send("Employee data received");
  //write the sql query to insert the employee data into the database table named employee_test
  const sql = `INSERT INTO employee_test (first_name, last_name, email, password) VALUES(${req.body.first_name}, ${req.body.last_name}, ${req.body.email}, ${req.body.password})`;

});

const PORT = 4000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

