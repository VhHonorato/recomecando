let identificador = "123";
let nome = "José silva costa";
let email = "      jose@email.com  ";
let tags = ['financeiro', 'administrativo', 'geral'];

function formatIdentificador (identificador) {
    console.log(identificador.padStart(6,"0"));
}

formatIdentificador(identificador);

 function formatNome (nome) {
      let arrayNome = nome.split(" ");
      let nomeFormat = "";
      for(let i = 0; i < arrayNome.length; i++) {
        let nomes = arrayNome[i];
        let nomesArray = nomes.split("")
        let letraM = nomesArray[0].toUpperCase() 
        nomesArray.splice(0,1,`${letraM}`);
        nomeFormat += `${nomesArray.join("")} `;      
      }
      console.log(nomeFormat);
}

formatNome(nome);