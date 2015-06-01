/**
 * Created by RaghuRam on 28/05/2015.
 */


var express = require('express'),
    stylus = require('stylus'),
    logger = require('morgan'),
    bodyParser = require('body-parser');

// set the env variable to 'development'
var env = process.env.NODE_ENV = process.env.NODE_ENV || 'development';

// instantiate the express module
var app = express();

// set the views folder and the view engine
app.set('views', __dirname + '/server/views');
app.set('view engine', 'jade');

// initialise logger and body parser
app.use(logger('dev'));
app.use(bodyParser());

// define compile function for stylus to compile the styles
function compile(str, path) {
   return stylus(str).set('filename', path);
}

// configure express to serve the compiled CSS
app.use(stylus.middleware(
    {
       src: __dirname + '/public',
       compile: compile
    }
));

// configure express to serve static content from public folder
app.use(express.static(__dirname + '/public'));

// serve the partials
app.get('/partials/:partialPath', function(req, res) {
   res.render('partials/' + req.params.partialPath);
});

// simple routing - this handles all the requests to this server
app.get('*', function (req, res) {
   res.render('index');
});

// configure app to listen on a specific port
var port = 3055;
app.listen(port);

console.log('Listening on port ' + port + '...');