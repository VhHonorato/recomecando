const {getHours, getMinutes} = require('date-fns');


function taAberto (horario){
    const hora = horario.getHours();
    const minutos = horario.getMinutes();

    if(hora < 8 ){
        return false;
    } else if(hora >= 18 && minutos > 0){
        return false;
    } else{
        return true;
    }
 
};
console.log(taAberto(new Date(2024,1,2,18,0,4)));

