var express = require('express');
var jade = require('jade');

var app = express();
app.set('views', __dirname + '/app/views');
app.set('view engine', 'jade');

app.use(express.static(__dirname + '/public'));
app.use(require('./app/controllers'));

app.listen('4444', function() {
   console.log('listening on localhost:4444');
});