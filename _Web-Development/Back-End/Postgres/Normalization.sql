-- first form 1NF

-- second form 2NF

-- third form 3NF

/* 
The key to a normalized database is to seperate all columns in to
their own tables based on their pertainence to the primary key.
every column should directly relate to the primary key of the table.
*/

-- to normalize an existing database
-- create a new table using data from an existing table
CREATE TABLE majors AS
SELECT DISTINCT major_1, major_1_credits_reqd
FROM college;
-- then create a reference table
CREATE TABLE students_majors AS
SELECT major_1 as major, student_id
FROM college
UNION ALL
SELECT major_2 as major, student_id
FROM college
WHERE major_2 IS NOT NULL;
-- then drop the columns from the first table
ALTER TABLE college
DROP COLUMN major_1,
DROP COLUMN major_1_credits_reqd,
DROP COLUMN major_2,
DROP COLUMN major_2_credits_reqd;
-- check work
SELECT *
FROM students_majors
ORDER BY student_id
LIMIT 10;

-- when possible, design a normalized database schema
CREATE TABLE advisors(
  id integer PRIMARY KEY,
  email varchar(100) UNIQUE,
  name varchar(100),
  department varchar(100)
);

CREATE TABLE students(
  id integer PRIMARY KEY,
  name varchar(100),
  year varchar(50),
  email varchar(100) UNIQUE,
  advisor_id integer REFERENCES advisors(id)
);

CREATE TABLE majors(
  id integer PRIMARY KEY,
  major varchar(100),
  credits_reqd integer
);

CREATE TABLE students_majors(
  student_id integer REFERENCES students(id),
  major_id integer REFERENCES majors(id)
);

-- pull specific columns and join them
SELECT 
    student_id, 
    SUM(credits_reqd) AS total_credits, 
    MIN(email) as student_email
FROM students, students_majors, majors
WHERE 
    students.id = students_majors.student_id 
    AND 
    students_majors.major_id = majors.id
GROUP BY 1;