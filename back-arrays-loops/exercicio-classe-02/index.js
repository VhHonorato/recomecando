const numeros = [54, 22, 14, 87, 284];

for (let i = 0; i < numeros.length; i++) {
    if(numeros[i] === 10){
        console.log(i);
        break;
    } 
}
console.log("-1");