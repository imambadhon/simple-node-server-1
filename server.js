var http = require('http');
var express =require('express');
var app = express();
var server = http.Server(app);

app.get('/', function(request, response){
  response.sendFile(__dirname+'/index.html');
});

app.get('/about-page', function(request, response){
  response.sendFile(__dirname+'/about.html');
});

server.listen(process.env.PORT || 3000, process.env.IP || 'localhost', function(){
  console.log('Server running');
});
