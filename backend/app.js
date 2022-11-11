const express = require("express");
const bodyParser = require("body-parser");
const mysql = require("mysql");

const app = express();
const port = 5000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//!MYSQL code
const pool = mysql.createPool({
  connectionLimit: 10,
  host: "127.0.0.1",
  user: "root",
  password: "",
  database: "SE_test",
});

//Get all beers
app.get("/beers", (req, res) => {
  pool.getConnection((error, connection) => {
    if (error) throw error;
    console.log("Connected to the database");

    //? query
    connection.query("SELECT * FROM beers", (err, rows) => {
      connection.release();
      if (err) throw err;
      res.send(rows);
    });
  });
});

//Get a beer by id
app.get("/beers/:id", (req, res) => {
  pool.getConnection((error, connection) => {
    if (error) throw error;
    console.log("Connected to the database");

    //? query
    connection.query(
      "SELECT * FROM beers WHERE id = ?",
      [req.params.id],
      (err, rows) => {
        connection.release();
        if (err) throw err;
        res.send(rows);
      }
    );
  });
});

//Delete a record
app.delete("/beers/:id", (req, res) => {
  pool.getConnection((error, connection) => {
    if (error) throw error;
    console.log("Connected to the database");

    //? query
    connection.query(
      "DELETE FROM beers WHERE id = ?",
      [req.params.id],
      (err, rows) => {
        connection.release();
        if (err) throw err;
        res.send(`Beer with id ${req.params.id} has been deleted`);
      }
    );
  });
});

//Add a record
app.post("/beers", (req, res) => {
  pool.getConnection((error, connection) => {
    if (error) throw error;
    console.log("Connected to the database");

    //? query
    const params = req.body;
    connection.query(`INSERT INTO beers SET ?`, [params], (err, rows) => {
      connection.release();
      if (err) throw err;
      res.send(`Beer with name ${params.name} has been added`);
    });
    console.log(req.body);
  });
});

//Update a record
app.put("/beers", (req, res) => {
  pool.getConnection((err, connection) => {
    if (err) throw err;
    console.log(`Connected to Database with id ${connection.threadId}`);
    const { id, name, tagline, description, image } = req.body;
    connection.query(
      `UPDATE beers SET name = ?, tagline = ?, description = ?, image = ? WHERE id = ?`,
      [name, tagline, description, image, id],
      (err, rows) => {
        connection.release();
        if (err) throw err;
        res.send(`Beer with id ${id} has the name updated to ${name}`);
      }
    );
    console.log(req.body);
  });
});
app.listen(port, () => console.log("listening on port 5000"));

app.get("/", (req, res) => {
  res.send("Nice");
});
