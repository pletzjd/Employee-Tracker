const inquirer = require('inquirer');
const mysql = require('mysql2');
const cTable = require('console.table');

const db = mysql.createConnection(
    {
      host: 'localhost',
      user: 'root',
      password: '',
      database: 'employees'
    },
    console.log(`Connected to the courses_db database.`)
  );

function continueYN(){
  inquirer
  .prompt([
      {
          type: 'list',
          choices: ['Yes', 'No'],
          message: 'Would you like to do something else?',
          name: 'continue'
      }
  ])
  .then((response)=>{
    if(response.continue === 'Yes'){
    mainMenu();
  }else{
    console.log('Bye')
    process.exit(1);
  }})
};

function mainMenu() {
    inquirer
        .prompt([
            {
                type: 'list',
                choices: ['View all departments', 'View all roles', 'View all employees', 'Add a department', 'Add a role', 'Add an employee', 'Update an employee role', 'Quit'],
                message: 'What would you like to do?',
                name: 'action'
            }
        ])
        .then((response)=>{
            if(response.action === 'View all departments'){
                db.query(`SELECT department.name AS "Department Name", department.id AS "Department ID" FROM department;`, (err, result) => {
                    if (err) {
                      console.log(err);
                    }
                    console.log(result);
                    continueYN();
                  });
            }else if(response.action === 'View all roles'){
              db.query(`SELECT role.title AS Title, role.id AS "Role ID", department.name AS Department, role.salary AS Salary FROM department INNER JOIN role ON department.id = role.department_id;`, (err, result) => {
                if (err) {
                  console.log(err);
                }
                console.log(result);
                continueYN();
              });
            }else if(response.action === 'View all employees'){
              db.query(`SELECT e.id AS ID, e.first_name AS "First Name", e.last_name AS "Last Name", role.title AS Title, department.name AS Department, role.salary AS Salary, CONCAT(m.first_name, " ", m.last_name) AS Manager FROM employee AS e LEFT JOIN role ON e.role_id = role.id LEFT JOIN department ON role.department_id = department.id LEFT JOIN employee AS m ON e.manager_id = m.id ORDER BY id;`,(err, result) =>{
                if (err) {
                  console.log(err);
                }
                console.log(result);
                continueYN();
              })
            }
        })
}

mainMenu();