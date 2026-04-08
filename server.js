// DEPENDÊNCIAS
const express = require("express");
const mysql = require("mysql2");
const authRoutes = require("./routes/authRoutes");
const configMiddlewares = require("./middlewares/config");
require("dotenv").config();

// INICIALIZAÇÃO DO EXPRESS
const app = express();

// MIDDLEWARES
configMiddlewares(app);

// ROTAS
app.use("/api/auth", authRoutes);

// CONEXÃO COM BANCO DE DADOS
const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

// Testa conexão ao iniciar
connection.connect((err) => {
  if (err) {
    console.error("Erro ao conectar ao MySQL:", err.message);
  } else {
    console.log("Conectado ao MySQL com sucesso!");
  }
});

// INICIALIZAÇÃO DO SERVIDOR
app.listen(5000, () => {
  console.log("🚀 Servidor rodando em http://localhost:5000");
});

module.exports = { app, connection };
