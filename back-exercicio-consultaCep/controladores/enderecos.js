const axios = require('axios');
const {lerArquivo, escreverNoArquivo} = require('../bibliotecaFS');

async function consultarEndereco (req, res)  {
    const cep = req.params.cep;
    const arquivoLido = await lerArquivo()
    
    console.log(arquivoLido);
    const consultaCep = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
    const {data} = consultaCep;
    if(arquivoLido){
        arquivoLido.push(data);
        // console.log(arquivo);
        escreverNoArquivo(arquivoLido);
        // console.log(arquivo);
    }else{
        await escreverNoArquivo(data);
    }
    
    let arquivo = JSON.stringify(arquivoLido, ["bairro", "localidade","uf", "estado"]);
   
    
    res.json(JSON.parse(arquivo));
}

module.exports ={consultarEndereco};