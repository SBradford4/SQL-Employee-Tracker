// @ts-nocheck
import { pool, connectionToDB } from './connection.js';
import inquirer from 'inquirer';
connectionToDB();
const questions = [
    {
        type: "list",
        name: "operation",
        message: 'What would you like to do?',
        choices: [
            'View All Departments',
            'View All Roles',
            'View All Employees',
            'Add a Department',
            'Add a Role',
            'Add an Employee',
            'Update an Employee Role',
            'Quit'
        ]
    }
];
inquirer
    .prompt(questions)
    .then((answers) => {
    // Use user feedback for... whatever!!
    console.log(answers.operation);
    if (answers.operation == "View All Departments") {
        viewAllDepartments();
    }
    else if (answers.operation == "View All Roles") {
        viewAllRoles();
    }
    else if (answers.operation == "View All Employees") {
        viewAllEmployees();
    }
    else if (answers.operation == "Add a Department") {
        addDepartment();
    }
    else if (answers.operation == "Add a Role") {
        addRole();
    }
    else if (answers.operation == "Add an Employee") {
        addEmployee();
    }
    else if (answers.operation == "Update an Employee Role") {
        updateEmployee();
    }
    else if (answers.operation == "Quit") {
        process.exit();
    }
})
    .catch((error) => {
    if (error.isTtyError) {
        // Prompt couldn't be rendered in the current environment
        console.log(error.isTtyError);
    }
    else {
        // Something else went wrong
        console.log(error);
    }
});
const viewAllDepartments = async () => {
    pool.query("SELECT * from department", (error, result) => {
        if (error) {
            console.error(error);
        }
        else {
            console.table(result.rows);
        }
    });
};
const viewAllRoles = async () => {
};
const viewAllEmployees = async () => {
};
const addDepartment = async () => {
};
const addRole = async () => {
};
const addEmployee = async () => {
};
const updateEmployee = async () => {
};
