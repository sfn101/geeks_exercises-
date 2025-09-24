-- Fetch the first four students. You have to order the four students alphabetically by last_name.

SELECT first_name, last_name, birth_date FROM students
    LIMIT 4;
    ORDER BY last_name ASC;


-- Fetch the details of the youngest student.
SELECT first_name, last_name, birth_date FROM students
    ORDER BY birth_date DESC
    LIMIT 1;


-- Fetch three students skipping the first two students.
SELECT first_name, last_name, birth_date FROM students
    LIMIT 3
    OFFSET 2;