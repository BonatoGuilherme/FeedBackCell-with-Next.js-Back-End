// DEPENDÊNCIAS
const express = require("express");
const cors = require("cors");
const session = require('express-session');
const bodyParser = require('body-parser');
const path = require('path');
const mysql = require("mysql2");
require('dotenv').config();

// INICIALIZAÇÃO DO EXPRESS
const app = express();

// MIDDLEWARES
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({
    secret: 'feedbackcell_secret',
    resave: false,
    saveUninitialized: false,
}));

// ROTAS
app.get("/api/feedback", (req, res) => {
  res.json({ message: "API funcionando" })
});

// Rota de teste de conexão com MySQL
app.get("/api/test-db", (req, res) => {
  connection.query("SELECT 1", (err, results) => {
    if (err) {
      return res.status(500).json({ 
        error: "Erro ao conectar ao banco", 
        message: err.message 
      });
    }
    res.json({ 
      success: true, 
      message: "Conectado ao MySQL com sucesso!" 
    });
  });
});

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

// Caso de erro de conexão
connection.on("error", (err) => {
  console.error(" Erro na conexão MySQL:", err.message);
  if (err.code === "PROTOCOL_CONNECTION_LOST") {
    console.log("Conexão perdida, reconectando...");
  }
});

// INICIALIZAÇÃO DO SERVIDOR
app.listen(5000, () => {
  console.log("🚀 Servidor rodando em http://localhost:5000");
  console.log("📍 Teste de conexão: http://localhost:5000/api/test-db");
});

module.exports = { app, connection };