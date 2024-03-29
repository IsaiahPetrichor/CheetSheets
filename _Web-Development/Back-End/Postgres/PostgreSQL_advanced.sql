-- ACID (Atomicity, consistency, isolation, durability)
{
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
}

-- Database Performance
    
-- Indexes, organizations of data within a table
{

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
}

-- Database Integrity & Maintenance

-- Triggers
{
    /*
    a database trigger is procedural code that is automatically 
    executed in response to certain events on a particular table or 
    view in a database. The trigger is mostly used for maintaining 
    the integrity of the information on the database.

    ** SIDE NOTE: Postgres uses EXECUTE PROCEDURE in older versions
        and EXECUTE FUNCTION in newer ones.
    */

    -- Creating a Trigger
    -- CREATE TRIGGER trigger_name
    CREATE TRIGGER insert_trigger
        -- BEFORE/AFTER <SQL_ACTION> ON table_name
        BEFORE INSERT ON customers
        -- FOR EACH ROW/STATEMENT (run per record or per query)
        FOR EACH ROW
        -- EXECUTE PROCEDURE/FUNCTION function_name();
        EXECUTE FUNCTION insert_function();
    /*
        BEFORE calls your trigger before the 
        query that fired the trigger runs, allowing you to apply the 
        actions in the function previous to the query. Specifically 
        letting you modify the row that is being modified when using an 
        INSERT or UPDATE, like we did in the previous lesson.
    */
    CREATE TRIGGER after_trigger
        AFTER UPDATE ON customers
        FOR EACH ROW
        EXECUTE FUNCTION log_customers_change();
    /*
        AFTER occurs once the query finishes its work. This allows your 
        trigger to activate once the query it was activated by has finished 
        its work. This will not let you modify the row that is being 
        modified as the process has already finished. This is quite useful 
        for logging purposes, such as inserting into an audit table to track
        who did a change and when.
    */

    -- Add focus to your triggers with the WHEN clause
    CREATE TRIGGER update_when_trigger
        BEFORE UPDATE ON clients
        FOR EACH ROW
        WHEN (NEW.total_spent >= 1000)
        EXECUTE FUNCTION set_high_spender();

    -- Triggers run ALPHABETICALLY not in order.

    -- Select all triggers in a database
    SELECT * FROM information_schema.triggers;

    -- Remove triggers using DROP TRIGGER
    DROP TRIGGER update_when_trigger ON clients;
}

-- Maintenance
{
    /*
    When an UPDATE or DELETE is called, PostgreSQL doesn’t physically 
    delete the content from the disk. Instead, the database engine 
    marks those rows so that they aren’t returned in user queries.

    DELETE doesn't remove the data and UPDATE actually DELETE's the
    old data (but keeps in on disk) and creates a new record
    */

    -- Check the sizes of a database
    SELECT 
    pg_size_pretty(pg_table_size('table_name')) as tbl_size, 
    pg_size_pretty(pg_indexes_size('table_name')) as idx_size,
    pg_size_pretty(pg_total_relation_size('table_name')) as total_size;
    -- pg_size_pretty() returns formatted sizing instead of bytes

    -- Use VACUUM to clean dead tuples
    VACUUM table_name;
    /*
    VACUUM will default to just reserve space for future updates on
    records with unique primary keys that match a live record

    AUTOVACUUM is enabled by Postgres on most databases by default
    */

    -- Check automated pg processes from the pg_stat_all_tables schema
    SELECT relname, 
        last_vacuum,
        last_autovacuum, 
        last_analyze,
        n_live_tup,
        n_dead_tup
    FROM pg_stat_all_tables 
    WHERE relname = 'books';

    -- VACUUM FULL will clear all unused data from a database
    VACUUM FULL table_name;
    /*
    This is a blocking function that should not be used on large
    production databases
    */

    -- Use TRUNCATE to clear all data without needing to VACUUM after
    TRUNCATE table_name;
}