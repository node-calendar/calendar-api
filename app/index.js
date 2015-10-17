var express = require('express');

var bodyParser = require('body-parser');
var routes = require('./routes');
var cors = require('cors');

var app = module.exports = express();
app.use(cors());

app.use(bodyParser.json({limit: '50mb'}));

app.use(routes.v1);

process.on('uncaughtException', function (err, req, res) {
    console.log(err.stack);
});

process.on('SIGINT', function() {
    process.exit();
});
