//Importa a biblioteca Express
var express = require('express');

//Executa a função contida na variável express
var app = express();

//Notifica ao Express que vamos usar o EJS para gerar as views
app.set('view engine','ejs');

app.get('/', function(req, res){
	//Forma de chamada do bloco sobre tecnologia do EJS
	//O Render busca as informações e arquivos .ejs no caminho especificado.
	res.render("home/index");
});

app.get('/fomulario_inclusao_noticia', function(req, res){
	res.render("admin/form_add_noticia");
});

app.get('/noticias', function(req, res){
	res.render("noticias/noticias");
});

//Escuta a porta #, substituindo o createServer da biblioteca HTTP
app.listen(3000, function(){
	console.log("Servidor rodando com Express");
});