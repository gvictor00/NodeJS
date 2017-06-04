module.exports = function(app){
	app.get('/fomulario_inclusao_noticia', function(req, res){
		res.render("admin/form_add_noticia");
	});
};