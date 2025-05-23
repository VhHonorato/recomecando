const conexao = require('../conexao');
const securePassword = require('secure-password')
const pwd = securePassword();
const jwt = require('jsonwebtoken');
const jwt_secret = require('../jwt_secret');

const login = async (req, res) => {
    const {email, senha} = req.body;

    if(!email){
        res.status(400).json("O campo email é obrigatório");
    }
    if(!senha){
        res.status(400).json("O campo senha é obrigatório");
    }

    try {
        const query = 'select * from usuarios where email = $1';
        const usuarios = await conexao.query(query, [email]);
        if(usuarios.rowCount === 0){
            res.status(400).json("Email ou senha incorretos");
        }
        const usuario = usuarios.rows[0];
        console.log(usuario);
        const result = await pwd.verify(Buffer.from(senha), Buffer.from(usuario.senha, "hex"));

        switch(result) {
            case securePassword.INVALID_UNRECOGNIZED_HASH:
            case securePassword.INVALID:
                return res.status(400).json("Email ou senha incorretos");
            case securePassword.VALID:
                break;
            case securePassword.VALID_NEEDS_REHASH:
                try {
                    const hash =(await pwd.hash(Buffer.from(senha))).toString('hex');
                    query = 'update usuarios set senha = $1 where email = $2';
                    await conexao.query(query, [hash, email])
                } catch {
                    
                }
                break;
        }
        const token = jwt.sign({
            id: usuario.id,
            nome: usuario.nome,
            email: usuario.email
            
        },jwt_secret,{expiresIn: "2h"});

        return res.send(token);

    } catch (error) {
        return res.status(400).json(error.message);
    }
}

const listarUsuarios = async (req, res) => {
    try {
        const {rows: usuarios} = await conexao.query('select * from usuarios');
        for (const usuario of usuarios) {
            const {rows: emprestimos} = await conexao.query('select * from emprestimos where usuario_id = $1', [usuario.id]);
            usuario.emprestimos = emprestimos;
        }
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
        const {rows: usuarios} = await conexao.query('select * from usuarios where id = $1', [id]);
        for (const usuario of usuarios) {
            const {rows: emprestimos} = await conexao.query('select * from emprestimos where usuario_id = $1', [id]);
            usuario.emprestimos = emprestimos;
        }
       
        if(usuario.rowCount === 0){
            return res.status(404).json('Usuario não encontrado')
        }
        console.log(usuarios);
        return res.status(200).json(usuarios)
    } catch (error) {
        res.status(400).json(error.message);
    }
};

const cadastrarUsuario = async (req, res) =>{
    const {nome, idade, email, telefone, cpf, senha} = req.body;
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
        if(!senha){
            return res.status(400).json('O campo senha é obrigatório.')  
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
        const hash =(await pwd.hash(Buffer.from(senha))).toString('hex');
        const cadastrarLivro = await conexao.query('insert into usuarios (nome, idade, email, telefone, cpf, senha) values ($1, $2, $3, $4, $5, $6)', [nome, idade, email, telefone, cpf, hash]);
        
        if(cadastrarLivro.rowCount === 0){
            return res.status(400).json('Não foi possível cadastrar o usuário');
        }
        return res.status(200).json('Usuário cadastrado com sucesso!');

    } catch (error) {
        res.status(400).json(error.message);
    }
};

const atualizarUsuario = async (req, res) =>{
    const {nome, idade, email, telefone, cpf} = req.body;
    const{id} = req.params; 

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
        const {rows: usuarios} = await conexao.query('select * from usuarios where id = $1', [id]);
       
        if(!usuarios){
            return res.status(404).json('Usuário não encontrado.');
        };
        const {rows: usuario} = await conexao.query('select * from usuarios where id != $1', [id]);
           
        const emaillUtilizado = usuario.some(x => x.email === email);
            
            if(emaillUtilizado){
               
                return res.status(400).json('Email já cadastrado');
            };
        
        const cpfUtilizado = usuario.some(x => x.cpf === cpf)    
          
            if(cpfUtilizado){
                
                return res.status(400).json('CPF já cadastrado');
            };
            
        const atualizandoUsuario = await conexao.query('update usuarios set nome = $1, idade = $2, email = $3, telefone = $4, cpf = $5 where id = $6', [nome, idade, email, telefone, cpf, id]);
        if(atualizandoUsuario.rowCount === 0){
            return res.status(400).json('Não foi possível atualizar o usuário.')
        }
        return res.status(200).json('Usuário atualizado com sucesso!');
    } catch (error) {
        res.status(400).json(error.message);
    }
};

const excluirUsuario = async (req, res) => {
    const {id} = req.params;
    
    try {
        const usuario = await conexao.query('select * from usuarios where id = $1', [id]);
        if(usuario.rowCount === 0){
            return res.status(404).json('Usuário não encontrado.');
        };

        const excluirUsuario = await conexao.query('delete from usuarios where id = $1', [id]);
        if(excluirUsuario.rowCount === 0){
            return res.status(400).json('Não foi possível excluir o usuário.');
        };

        return res.status(200).json('Usuário excluido com sucesso!');
    } catch (error) {
        res.status(400).json(error.message);
    }
}

module.exports = {
    listarUsuarios,
    obterUsuario,
    cadastrarUsuario,
    atualizarUsuario,
    excluirUsuario,
    login
}

