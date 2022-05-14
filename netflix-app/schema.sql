DROP TABLE IF EXISTS netflixTable;

CREATE TABLE IF NOT EXISTS netflixTable(
    id SERIAL PRIMARY KEY,
    name varchar(255),
    time varchar(255),
    summary varchar(255),
    image varchar(255)
);