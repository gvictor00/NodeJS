// Cria conexão com o banco de dados
//var dbConnection = require('../../config/dbConnection'); // Navega até pasta raiz e depois vai para config

module.exports = function(application){

	// Executa a função retornada
	//var connection = dbConnection();

	application.get('/noticias', function(req, res){

		application.app.controllers.noticias.noticias(application, req, res);
	});

	application.get('/noticia', function(req, res){
		application.app.controllers.noticias.noticia(application, req, res);

	});
};
