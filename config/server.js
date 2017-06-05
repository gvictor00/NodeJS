//Importa a biblioteca Express
var express = require('express');
//Importa a biblioteca do Consign
var consign = require('consign');


//Executa a função contida na variável express
var app = express();
//Notifica ao Express que vamos usar o EJS para gerar as views
app.set('view engine','ejs');
//A pesquisa da pasta VIEWS é feita a partir do nível do diretório onde
//está o app.js
app.set('views', './app/views');

// Passa por parâmetro os arquivos para a app.js (Consign)
consign()
	.include('app/routes')
	.then('config/dbConnection.js') //Necessário apontar extensão, para não confundir com diretório.
	.into(app);

// Informa o que é que o módulo fornece como informação
module.exports = app;