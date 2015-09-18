var express = require('express');
var jade = require('jade');

var app = express();
app.set('views', __dirname + '/app/views');
app.set('view engine', 'jade');
app.use(express.static(__dirname + '/public'));

app.get('/', function(request, response) {
    response.render('index')
}).listen('8888');

console.log('listening on localhost:8888');