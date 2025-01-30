const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(express.json());
const imoveis = require('./dados/imoveis');


app.get("/imoveis", (req, res) => {
    console.log(imoveis);
    res.json(imoveis)
});

app.get("/imoveis/:id", (req, res) => {
    const idImovel = imoveis.find(imovelId => imovelId.id === Number(req.params.id));
    const indiceImovel = imoveis.indexOf(idImovel);
    if(idImovel){
        res.json(imoveis[indiceImovel]);
    }

})

app.listen(8000);