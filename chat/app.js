/* importar configurações do servidor */

var app = require('./config/server');

/* parametrizar porta de escuta */
var server = app.listen(3000, function(){
	console.log('Servidor online');
});

/* define o ponto de escuta da porta 3000 */
require('socket.io').listen(server);