/* importar o módulo do framework express */
var express = require('express');

/* importar o módulo do consign */
var consign = require('consign');

/* importar o módulo do body-parser */
var bodyParser = require('body-parser');

/* importar o módulo do express-validator */
var expressValidator = require('express-validator');

/* iniciar o objeto do express */
var app = express();

/* setar as variaveis 'view engine' e a 'views' do express */
app.set('view engine', 'ejs');
app.set('views', './app/views');

/* configurar o middleware express.static */
app.use(express.static('./app/public'));

/* configurar o middlware body-parser */
app.use(bodyParser.urlencoded({extended: true}));

/* configurar o middleware express-validator */
app.use(expressValidator());

/* efetura o autoload das rotas, dos modulos e dos controllers para o objeto app */
consign()
 .include('app/routes')
 .then('app/models')
 .then('app/controllers')
 .into(app);

/* exporta o objeto app */
module.exports = app;
