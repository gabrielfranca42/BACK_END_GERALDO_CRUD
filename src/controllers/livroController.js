const Livro = require('../models/Livro');

// @desc    Listar todos os livros
// @route   GET /api/livros
exports.listarLivros = async (req, res) => {
  try {
    const livros = await Livro.find().sort({ createdAt: -1 });
    return res.status(200).json({
      sucesso: true,
      quantidade: livros.length,
      dados: livros,
    });
  } catch (error) {
    console.error('Erro ao listar livros:', error.message);
    return res.status(500).json({
      sucesso: false,
      mensagem: 'Erro interno ao buscar livros',
    });
  }
};

// @desc    Buscar um livro por ID
// @route   GET /api/livros/:id
exports.buscarLivro = async (req, res) => {
  try {
    const livro = await Livro.findById(req.params.id);

    if (!livro) {
      return res.status(404).json({
        sucesso: false,
        mensagem: 'Livro não encontrado',
      });
    }

    return res.status(200).json({
      sucesso: true,
      dados: livro,
    });
  } catch (error) {
    console.error('Erro ao buscar livro:', error.message);
    return res.status(500).json({
      sucesso: false,
      mensagem: 'Erro interno ao buscar livro',
    });
  }
};

// @desc    Cadastrar um novo livro
// @route   POST /api/livros
exports.criarLivro = async (req, res) => {
  try {
    const { titulo, autor, genero, anoPublicacao, lido } = req.body;

    const livro = await Livro.create({
      titulo,
      autor,
      genero,
      anoPublicacao,
      lido,
    });

    return res.status(201).json({
      sucesso: true,
      mensagem: 'Livro cadastrado com sucesso',
      dados: livro,
    });
  } catch (error) {
    // Erro de validação do Mongoose
    if (error.name === 'ValidationError') {
      const mensagens = Object.values(error.errors).map((e) => e.message);
      return res.status(400).json({
        sucesso: false,
        mensagem: 'Erro de validação',
        erros: mensagens,
      });
    }

    console.error('Erro ao criar livro:', error.message);
    return res.status(500).json({
      sucesso: false,
      mensagem: 'Erro interno ao cadastrar livro',
    });
  }
};

// @desc    Atualizar um livro
// @route   PUT /api/livros/:id
exports.atualizarLivro = async (req, res) => {
  try {
    const { titulo, autor, genero, anoPublicacao, lido } = req.body;

    const livro = await Livro.findByIdAndUpdate(
      req.params.id,
      { titulo, autor, genero, anoPublicacao, lido },
      { new: true, runValidators: true }
    );

    if (!livro) {
      return res.status(404).json({
        sucesso: false,
        mensagem: 'Livro não encontrado',
      });
    }

    return res.status(200).json({
      sucesso: true,
      mensagem: 'Livro atualizado com sucesso',
      dados: livro,
    });
  } catch (error) {
    if (error.name === 'ValidationError') {
      const mensagens = Object.values(error.errors).map((e) => e.message);
      return res.status(400).json({
        sucesso: false,
        mensagem: 'Erro de validação',
        erros: mensagens,
      });
    }

    console.error('Erro ao atualizar livro:', error.message);
    return res.status(500).json({
      sucesso: false,
      mensagem: 'Erro interno ao atualizar livro',
    });
  }
};

// @desc    Excluir um livro
// @route   DELETE /api/livros/:id
exports.excluirLivro = async (req, res) => {
  try {
    const livro = await Livro.findByIdAndDelete(req.params.id);

    if (!livro) {
      return res.status(404).json({
        sucesso: false,
        mensagem: 'Livro não encontrado',
      });
    }

    return res.status(200).json({
      sucesso: true,
      mensagem: 'Livro excluído com sucesso',
    });
  } catch (error) {
    console.error('Erro ao excluir livro:', error.message);
    return res.status(500).json({
      sucesso: false,
      mensagem: 'Erro interno ao excluir livro',
    });
  }
};
