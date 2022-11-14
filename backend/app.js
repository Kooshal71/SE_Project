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

//! Function to withdraw money from the account
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
                res.status(200).json({ finalBalance: finalBalance });
                console.log(
                  `Client with ${client_id} has a final balance of ${finalBalance}`
                );
              }
            );
          }
        );
      }
    );
    console.log(req.body);
  });
});

//! Function to deposit money into the account
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
                res.status(200).json({ finalBalance: finalBalance });
                console.log(
                  `Client with ${client_id} has a final balance of ${finalBalance}`
                );
              }
            );
          }
        );
      }
    );
    console.log(req.body);
  });
});

//! Function to update PIN of the account
app.put("/changePIN", async function (req, res) {
  pool.getConnection((err, connection) => {
    if (err) throw err;
    console.log(`Connected to Database with id ${connection.threadId}`);
    let { oldPIN, newPIN, confirmPIN } = req.body;
    console.log(confirmPIN);
    console.log(oldPIN);
    connection.query(
      "UPDATE card SET pin = ? WHERE pin = ?",
      [newPIN, oldPIN],
      (err, rows) => {
        connection.release();
        if (err) throw err;
        console.log(`PIN Has changed from ${oldPIN} to ${newPIN}`);
      }
    );
    res.send("Completed");
    console.log(req.body);
  });
});

//! Function to set PIN of a new account
app.put("/setPIN", async function (req, res) {
  pool.getConnection((err, connection) => {
    if (err) throw err;
    console.log(`Connected to Database with id ${connection.threadId}`);
    let { cNum, newPIN, confirmPIN } = req.body;
    console.log(confirmPIN);
    console.log(cNum);
    connection.query(
      "UPDATE card SET pin = ? WHERE card_no = ?",
      [newPIN, cNum],
      (err, rows) => {
        connection.release();
        if (err) throw err;
        console.log(`PIN Has changed to ${newPIN}`);
      }
    );
    res.send("Completed");
    console.log(req.body);
  });
});

//! Function to enter the credentials for Balance
app.put("/balance", async function (req, res) {
  let Balance = 0;
  let client_id = "";
  pool.getConnection((err, connection) => {
    if (err) throw err;
    console.log(`Connected to Database with id ${connection.threadId}`);
    let { cNum, PIN } = req.body;
    console.log(PIN);
    console.log(cNum);
    connection.query(
      "SELECT client_id FROM client WHERE card_no = ?",
      [cNum],
      (err, rows) => {
        if (err) throw err;
        client_id = rows[0].client_id;
        connection.query(
          "SELECT balance FROM balance_inquiries WHERE client_id = ?",
          [client_id],
          (err, rows) => {
            if (err) throw err;
            connection.release();
            Balance = rows[0].balance;
            console.log(Balance);
            res.status(200).json({ balance: Balance });
          }
        );
      }
    );
    console.log(req.body);
  });
});

//! Function to fetch all the balances of all the accounts(TESTING)
app.get("/fetch", (req, res) => {
  pool.getConnection((error, connection) => {
    if (error) throw error;
    console.log("Connected to the database");
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
