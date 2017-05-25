//Importa a biblioteca Express
var express = require('express');

//Executa a função contida na variável express
var app = express();

//Notifica ao Express que vamos usar o EJS para gerar as views
app.set('view engine','ejs');

app.get('/tecnologia', function(req, res){
	//Forma de chamada do bloco sobre tecnologia do EJS
	//O Render busca as informações e arquivos .ejs no caminho especificado.
	res.render("secao/tecnologia");
});

app.get('/', function(req, res){
	//Envia o HTML. A função SEND é caracteristica do EXPRESS, enquanto end é do Node
	res.send("<html><body>Portal de Noticias</body></html>")
});

//app.get('/tecnologia', function(req, res){
	//res.send("<html><body>Portal de Noticias Tecnologia</body></html>")
//});

app.get('/moda', function(req, res){
	res.send("<html><body>Portal de Noticias de Moda</body></html>")
});

app.get('/beleza', function(req, res){
	res.send("<html><body>Portal de Noticias de Beleza</body></html>")
});

//Escuta a porta #, substituindo o createServer da biblioteca HTTP
app.listen(3000, function(){
	console.log("Servidor rodando com Express");
});