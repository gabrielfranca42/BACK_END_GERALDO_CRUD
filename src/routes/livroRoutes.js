const express = require('express');
const router = express.Router();
const {
  listarLivros,
  buscarLivro,
  criarLivro,
  atualizarLivro,
  excluirLivro,
} = require('../controllers/livroController');

// GET    /api/livros       → Listar todos os livros
// GET    /api/livros/:id   → Buscar livro por ID
// POST   /api/livros       → Cadastrar novo livro
// PUT    /api/livros/:id   → Atualizar livro
// DELETE /api/livros/:id   → Excluir livro

router.route('/').get(listarLivros).post(criarLivro);

router.route('/:id').get(buscarLivro).put(atualizarLivro).delete(excluirLivro);

module.exports = router;
