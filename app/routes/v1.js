var express = require('express');
var app = express.Router();
var controllers = require('../controllers');

app.get('/api/v1/events', controllers.events.index);

module.exports = app;
