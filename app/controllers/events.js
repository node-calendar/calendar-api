var users = require('../models/users');

function getAllEvents(req, res, next) {
    users.getOne(function(error, result) {
        if (error) {
            console.error('error running query', error);
            return next(error);
        }
        res.json([result]);
    });
}

module.exports = {
    index: getAllEvents
};