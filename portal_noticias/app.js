//O app.js deve guardar somente informações estruturais do sistema
var app = require('./config/server');


//Configurando as rotas para as funções
//ar rotaNoticias = require('./app/routes/noticias');
//Executando a função, passando o app POR REFERÊNCIA
//rotaNoticias(app);
//Forma de execução, baseada em COMMONJS
//var rotaHome = require('./app/routes/home')(app);
//rotaHome(app);
//var rotaFormInclusaoNoticia = require('./app/routes/formulario_inclusao_noticia');
//rotaFormInclusaoNoticia(app);

//Escuta a porta #, substituindo o createServer da biblioteca HTTP
app.listen(3000, function(){
	console.log("Servidor rodando com Express");
});