CREATE TABLE students (
    id SERIAL PRIMARY KEY,
    first_name VARCHAR(100) NOT NULL,
    last_name VARCHAR(100) NOT NULL,
    birth_date DATE NOT NULL
);

-- instring students and convert string to date
INSERT INTO students (first_name, last_name, birth_date) VALUES
    ('Marc',    'Benichou',  TO_DATE('02/11/1998', 'DD/MM/YYYY')),
    ('Yoan',    'Cohen',     TO_DATE('03/12/2010', 'DD/MM/YYYY')),
    ('Lea',     'Benichou',  TO_DATE('27/07/1987', 'DD/MM/YYYY')),
    ('Amelia',  'Dux',       TO_DATE('07/04/1996', 'DD/MM/YYYY')),
    ('David',   'Grez',      TO_DATE('14/06/2003', 'DD/MM/YYYY')),
    ('Omer',    'Simpson',   TO_DATE('03/10/1980', 'DD/MM/YYYY'));

-- Adding my own record
INSERT INTO students (first_name, last_name, birth_date) VALUES 
    ('Soufiane', 'Amabraa', TO_DATE('23/11/1989', 'DD/MM/YYYY'));
-- fatching my record
SELECT * FROM students
    WHERE first_name = 'Soufiane' AND last_name = 'Amabraa';

-- fatching all records
SELECT * FROM students;


-- fatching only first_name and last_name
SELECT first_name, last_name FROM students;

-- fatching only first_name and last_name for id = 2
SELECT first_name, last_name FROM students
    WHERE id = 2;

-- Fetch the student whose last_name is Benichou AND first_name is Marc
SELECT first_name, last_name FROM students
    WHERE last_name = 'Benichou' AND first_name = 'Marc';

-- Fetch the students whose last_names are Benichou OR first_names are Marc.
SELECT first_name, last_name FROM students
    WHERE last_name = 'Benichou' OR first_name = 'Marc';

-- Fetch the students whose first_names contain the letter a.
SELECT first_name, last_name FROM students
    WHERE first_name LIKE '%a%';

-- Fetch the students whose first_names start with the letter a.
SELECT first_name, last_name FROM students
    WHERE first_name LIKE 'a%';

-- Fetch the students whose first_names end with the letter a.
SELECT first_name, last_name FROM students
    WHERE first_name LIKE '%a';

-- Fetch the students whose second to last letter of their first_names are a (Example: Leah).
SELECT first_name, last_name FROM students
    WHERE first_name LIKE '%a_';

--Fetch the students whose id’s are equal to 1 AND 3 .
SELECT first_name, last_name FROM students
    WHERE id IN (1, 3);

-- Fetch the students whose birth_dates are equal to or come after 1/01/2000. (show all their info).
SELECT * FROM students
    WHERE birth_date >= TO_DATE('01/01/2000', 'DD/MM/YYYY');

