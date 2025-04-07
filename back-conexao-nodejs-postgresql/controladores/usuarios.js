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
}

module.exports = {
    listarUsuarios,
    obterUsuario
}

