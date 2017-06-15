module.exports.noticias = function(application, req, res){
	//Executa a função que está em application
	var connection = application.config.dbConnection();

	//Acessa o módulo noticiasModel (Instancia Model);
	var noticiasModel = new application.app.models.NoticiasDAO(connection);

	noticiasModel.getNoticias(function(error, result){
		// Envia o JSON para o EJS e é processao na VIEW
		res.render("noticias/noticias",{noticias : result});
	});
}

module.exports.noticia = function(application, req, res){
	var connection = application.config.dbConnection();

	var noticiaModel = new application.app.models.NoticiasDAO(connection);

	noticiaModel.getNoticia(function(error, result){
		res.render("noticias/noticia", {noticia : result});
	});
}