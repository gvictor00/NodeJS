// Programa que cria um servidor HTTP e envia uma página HTML à cada requisição.
console.log("Começou o programa.");
var http = require('http'); // Incorpora a biblioteca http

//Cria servidor HTML
var server = http.createServer(function(requisicao, resposta) {
	//Escopo da função
	console.log("Recebeu uma requisicao!");

	var categoria = requisicao.url;
	
	if (categoria == '/tecnologia') {
		resposta.end("<html><body>Portal de Noticias de Tecnologia</body></html>");

	} else if (categoria == '/beleza') {
		resposta.end("<html><body>Portal de Noticias de Beleza</body></html>");

	} else if (categoria == '/moda') {
		resposta.end("<html><body>Portal de Noticias de Moda</body></html>");

	} else {
		resposta.end("<html><body>Portal de Noticias</body></html>");
	}
});
server.listen(3000);