var express = require('express');
var app = express.Router();
var controllers = require('../controllers');

app.get('/api/v1/events', controllers.events.index);
app.post('/api/v1/events', controllers.events.create);

module.exports = app;
