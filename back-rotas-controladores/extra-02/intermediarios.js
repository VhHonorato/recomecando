
function senha (req,res,next) {
if(req.method == "GET" && req.url == "/alunos"){
    next();
}else if(req.query.senha === "12345"){
    next();
} else{
    res.status(401);
    res.json({message: "Senha incorreta."});
}
};

module.exports = {senha};