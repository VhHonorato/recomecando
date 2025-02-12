const {instanciaAxios} = require('../servicos/abstract');

async function consultarDominio(req, res){
    const {dominio} = req.params;
    try {
    const consultarEmpresa = await instanciaAxios.get(dominio);
    console.log(consultarEmpresa.data);
    return res.json(consultarEmpresa.data);
    
   } catch (error) {
        const {data:{erros}, status} = error.response;
        console.log(data);
        console.log(status);
        return res.status(status).json(erros);
   }
    
    
};







module.exports ={consultarDominio};