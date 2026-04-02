const express = require("express");
const cors = require("cors");
const mysql = require("mysql2");
const app = express();

app.use(cors());
app.use(express.json());

app.get("/api/feedback", (req, res) => {
  res.json({ message: "API funcionando" })
})

app.listen(5000, () => {
  console.log("Servidor rodando em http://localhost:5000")
})

const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});