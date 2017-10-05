// Dependencies
// =============================================================
var express = require('express');
var bodyParser = require('body-parser');
var nodemailer = require("nodemailer");
var path = require('path');
var exphbs = require('express-handlebars');

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));
app.use(express.static(process.cwd() + '/public'));
app.use(express.static(__dirname + '/public'));

app.use(bodyParser.urlencoded({
    extended: false
}));

// Routes
// =============================================================

// Basic route that sends the user first to the AJAX Page
// app.get('/', function(req, res) {
//     res.sendFile(path.join(__dirname, 'index'));
// })
app.engine('handlebars', exphbs({
    defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');

app.get('/', function(req, res) {
    res.render('index');
});
app.get('/about', function(req, res) {
    res.render('about');
})

app.get('/contact', function(req, res) {
    res.render('contact');
});

app.get('/privacy', function(req, res) {
    res.render('privacy');
})

app.get('/services', function(req, res) {
    res.render('services');
})

app.get('/gallery', function(req, res) {
    res.render('gallery');
})



// Starts the server to begin listening 
// =============================================================
app.listen(PORT, function() {
    console.log('find me at port: ' + PORT);
})
