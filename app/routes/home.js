module.exports = function(app){
	app.get('/', function(req, res){
		//Forma de chamada do bloco sobre tecnologia do EJS
		//O Render busca as informações e arquivos .ejs no caminho especificado.
		res.render("home/index");
	});
};