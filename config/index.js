var env = process.env.NODE_ENV || 'development';

var db = {
    host: process.env.DB_HOST || 'localhost',
    port: parseInt(process.env.DB_PORT) || 5432,
    dbname: process.env.DB_NAME || 'calendar-api-' + env,
    user: process.env.DB_USER || 'calendar-api-' + env,
    password: process.env.DB_PASSWORD || '123456'
};

var defaults = {
    server: {
        port: parseInt(process.env.PORT) || 3000,
        host: process.env.HOST || 'localhost'
    },
    db: 'postgres://' + db.user + ':' + db.password + '@' + db.host + '/' + db.dbname
};

module.exports = defaults;