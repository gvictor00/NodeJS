//Importa a biblioteca Express
var express = require('express');
//Executa a função contida na variável express
var app = express();
//Notifica ao Express que vamos usar o EJS para gerar as views
app.set('view engine','ejs');
// Informa o que é que o módulo fornece como informação
module.exports = app;