const fs = require('fs');
const fsp = fs.promises;
const lerArquivo = async () => {
    try {
        if(fs.existsSync('enderecos.json')) {
            const lendoArquivo = await fsp.readFile('./enderecos.json',(err, data) => {
                if(err) {
                    return err;
                }
                return data;
            });
            if(lendoArquivo.length > 0){
                return JSON.parse(lendoArquivo)
            }
        }
      
        return [];
    } catch (error) {
        return error;
    }
};

const escreverNoArquivo = async (data) => {
    try {
        await fsp.writeFile('./enderecos.json', JSON.stringify(data, null,2));
        return true;
    } catch (error) {
        return false;
    }
};

module.exports = {lerArquivo, escreverNoArquivo};