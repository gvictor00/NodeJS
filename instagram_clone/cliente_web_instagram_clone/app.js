/* importar as configurações do servidor */
var app = require('./config/server');

/* parametrizar a porta de escuta */
app.listen(3030, function(){
	console.log('Servidor online na porta 3030');
})