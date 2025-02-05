// @ts-nocheck
import inquirer from 'inquirer';
import db from "./db/query.js";
const mainMenu = async () => {
    try {
        const { operation } = await inquirer.prompt([
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
                    'Update an employee role',
                    'View employees by Manager',
                    'View employees by department',
                    'View the total utilized budget of a department',
                    'EXIT'
                ]
            }
        ]);
        switch (operation) {
            case "View All Departments":
                await viewAllDepartments();
                break;
            case "View All Roles":
                await viewAllRoles();
                break;
            case "View All Employees":
                await viewAllEmployees();
                break;
            case "Add a Department":
                await addDepartment();
                break;
            case "Add a Role":
                await addRole();
                break;
            case "Add an Employee":
                await addEmployee();
                break;
            case "Update an Employee Role":
                await updateEmployee();
                break;
            case "Add a Manager":
                await addaManager();
                break;
            case "Update an employee role":
                await updateanEmployeeRole();
                break;
            case "View employees by Manager":
                await viewEmployeesByManager();
                break;
            case "View employees by department":
                await viewEmployeesByDepartment();
                break;
            case "Delete department | roles | employees":
                await deleteDepartment; //roles employees
                break;
            case "View the total utilized budget of a department":
                await viewTotalUtilizedBudgetofDepartment();
                break;
            case 'Exit':
                console.log("Goodbye!");
                process.exit();
        }
    }
    catch (error) {
        console.log(error);
    }
};
async function viewAllEmployees() {
    try {
        let { rows } = await db.findAllEmployees();
        const employees = rows;
        console.log('\n');
        console.table(employees);
        mainMenu();
    }
    catch (error) {
        console.log(error);
    }
}
function addEmployee() {
    inquirer.prompt([
        {
            name: "first_name",
            message: "What is the employee's first name?"
        },
        {
            name: "last_name",
            message: "What is the employee's last name?"
        },
    ]).then((res) => {
        const firstName = res.first_name;
        const lastName = res.last_name;
        db.findAllRoles().then(({ rows }) => {
            const roles = rows;
            const roleChoices = roles.map(({ id, title })({
                name: title,
                value: id,
            }));
            inquirer.prompt({
                type: 'list',
                name: 'roleId',
                message: "What is the employee's role?",
                choices: roleChoices,
            }).then((res) => {
                const roleId = res.roleId;
                db.findAllEmployees().then(({ rows }) => {
                    const employees = rows;
                    const managerChoices = employees.map(({ id, first_name, last_name }) => ({
                        name: `${fist_name} ${last_name}`,
                        value: id,
                    }));
                    managerChoices.unshift({ name: 'None', value: null });
                    inquirer.prompt({
                        type: 'list',
                        name: 'managerId',
                        message: "What is the manager's role?",
                        choices: managerChoices,
                    }).then((res) => {
                        const employee = {
                            manager_id: res.managerId,
                            role_id: roleId,
                            first_name: firstName,
                            last_name: lastName,
                        };
                        db.createEmployee(employee);
                    }).then(() => console.log(`Added ${firstName} ${lastName} to the database`)).then(() => mainMenu());
                });
            });
        });
    });
}
mainMenu();
