-- (common) postgresql data types consist of the following:
CREATE TABLE data_types (
    bool_name boolean,
    -- varchar has an optional '(n)' property to specify max length
    text_name varchar(10),
    date_name date,
    int_name integer,
    /* numeric has optional (a, b) arguments specifying the amount of 
    numbers before and after the decimal point*/
    numeric_name numeric(2, 2),
    time_name time
);

CREATE TABLE attendees (
  id integer,
  name varchar,
  total_tickets_reserved integer, 
  standard_tickets_reserved integer, 
  vip_tickets_reserved integer
);

-- user Nullability constraints for data validation
CREATE TABLE speakers (
    id INTEGER NOT NULL,
    email VARCHAR NOT NULL,
    name VARCHAR NOT NULL,
    organization VARCHAR,
    title VARCHAR,
    years_in_role INTEGER
);

INSERT INTO speakers (id, email, name, organization, title, years_in_role)
VALUES (1, 'awilson@ABCcorp.com', 'A. Wilson', 'ABC Corp.', 'CTO', 6);

-- you can use ALTER TABLE to add or remove constraints
-- this updates speakers to have a 'not null' constraint on the names column
ALTER TABLE speakers
ALTER COLUMN name SET NOT NULL;

-- this updates speakers to backfill all null data in organizations to 'TBD'
UPDATE speakers
SET organization = 'TBD'
WHERE organization IS NULL;

-- this updated speakers to have a 'not null' on organization column
ALTER TABLE speakers
ALTER COLUMN organization SET NOT NULL;

/* Backfilling is a term occasionally used in DB engineering to refer to the 
process of adding or updating past values. */

-- Adding a check can increase the flexibility and specificity of data validation
-- Checks can also use logical operators like AND, OR, IN, LIKE, etc.
ALTER TABLE speakers
ADD CHECK (years_in_role > 0 AND years_in_role < 100);

ALTER TABLE attendees
ADD CHECK (standard_tickets_reserved + vip_tickets_reserved = total_tickets_reserved);

/* Unique constraints ensure that no two rows can contain the same data for the
specified column */
ALTER TABLE speakers
ADD UNIQUE (email);

-- can also be used in a 'CREATE TABLE' statement
CREATE TABLE registrations (
    id integer NOT NULL,
    attendee_id integer NOT NULL,
    session_timeslot timestamp NOT NULL,
    talk_id integer NOT NULL,
    UNIQUE (attendee_id, session_timeslot)
);

-- PRIMARY KEYs are like UNIQUE but there can only be one column per table
ALTER TABLE speakers
ADD PRIMARY KEY (id);
-- PKs also work as NOT NULL

INSERT INTO speakers (id, email, name, organization, title, years_in_role)
VALUES (1, 'J.Saunders@ABCTech.com', 'Joan Saunders', 'ABC Tech', 'Sr. Data Scientist', 6);

-- foreign keys are used to validate data being used in multiple relational tables
ALTER TABLE talks
ADD FOREIGN KEY (speaker_id)
REFERENCES speakers (id);

-- cascades, causes the child table to delete (or update) when the parent reference is updated
ALTER TABLE talks
ADD FOREIGN KEY (speaker_id)
REFERENCES speakers (id) ON DELETE CASCADE;

DELETE FROM speakers
WHERE id = 2;

-- alter a columns type
ALTER TABLE table_name
ALTER COLUMN col_name TYPE new_type;