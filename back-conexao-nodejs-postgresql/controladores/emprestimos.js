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
           return res.status(400).json('O campo livro_id é obrigatório.')
        };
        const livro = await conexao.query('select * from livros where id = $1', [livro_id]);
        
                if(livro.rowCount === 0){
                    return res.status(404).json("Não existe livro associado a esse ID.");
                }
        const usuario = await conexao.query('select * from usuarios where id = $1', [usuario_id]);
                if(usuario.rowCount === 0){
                    return res.status(404).json('Não existe usuário associado a esse ID.')
                }        

        if(!status){
            const cadastrarEmprestimo = await conexao.query('insert into emprestimos (usuario_id, livro_id) values ($1, $2)', [usuario_id, livro_id]);
            if(cadastrarEmprestimo.rowCount === 0){
                return res.status(400).json('Não foi possível cadastrar o emprestimo');
            }
            return res.status(200).json('Emprestimo cadastrado com sucesso!');
        };
        
        if(status == "pendente"){
            console.log(status);
            const cadastrarEmprestimo = await conexao.query('insert into emprestimos (usuario_id, livro_id, status) values ($1, $2, $3)', [usuario_id, livro_id, status]);
        if(cadastrarEmprestimo.rowCount === 0){
            return res.status(400).json('Não foi possível cadastrar o emprestimo.')
        }
        return res.status(200).json('Emprestimo cadastrado com sucesso!');
        }else if(status == "devolvido"){
            const cadastrarEmprestimo = await conexao.query('insert into emprestimos (usuario_id, livro_id, status) values ($1, $2, $3)', [usuario_id, livro_id, status]);
        if(cadastrarEmprestimo.rowCount === 0){
            return res.status(400).json('Não foi possível cadastrar o emprestimo.')
        }
        return res.status(200).json('Emprestimo cadastrado com sucesso!');
        }else{
            return res.status(400).json("Os status validos são 'pendente' ou 'devolvido'.");
        }
        
        

    } catch (error) {
        res.status(400).json(error.message);
    }
};
const atualizaremprestimo = async (req, res) =>{
    const {status} = req.body;
    const{id} = req.params; 

    try {
        if(!status){
            return res.status(400).json('O campo status é obrigatório.')
         };
       
        const {rows: emprestimos} = await conexao.query('select * from emprestimos where id = $1', [id]);
       
        if(!emprestimos){
            return res.status(404).json('Emprestimo não encontrado.');
        };

        if(status == "pendente"){
            console.log(status);
            const atualizandoemprestimo = await conexao.query('update emprestimos set status = $1 where id = $2', [status, id]);
        if(atualizandoemprestimo.rowCount === 0){
            return res.status(400).json('Não foi possível atualizar o emprestimo.')
        }
        return res.status(200).json('Emprestimo atualizado com sucesso!');
        }else if(status == "devolvido"){
            const atualizandoemprestimo = await conexao.query('update emprestimos set status = $1 where id = $2', [status, id]);
            if(atualizandoemprestimo.rowCount === 0){
            return res.status(400).json('Não foi possível atualizar o emprestimo.')
            }
            return res.status(200).json('Emprestimo atualizado com sucesso!');
        }else{
            return res.status(400).json("Os status validos são 'pendente' ou 'devolvido'.");
        }
                  
        

    } catch (error) {
        res.status(400).json(error.message);
    }
};
const excluiremprestimo = async (req, res) => {
    const {id} = req.params;
    
    try {
        const emprestimo = await conexao.query('select * from emprestimos where id = $1', [id]);
        if(emprestimo.rowCount === 0){
            return res.status(404).json('Emprestimo não encontrado.');
        };

        const excluirEmprestimo = await conexao.query('delete from emprestimos where id = $1', [id]);
        if(excluirEmprestimo.rowCount === 0){
            return res.status(400).json('Não foi possível excluir o emprestimo.');
        };

        return res.status(200).json('Emprestimo excluido com sucesso!');
    } catch (error) {
        res.status(400).json(error.message);
    }
}

module.exports = {
    listarEmprestimos,
    obterEmprestimo,
    cadastrarEmprestimo,
    atualizaremprestimo,
    excluiremprestimo
}