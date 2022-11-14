const express = require("express");
const bodyParser = require("body-parser");
const mysql = require("mysql");
const cors = require("cors");
const app = express();
const port = 5000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

//!MYSQL code
const pool = mysql.createPool({
  connectionLimit: 10,
  host: "127.0.0.1",
  user: "root",
  password: "",
  database: "SE_Project",
});

//Get all beers
/*
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
*/

app.put("/withdraw", async function (req, res) {
  pool.getConnection((err, connection) => {
    if (err) throw err;
    console.log(`Connected to Database with id ${connection.threadId}`);
    const { pin, cNum, amount } = req.body;
    console.log(pin);
    let client_id = "";
    let finalBalance = 0;
    connection.query(
      `SELECT client_id FROM client WHERE card_no = ?`,
      [cNum],
      (err, rows) => {
        //connection.release();
        if (err) throw err;
        console.log(rows);
        client_id = rows[0].client_id;
        console.log(`Client ID is ${client_id}`);
        console.log(`Client ID coming out is ${client_id}`);
        connection.query(
          "SELECT balance FROM balance_inquiries WHERE client_id = ?",
          [client_id],
          (err, rows) => {
            //connection.release();
            if (err) throw err;
            console.log(rows);
            let balance = rows[0].balance;
            console.log(`Balance is ${balance}`);
            if (balance - amount > 0) finalBalance = balance - amount;
            connection.query(
              "UPDATE balance_inquiries SET balance = ? WHERE client_id = ?",
              [finalBalance, client_id],
              (err, rows) => {
                connection.release();
                if (err) throw err;
                console.log(
                  `Client with ${client_id} has a final balance of ${finalBalance}`
                );
              }
            );
          }
        );
      }
    );
    res.send("Completed");
    console.log(req.body);
  });
});

app.put("/deposit", async function (req, res) {
  pool.getConnection((err, connection) => {
    if (err) throw err;
    console.log(`Connected to Database with id ${connection.threadId}`);
    let { pin, cNum, amount } = req.body;
    console.log(pin);
    let client_id = "";
    let finalBalance = 0;
    connection.query(
      `SELECT client_id FROM client WHERE card_no = ?`,
      [cNum],
      (err, rows) => {
        //connection.release();
        if (err) throw err;
        console.log(rows);
        client_id = rows[0].client_id;
        console.log(`Client ID is ${client_id}`);
        console.log(`Client ID coming out is ${client_id}`);
        connection.query(
          "SELECT balance FROM balance_inquiries WHERE client_id = ?",
          [client_id],
          (err, rows) => {
            //connection.release();
            if (err) throw err;
            console.log(rows);
            let balance = rows[0].balance;
            console.log(`Balance is ${balance}`);
            amount = parseInt(amount);
            if (balance < 100000) finalBalance = balance + amount;
            connection.query(
              "UPDATE balance_inquiries SET balance = ? WHERE client_id = ?",
              [finalBalance, client_id],
              (err, rows) => {
                connection.release();
                if (err) throw err;
                console.log(
                  `Client with ${client_id} has a final balance of ${finalBalance}`
                );
              }
            );
          }
        );
      }
    );
    res.send("Completed");
    console.log(req.body);
  });
});

app.get("/fetch", (req, res) => {
  pool.getConnection((error, connection) => {
    if (error) throw error;
    console.log("Connected to the database");

    //? query
    connection.query("SELECT * FROM balance_inquiries", (err, rows) => {
      connection.release();
      if (err) throw err;
      res.send(rows);
    });
  });
});

app.listen(port, () => console.log("listening on port 5000"));

app.get("/", (req, res) => {
  res.send("Nice");
});
