const conexao = require('../conexao');

const listarUsuarios = async (req, res) => {
    try {
        const {rows: usuarios} = await conexao.query('select * from usuarios');
        if(usuarios.rowCount === 0){
            res.status(400).json('Nenhum usuario cadastrado')
        }
        res.status(200).json(usuarios);
    } catch (error) {
        res.status(400).json(error.message)
    }
};

const obterUsuario = async (req,res) =>{
    const {id} = req.params;
    
    try {
        const usuario = await conexao.query('select * from usuarios where id = $1', [id]);
        if(usuario.rowCount === 0){
            return res.status(400).json('Usuario não encontrado')
        }

        return res.status(200).json(usuario.rows[0])
    } catch (error) {
        res.status(400).json(error.message);
    }
};

const cadastrarUsuario = async (req, res) =>{
    const {nome, idade, email, telefone, cpf} = req.body;
    try {
        if(!nome){
           return res.status(400).json('O campo nome é obrigatório.')
        };
        if(!email){
           return res.status(400).json('O campo email é obrigatório.')
        };
        if(!cpf){
            return res.status(400).json('O campo cpf é obrigatório.')  
        };
        const {rows : usuarios} = await conexao.query('select * from usuarios')
        for (const usuario of usuarios) {
            if(usuario.email === email){
                return res.status(400).json('Email já cadastrado');
            };
        };
        for (const usuario of usuarios) {
            if(usuario.cpf === cpf){
                return res.status(400).json('CPF já cadastrado');
            };
        };
        const cadastrarLivro = await conexao.query('insert into usuarios (nome, idade, email, telefone, cpf) values ($1, $2, $3, $4, $5)', [nome, idade, email, telefone, cpf]);
        
        if(cadastrarLivro.rowCount === 0){
            return res.status(400).json('Não foi possível cadastrar o usuário');
        }
        return res.status(200).json('Usuário cadastrado com sucesso!');

    } catch (error) {
        res.status(400).json(error.message);
    }
}

module.exports = {
    listarUsuarios,
    obterUsuario,
    cadastrarUsuario
}

