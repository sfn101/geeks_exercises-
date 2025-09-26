-- CRATING THE TABELES

CREATE TABLE IF NOT EXISTS customers (
    id SERIAL PRIMARY KEY,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL);

CREATE TABLE IF NOT EXISTS customer_profiles (
    id SERIAL PRIMARY KEY,
    customer_id INT REFERENCES customers(id) ON DELETE CASCADE,
    is_logged_in BOOLEAN DEFAULT FALSE);



-- INSERTING DATA INTO THE TABLES
INSERT INTO customers (first_name, last_name) VALUES
('John', 'Doe'),
('Jerome', 'Lalu'),
('Lea', 'Rive');

INSERT INTO customer_profiles (customer_id, is_logged_in) VALUES
    ((SELECT id FROM customers WHERE first_name = 'John'), TRUE),
    ((SELECT id FROM customers WHERE first_name = 'Jerome'), FALSE);

-- first name of loged in customers
SELECT c.first_name
FROM customers c
JOIN customer_profiles cp ON c.id = cp.customer_id
WHERE cp.is_logged_in = TRUE;

-- all customers with their login status
SELECT c.first_name, cp.is_logged_in FROM customers c
    LEFT JOIN customer_profiles cp ON c.id = cp.customer_id;

-- count of logged out customers
SELECT COUNT(*) AS logout_customers FROM customers
JOIN customer_profiles cp ON customers.id = cp.customer_id
WHERE cp.is_logged_in = FALSE;


-- books table
CREATE TABLE IF NOT EXISTS books (
    book_id SERIAL PRIMARY KEY,
    title VARCHAR(100) NOT NULL,
    author VARCHAR(100) NOT NULL
);

-- Insert books
INSERT INTO books (title, author) VALUES
    ('Alice In Wonderland', 'Lewis Carroll'),
    ('Harry Potter', 'J.K. Rowling'),
    ('To Kill a Mockingbird', 'Harper Lee');


-- table of students under 15  
CREATE TABLE IF NOT EXISTS students (
    student_id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    age INT NOT NULL CHECK (age < 15)
);

-- Insert students
INSERT INTO students (name, age) VALUES
    ('John', 12),
    ('Lera', 11),
    ('Patrick', 10),
    ('Bob', 14);

-- library table
CREATE TABLE IF NOT EXISTS library (
    book_fk_id INT REFERENCES books(book_id) ON DELETE CASCADE ON UPDATE CASCADE,
    student_fk_id INT REFERENCES students(student_id) ON DELETE CASCADE ON UPDATE CASCADE,
    borrow_date DATE DEFAULT CURRENT_DATE,
    PRIMARY KEY (book_fk_id, student_fk_id)
);

-- Insert library records
INSERT INTO library (book_fk_id, student_fk_id, borrow_date) VALUES
    ((SELECT book_id FROM books WHERE title = 'Alice In Wonderland'), (SELECT student_id FROM students WHERE name = 'John'), '2022-02-15'),
    ((SELECT book_id FROM books WHERE title = 'Alice In Wonderland'), (SELECT student_id FROM students WHERE name = 'Lera'), '2021-05-23'),
    ((SELECT book_id FROM books WHERE title = 'To Kill a Mockingbird'), (SELECT student_id FROM students WHERE name = 'Bob'), '2021-03-03'),
    ((SELECT book_id FROM books WHERE title = 'Harry Potter'), (SELECT student_id FROM students WHERE name = 'Bob'), '2021-08-12');


-- despaly the data

SELECT * FROM library;

SELECT s.name, b.title
FROM students s
JOIN library l ON s.student_id = l.student_fk_id
JOIN books b ON l.book_fk_id = b.book_id;


-- avreg age of students who borrowed 'Alice In Wonderland'
SELECT ROUND(AVG(s.age)) AS average_age
FROM students s
JOIN library l ON s.student_id = l.student_fk_id
JOIN books b ON l.book_fk_id = b.book_id
WHERE b.title = 'Alice In Wonderland';

-- deleting a student
DELETE FROM students WHERE name = 'Bob';

-- the junction table after deletion will delete the records related to Bob
SELECT * FROM library;