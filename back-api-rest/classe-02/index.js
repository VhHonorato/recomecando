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

app.listen(8000);
