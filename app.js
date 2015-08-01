var express = require("express");
var morgan = require('morgan');
var swig = require("swig");
var app = express();
app.use(morgan('dev'))

var routes = require("./routes/");
app.use("/",routes);

//console.log("Before setting app parameters");
app.engine('html',require("swig").renderFile);
app.set('view engine',"html");
app.set('views', __dirname + '/views/');
app.use(express.static(__dirname + '/public'));

//console.log("Before setting swig cache off");
swig.setDefaults({ cache: false });

//console.log("Before app.get");

console.log("Before server listening");
var server = app.listen(3000,function(){
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});
