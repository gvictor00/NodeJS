module.exports = function(){

	this.geNoticias = function(connection, callback){
			//<sql> = Requisição SQL em si
		//<func callback> = Ação executada com a informação recuperada
		//connection.query(<sql>, <func callback>);
		connection.query('select * from noticias', callback);
	};

	this.getNoticia = function(connection, callback){
		connection.query('select * from noticias where id_noticias = 2', callback);
	};

	return this;
};