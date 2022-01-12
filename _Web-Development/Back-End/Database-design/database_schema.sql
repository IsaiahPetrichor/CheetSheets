-- The #1 rule is seperation of concern and topic
-- instead of this table:
CREATE TABLE whole_database (
    person_id integer,
    first_name varchar,
    last_name varchar,
    school_id integer,
    school_name varchar,
    work_id integer,
    work_name varchar
);
-- create 3 seperate tables:
CREATE TABLE people (
    id integer,
    first_name varchar,
    last_name varchar
);
CREATE TABLE workplaces (
    id integer,
    name varchar
);
CREATE TABLE schools (
    id integer,
    name varchar
);
-- this is crucial to avoiding duplicate entries and inaccuracies.

-- snake case (word1_word2) is standard SQL practice

-- PRIMARY KEYS are the main key to a table, only one can exist
-- you can declare them at creation:
CREATE TABLE book (
  title varchar(100),
  isbn varchar(50) PRIMARY KEY,
  pages integer,
  price money,
  description varchar(256),
  publisher varchar(100)
);
-- or you can add them later:
ALTER TABLE schools
ADD PRIMARY KEY (id);

-- use the information schema to validate key existence
SELECT constraint_name, table_name, column_name
FROM information_schema.key_column_usage
WHERE table_name = 'book';

-- create composite primary keys when none of the columns are strictly unique on their own
CREATE TABLE popular_books (
  book_title varchar(100),
  author_name varchar(50),
  number_sold integer,
  number_previewed integer,
  PRIMARY KEY (book_title, author_name)
);

-- use REFERENCES to add a foreign key at table creation
CREATE TABLE chapter (
  id integer PRIMARY KEY,
  number integer,
  title varchar(50),
  content varchar(1024),
  book_isbn varchar(50) REFERENCES book(isbn)
);

-- select relational tables and join them
SELECT book.title AS book, chapter.title AS chapters
FROM book
JOIN chapter
  ON book.isbn = chapter.book_isbn;

-- There are 3 different types of relations a table can have.

/* One-to-One relationships are when a row of a table can only 
correspond to one row from another table, in order to enforce 
this relationship the table containing the foreign key needs to
use the UNIQUE keyword on the key itself. */
-- for example, two tables, One-to-One:
CREATE TABLE driver (
    license_id char(20) PRIMARY KEY,
    name varchar(20),
    address varchar(100),
    date_of_birth date
);
CREATE TABLE license (
    id integer PRIMARY KEY,
    state_issued varchar(20),
    date_issued date,
    date_expired  date,
    license_id char(20) 
    REFERENCES driver(license_id) UNIQUE
);

/* One-to-Many relationships are when a single row corresponds
to multiple entries in another table */
-- for example, using the book and chapter tables from above:
CREATE TABLE page (
  id integer PRIMARY KEY,
  chapter_id integer REFERENCES chapter(id),
  content text,
  header varchar(20),
  footer varchar(20)
);

ALTER TABLE chapter
DROP COLUMN content;

-- select all 3 tables using a single inner join
SELECT book.title AS book_title, chapter.title AS chapter_title, page.content AS page_content
FROM book
JOIN chapter
  ON book.isbn = chapter.book_isbn
JOIN page
  ON chapter.id = page.chapter_id;

/* Many-to-Many relationships consist of multiple rows of data 
correspond to multiple rows of another table. in order to implement
this in a database we would use a cross reference table / join table.
it has a composite primary key made of two foreign keys, one from
each table. */
-- for example:
CREATE TABLE books_authors (
  book_isbn varchar(50) REFERENCES book(isbn),
  author_email varchar(100) REFERENCES author(email),
  PRIMARY KEY (book_isbn, author_email)
);

-- select to show the inner one-to-many relationships
SELECT
  author.name AS author_name,
  author.email AS author_email,
  book.title AS book_title
FROM 
  author, book, books_authors
WHERE 
  author.email = books_authors.author_email
AND
  book.isbn = books_authors.book_isbn;

SELECT 
  book.title AS book_title, 
  author.name AS author_name, 
  book.description AS book_description
FROM 
  book, author, books_authors
WHERE 
  book.isbn = books_authors.book_isbn 
AND 
  author.email = books_authors.author_email;