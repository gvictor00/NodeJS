var express = require('express');
var bodyParser = require('body-parser');
var mongodb = require('mongodb');
var objectId = require('mongodb').ObjectId;
var multiparty = require('connect-multiparty');
var fs = require('fs'); // Modulo nativo que permite manipular arquivos
var app = express();

//body-parser
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

//Executar o Connect Multiparty
app.use(multiparty());

var port = 3000;

var db = new mongodb.Db(
	'instagram',
	new mongodb.Server('localhost', 27017, {}),
	{}
	);
app.listen(port);

console.log("O servidor HTTP esta escutando na porta ", port);

app.get('/',function(req, res){

	// var resposta = {msg: 'Olá'};
	res.send({msg:'Olá'});
});

// URI + verbo HTTP

//POST {create}
app.post('/api', function(req, res){

	// Habilita a API para fornecer o res para qualquer dominio
	// Cossdomain application
	res.setHeader("Access-Control-Allow-Origin", "*");

	var date = new Date();
	time_stamp = date.getTime();

	// Populada pelo Multiparty quando uma requisição contém arquivos
	//console.log(req.files);

	var url_imagem = time_stamp + '_' + req.files.arquivo.originalFilename;

	// Fornece o caminho origem para o arquivo
	var path_origem = req.files.arquivo.path;

	// Fornece o caminho para o destino do arquivo
	var path_destino = './uploads/' + url_imagem;


	fs.rename(path_origem, path_destino, function(err)
	{
		if(err)
		{
			res.status(500).json({error : err});
			return;
		}

		var dados = {
			url_imagem: url_imagem,
			titulo: req.body.titulo
		}

		db.open(function(err, mongoclient){
			mongoclient.collection('postagens', function(err, collection){
				collection.insert(dados, function(err, records){
					if(err){
						res.json({'status':'erro'});
					}
					else
					{
						res.json({'status':'Inclusao realizada com sucesso'});
					}
					mongoclient.close();
				});
			});
		})
	});
});

//GET
app.get('/api', function(req, res){
	db.open(function(err, mongoclient){
		mongoclient.collection('postagens', function(err, collection){
			collection.find().toArray(function(err, results){
				if(err){
					res.json(err);
				}
				else
				{
					res.json(results);
				}
				mongoclient.close();
			});
		});
	})
});

//GET by ID
app.get('/api/:id', function(req, res){
	db.open(function(err, mongoclient){
		mongoclient.collection('postagens', function(err, collection){
			collection.find(objectId(req.params.id)).toArray(function(err, results){
				if(err){
					res.json(err);
				}
				else
				{
					res.json(results);
					//res.status(200).json(results);
				}
				mongoclient.close();
			});
		});
	})
});

//PUT by ID (update)
app.put('/api/:id', function(req, res){
	db.open(function(err, mongoclient){
		mongoclient.collection('postagens', function(err, collection){
			collection.update(
				{ _id : objectId(req.params.id)},
				{ $set : {titulo : req.body.titulo}},
				{},
				function(err, records){
					if(err){
						res.json(err);
					}
					else
					{
						res.json(records);
					}

					mongoclient.close();
				});
		});	
	})
}); 

//DELETE by ID (update)
app.delete('/api/:id', function(req, res){
	db.open(function(err, mongoclient){
		mongoclient.collection('postagens', function(err, collection){
			collection.remove({_id : objectId(req.params.id)
			}, 
			function(err, records)
			{
				if(err)
				{
					res.json(err);
				}
				else
				{
					res.json(records);
				}
				mongoclient.close();
			});
		});
	})
}); 