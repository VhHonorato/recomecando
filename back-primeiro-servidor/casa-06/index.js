const express = require('express');
const app = express();

//Primeira rota - recurso raiz
let segundos = 0;
let minutos = 0;
// function cronometro(minutos, segundos) 
 function cronometro () {
    segundos++;  
        if(segundos == 60){
            minutos+=1;
            segundos = 0;
        } 
 }
 let cronometroId = 0;
  
    console.log(`Tempo atual do cronômetro: ${minutos} minutos e ${segundos} segundos`)

app.get("/", (req, res) => {
    res.send(`Tempo atual do cronômetro: ${minutos} minutos e ${segundos} segundos`)
});

app.get("/:controle", (req, res) => {
    if(req.params.controle == "iniciar"){
        cronometroId = setInterval( cronometro, 1000);  
        res.send("Cronometro iniciado");
    } else if(req.params.controle == "continuar"){
        cronometroId = setInterval( cronometro, 1000);
        res.send("Cronometro continuado");
    } else if(req.params.controle == "pausar"){
        clearInterval(cronometroId);
        res.send("Cronometro pausado")
    } else if(req.params.controle == "zerar"){
    
        minutos = 0;
        segundos = 0;
        res.send("Cronometro zerado!")
    }
});
// app.get("/pausar", (req, res) => {
//     clearInterval(cronometroId);
//     res.send("Cronometro pausado")
// });





app.listen(8000);