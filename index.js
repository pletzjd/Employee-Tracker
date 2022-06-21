const inquirer = require('inquirer');
const sql = require('mysql2');
const cTable = require('console.table');

let dontQuit = true;

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
                mainMenu()
            }else{
                console.log('Bye')
                return
            }
        })
}

mainMenu();