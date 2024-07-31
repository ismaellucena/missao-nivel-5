const banco = require('./conexao');

const LivroSchema = new banco.Schema({
    titulo: String,
    autor: String,
    ano: Number,
    preco: Number,
    editora: String
});

const Livro = banco.model('Livro', LivroSchema, 'livros');

module.exports = Livro;
