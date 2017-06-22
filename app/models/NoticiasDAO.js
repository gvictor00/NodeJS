function NoticiasDAO(connection){
	this._connection = connection;
};

//Criação de classes semelhante à PHP, com uso de prototype
NoticiasDAO.prototype.getNoticias = function(callback){
	this._connection.query('select * from noticias order by data_criacao desc', callback);
};

NoticiasDAO.prototype.getNoticia = function(id_noticia, callback){
	console.log(id_noticia.id_noticia);
	this._connection.query('select * from noticias where id_noticias = ' + id_noticia.id_noticia, callback);
};

NoticiasDAO.prototype.salvarNoticia = function(noticia, callback){
	//console.log(noticia);
	// O MySQL suporta que o insert seja feito através de um JSON e a função SET.
	// O framework transforma o JSON em String e depois colocar onde tem ?
	// Considerando que o JSON possua os mesmos rótulos das colunas da tabela
	this._connection.query('insert into noticias set ? ',noticia, callback);
};

NoticiasDAO.prototype.get5UltimasNoticias = function(callback){
	this._connection.query('select * from noticias order by data_criacao desc limit 5', callback);
};

module.exports = function(){
	return NoticiasDAO;
};
