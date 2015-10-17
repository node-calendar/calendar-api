db = require('../../config/pg');

function getOne(callback) {
    db.query('SELECT $1::int AS number', ['1'], function (err, result, done) {
        done();

        if (err) {
            return callback(err);
        }
        callback(err, result.rows[0].number);
    });
}

module.exports = {
    getOne: getOne
};