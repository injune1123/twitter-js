var express = require("express");
var morgan = require("morgan");
var swig = require("swig");
var app = express();
var routes = require('./routes/');
var bodyParser = require("body-parser");


/**
http://stackoverflow.com/questions/9177049/express-js-req-body-undefined/13779626#13779626
You must make sure that you define all configurations BEFORE 
defining routes. 
If you do so, you can continue to use 
'express.bodyParser()' An example is as follows:
**/

app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());
//Above are considered as configs,they should be set before routes

app.use('/', routes);

app.use(function (req, res) {
  res.setHeader('Content-Type', 'text/plain')
  //console.log(req.body)
  res.write('you posted:\n')
  res.end(JSON.stringify(req.body, null, 2))
});
app.use(morgan("dev"));
app.use(express.static(__dirname + '/public'));



var server = app.listen(3000,function(){
	var host = server.address().address;
	var port = server.address().port;
 console.log('server listening', host, port);

});

app.engine("html", require("swig").renderFile);
app.set("view engine","html");
app.set("views", __dirname + "/views");

swig.setDefaults({ cache: false });


