-- Find current Postgres user
SELECT current_user;

-- Find all database users
SELECT rolname
FROM pg_catalog.pg_roles;

-- Set role
SET ROLE role_name;

-- View all permissions that a role has
SELECT grantee, table_name, privilege_type
FROM information_schema.table_privileges
WHERE grantee = 'role_name';

-- Create a new role
CREATE ROLE role_name WITH permissions_list;
-- ex.
CREATE ROLE administrator WITH SUPERUSER LOGIN;

-- Change role permissions, give DB Creation permissions
ALTER ROLE engineer WITH CREATEDB;
-- Prepend 'NO' to permissions to nullify them

/* grant USAGE on the schema. In this example, analyst is 
also granted the ability to CREATE new tables in the schema. */
GRANT USAGE, CREATE ON SCHEMA finance TO analyst;
-- Then by granting the table specific permissions.
GRANT SELECT, UPDATE ON finance.revenue TO analyst;

-- Remove permissions
REVOKE UPDATE ON finance.revenue FROM analyst;

-- Give default permissions, only applies to objects created after
ALTER DEFAULT PRIVILEGES IN SCHEMA census
GRANT SELECT, DELETE, UPDATE, INSERT ON TABLES TO writer;

-- Groups & Inheritance
{
    /*
    For security reasons, PostgreSQL disallows the inheritance of 
    certain powerful permissions such as LOGIN, SUPERUSER, 
    CREATEDB, and CREATEROLE.
    */
    -- Make a new role group and give it to existing roles
    CREATE ROLE marketing WITH NOLOGIN ROLE alice, bob;

    -- Make a new role group and assign roles its permissions after
    CREATE ROLE finance WITH NOLOGIN;
    
    GRANT finance TO charlie;

    -- add a new role to a role group on creation
    CREATE ROLE fran WITH LOGIN IN ROLE employees, managers; 
}

-- Specific level security (CLS & RLS)
{
    -- Grant permissions to select but only on specific columns
    GRANT SELECT (project_code, project_name, project_status) 
        ON projects to employees;

    -- Grant permissions to select but only on specific rows
    CREATE POLICY user_is_salesperson ON accounts FOR DELETE
        TO sales USING (salesperson = current_user);
    
    -- Needs to be enabled
    ALTER TABLE accounts ENABLE ROW LEVEL SECURITY;
}