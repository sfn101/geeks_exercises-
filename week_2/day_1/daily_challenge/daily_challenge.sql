-- count the number of actors
SELECT COUNT(*) FROM actors;

-- adding actors with missing fields will result in an error
-- because those fields are set to NOT NULL 
INSERT INTO actors (first_name, last_name)VALUES
    ('Tom','Hanks'),
    ('Leonardo','DiCaprio'),
    ('Scarlett','Johansson'),
    ('Downey Jr.','smith');
