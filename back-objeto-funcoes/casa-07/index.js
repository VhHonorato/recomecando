const prova = {
    aluno: "João",
    materia: "Português",
    valor: 10,
    questoes: [
        {
            resposta: "b",
            correta: "b"
        },
        {
            resposta: "c",
            correta: "c"
        },
        {
            resposta: "e",
            correta: "b"
        },
        {
            resposta: "e",
            correta: "b"
        },
        {
            resposta: "a",
            correta: "c"
        }
    ]
};

function corrigirProva(prova) {
    let notaTotal = 0;
    let questao = 0;
    for(let nota of prova.questoes) {
        if(nota.resposta == nota.correta) {
           notaTotal += 2; 
           questao += 1;
        }
    }
    console.log(`O aluno(a) ${prova.aluno} acertou ${questao} questões e obteve nota ${notaTotal}.`)
}
corrigirProva(prova);