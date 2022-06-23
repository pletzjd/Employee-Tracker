const inquirer = require('inquirer');
const mysql = require('mysql2');
const cTable = require('console.table');
let departmentList = []

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

function addDepartment(){
  inquirer
  .prompt([
      {
          type: 'input',
          message: 'What is the name of the new department?',
          name: 'department'
      }
  ])
  .then((response)=>{
    db.query(`INSERT INTO department(name) VALUES(?)`,response.department, (err, result) => {
      if (err) {
        console.log(err);
      }
      console.log(`Added Department: ${response.department}`);
      continueYN();
    })
})
}

function departmentListGenerator(){
  departmentList = []
  db.query(`SELECT department.name, department.id FROM department ORDER BY id;`, (err, result) => {
    if (err) {
      console.log(err);
    }
    for (let i=0;i<result.length;i++){
      departmentList.push(result[i].name);
    }
  });
}

function addRole(){

  inquirer
  .prompt([
      {
          type: 'input',
          message: 'What is the name of the new role?',
          name: 'role'
      },
      {
        type: 'input',
        message: 'What is the salary for this role?',
        name: 'salary'
      },
      {
        type: 'list',
        choices: departmentList,
        message: 'Which department does this role belong to?',
        name: 'department'
      }
  ])
  .then((response)=>{
    departmentId = (departmentList.indexOf(response.department)+1)
    console.log(departmentId)
    db.query(`INSERT INTO role (title, salary, department_id) VALUES(?,?,?)`,[response.role,response.salary,departmentId], (err, result) => {
      if (err) {
        console.log(err);
      }
      console.log(`Added Role: ${response.role}`);
      continueYN();
    })
})
}

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
            }else if(response.action === 'Add a department'){
              addDepartment();
            }else if(response.action === 'Add a role'){
              departmentListGenerator()
              addRole();
            }
        })
}

mainMenu();