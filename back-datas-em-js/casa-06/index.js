const {add} = require('date-fns');
const incioPromo = new Date();

function promocaoValendo(dataPromo, dataCliente){
    const promocaoValida = add(dataPromo,{
        hours: 24
    });
    if(dataCliente > promocaoValida){
        return false;
    } else {
        return true;
    };
};

const cliente1 = new Date(2025, 1,7,16);

console.log(promocaoValendo(incioPromo,cliente1));