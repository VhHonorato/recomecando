const aposentada = false;
const portadoraDeDoenca = false;
const totalDeRendimentos = 2855971; //emCentavos

//seu código aqui

const rendimentoLimiteIsento = 2855970;
 if(aposentada || portadoraDeDoenca){
    console.log("ISENTA")
 } else if(totalDeRendimentos <= rendimentoLimiteIsento){
    console.log("VAZA LEAO! JA TA DIFICIL SEM VOCE")
 } else {
    console.log("PEGA LEAO")
 }