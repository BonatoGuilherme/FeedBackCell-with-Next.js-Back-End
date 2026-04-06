const { connection } = require("../server");

const authModel = {
  // Buscar usuário por email
  getUserByEmail: async (email) => {
    return new Promise((resolve, reject) => {
      connection.query(
        "SELECT * FROM Usuarios WHERE Email = ?",
        [email],
        (err, results) => {
          if (err) reject(err);
          else resolve(results[0]);
        },
      );
    });
  },

  // Buscar usuário por ID
  getUserById: async (id) => {
    return new Promise((resolve, reject) => {
      connection.query(
        "SELECT idusuario, Nome, Email FROM Usuarios WHERE idusuario = ?",
        [id],
        (err, results) => {
          if (err) reject(err);
          else resolve(results[0]);
        },
      );
    });
  },

  // Criar novo usuário
  createUser: async (nome, email, senha) => {
    return new Promise((resolve, reject) => {
      connection.query(
        "INSERT INTO Usuarios (Nome, Email, Senha) VALUES (?, ?, ?)",
        [nome, email, senha],
        (err, results) => {
          if (err) reject(err);
          else resolve({ idusuario: results.insertId, nome, email });
        },
      );
    });
  },

  // Verificar se email já existe
  emailExists: async (email) => {
    return new Promise((resolve, reject) => {
      connection.query(
        "SELECT idusuario FROM Usuarios WHERE Email = ?",
        [email],
        (err, results) => {
          if (err) reject(err);
          else resolve(results.length > 0);
        },
      );
    });
  },
};

module.exports = authModel;
