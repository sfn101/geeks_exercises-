-- all items ordered by price
SELECT * FROM items
    ORDER BY item_price;

-- items with price above 80
SELECT * FROM items
    WHERE item_price >= 80
    ORDER BY item_price DESC;

-- The first 3 customers in alphabetical order of the first name (A-Z) – exclude the primary key column from the results.
SELECT first_name, last_name FROM customers
    ORDER BY first_name ASC
    LIMIT 3;

-- all the last names of customers 
SELECT last_name FROM customers
    ORDER BY last_name DESC;