function NoticiasDAO(connection){
	this._connection = connection;
};

//Criação de classes semelhante à PHP, com uso de prototype
NoticiasDAO.prototype.getNoticias = function(callback){
	this._connection.query('select * from noticias', callback);
};

NoticiasDAO.prototype.getNoticia = function(callback){
	this._connection.query('select * from noticias where id_noticias = 2', callback);
};

NoticiasDAO.prototype.salvarNoticia = function(noticia, callback){

	// O MySQL suporta que o insert seja feito através de um JSON e a função SET.
	// O framework transforma o JSON em String e depois colocar onde tem ?
	// Considerando que o JSON possua os mesmos rótulos das colunas da tabela
	this._connection.query('insert into noticias set ? ',noticia, callback);
};

module.exports = function(){
	return NoticiasDAO;
};
