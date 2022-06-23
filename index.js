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
                db.query(`SELECT department.name AS "Department Name", department.id AS "Department ID" FROM department`, (err, result) => {
                    if (err) {
                      console.log(err);
                    }
                    console.log(result);
                    continueYN();
                  });
            }else if(response.action === 'View all roles'){
              db.query(`SELECT role.title, role.id AS "role id", department.name AS "department", role.salary FROM department INNER JOIN role ON department.id = role.department_id`, (err, result) => {
                if (err) {
                  console.log(err);
                }
                console.log(result);
                continueYN();
              });
            }
        })
}

mainMenu();