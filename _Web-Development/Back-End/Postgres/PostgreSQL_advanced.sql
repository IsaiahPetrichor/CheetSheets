-- ACID (Atomicity, consistency, isolation, durability)
/*
Atomicity - guarantees that a database transaction succeeds or fails
    in its entirety. this ensures that partial transactions do not
    happen as they can cause massive issues.
Consistency - using validation, constraints and other methods, this
    protects the database from illegal transactions (transactions that
    break the rules of the schema)
Isolation - this property is to ensure that concurrent transactions 
    do not have an effect on one another and all transactions leave 
    the state of the database the same as if they were sequential.
Durability - by storing all completed transactions in non-volitile 
    memory (ie. disk-drives) instead of volitile memory (ie. RAM)
    we guarantee that in unforseen issues and power outages, the 
    database remains intact.
*/

-- Database Performance
    -- Indexes, organizations of data within a table

    -- select all indexes within a table
    SELECT *
    FROM pg_indexes
    WHERE tablename = 'table_name';

    -- get info on a query using EXPLAIN ANALYZE
    EXPLAIN ANALYZE SELECT *
    FROM table_name
    WHERE first_name = 'John';

    /* 
    indexes speed up search times and keep data organized. however,
    they come at the cost of also increasing the time it takes to 
    modify the table the index belongs to and also takes drive storage
    to hold the index itself.
    */

    -- CREATE INDEX, add _idx at the end of the index as best practice
    CREATE INDEX customers_city_idx
    ON customers(city);

    -- Create a multi-column index
    CREATE INDEX customers_last_name_first_name_idx
    ON customers(last_name, first_name);

    -- you can check size of a database using:
    SELECT pg_size_pretty
    (pg_total_relation_size('customers'));


-- Database Tuning & Benchmarking
/*

*/

-- Database Maintenance & Monitoring
/*

*/