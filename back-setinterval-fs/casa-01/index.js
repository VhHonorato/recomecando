const jogadores = ['Guido', 'Dina', 'Léo', 'Nanda', 'Juninho'];
let indice = 0;
function jogada (jogadores){
    if(indice == jogadores.length){
        console.log("A rodada terminou!")
        clearInterval(intervalId);
    } else {
        console.log(`${jogadores[indice]}`);
        indice++
        }
};
jogada(jogadores);
const intervalId = setInterval(jogada, 2000, jogadores);



