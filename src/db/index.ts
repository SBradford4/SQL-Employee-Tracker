// @ts-nocheck


import { pool, connectionToDB } from './connection.js';
import inquirer from 'inquirer';


connectionToDB();
const mainMenu = () => {
    inquirer
        .prompt([

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
                    'Add a Manager',
                    'Update employee manager',
                    'View employees by Manager',
                    'View employees by department',
                    'Delete department | Roles | Employees',
                    'View the total utilized budget of a department',
                    'EXIT'

                ]
            }
        ]).then((answers) => {
        // Use user feedback for... whatever!!

        if (answers.operation === "View All Departments") {
            viewAllDepartments();
        } else if (answers.operation === "View All Roles") {
            viewAllRoles();
        } else if (answers.operation === "View All Employees") {
            viewAllEmployees();
        } else if (answers.operation === "Add a Department") {
            addDepartment();
        } else if (answers.operation === "Add a Role") {
        } else if (answers.operation === "Add an Employee") {
            addEmployee();
        } else if (answers.operation === "Update an Employee Role") {
        } else if (answers.operation === "Add a Manager") {
        } else if (answers.operation === "Update employees by Manager") {   
        } else if (answers.operation === "View employees by Manager") {
        } else if (answers.operation === "View employees by department") {
        } else if (answers.operation === "View the total utilized budget of a departmnent") {    
        } else if (answers.operation === "Quit") {
            console.log("Goodbye!");
            process.exit(); // End program when user selects "Quit"
        }

    });
};


const viewAllDepartments = async () => {
    pool.query("SELECT * FROM department", (error, result) => {
        if (error) {
            console.error(error);
        } else {
            console.table(rows);
        }
         mainMenu()

    });

};
const viewAllRoles = async () => {
    pool.query("SELECT * FROM role", (error, result) => {
    if (error) {
        console.error(error);
    } else {
        console.table(rows);
    }
    mainMenu()

});
      
}

const viewALLEmployees = async () => {
    pool.query("SELECT * From employees", (error, result) => {
        if (error) {
            console.error(error);
        }
        mainMenu()

    });

}
mainMenu();
