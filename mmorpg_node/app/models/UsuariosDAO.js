/* Importar o módulo do crypto */
var crypto = require("crypto");

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
			
			//createHash(método)
			//.update(info) - Atualiza a info
			//.digest(forma de upload) - Digere as informações e cria a hash
			var senha_criptograda = crypto.createHash("md5").update(usuario.senha).digest("hex");

			//Sobrescreve a chave senha
			usuario.senha = senha_criptograda;
			
			//Insere, um JSON, no banco
			collection.insert(usuario);

			//Finaliza a conexão com o banco
			mongoclient.close();
		});
	}); 
}

UsuariosDAO.prototype.autenticar = function(usuario, req, res)
{
	//Função fornecida pelo mongoDB
	this._connection.open(function(err, mongoclient){
		//Permite manipular documentos dentro das coleções
		mongoclient.collection("usuarios", function(err, collection){
			
			var senha_criptograda = crypto.createHash("md5").update(usuario.senha).digest("hex");
			usuario.senha = senha_criptograda;
			
			//Consulta se o usuário fornecido encontra-se no banco
			//collection.find({usuario: {eq: usuario.usuario}, senha:{$eq: usuario.senha}});
			collection.find(usuario).toArray(function(err, result){
				if(result[0] != undefined)
				{
					// Passa a estar disponível quando configuramos o middleware Express-Session
					req.session.autorizado = true;
					req.session.usuario = result[0].usuario;
					req.session.casa = result[0].casa;
				}

				if(req.session.autorizado)
				{
					//res.send("Usuario OK");
					res.redirect("jogo");
				}
				else
				{		
					//res.send("Usuario Não encontrado");
					res.render("index",{validacao:{}});
				}
			});

			//Finaliza a conexão com o banco
			mongoclient.close();
		});
	}); 
}

module.exports = function(){
	return UsuariosDAO;
}