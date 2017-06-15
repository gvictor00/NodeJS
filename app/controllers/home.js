module.exports.index = function(application, req, res){
	//Forma de chamada do bloco sobre tecnologia do EJS
		//O Render busca as informações e arquivos .ejs no caminho especificado.
		res.render("home/index");
};