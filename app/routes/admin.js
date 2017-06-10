module.exports = function(application){
	application.get('/formulario_inclusao_noticia', function(req, res){
		res.render("admin/form_add_noticia");
	});	

	application.post('/noticias/salvar', function(req, res){
		// Salva o "body" do "request" através de um body parser
		var noticia = req.body; 
		//res.send(noticia);


		//Executa a função que está em application
		var connection = application.config.dbConnection();

		//Acessa o módulo noticiasModel (Instancia Model);
		var noticiasModel = application.app.models.noticiasModel;

		noticiasModel.salvarNoticia(noticia, connection, function(error, result){
			// Envia o JSON para o EJS e é processado na VIEW
			//res.render("noticias/noticias",{noticias : result});

			res.redirect('/noticias'); // Redireciona para exibição das noticias
		});	
	});
};