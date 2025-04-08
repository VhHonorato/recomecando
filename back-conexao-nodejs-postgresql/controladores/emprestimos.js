const conexao = require('../conexao');

const listarEmprestimos = async (req, res) => {
    try {
        const {rows: emprestimos} = await conexao.query('select * from emprestimos');
        if(emprestimos.rowCount === 0){
            res.status(400).json('Nenhum emprestimo cadastrado')
        }
        res.status(200).json(emprestimos);
    } catch (error) {
        res.status(400).json(error.message)
    }
};
const obterEmprestimo = async (req,res) =>{
    const {id} = req.params;
    
    try {
        const emprestimo = await conexao.query('select * from emprestimos where id = $1', [id]);
        if(emprestimo.rowCount === 0){
            return res.status(404).json('emprestimo não encontrado')
        }

        return res.status(200).json(emprestimo.rows[0])
    } catch (error) {
        res.status(400).json(error.message);
    }
};
const cadastraremprestimo = async (req, res) =>{
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
        const {rows : emprestimos} = await conexao.query('select * from emprestimos')
        for (const emprestimo of emprestimos) {
            if(emprestimo.email === email){
                return res.status(400).json('Email já cadastrado');
            };
        };
        for (const emprestimo of emprestimos) {
            if(emprestimo.cpf === cpf){
                return res.status(400).json('CPF já cadastrado');
            };
        };
        const cadastrarLivro = await conexao.query('insert into emprestimos (nome, idade, email, telefone, cpf) values ($1, $2, $3, $4, $5)', [nome, idade, email, telefone, cpf]);
        
        if(cadastrarLivro.rowCount === 0){
            return res.status(400).json('Não foi possível cadastrar o usuário');
        }
        return res.status(200).json('Usuário cadastrado com sucesso!');

    } catch (error) {
        res.status(400).json(error.message);
    }
};
const atualizaremprestimo = async (req, res) =>{
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
        const {rows: emprestimos} = await conexao.query('select * from emprestimos where id = $1', [id]);
       
        if(!emprestimos){
            return res.status(404).json('Usuário não encontrado.');
        };
        const {rows: emprestimo} = await conexao.query('select * from emprestimos where id != $1', [id]);
           
        const emaillUtilizado = emprestimo.some(x => x.email === email);
            
            if(emaillUtilizado){
               
                return res.status(400).json('Email já cadastrado');
            };
        
        const cpfUtilizado = emprestimo.some(x => x.cpf === cpf)    
          
            if(cpfUtilizado){
                
                return res.status(400).json('CPF já cadastrado');
            };
            
        const atualizandoemprestimo = await conexao.query('update emprestimos set nome = $1, idade = $2, email = $3, telefone = $4, cpf = $5 where id = $6', [nome, idade, email, telefone, cpf, id]);
        if(atualizandoemprestimo.rowCount === 0){
            return res.status(400).json('Não foi possível atualizar o usuário.')
        }
        return res.status(200).json('Usuário atualizado com sucesso!');
    } catch (error) {
        res.status(400).json(error.message);
    }
};
const excluiremprestimo = async (req, res) => {
    const {id} = req.params;
    
    try {
        const emprestimo = await conexao.query('select * from emprestimos where id = $1', [id]);
        if(emprestimo.rowCount === 0){
            return res.status(404).json('Usuário não encontrado.');
        };

        const excluirEmprestimo = await conexao.query('delete from emprestimos where id = $1', [id]);
        if(excluirEmprestimo.rowCount === 0){
            return res.status(400).json('Não foi possível excluir o usuário.');
        };

        return res.status(200).json('Usuário excluido com sucesso!');
    } catch (error) {
        res.status(400).json(error.message);
    }
}

module.exports = {
    listarEmprestimos,
    obterEmprestimo
}