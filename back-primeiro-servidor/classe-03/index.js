const express = require('express');
const app = express();

const jogadores = ["José", "Maria", "João", "Marcos", "Fernanda"];
let indice = 0;
app.get("/jogada", (req,res) => {
    console.log("jogada realizada");
   if(indice == jogadores.length){
    indice = 0;
    res.send(`É a vez de ${jogadores[indice]} jogar`);
    indice++ 
   } else {
    res.send(`É a vez de ${jogadores[indice]} jogar`);
    indice++ 
   }
    console.log(indice);
})



app.listen(8000)