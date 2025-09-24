-- ====================dvdrental ====================

-- select all customers
SELECT * FROM customer;

-- fetch full name
SELECT first_name || ' ' || last_name AS full_name FROM customer;

-- fetch date of create no duplicates
SELECT DISTINCT create_date FROM customer;

-- fetch all customer details order by first name
SELECT c.first_name, c.last_name, c.email, c.create_date, c.last_update::date, a.address || ' ' || ci.city || ' ' || co.country AS full_address FROM customer c 
LEFT JOIN address a  USING(address_id)
JOIN city ci USING(city_id)
JOIN country co USING(country_id)
    ORDER BY c.first_name DESC;


-- film details
SELECT film_id, title, description, release_year, rental_rate FROM film
    ORDER BY rental_rate;

-- all address and phone numbers of customers in texsas
SELECT a.address, a.phone, ci.city, co.country FROM customer c
JOIN address a USING(address_id)
JOIN city ci USING(city_id)
JOIN country co USING(country_id)
    WHERE co.country = 'United States' AND a.district = 'Texas';


-- fetch everything from film id 15 or 150
SELECT * FROM film WHERE film_id = 15 OR film_id = 150;

-- fetch my favorite film
SELECT film_id, title, description, length, rental_rate FROM film
    WHERE title = 'Shawshank Redemption';

-- fetch all films starting with Sh
SELECT film_id, title, description, length, rental_rate FROM film
    WHERE title ILIKE 'Sh%';


-- 10 cheapest movies (without LIMIT)
SELECT film_id, title, rental_rate FROM film
    ORDER BY rental_rate, film_id
    LIMIT 10


-- the next 10 cheapest movies after the first 10 using OFFSET/FETCH instead of LIMIT
SELECT film_id, title, rental_rate
FROM film
ORDER BY rental_rate, film_id
OFFSET 10 ROWS
FETCH NEXT 10 ROWS ONLY;


-- customers and payment details
SELECT c.customer_id, c.first_name, c.last_name, p.amount, p.payment_date
FROM customer c
JOIN payment p USING(customer_id)
ORDER BY c.customer_id;

-- fetch all moves that not in inventory
SELECT * FROM film  
LEFT JOIN inventory i USING(film_id)
WHERE i.film_id IS NULL;

-- fetch cities and the countries and order by country.
SELECT ci.city, co.country
FROM city ci
JOIN country co USING(country_id)
    ORDER BY co.country;

-- fetch cities grouped my country
SELECT co.country, COUNT(ci.city) AS number_of_cities
FROM city ci
JOIN country co USING(country_id)
GROUP BY co.country
    ORDER BY number_of_cities DESC;

-- customers full name and payment details order by staff id 'i add staff full name too to make it more clear'
SELECT c.first_name || ' ' || c.last_name AS full_name, p.amount, p.payment_date, st.first_name || ' ' || st.last_name AS staff_full_name
FROM customer c
JOIN payment p USING(customer_id)
JOIN store s USING(store_id)
JOIN staff st USING(staff_id)
ORDER BY st.staff_id;