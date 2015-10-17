var app = require('./app');
var config = require('./config');

var server = require('http').createServer(app);
server.listen(config.server.port, function () {
    console.log('info', "Web server successfully started at port", config.server.port);
});

module.exports.app = app;
