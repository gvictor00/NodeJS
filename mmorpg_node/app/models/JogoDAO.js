var ObjectId = require('mongodb').ObjectId;

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


JogoDAO.prototype.iniciaJogo = function(res, usuario, casa, msg)
{
	this._connection.open(function(err, mongoclient){
		mongoclient.collection("jogo", function(err, collection){
			collection.find({usuario : usuario}).toArray(function(err, result){
				res.render('jogo', {img_casa: casa, jogo: result[0], msg: msg});
			});

			//Finaliza a conexão com o banco
			mongoclient.close();
		});
	}); 
}

JogoDAO.prototype.acao = function(acao)
{
	//Função fornecida pelo mongoDB
	this._connection.open(function(err, mongoclient){
		//Permite manipular documentos dentro das coleções
		mongoclient.collection("acao", function(err, collection){
			
			//Define o periodo que a ação deve ser realizada
			var date = new Date();
			var tempo = null;
			switch(parseInt(acao.acao))
			{
				case 1: tempo = 1 * 60 * 60 * 1000; break;
				case 2: tempo = 2 * 60 * 60 * 1000; break;
				case 3: tempo = 3 * 60 * 60 * 1000; break;
				case 4: tempo = 4 * 60 * 60 * 1000; break;
			}
			//Cria uma nova chave no JSON
			acao.acao_termina_em = date.getTime() + tempo;

			//Insere, um JSON, no banco
			collection.insert(acao);
		});

		mongoclient.collection("jogo", function(err, collection){

			var moedas = null;
			switch(parseInt(acao.acao))
			{
				case 1: 
				moedas = -2 * parseInt(acao.quantidade);
				break;
				case 2:
				moedas = -3 * parseInt(acao.quantidade);
				break;
				case 3: 
				moedas = -1 * parseInt(acao.quantidade);
				break;
				case 4: 
				moedas = -1 * parseInt(acao.quantidade);
				break;
			}

			collection.update(
				{ usuario : acao.usuario },
				{ $inc: {moeda: moedas} },
				{ multi: false }
				);

			//Finaliza a conexão com o banco
			mongoclient.close();
		});
	}); 
}

JogoDAO.prototype.getAcoes = function(usuario, res)
{
	this._connection.open(function(err, mongoclient){
		mongoclient.collection("acao", function(err, collection){
			// Pega o momento da consulta para evitar de haverem tempos negativos
			var date = new Date();
			var momento_atual = date.getTime();
			collection.find({usuario : usuario, acao_termina_em: {$gt:momento_atual}}).toArray(function(err, result){
				res.render('pergaminhos', {acoes : result});
			});

			//Finaliza a conexão com o banco
			mongoclient.close();
		});
	}); 
}

JogoDAO.prototype.revogar_acao = function(_id, res)
{
	this._connection.open(function(err, mongoclient){
		mongoclient.collection("acao", function(err, collection){
			collection.remove(
				{_id : ObjectId(_id)},
				function(err, result){
					res.redirect('jogo?msg=D');
					mogoclient.close();
				}
			);
		});
	}); 
}

module.exports = function(){
	return JogoDAO;
}