// Cria conexão com o banco de dados
//var dbConnection = require('../../config/dbConnection'); // Navega até pasta raiz e depois vai para config

module.exports = function(application){

	// Executa a função retornada
	//var connection = dbConnection();

	application.get('/noticias', function(req, res){
		//Executa a função que está em application
		var connection = application.config.dbConnection();
		//Acessa o módulo noticiasModel;
		var noticiasModel = application.app.models.noticiasModel;
		//<sql> = Requisição SQL em si
		//<func callback> = Ação executada com a informação recuperada
		//connection.query(<sql>, <func callback>);
		connection.query('select * from noticias', function(error, result){
			//res.send(result);

			// Envia o JSON para o EJS e é processao na VIEW
			res.render("noticias/noticias",{noticias : result});
		});
		//res.render("noticias/noticias"); // View
	});
};
