const conexao = require('../conexao')

const listarAutores = async (req, res) => {
    try {
        
        const {rows: autores} = await conexao.query('select * from autores');
        for (const autor of autores) {
            const {rows: livros} = await conexao.query('select * from livros where autor_id = $1', [autor.id]);
            autor.livros = livros;
        }
        res.status(200).json(autores);
    } catch (error) {
        res.status(400).json(error.message);

    };
};
const obterAutor = async (req, res) => {
    const {id} = req.params;
    try {
        const autor = await conexao.query('select * from autores where id = $1', [id]);
        
        if(autor.rowCount === 0){
            return res.status(404).json('Autor não encontrado');
        }
        
        res.status(200).json(autor.rows[0]);

    } catch (error) {
        res.status(400).json(error.message);
    };
    
    
};

const cadastrarAutor = async (req, res) => {
    const {nome, idade} = req.body;
    if(!nome){
        return res.status(400).json("Ocampo nome é obrigatório")
    }
    try {
      const autor = await conexao.query('insert into autores (nome, idade) values ($1, $2)', [nome, idade]);

      if(autor.rowCount === 0){
        

      } 
      return res.status(200).json("Autor casdastrado com sucesso.") 
    } catch (error) {
        res.status(400).json(error.message);
    }
};

const atualizarAutor = async (req, res) => {
    const {id} = req.params;
    const {nome, idade} = req.body;
    try {
        const autor = await conexao.query('select * from autores where id = $1', [id]);
        
        if(autor.rowCount === 0){
            return res.status(404).json('Autor não encontrado');
        }
        if(!nome){
            return res.status(400).json("Ocampo nome é obrigatório")
        };
        const atualizarAutor = await conexao.query('update autores set nome = $1, idade = $2 where id = $3', [nome, idade, id]);

        if(atualizarAutor.rowCount === 0){
            return res.status(404).json('Autor não encontrado');
        };
       
        return res.status(200).json("Autor atualizado com sucesso.") 
    } catch (error) {
        res.status(400).json(error.message);
    };
};

const excluirAutor = async (req, res) => {
    const {id} = req.params;
    try {
        const autor = await conexao.query('select * from autores where id = $1', [id]);
        
        if(autor.rowCount === 0){
            return res.status(404).json('Autor não encontrado');
        };
        const excluirAutorAutor = await conexao.query('delete from autores where id = $1', [id]);

        if(excluirAutorAutor.rowCount === 0){
            return res.status(404).json('Não foi possível excluir o autor.');
        };
       
        return res.status(200).json("Autor excluído com sucesso.") 
        
    } catch (error) {
        res.status(400).json(error.message); 
    }
};


module.exports = {
    listarAutores,
    obterAutor,
    cadastrarAutor,
    atualizarAutor,
    excluirAutor
}