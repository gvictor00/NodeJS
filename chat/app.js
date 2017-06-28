/* importar configurações do servidor */

var app = require('./config/server');

/* parametrizar porta de escuta */
var server = app.listen(3000, function(){
	console.log('Servidor online');
});

/* define o ponto de escuta da porta 3000 */
var io = require('socket.io').listen(server);

/* criar a conexão por websocket e escuta eventos de conexão*/

io.on('connection', function(socket){
	console.log('Usuário conectou');

	socket.on('disconnect', function(){
		console.log('Usuário desconectou');
	});
});
