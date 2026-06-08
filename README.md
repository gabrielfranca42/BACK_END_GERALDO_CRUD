# 📚 API de Livros — Backend

API REST para gerenciamento de livros com CRUD completo, desenvolvida com **Node.js**, **Express** e **MongoDB Atlas**.

## 🛠️ Tecnologias

- **Node.js** — Runtime JavaScript
- **Express** — Framework web
- **Mongoose** — ODM para MongoDB
- **MongoDB Atlas** — Banco de dados em nuvem
- **Morgan** — Logger de requisições HTTP
- **CORS** — Controle de acesso cross-origin
- **dotenv** — Gerenciamento de variáveis de ambiente

## 📁 Estrutura do Projeto

```
backend/
├── src/
│   ├── config/
│   │   └── database.js       # Conexão com MongoDB
│   ├── controllers/
│   │   └── livroController.js # Lógica de negócio (CRUD)
│   ├── models/
│   │   └── Livro.js           # Schema do Mongoose
│   ├── routes/
│   │   └── livroRoutes.js     # Rotas da API
│   └── server.js              # Ponto de entrada
├── .env                       # Variáveis de ambiente
├── package.json
└── README.md
```

## 🚀 Instalação e Execução

### Pré-requisitos

- Node.js 18+
- npm ou yarn

### Passos

1. Clone o repositório:

```bash
git clone <url-do-repositorio>
cd backend
```

2. Instale as dependências:

```bash
npm install
```

3. Configure as variáveis de ambiente no arquivo `.env`:

```env
PORT=3000
MONGODB_URI=mongodb+srv://<usuario>:<senha>@<cluster>.mongodb.net/livros_crud?retryWrites=true&w=majority
NODE_ENV=development
```

4. Inicie o servidor:

```bash
# Desenvolvimento (com hot-reload)
npm run dev

# Produção
npm start
```

O servidor estará disponível em `http://localhost:3000`.

## 📡 Rotas da API

| Método   | Rota              | Descrição              |
| -------- | ----------------- | ---------------------- |
| `GET`    | `/api/livros`     | Listar todos os livros |
| `GET`    | `/api/livros/:id` | Buscar livro por ID    |
| `POST`   | `/api/livros`     | Cadastrar novo livro   |
| `PUT`    | `/api/livros/:id` | Atualizar livro        |
| `DELETE` | `/api/livros/:id` | Excluir livro          |

### Exemplo de Body (POST/PUT)

```json
{
  "titulo": "Dom Casmurro",
  "autor": "Machado de Assis",
  "genero": "Romance",
  "anoPublicacao": 1899,
  "lido": true
}
```

### Gêneros Disponíveis

`Ficção`, `Não-Ficção`, `Romance`, `Terror`, `Fantasia`, `Ficção Científica`, `Biografia`, `História`, `Autoajuda`, `Técnico`, `Infantil`, `Outro`

## 🌐 Deploy (Render)

1. Crie um novo **Web Service** no [Render](https://render.com)
2. Conecte ao repositório Git
3. Configure:
   - **Build Command:** `npm install`
   - **Start Command:** `npm start`
   - **Environment Variables:** Adicione `MONGODB_URI` e `NODE_ENV=production`

## 📄 Licença

MIT
