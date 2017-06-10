module.exports = function(){

	this.getNoticias = function(connection, callback){
			//<sql> = Requisição SQL em si
		//<func callback> = Ação executada com a informação recuperada
		//connection.query(<sql>, <func callback>);
		connection.query('select * from noticias', callback);
	};

	this.getNoticia = function(connection, callback){
		connection.query('select * from noticias where id_noticias = 2', callback);
	};

	this.salvarNoticia = function(noticia, connection, callback){

		// O MySQL suporta que o insert seja feito através de um JSON e a função SET.
		// O framework transforma o JSON em String e depois colocar onde tem ?
		// Considerando que o JSON possua os mesmos rótulos das colunas da tabela
		connection.query('insert into noticias set ? ',noticia, callback);
	};

	return this;
};