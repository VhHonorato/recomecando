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

let proximoId = 1; 

function cadastrarAluno(req, res) {
    
    if(!req.body.nome){
        res.status(400);
        res.json({message: "O campo 'nome' é obrigatório."});
        return;
    };
    if(!req.body.sobrenome){
        res.status(400);
        res.json({message: "O campo 'sobrenome'é obrigatório."});
        return;
    };
    if(!req.body.curso){
        res.status(400);
        res.json({message: "O campo 'curso' é obrigatório."});
        return;
    };
    if(!req.body.idade){
        res.status(400);
        res.json({message: "O campo 'idade' é obrigatório."});
        return;
    };

    if(req.body.nome.trim().length < 1 ){
        res.status(400);
        res.json({message: "O campo nome deve ser preenchido com um nome válido."});
        return;
    };
    if(req.body.sobrenome.trim().length < 1 ){
        res.status(400);
        res.json({message: "O campo nome deve ser preenchido com um sobrenome válido."});
        return;
    };
    if(Number(req.body.idade) < 18){
        res.status(400);
        res.json({message: "O aluno deve ter idade maior que 18 anos."});
        return;

    };
    if(typeof req.body.nome !== "string"){
        res.status(400);
        res.json({message: "O nome deve ser um texto"});
        return;
    };
    if(typeof req.body.sobrenome !== "string"){
        res.status(400);
        res.json({message: "O sobrenome deve ser um texto"});
        return;
    };
    if(typeof req.body.curso !== "string"){
        res.status(400);
        res.json({message: "O curso deve ser um texto"});
        return;
    };
    const novoAluno = {
        id: proximoId,
        nome: req.body.nome,
        sobrenome: req.body.sobrenome,
        idade: req.body.idade,
        curso: req.body.curso
    };
    alunos.push(novoAluno);
    console.log(alunos);
    proximoId += 1;
    res.status(201);
    res.json({message: "Aluno adicionado."})
};

function excluirAlunoId (req, res) {
    const idAluno = alunos.find(alunoId => alunoId.id === Number(req.params.id));
    const indiceAluno = alunos.indexOf(idAluno);
    const ehNan = isNaN(req.params.id);
    

     if(alunos.length < 1){
        res.status(404);
        res.json({message: "Lista de alunos vazia."})
    }else if(ehNan){
        res.status(400);
        res.json({message:"O ID inserido para exclusão deve ser um número válido."})
    } else if(!idAluno){
        res.status(404);
        res.json({message:"Aluno a ser excluido não foi encontrado."})
    } else{
        res.status(200);
        const alunoExcluido = alunos.splice(indiceAluno,1);
        res.json(alunoExcluido);
    }
}

module.exports = {
    consultarAlunos,
    consultarAlunosId,
    cadastrarAluno,
    excluirAlunoId
};
