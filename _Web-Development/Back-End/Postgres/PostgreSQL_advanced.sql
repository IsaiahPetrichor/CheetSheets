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

    an index should be made on each column that is used in frequent
    searches, you should order the index columns in order by usage
    frequency.
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

    -- Partial indexes are used to index a subset of a table
    -- only useful on very large data sets.
    CREATE INDEX users_user_name_internal_idx 
        ON users (user_name)
    WHERE email_address 
        LIKE '%@wellsfargo.com';

    CREATE INDEX customers_state_name_email_address_ordered_idx
    ON customers (state_name DESC, email_address ASC);

    -- all primary keys are automatically made into unique indexes

    -- Clustered indexes physically organize data in tables
    /* A note:
        Postgres, unlike other systems, will not automatically use
        existing cluster indexes when altering or adding new data.
        you must re-cluster to properly maintain the organization.

        **this is done in Postgres to maintain speedy operations.
    */
    -- Cluster by index
    CLUSTER customers
    USING customers_last_name_first_name_idx;
    -- re-cluster a table
    CLUSTER customers;
    -- re-cluster entire database
    CLUSTER;

    /*
    If you frequently use an index for one column and another for
    a different column but also frequently use them together, weigh
    the benefits of making a combined index
    */

    /* 
    unique indexes can be made, as well as using functions in 
    an index. be very careful using these as it can be incredibly
    taxing on inserts and updates 
    */
    CREATE UNIQUE INDEX customers_email_address_lower_unique_idx
    ON customers (LOWER(email_address));

    -- drop indexes, same syntax as others
    DROP INDEX orders_customer_id_book_id_idx;

    -- Select multiple tables from pg_indexes without multiple ORs
    SELECT *
    FROM pg_indexes
    WHERE tablename IN ('customers', 'books', 'orders')
    ORDER BY tablename, indexname;

-- Database Triggers