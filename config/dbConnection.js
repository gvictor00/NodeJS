//Importa o módulo MySQL para comunicação da aplicação com o banco
var mysql = require('mysql');

module.exports = function(){
	return connection = mysql.createConnection({ // Recebe um JSON para criar conexao
	//	key: "value", 
		host : 'localhost', //Endereço onde está o banco
		user : 'root', 		//Usuário padrão do MySQL
		password : 'root',
		database : 'portal_noticias', //Database usada armazenar/recuperar noticias	
	});
}