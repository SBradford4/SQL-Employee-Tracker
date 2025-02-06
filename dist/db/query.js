// @ts-nocheck
// import { pool, connectionToDB } from '../connection.js';
// import inquirer from 'inquirer';
import { pool } from './connection.js';
// connectionToDB();
class DB {
    constructor() { }
    async query(sql, args = []) {
        const client = await pool.connect();
        try {
            const result = await client.query(sql, args);
            return result;
        }
        finally {
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
        return this.query("SELECT department.id, department.name from department;");
    }
    async createRole(role) {
        const { title, salary, department } = role;
        return this.query('INSERT INTO role (title, salary, department_id) VALUES ($1, $2, $3) RETURNING *;', [title, salary, department]);
    }
    async createEmployee(employee) {
        const { first_name, last_name, role_id, manager_id } = employee;
        return this.query('INSERT INTO employee ( first_name, last_name, role_id, manager_id) VALUES ($1, $2, $3, $4) RETURNING *;', [first_name, last_name, role_id, manager_id]);
    }
    async updateEmployee(employeeId, roleId) {
        return this.query('UPDATE employee SET role_id = $1 WHERE id = $2 RETURNING *;', [roleId, employeeId]);
    }
    async createDepartment(department_name) {
        return this.query('INSERT INTO department (name) VALUES ($1) RETURNING *;', [department_name]);
    }
}
export default new DB();
