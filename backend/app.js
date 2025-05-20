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
//Allow CORS to all
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
   res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
   res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
 
 
 
   // Pass to next layer of middleware
   next();
 })

//add employee handler to the add employee path
app.post("/add_employee", (req, res) => {
  // Destructure data from the request body
  const { first_name, last_name, email, password } = req.body;
  console.log("Request body: ", req.body);

  // SQL query to insert data using placeholders
  const sql = `INSERT INTO employee_test (first_name, last_name, email, password) 
              VALUES (?, ?, ?, ?)`;

  // Execute the query with parameters
  pool.query(sql, [first_name, last_name, email, password], (err, result) => {
    if (err) {
      console.error("Error inserting employee data: ", err);
      return res.status(500).send("Error inserting employee data.");
    }

    console.log("Employee data inserted: ", result);

    // Send the response once the query is successful
    const response = {
      status: "success",
      message: "Employee data inserted successfully",
    };
    return res.status(200).json(response);
  });
});

//post request handler to login an employee
app.post("/login", (req, res) => {
  const { email, password } = req.body;

  const sql = `SELECT * FROM employee_test WHERE email = ? AND password = ?`;

  pool.query(sql, [email, password], (err, result) => {
    if (err) {
      console.error("Error fetching employee data: ", err);
      return res.status(500).send("Error fetching employee data.");
    }

    if (result.length > 0) {
      return res.status(200).json({
        status: "success",
        message: "Login successful",
        // user: result[0],
      });
    } else {
      return res.status(401).json({
        status: "fail",
        message: "Invalid email or password",
      });
    }
  });
});



 

const PORT = 4000;
//listen to the port

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
