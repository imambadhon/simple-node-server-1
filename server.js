var http = require('http');
var express =require('express');
var app = express();
var server = http.Server(app);
var bodyParser = require('body-parser');

//for c9
var db;
//var db_url = "mongodb://"+process.env.IP+":27017"
var db_url = "mongodb://localhost:27017"
/* CW 9b*/
var mongoose = require("mongoose");

mongoose.connect(db_url+"/node-cw9");
mongoose.connection.on('error', function(err){
  console.log(err);
  console.log('Could not connect to mongodb');
})

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.get('/', function(request, response){
  response.render('index.ejs');
});

app.get('/about-page', function(request, response){
  response.render('about.ejs');
});

require('./routes/article-routes.js')(app);
server.listen(process.env.PORT || 3000, process.env.IP || 'localhost', function(){
  console.log('Server running');
});
