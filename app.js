var express = require("express");
var morgan = require("morgan");
var swig = require("swig");
var app = express();

app.use(morgan("dev")); 

app.get('/', function (req, res) {
  	var people = [{name: 'Full'}, {name: 'Stacker'}, {name: 'Son'}];
	res.render( 'index', {title: 'Hall of Fame', people: people} );

});

app.get('/news', function (req, res) {
  res.send('Hello World!');

});

var server = app.listen(3000,function(){
	var host = server.address().address;
	var port = server.address().port;
 console.log('server listening', host, port);

});

app.engine("html", require("swig").renderFile);
app.set("view engine","html");
app.set("views", __dirname + "/views");

swig.setDefaults({ cache: false });