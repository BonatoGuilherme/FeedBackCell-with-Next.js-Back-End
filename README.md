# FeedBackCELL Backend 🔌

API Express para a plataforma FeedBackCELL.

## 🚀 Quick Start

### Sem Docker
```bash
pnpm install
node server.js
```

Servidor rodará em: `http://localhost:5000`

### Com Docker
```bash
# Na raiz do projeto
docker-compose up -d
```

## 📦 Dependências

- **express** - Framework web
- **cors** - Compartilhamento de recursos
- **mysql2** - Driver MySQL
- **dotenv** - Variáveis de ambiente

## 🔧 Configuração

Crie um arquivo `.env` na pasta `backend/`:

```
DB_HOST=mysql
DB_PORT=3306
DB_USER=root
DB_PASSWORD=root
DB_NAME=feedbackcell
NODE_ENV=development
```

## 🛠️ Desenvolvimento

### Adicionar nova rota

```javascript
// server.js
app.get("/api/nova-rota", (req, res) => {
  res.json({ message: "Nova rota" })
})
```

### Conectar ao MySQL

```javascript
const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

connection.connect((err) => {
  if (err) throw err;
  console.log('Conectado ao MySQL!');
});
```
