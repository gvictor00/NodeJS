module.exports.jogo = function(application, req, res){

	if(req.session.autorizado != true)
	{
		res.send('Usuário precisa fazer login!');
		return;
	}

	var msg = '';
	if(req.query.msg != '')
	{
		msg = req.query.msg;
	}

	var usuario = req.session.usuario;
	var casa = req.session.casa;

	var connection = application.config.dbConnection;
	var JogoDAO = new application.app.models.JogoDAO(connection);

	JogoDAO.iniciaJogo(res, usuario, casa, msg);
}

module.exports.sair = function(application, req, res){
	req.session.destroy(function(err){
		res.render("index",{validacao:{}});
	}); 
}

module.exports.suditos = function(application, req, res){
	if(req.session.autorizado != true)
	{		
		res.send('Usuário precisa fazer login!');
		return;
	}

	res.render("aldeoes",{validacao:{}});
}

module.exports.pergaminhos = function(application, req, res){
	if(req.session.autorizado != true)
	{		
		res.send('Usuário precisa fazer login!');
		return;
	}

	/* Recuperar as ações inseridas no banco de dados */
	var connection = application.config.dbConnection;
	var JogoDAO = new application.app.models.JogoDAO(connection);
	var usuario = req.session.usuario;

	JogoDAO.getAcoes(usuario, res);
}

module.exports.ordenar_acao_sudito = function(application, req, res){
	if(req.session.autorizado != true)
	{		
		res.send('Usuário precisa fazer login!');
		return;
	}
	
	var dadosForm = req.body;

	req.assert('acao', 'Ação deve ser informada').notEmpty();
	req.assert('quantidade', 'Quantidade deve ser informada').notEmpty();

	var erros = req.validationErrors();

	if(erros){
		// Passa um parâmetro no redirect
		res.redirect('jogo?msg=A');
		return;
	}

	var connection = application.config.dbConnection;
	var JogoDAO = new application.app.models.JogoDAO(connection);

	// Cria uma chave extra no JSON dadosForm
	dadosForm.usuario = req.session.usuario;
	JogoDAO.acao(dadosForm);

	res.redirect('jogo?msg=B')
}