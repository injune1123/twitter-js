var express = require("express");
var morgan = require("morgan");
var swig = require("swig");
var app = express();
var routes = require('./routes/');
app.use('/', routes);

app.use(morgan("dev")); 



var server = app.listen(3000,function(){
	var host = server.address().address;
	var port = server.address().port;
 console.log('server listening', host, port);

});

app.engine("html", require("swig").renderFile);
app.set("view engine","html");
app.set("views", __dirname + "/views");

swig.setDefaults({ cache: false });