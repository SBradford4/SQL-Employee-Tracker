// @ts-nocheck


// import { pool, connectionToDB } from '../connection.js';
// import inquirer from 'inquirer';
import { pool } from './connection.js';

// connectionToDB();

 class DB {
    constructor() {}

    async query(sql: string, args: any[] = []){
        const client = await pool.connect();
        try {
            const result = await client.query(sql, args);
            return result;
        } finally  {
            client.release();
        }
    }

    async findAllEmployees() {
        return this.query("SELECT employee.id, employee.first_name, employee.last_name, role.title, department.name AS department, role.salary, CONCAT(manager.first_name, ' ', manager.last_name) AS manager FROM employee LEFT JOIN role on employee.role_id = role.id LEFT JOIN department on role.department_id = department.id LEFT JOIN employee manager on manager.id = employee.manager_id; ");
    }

    async findAllRoles() {
        return this.query("SELECT role.id, role.title, department.name AS department, role.salary FROM role LEFT JOIN department on role.department_id = department.id; ");
    }

    async findAllDepartments() {
        return this.query("SELECT department.id, department.name;");
    }

    async createRole(role: any) {
        const { title, salary, department} =
        role;
        return this.query('INSERT INTO role (title, salary, department) VALUES ($1, $2, $3)',
        [title, salary, department_id, department_name]
        );
    }

    async createEmployee(employee: any) {
        const { first_name, last_name, role_id, manager_id } = employee;
        return this.query('INSERT INTO employee ( first_name, last_name, role_id, manager_id) VALUES ($1, $2, $3, $4)', [first_name, last_name, role_id, manager_id]

        );
    }

    async createDepartment(department: any) {
        const {department_id, department_name} =
        department;
        return this.query('INSERT INTO department ( department_name, department_id) VALUES ($1, $2)',
        [department_id, department_name]
        );
    }



}

export default new DB();


