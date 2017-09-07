var http = require('http');

var opcoes = {
	hostname: 'localhost',
	port: '80',
	path: '/',
	headers: {
		// Envia o que o cliente espera receber
		//'Accept' : 'text/html'
		'Accept' : 'application/json'
	}
}

var buffer_corpo_response = [];

// Permite requisição via GET
http.get(opcoes,function(res){
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
	});

	res.on('error', function(){

	});
});