module.exports = function(app){

	//Importa o módulo MySQL para comunicação da aplicação com o banco
	var mysql = require('mysql');

	var connection = mysql.createConnection({ // Recebe um JSON para criar conexão
		host : 'localhost', //Endereço onde está o banco
		user : 'root', 		//Usuário padrão do MySQL
		password : 'root',
		database : 'portal_noticias', //Database usada armazenar/recuperar noticias	
	});

	//<sql> = Requisição SQL em si
	//<func callback> = Ação executada com a informação recuperada
	//connection.query(<sql>, <func callback>);
	connection.query('select * from noticias', function(error, result){
		res.send(result);
	});
	
	app.get('/noticias', function(req, res){
		res.render("noticias/noticias");
	});
};