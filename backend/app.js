const express = require("express");
const bodyParser = require("body-parser");
const mysql = require("mysql");

const app = express();
const port = 5000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//!MYSQL code

app.listen(port, () => console.log("listening on port 5000"));

app.get("/", (req, res) => {
  res.send("Nice");
});
