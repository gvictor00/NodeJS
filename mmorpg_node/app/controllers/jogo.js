module.exports.jogo = function(application, req, res){

	if(req.session.autorizado == true)
	{
		res.render('jogo');
	}
	else
	{
		res.send('Usuário precisa fazer login!');
	}
}

module.exports.sair = function(application, req, res){
	req.session.destroy(function(err){
		res.render("index",{validacao:{}});
	}); 
}