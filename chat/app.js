/* importar configurações do servidor */

var app = require('./config/server');

/* parametrizar porta de escuta*/
app.listen(3000, function(){
	console.log('Servidor online');
});
