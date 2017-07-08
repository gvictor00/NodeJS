/* Importar o mongodb */
var mongo = require('mongodb');

/* Exporta uma função para o Autoload do consign executar */
var connMongoDB = function(){
	var db = new mongo.Db(
		'got', 	// String com o nome do banco
		new mongo.Server(	// Objeto de conexão com o servidor 
			'localhost',	// String contendo o endereço do banco de dados
			27017, 	// Porta de conexão
			{} 	// Objeto com configurações do servidor
		), 		
		{} 		// Objeto de configurações adicionais
	);
	return db;
}

/* Exporta uma variável contendo a função, fazendo um wrapper para
não ocorrer criação de multiplas conexões com o banco */
module.exports = function(){
	return connMongoDB;
}