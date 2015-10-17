CREATE TABLE users
(
    id SERIAL PRIMARY KEY NOT NULL,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    password_hash VARCHAR(255) NOT NULL
);

CREATE TABLE calendars
(
    id SERIAL PRIMARY KEY NOT NULL,
    user_id INT NOT NULL
);

CREATE TABLE events
(
    id SERIAL PRIMARY KEY NOT NULL,
    calendar_id INT NOT NULL,
    name VARCHAR(255) NOT NULL,
    content TEXT,
    range TSTZRANGE
);

CREATE TABLE notifications
(
    id SERIAL PRIMARY KEY NOT NULL,
    event_id INT NOT NULL,
    type VARCHAR(255) NOT NULL,
    "time" TIMESTAMP
);