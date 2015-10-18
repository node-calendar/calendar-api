db = require('../../config/pg');

function getAll(callback) {
    var query = [
        'SELECT',
        '   id,',
        '   name,',
        '   email',
        'FROM users'
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

module.exports = {
    getAll: getAll
};
