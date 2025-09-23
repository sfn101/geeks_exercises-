-- Create a new databases
CREATE TABLE IF NOT EXISTS items();
CREATE TABLE IF NOT EXISTS customers();

-- Alter the 'items' table to add new columns
ALTER TABLE items 
    ADD COLUMN IF NOT EXISTS 
        item_id SERIAL PRIMARY KEY,
    ADD COLUMN IF NOT EXISTS
        item_name VARCHAR(100) NOT NULL,
    ADD COLUMN IF NOT EXISTS
        item_price DECIMAL(10, 2) NOT NULL
;

-- insrting data into the 'items' table
INSERT INTO items (item_name, item_price) VALUES
    ('Small Desk', 100.00),
    ('Large Desk', 300.00),
    ('Fan', 80.00);


-- retreving all itmes
SELECT * FROM items;


SELECT * FROM items 
    WHERE item_price > 80;


-- retreving all itmes PRICE UNDER 300
SELECT * FROM items 
    WHERE item_price < 300;

-- ALTER  the custmer table

ALTER TABLE customers 
    ADD COLUMN IF NOT EXISTS 
        customer_id SERIAL PRIMARY KEY,
    ADD COLUMN IF NOT EXISTS
        first_name VARCHAR(100) NOT NULL,
    ADD COLUMN IF NOT EXISTS
        last_name VARCHAR(100) NOT NULL
;


-- inserting data into the 'customers' table

INSERT INTO customers (first_name, last_name) VALUES
    ('Greg', 'Jones'),
    ('Sandra', 'Jones'),
    ('Scott', 'Scott'),
    ('Trevor', 'Green'),
    ('Melanie', 'Johnson');


-- retreving all customers
SELECT * FROM customers;

-- retreving all customers with last name 'Smith' "there is no smith"
SELECT * FROM customers 
    WHERE last_name = 'Smith';

-- retreving all customers with last name 'Jones'
SELECT * FROM customers 
    WHERE last_name = 'Jones';

-- retreving all customers with first name  not 'Scott'
SELECT * FROM customers 
    WHERE NOT first_name ='Scott';

