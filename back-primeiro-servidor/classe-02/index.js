const alunos = [
    {
        nome: "Paula",
        apelido: "Paulete",
        idade: 26,
        signo: "Áries",
        bandaFavorita: "Rolling Stones",
        email: "paulete123@gmail.com",
        serieFavorita: "Dark",
        curso: "PDZ",
        roupaDeDormir: "pijama"
    },
    {
        nome: "Felisberto",
        apelido: "Betinho",
        idade: 20,
        signo: "Sargitário",
        bandaFavorita: "Madonna",
        email: "betinho.felis@gmail.com",
        serieFavorita: "Um maluco no pedaço",
        curso: "PDZ",
        roupaDeDormir: "só cueca"
    }
];

for(let i=0; i<alunos.length; i++){

const {apelido, signo, bandaFavorita, serieFavorita, roupaDeDormir, ...alunosResumido } = alunos[i];
console.log(alunosResumido);

}
