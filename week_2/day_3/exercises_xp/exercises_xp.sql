-- all languages
SELECT * FROM language;

-- all films and their language
SELECT f.title, f.description, l.name FROM film f 
JOIN language l USING(language_id) ;

-- all films and all language 
SELECT f.title, f.description, l.name FROM film f
RIGHT JOIN language l USING(language_id);


-- new_films table
CREATE TABLE new_films (
    id SERIAL PRIMARY KEY,
    film_name VARCHAR(100) NOT NULL
);

-- insert 5 films into new_films
INSERT INTO new_films (film_name) VALUES
('ACADEMY DINOSAUR'),
('ACE GOLDFINGER'),
('ADAPTATION HOLES'),
('AFFAIR PREJUDICE'),
('AFRICAN EGG');

-- revew table
CREATE TABLE review (
    id SERIAL PRIMARY KEY,
    title VARCHAR(100) NOT NULL,
    film_id INT REFERENCES new_films(id) ON DELETE CASCADE,
    review_text TEXT NOT NULL,
    score INT CHECK (score >= 1 AND score <= 10),
    language_id INT REFERENCES language(language_id),
    last_update TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- adding 2 reviews for films in new_films
INSERT INTO review (title, film_id, review_text, score, language_id) VALUES
('Great Movie', 1, 'I really enjoyed this movie. The plot was thrilling and the characters were well developed.', 9, 1),
('Not Bad', 2, 'The movie was okay. It had some good moments but overall it was average.', 6, 1);

-- fetch all reviews
SELECT * FROM review;

-- delete film 2 
DELETE FROM new_films WHERE id = 2;

-- A. the revew is deleted too
SELECT * FROM review;

-- update language of films
UPDATE film SET language_id = (SELECT language_id FROM language WHERE name = 'French')
WHERE film_id IN (1, 2, 3, 4, 5);

-- fetch updated films
SELECT f.title, l.name FROM film f
JOIN language l USING(language_id)
WHERE f.film_id IN (1, 2, 3, 4, 5);


-- Q. Which foreign keys (references) are defined for the customer table? How does this affect the way in which we INSERT into the customer table?
-- A. The customer table has foreign keys referencing the address and store tables. this means that the store id have to be created before inserting into the customer table. and the address have to be stored in the address table before inserting into the customer table.

-- Q. We created a new table called customer_review. Drop this table. Is this an easy step, or does it need extra checking?
-- A. Dropping the customer_review table is an easy step if there are no other tables referencing it through foreign keys. If there are foreign key constraints, we would need to drop those constraints or the referencing tables first before dropping the customer_review table.

-- fetch the number of rentals still active (not returned) 183
SELECT COUNT(*) AS active_rentals FROM rental WHERE return_date IS NULL;

-- the most expansive films that still not returned
SELECT f.title, f.rental_rate FROM film f
JOIN inventory i USING(film_id)
JOIN rental r USING(inventory_id)
WHERE r.return_date IS NULL
ORDER BY f.rental_rate DESC
LIMIT 30;


-- finding the first movie
SELECT f.title, f.description FROM film f
JOIN film_actor fa USING(film_id)
JOIN actor a USING(actor_id)
WHERE a.first_name = 'Penelope' AND a.last_name = 'Monroe' AND f.description ILIKE '%sumo%';
-- the movie is "Park Citizen"

-- finding the second movie
-- short documentary less than one hour rated R
SELECT f.title, f.description FROM film f
JOIN film_category fc USING(film_id)
JOIN category c USING(category_id) 
WHERE f.length < 60 AND f.rating = 'R' AND c.name = 'Documentary';

-- the movie is "Cupboard Sinners"

-- finding the third movie
-- a movie was rented by a customer Matthew Mahan prixe > 4.00 returned between the 28th of July and the 1st of August, 2005
SELECT f.title, f.description FROM film f
JOIN inventory i USING(film_id)
JOIN rental r USING(inventory_id)
JOIN customer c USING(customer_id)
WHERE c.first_name = 'Matthew' AND c.last_name = 'Mahan'
AND r.return_date BETWEEN '2005-07-28' AND '2005-08-01'
AND f.rental_rate > 4.00;

-- the movie is "Sugar Wonka"

-- , finding the fourth movie from the same customer mathew mahan its expansev and have the word 'boat' in the title or description
SELECT f.title, f.description, MAX(f.replacement_cost) FROM film f
JOIN inventory i USING(film_id)
JOIN rental r USING(inventory_id)
JOIN customer c USING(customer_id)
WHERE c.first_name = 'Matthew' AND c.last_name = 'Mahan'
AND (f.title ILIKE '%boat%' OR f.description ILIKE '%boat%')
GROUP BY f.title, f.description
ORDER BY MAX(f.replacement_cost) DESC
LIMIT 1;
-- the movie is "Stone Fire"

