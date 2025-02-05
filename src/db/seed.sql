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
('Software Engineer', 12000, 2),
('Account Manager', 25000, 'Finance'),
('Accountant', 12500, 'Finance'),
('Legal Team', 25000, 'Legal'),
('Lawyer', 35000, 'Legal'); 

INSERT INTO employee(first_name, last_name, role_id, manager_id)
VALUES 
('John', 'Doe', 1, NULL), 
('Mike', 'Chan', 2, 1), 
('Ashley', 'Rodriguez', 3, Null), 
(4, 'Kevin, Tupik', 2, 'Ashley Rodriguez'),
(5, 'Kunal, Singh', 3, Null),
(6, 'Malia, Brown', 3, 'Kunal Singh'),
(7, 'Sarah, Lourd', 4, Null),
(8, 'Tom', 'Allen', 4, 'Sarah Lourd');

