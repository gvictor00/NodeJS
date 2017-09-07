var http = require('http');

var opcoes = {
	hostname: 'localhost',
	port: '80',
	path: '/',
	method: 'get',
	headers: {
		// Envia o que o cliente espera receber
		//'Accept' : 'text/html'
		'Accept' : 'application/json',
		//'Content-type' : 'application/x-www-form-urlencoded'
		'Content-type' : 'application/json'

	}
}
/*
//Content-type
var html = 'nome=José'; //x-www-form-urlencoded
var json = {nome : 'José'};
var string_json = JSON.stringify(json);
*/
var buffer_corpo_response = [];

// Permite requisição via GET (Request)
var req = http.request(opcoes,function(res){
	// ON = while loading
	res.on('data', function(chunk){
		buffer_corpo_response.push(chunk);
		//Concatena com uma string para converter em texto
		//console.log(' ' + chunk);
	});

	// END = loaded
	res.on('end', function(){
		var corpo_response = Buffer.concat(buffer_corpo_response).toString();
		console.log(corpo_response);
		console.log(res.statusCode);
	});

	res.on('error', function(){

	});
});

//Anexa string no request
//req.write(html);
//req.write(string_json);
//Envia a instância do objeto
req.end();