db = require('../../config/pg');

function getAll(callback) {
    var query = [
        'SELECT',
        '   *',
        'FROM events'
    ].join('\n');

    var data = [];

    db.query(query, data, function (err, result, done) {
        done();

        if (err) {
            return callback(err);
        }
        callback(err, result);
    });
}

function createEvent(params, callback) {
    var query = [
        'INSERT INTO events',
        '   (calendar_id, name, content, "range")',
        'VALUES',
        '   ($1, $2, $3, tstzrange($4, $5))'
    ].join('\n');

    console.log(query);

    var data = [
        params.calendar_id,
        params.name,
        params.content,
        params.range.begin,
        params.range.end
    ];

    db.query(query, data, function (err, result, done) {
        done();

        if (err) {
            return callback(err);
        }
        callback(err, result);
    });
}

module.exports = {
    getAll: getAll,
    create: createEvent
};