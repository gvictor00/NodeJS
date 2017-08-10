function JogoDAO(connection)
{
	this._connection = connection();
}

JogoDAO.prototype.gerarParametros = function(usuario)
{
	//Função fornecida pelo mongoDB
	this._connection.open(function(err, mongoclient){
		//Permite manipular documentos dentro das coleções
		mongoclient.collection("jogo", function(err, collection){
			//Insere, um JSON, no banco
			collection.insert({
				usuario: usuario,
				moeda: 15,
				suditos: 10,
				temor: Math.floor(Math.random()*1000),
				sabedoria: Math.floor(Math.random()*1000),
				comercio: Math.floor(Math.random()*1000),
				magia: Math.floor(Math.random()*1000)
			});

			//Finaliza a conexão com o banco
			mongoclient.close();
		});
	}); 
}

module.exports = function(){
	return JogoDAO;
}