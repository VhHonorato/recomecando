const express = require('express');
const axios = require('axios');
const fs = require('fs/promises');
const app = express();
app.use(express.json());

app.get("/endereco/:cep", async (req, res) => {
    const cep = req.params.cep;
    let arquivo = [];
    console.log(cep);
    const consultaCep = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
    const {data} = consultaCep;
    arquivo.push(data);
    // console.log(data);
    arquivo = JSON.stringify(arquivo, ["bairro", "localidade","uf", "estado"]);
    await fs.appendFile("enderecos.json", arquivo,(err) => {
        if (err) console.log(err);
        else {
            console.log("File written successfully\n");
            console.log("The written file has the following contents:");
            console.log(fs.readFileSync("enderecos.json", "utf8"));
        }
    });
    // console.log(arquivo);
    res.json(JSON.parse(arquivo));
});


app.listen(8000);
