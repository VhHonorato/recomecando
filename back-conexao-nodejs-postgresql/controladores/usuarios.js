const conexao = require('../conexao');

const listarUsuarios = async (req, res) => {
    try {
        const {rows: usuarios} = await conexao.query('select * from usuarios');
        if(usuarios.rowCount === 0){
            res.status(400).json('Nenhum usuario cadastrado')
        }
        res.status(200).json(usuarios);
    } catch (error) {
        
    }
};

module.exports = {
    listarUsuarios
}

