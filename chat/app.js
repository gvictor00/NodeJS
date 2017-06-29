/* importar configurações do servidor */

var app = require('./config/server');

/* parametrizar porta de escuta */
var server = app.listen(3000, function(){
	console.log('Servidor online');
});

/* define o ponto de escuta da porta 3000 */
var io = require('socket.io').listen(server);

/* cria variavel global, dentro do objeto app, usando o express */
app.set('io', io);

/* criar a conexão por websocket e escuta eventos de conexão*/
io.on('connection', function(socket){
	console.log('Usuário conectou');

	socket.on('disconnect', function(){
		console.log('Usuário desconectou');
	});

	//Ouve a mensagem e reenvia para os outros clientes.
	socket.on('msgParaServidor', function(data){
		//Exibe a mensagem somente para quem enviou
		socket.emit(
			'msgParaCliente',
			{apelido: data.apelido, mensagem: data.mensagem}
		);

		//Envia a mensagem para os outros clientes conectados
		socket.broadcast.emit(
			'msgParaCliente',
			{apelido: data.apelido, mensagem: data.mensagem}
		);
	});
});
