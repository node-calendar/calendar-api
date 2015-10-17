var events = require('../models/events');

function getAllEvents(req, res, next) {
    events.getAll(function (error, result) {
        if (error) {
            console.error('error running query', error);
            return next(error);
        }
        res.json(result.rows);
    });
}

function createEvent(req, res, next) {
    var params = {
        calendar_id: req.body.calendar_id,
        name: req.body.name,
        content: req.body.content,
        range: {
            begin: req.body.range.begin,
            end: req.body.range.end
        }
    };

    events.create(params, function (error, result) {
        if (error) {
            console.error('error running query', error);
            return next(error);
        }
        res.status(201);
        res.json(result.rows[0]);
    });
}

module.exports = {
    index: getAllEvents,
    create: createEvent
};