function taAberto (horario){
    const hora = horario.getHours();
    const minutos = horario.getMinutes();
    const diaDaSemana = horario.getDay();

    if(hora < 8 ){
        return false;
    } else if(hora >= 18 && minutos > 0){
        return false;
    } else if(diaDaSemana === 0 ){
        return false;
    } else if (diaDaSemana === 6 && hora < 8){
        return false;
    } else if (diaDaSemana === 6 && hora >= 12 && minutos > 0){
        return false;
    }
     else{
        return true;
    } 
 
};

const momento1 = taAberto(new Date(2021,3,25,12)); // deve retornar false, pois é um domingo

const momento2 = taAberto(new Date(2021,3,26,12)); // deve retornar true, pois é uma segunda

const momento3 = taAberto(new Date(2021,3,26,7,59)); // deve retornar false, pois é muito cedo (7h59)

const momento4 = taAberto(new Date(2021,3,24,9,30)); // deve retornar true, pois é sábado de manhã (9h30)

console.log(momento1);
console.log(momento2);
console.log(momento3);
console.log(momento4);