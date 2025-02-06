INSERT INTO department( name)
VALUES 
('Sales'), 
('Engineering'), 
('Finance'), 
('Legal');

INSERT INTO role( title, salary, department_id)
VALUES 
('Sales Lead', 10000, 1), 
('Salesperson', 20000, 1), 
('Lead Engineer', 15000, 2), 
('Software Engineer', 12000, 2);

INSERT INTO employee(first_name, last_name, role_id, manager_id)
VALUES 
('John', 'Doe', 1, NULL), 
('Mike', 'Chan', 2, 1), 
('Ashley', 'Rodriguez', 3, Null), 
('Kevin', 'Tupik', 2, 1),
('Kunal', 'Singh', 3, Null),
('Malia', 'Brown', 3, 2),
('Sarah', 'Lourd', 4, Null),
('Tom', 'Allen', 4, 3);

