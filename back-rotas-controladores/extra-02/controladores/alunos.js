const alunos = require("../dados/alunos");


function consultarAlunos(req, res) {
    res.status(200);
    res.json(alunos);
};

function consultarAlunosId(req, res) {
    const idAluno = alunos.find(alunoId => alunoId.id === Number(req.params.id));
    const indiceAluno = alunos.indexOf(idAluno);
    const ehNan = isNaN(req.params.id);
    if(idAluno){
        res.status(200);
        res.json(alunos[indiceAluno]);
    } else if(ehNan){
        res.status(400);
        res.json({message: "O ID inserido para busca deve ser um número válido."});

    } else {
        res.status(404);
        res.json({message: "O aluno não foi encontrado."});
    }
};

module.exports = {
    consultarAlunos,
    consultarAlunosId
};
