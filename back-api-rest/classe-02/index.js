const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());

const livros = [
    {
        id: 1,
        titulo: "A Odisséia de Jonas",
        autor: "Thomas Crawling",
        ano: 2001,
        numPaginas: 197
    },
    {
        id: 2,
        titulo: "Jonas e a sociedade escondida",
        autor: "Claire Crawling",
        ano: 2004,
        numPaginas: 158
    }
];

//a) Consulta da coleção

app.get("/livros", (req, res) => {
    res.json(livros);
});

//b) Consulta de um livro por ID

app.get("/livros/:id", (req, res) => {
    const biblioteca = {
        mesagem: ""
    }
    const ehNaN = isNaN(req.params.id);
    const livro = livros.find( livro => livro.id === Number(req.params.id));
    if(livro){
        res.json(livro);
    }else if(ehNaN){
        res.json(biblioteca.mesagem = "O valor do parametro ID da URL não é um numero válido.");
    }else {
        res.json(biblioteca.mesagem = "Não existe livro para ID informado.");
    }
   
   });

   // Adicionar um livro
let proximoID = 3;

app.post('/livros', (req, res) => {
    const livroAdd = {
        id: proximoID,
        titulo: req.body.titulo,
        autor: req.body.autor,
        ano: req.body.ano,
        numPaginas: req.body.numPaginas
    };
    livros.push(livroAdd);
    proximoID += 1;
    console.log(proximoID);
    res.json(livroAdd);
});

//d) Substituindo um livro

app.put("/livros/:id", (req, res) => {
    const livro = livros.find(livro => livro.id === Number(req.params.id));
    const biblioteca = {
        mensagem: ""
    };
    const ehNaN = isNaN(req.params.id);
    if(livro){
        livro.titulo = req.body.titulo,
        livro.autor = req.body.autor,
        livro.ano = req.body.ano,
        livro.numPaginas = req.body.numPaginas
        res.json(biblioteca.mensagem = "Livro Substituído.");
    } else if(ehNaN){
        res.json(biblioteca.mesagem = "O valor do parametro ID da URL não é um numero válido.");
    } else {
        res.json(biblioteca.mensagem = "Não existe livro a ser substituído para o ID informado");
    }
})
 // f) Remoção de um livro

 app.delete("/livros/:id", (req, res) => {
    const livro = livros.find(livro => livro.id === Number(req.params.id));
    const indice = livros.indexOf(livro);
    const biblioteca = {
        mensagem: ""
    };
    const ehNaN = isNaN(req.params.id);
    if(livro){
        livros.splice(indice,1);
        res.json(biblioteca.mensagem = "Livro Removido.")
    } else if(ehNaN){
        res.json(biblioteca.mesagem = "O valor do parametro ID da URL não é um numero válido.");
    } else {
        res.json(biblioteca.mensagem = "Não existe livro a ser substituído para o ID informado");
    }

 })
app.listen(8000);
