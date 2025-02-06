

# Employee Tracker

## Description
The Employee Tracker is a command-line application designed to help business owners manage their company's employee database. 
This application allows users to view and manage departments, roles, and employees, streamlining the process of organizing and planning business operations.

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Questions](#questions)
- [Links](#links)

## Installation

To install the app on your computer.

1. Clone the repo
   ```sh
   git clone https://github.com/SBradford4/SQL-Employee-Tracker.git
   ```
3. Install NPM packages
   ```sh
   npm install
   ```
4. Ensure that you have PostgreSQL installed and running. 
    ``` sh
    psql -U username
    ```
5. Run the schema
    ``` sh
     \i /src/db/schema.sql
    ```
6. Seed the data
    ``` sh
     \i /src/db/seed.sql
    ```

## Usage

To start the application, run the following command in your terminal:
``` sh
npm run build
```
``` sh
npm start
```

Follow the prompts to view and manage departments, roles, and employees. The application provides options to:

View all departments
View all roles
View all employees
Add a department
Add a role
Add an employee
Update an employee's role

## License
This project is licensed under the MIT License. See `LICENSE` for more information.

## Contributing
Shelia Bradford [https://github.com/SBradford4/](https://github.com/SBradford4/)

## Questions
If you have any questions about the project, feel free to reach out to me:

Name: Shelia Bradford
GitHub: [https://github.com/SBradford4/](https://github.com/SBradford4/)

### Links
- Walk Through Video Link: