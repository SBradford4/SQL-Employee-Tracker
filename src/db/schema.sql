\c postgres;
DROP DATABASE IF EXISTS company_db;
CREATE DATABASE company_db;
\c company_db;
-- See database in use --
SELECT current_database();



CREATE TABLE department (
    id INTEGER NOT Null Auto_INCREMENT PRIMARY KEY,
    name VARCHAR(30) UNIQUE NOT NULL
    );

    CREATE TABLE role (
    id INTEGER NOT NULL Auto_INCREMENT PRIMARY KEY,
    title VARCHAR(30) UNIQUE NOT NULL,
    salary DECIMAL NOT NULL,
    department_id INTEGER NOT NULL,
    FOREIGN KEY (department_id) REFERENCES department (id) ON DELETE SET NULL
    );

    CREATE TABLE employee (
    id INTEGER NOT NULL Auto_INCREMENT PRIMARY KEY,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    role_id INTEGER NOT NULL,
    manager_id INTEGER,
    FOREIGN KEY (role_id) REFERENCES role (id) ON DELETE CASCADE,
    FOREIGN KEY (manager_id) REFERENCES employee (id) ON DELETE SET NULL
);

