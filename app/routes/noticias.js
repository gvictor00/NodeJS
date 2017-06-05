// Cria conexão com o banco de dados
//var dbConnection = require('../../config/dbConnection'); // Navega até pasta raiz e depois vai para config

module.exports = function(app){

	// Executa a função retornada
	//var connection = dbConnection();

	app.get('/noticias', function(req, res){
		var connection = app.config.dbConnection();

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
