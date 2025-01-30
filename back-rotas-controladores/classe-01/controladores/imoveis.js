const imoveis = require('../dados/imoveis');

function consultaImoveis (req, res) {
    console.log(imoveis);
    res.json(imoveis);
};

function consultaImoveisId (req, res) {
    const idImovel = imoveis.find(imovelId => imovelId.id === Number(req.params.id));
    const indiceImovel = imoveis.indexOf(idImovel);
    if(idImovel){
        res.json(imoveis[indiceImovel]);
    }
};

module.exports = {consultaImoveis, consultaImoveisId};