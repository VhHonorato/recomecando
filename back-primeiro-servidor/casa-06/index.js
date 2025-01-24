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

app.get("/iniciar", (req, res) => {
    cronometroId = setInterval( cronometro, 1000);
  
    res.send("Cronometro iniciado")
});
app.get("/pausar", (req, res) => {
    clearInterval(cronometroId);
    res.send("Cronometro pausado")
})



app.listen(8000);