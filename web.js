var express = require('express');
var fs = require('fs');
var app = express.createServer(express.logger());

readfile = "index.html";
var data = fs.readFilesync(readfile);

buf = new Buffer(data);
 
app.get('/', function(request, response) {
  response.send('buf');
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
