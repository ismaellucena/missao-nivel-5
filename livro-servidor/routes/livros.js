const express = require('express');
const router = express.Router();
const { obterLivros, incluir, excluir } = require('../modelo/livro-dao');

router.get('/', async (req, res) => {
    const livros = await obterLivros();
    res.json(livros);
});

router.post('/', async (req, res) => {
    try {
        const livro = req.body;
        await incluir(livro);
        res.status(201).json({ mensagem: 'Livro incluído com sucesso' });
    } catch (error) {
        res.status(500).json({ mensagem: 'Erro ao incluir livro', error });
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const codigo = req.params.id;
        await excluir(codigo);
        res.status(200).json({ mensagem: 'Livro excluído com sucesso' });
    } catch (error) {
        res.status(500).json({ mensagem: 'Erro ao excluir livro', error });
    }
});

module.exports = router;
