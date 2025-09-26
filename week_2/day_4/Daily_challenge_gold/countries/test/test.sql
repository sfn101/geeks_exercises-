CREATE TABLE IF NOT EXISTS countries (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    capital VARCHAR(100) NOT NULL,
    subregion VARCHAR(100) NOT NULL,
    population INT NOT NULL,
    flag TEXT NOT NULL
);

