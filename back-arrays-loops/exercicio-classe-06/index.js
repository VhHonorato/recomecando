const nomes = ["Ana", "Joana", "Carlos", "amanda", "Alice", "ananda", "flavia"];
let nomesComA = [];
for(let nome of nomes){
    if(nome[0] === "a"){
        nomesComA.push(nome);
    } else if(nome[0] === "A"){
        nomesComA.push(nome);
    }
}
console.log(nomesComA);