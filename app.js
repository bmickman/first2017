var express = require('express');
var app = express();
var favicon = require('serve-favicon');

app.set('view engine', 'ejs');

//var sass = require('node-sass');

app.use('/client', express.static('client'));
app.use(favicon(__dirname + '/client/favicon.ico'));

app.get('/', function (req, res){
  res.render('home');
  console.log("app running");
});

app.get('/about', function (req, res){
  res.render('about');
  console.log("app running");
});

app.get('/travel', function (req, res){
  res.render('travel');
  console.log("app running");
});

app.listen(4000);
