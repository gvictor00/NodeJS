function UsuariosDAO(connection){
	// Executa função de conexão com o banco
	// this._ indica que a variável só deve ser utilizada dentro do contexto do módulo
	this._connection = connection(); 
}

UsuariosDAO.prototype.inserirUsuario = function(usuario){
	//Função fornecida pelo mongoDB
	this._connection.open(function(err, mongoclient){
		//Permite manipular documentos dentro das coleções
		mongoclient.collection("usuarios", function(err, collection){
			//Insere, um JSON, no banco
			collection.insert(usuario);

			//Finaliza a conexão com o banco
			mongoclient.close();
		});
	}); 
}

module.exports = function(){
	return UsuariosDAO;
}