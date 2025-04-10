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
const cadastrarEmprestimo = async (req, res) =>{
    const {usuario_id, livro_id, status} = req.body;
    try {
        if(!usuario_id){
           return res.status(400).json('O campo usuário_id é obrigatório.')
        };
        if(!livro_id){
           return res.status(400).json('O campo livro é obrigatório.')
        };
      
        if(!status){
            const cadastrarEmprestimo = await conexao.query('insert into emprestimos (usuario_id, livro_id) values ($1, $2)', [usuario_id, livro_id]);
            if(cadastrarEmprestimo.rowCount === 0){
                return res.status(400).json('Não foi possível cadastrar o emprestimo');
            }
            return res.status(200).json('Emprestimo cadastrado com sucesso!');
        };
        console.log(status);
        if(status == "pendente"|| "devolvido"){
            const cadastrarEmprestimo = await conexao.query('insert into emprestimos (usuario_id, livro_id, status) values ($1, $2, $3)', [usuario_id, livro_id, status]);
        
            if(cadastrarEmprestimo.rowCount === 0){
            return res.status(400).json('Não foi possível cadastrar o emprestimo');
            }
            return res.status(200).json('Emprestimo cadastrado com sucesso!');
        }    
        return res.status(400).json("Os status validos são 'pendente' ou 'devolvido'.");
        

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
    obterEmprestimo,
    cadastrarEmprestimo
}