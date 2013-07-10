var express = require('express');
var fs = require('fs');
var app = express.createServer(express.logger());

readfile = "index.html";
var data = fs.readFileSync(readfile);

buf = new Buffer(fs.readFileSync(readfile));
 
app.get('/', function(request, response) {
  response.send(buf.toString);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
