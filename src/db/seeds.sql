INSERT INTO department(name)
VALUES 
('Sales'), 
('Engineering'), 
('Finance'), 
('Legal');

INSERT INTO role(title, salary, department_id)
VALUES 
('Sales Lead', 10000, 1), 
('Salesperson', 20000, 1), 
('Lead Engineer', 15000, 2), 
('Account Manager', 25000, 3),
('Lawyer', 35000, 4); 

INSERT INTO employee(first_name, last_name, role_id, manager_id)
VALUES 
('John', 'Doe', 1, NULL), 
('Mike', 'Chan', 2, 1), 
('Ashley', 'Rodriguez', 3, 2), 
('Tom', 'Allen', 5, 3);