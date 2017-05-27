var app = require('./config/server');

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