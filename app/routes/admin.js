module.exports = function(application){
	application.get('/formulario_inclusao_noticia', function(req, res){
		res.render("admin/form_add_noticia", {validacao:{},noticia:{}});
	});	

	application.post('/noticias/salvar', function(req, res){
		// Salva o "body" do "request" através de um body parser
		var noticia = req.body; 

		//assert.notEmpty() - Não pode ser Vazio
		req.assert('titulo','Titulo é obrigatório').notEmpty();
		req.assert('resumo', 'Resumo é obrigatório').notEmpty();
		req.assert('resumo', 'Resumo deve conter entre 10 e 100 caracteres').len(10, 100);
		req.assert('autor','Autor é obrigatório').notEmpty();
		req.assert('data_noticia','Data é obrigatório').notEmpty().isDate({format:'YYYY-MM-DD'});
		req.assert('noticia','Noticia é obrigatório').notEmpty();

		var erros = req.validationErrors();
		console.log(erros);
		if(erros){
			res.render("admin/form_add_noticia", {validacao : erros, noticia : noticia});
			return;
		}

		//Executa a função que está em application
		var connection = application.config.dbConnection();

		//Acessa o módulo noticiasModel (Instancia Model);
		var noticiasModel = new application.app.models.NoticiasDAO(connection);

		noticiasModel.salvarNoticia(noticia, function(error, result){
			// Envia o JSON para o EJS e é processado na VIEW
			//res.render("noticias/noticias",{noticias : result});

			res.redirect('/noticias'); // Redireciona para exibição das noticias
		});	
	});
};