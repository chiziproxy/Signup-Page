const express = require("express");
const cors = require("cors");
const mysql = require("mysql");
const app = express();
const dbName = process.env.DB_NAME;
require("dotenv").config();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  host: process.env.HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
  database: process.env.DB_NAME,
});

app.post(`/signup`, (req, res) => {
  const sql =
    "INSERT INTO login (`name`, `email`, `password`) VALUES (?, ?, ?)";
  const values = [req.body.name, req.body.email, req.body.password];

  db.query(sql, values, (err, data) => {
    if (err) {
      console.error("Error inserting data:", err);
      return res.status(500).json(err);
    }

    console.log("Data inserted:", data);
    return res.json(data);
  });
});

app.listen(8081, () => {
  console.log("Listening...");
});

// chat gbt one
// const express = require("express");
// const cors = require("cors");
// const mysql = require("mysql");
// const app = express();
// app.use(cors());
// app.use(express.json());

// const db = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "",
//   port: "3307",
//   database: "signup",
// });

// app.post("/signup", (req, res) => {
//   const sql =
//     "INSERT INTO login (`name`, `email`, `password`) VALUES (?, ?, ?)";
//   const values = [req.body.name, req.body.email, req.body.password];

//   db.query(sql, values, (err, data) => {
//     if (err) return res.json(err);
//     return res.json(data);
//   });
// });

// app.listen(8081, () => {
//   console.log("Listening...");
// });
//original
// const express = require("express");
// const cors = require("cors");
// const mysql = require("mysql");
// const app = express();
// app.use(cors());
// app.use(express.json());

// const db = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "",
//   port: "3307",
//   database: "signup",
// });

// app.post("/signup", (req, res) => {
//   const sql = "INSERT INTO login (`name`, `email`, `password`) Values (?)";
//   const values = [req.body.name, req.body.email, req.body.password];

//   db.query(sql, [values], (err, data) => {
//     if (err) return res.json(err);
//     return res.json(data);
//   });
// });
// app.listen(8081, () => {
//   console.log("Listening...");
// });
