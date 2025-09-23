DROP TABLE IF EXISTS actors;


-- Create the actors table
CREATE TABLE actors(
actor_id SERIAL PRIMARY KEY,
first_name VARCHAR (50) NOT NULL,
last_name VARCHAR (100) NOT NULL,
age DATE NOT NULL,
number_oscars SMALLINT NOT NULL
);

-- Insert sample data into the actors table
INSERT INTO actors (first_name, last_name, age, number_oscars) VALUES
('Leonardo', 'DiCaprio', '1974-11-11', 1),
('Meryl', 'Streep', '1949-06-22', 3),
('Denzel', 'Washington', '1954-12-28', 2),
('Scarlett', 'Johansson', '1984-11-22', 0),
('Tom', 'Hanks', '1956-07-09', 2),
('Natalie', 'Portman', '1981-06-09', 1),
('Brad', 'Pitt', '1963-12-18', 1),
('Jennifer', 'Lawrence', '1990-08-15', 1),
('Morgan', 'Freeman', '1937-06-01', 1),
('Emma', 'Stone', '1988-11-06', 1),
('Robert', 'De Niro', '1943-08-17', 2),
('Cate', 'Blanchett', '1969-05-14', 2),
('Will', 'Smith', '1968-09-25', 0),
('Anne', 'Hathaway', '1982-11-12', 1),
('Johnny', 'Depp', '1963-06-09', 0),
('matt', 'damon', '1970-10-08', 1),
('Angelina', 'Jolie', '1975-06-04', 1),
('Chris', 'Hemsworth', '1983-08-11', 0),
('Gal', 'Gadot', '1985-04-30', 0),
('Ryan', 'Gosling', '1980-11-12', 0);


-- Query to verify the inserted data
SELECT * FROM actors; 


-- retrive first name only
SELECT first_name FROM actors;


SELECT
    first_name,
    last_name,
    age
FROM
    actors;

-- retrieve all actors ordered by first name descending
SELECT * FROM actors
    ORDER BY first_name DESC;


-- retrieve all actors  with e in ther last name
SELECT * FROM actors
    WHERE last_name ILIKE '%e';

-- retrieve all actors with 2 or more oscars
SELECT * FROM actors
    WHERE number_oscars >= 2;

UPDATE actors 
SET age='1970-01-01' 
WHERE first_name='matt' AND last_name='damon'
RETURNING 
    actor_id,
    first_name, 
    last_name,
    age;

--- delete actor
DELETE FROM actors 
    WHERE actor_id=18