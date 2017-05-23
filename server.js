//get the things we need
var express = require('express');
var app = express();
var path = require('path');

app.use(express.static(path.join(__dirname, 'public')));

/* GET home page. */
app.get('*', function(req, res, next) {
  //Path to your main file
  res.status(200).sendFile(path.join(__dirname+'/public/index.html')); 
});

// start the server on port 8080 (http://localhost:8080)
app.listen(8080);
console.log('Magic happens on port 8080.');
