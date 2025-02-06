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
async function viewAllDepartments() {
    try {
        let { rows } = await db.findAllDepartments();
        const deparmtents = rows;
        console.log('\n');
        console.table(deparmtents);
        mainMenu();
    }
    catch (error) {
        console.log(error);
    }
}
async function addDepartment() {
    try {
        const deptName = await inquirer.prompt({
            type: "input",
            name: "departmentName",
            message: "Please enter department name"
        });
        const departName = deptName.departmentName;
        let { rows } = await db.createDepartment(departName);
        const depts = rows;
        console.log('\n');
        console.table(depts);
        mainMenu();
    }
    catch (error) {
        console.log(error);
    }
}
async function viewAllRoles() {
    try {
        let { rows } = await db.findAllRoles();
        const roles = rows;
        console.log('\n');
        console.table(roles);
        mainMenu();
    }
    catch (error) {
        console.log(error);
    }
}
async function addRole() {
    try {
        let departments = await db.findAllDepartments();
        const deptChoices = departments.rows.map(dept => ({ name: dept.name, value: dept.id }));
        const newRole = await inquirer.prompt([
            {
                type: "input",
                name: "title",
                message: "Please enter job title"
            },
            {
                type: "input",
                name: "salary",
                message: "Please enter salary"
            },
            {
                type: "list",
                name: "department",
                message: "Please enter department",
                choices: deptChoices
            }
        ]);
        const role = {
            title: newRole.title,
            salary: newRole.salary,
            department: newRole.department
        };
        let { rows } = await db.createRole(role);
        const roles = rows;
        console.log('\n');
        console.table(roles);
        mainMenu();
    }
    catch (error) {
        console.log(error);
    }
}
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
async function addEmployee() {
    try {
        let res = await inquirer.prompt([
            {
                name: "first_name",
                message: "What is the employee's first name?"
            },
            {
                name: "last_name",
                message: "What is the employee's last name?"
            },
        ]);
        const firstName = res.first_name;
        const lastName = res.last_name;
        let { rows } = await db.findAllRoles();
        const roles = rows;
        const roleChoices = roles.map(role => ({
            name: role.title,
            value: role.id,
        }));
        let resTwo = await inquirer.prompt({
            type: 'list',
            name: 'roleId',
            message: "What is the employee's role?",
            choices: roleChoices,
        });
        const roleId = resTwo.roleId;
        let { rows: data } = await db.findAllEmployees();
        const employees = data;
        const managerChoices = employees.map(({ id, first_name, last_name }) => ({
            name: `${first_name} ${last_name}`,
            value: id,
        }));
        managerChoices.unshift({ name: 'None', value: null });
        let managerResponse = await inquirer.prompt({
            type: 'list',
            name: 'managerId',
            message: "What is the manager's role?",
            choices: managerChoices,
        });
        const employee = {
            manager_id: managerResponse.managerId,
            role_id: roleId,
            first_name: firstName,
            last_name: lastName,
        };
        db.createEmployee(employee);
        console.log(`Added ${firstName} ${lastName} to the database`);
        mainMenu();
    }
    catch (error) {
        console.log(error);
    }
}
async function updateanEmployeeRole() {
    try {
        let employees = await db.findAllEmployees();
        let employeesChoices = employees.rows.map(emp => ({ name: `${emp.first_name} ${emp.last_name}`, value: emp.id }));
        let roles = await db.findAllRoles();
        let rolesChoices = roles.rows.map(role => ({ name: role.title, value: role.id }));
        let res = await inquirer.prompt([
            {
                name: "employee",
                message: "Which employee's role do you want to update?",
                type: "list",
                choices: employeesChoices
            },
            {
                name: "role",
                message: "Which role do youn want to assign the selected employee?",
                type: "list",
                choices: rolesChoices
            },
        ]);
        const employeeId = res.employee;
        const rolesId = res.role;
        let { rows } = await db.updateEmployee(employeeId, rolesId);
        const updateEmployee = rows;
        console.log('\n');
        console.table(updateEmployee);
        mainMenu();
    }
    catch (error) {
        console.log(error);
    }
}
mainMenu();
