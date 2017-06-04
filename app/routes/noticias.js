module.exports = function(app){

	app.get('/noticias', function(req, res){
		//Importa o módulo MySQL para comunicação da aplicação com o banco
		var mysql = require('mysql');

		var connection = mysql.createConnection({ // Recebe um JSON para criar conexão
		//	key: "value", 
			host : 'localhost', //Endereço onde está o banco
			user : 'root', 		//Usuário padrão do MySQL
			password : 'root',
			database : 'portal_noticias', //Database usada armazenar/recuperar noticias	
		});

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