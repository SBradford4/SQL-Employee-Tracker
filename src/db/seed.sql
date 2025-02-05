INSERT INTO department(id, name)
VALUES 
('Sales'), 
('Engineering'), 
('Finance'), 
('Legal');

INSERT INTO roles(id, title, salary, department_id)
VALUES 
(1, 'Sales Lead', 10000, 'Sales'), 
(2, 'Salesperson', 20000, 'Sales'), 
(3, 'Lead Engineer', 15000, 'Engineering'), 
(4, 'Software Engineer', 12000, 'Engineering'),
(5, 'Account Manager', 25000, 'Finance'),
(6, 'Accountant', 12500, 'Finance'),
(7, 'Legal Team', 25000, 'Legal'),
(8, 'Lawyer', 35000, 'Legal'); 

INSERT INTO employee(id, first_name, last_name, role_id, manager_id)
VALUES 
(1, 'John', 'Doe', 1, NULL), 
(2, 'Mike', 'Chan', 2,'John Doe'), 
(3, 'Ashley', 'Rodriguez', 3, Null), 
(4, 'Kevin, Tupik', 2, 'Ashley Rodriguez'),
(5, 'Kunal, Singh', 3, Null),
(6, 'Malia, Brown', 3, 'Kunal Singh'),
(7, 'Sarah, Lourd', 4, Null),
(8, 'Tom', 'Allen', 4, 'Sarah Lourd');

