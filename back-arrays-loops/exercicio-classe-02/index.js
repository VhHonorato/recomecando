const numeros = [54, 22, 14, 10, 284];

for (let i = 0; i < numeros.length; i++) {
    if(numeros[i] === 10){
        console.log(i);
        break;
    } else if(i === numeros.length - 1){
        console.log("-1");
        break;
    }
    
}


