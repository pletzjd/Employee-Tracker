# Employee-Tracker
## Description

The goal of this project was to build an app for the command line interface to keep track of a database of employees for a company. This allows management to quickly see their company structure and get useful information about various staff members with information about their role in the company.

## Live Deployment link

The app does not have a live deployemnt but can be pulled from my github and installed
https://github.com/pletzjd/Employee-Tracker

## Installation
A copy of the code can be obtained by doing a pull request from the github repository above. Once a copy is on your machine open the command line interface in the Employee-Tracker folder. type in 'npm install' to install all the required packages. Then log into your your sql using the command 'mysql -u root -p'. You will be prompted for your sql password. Once you successfully log in type in the commands 'source db/schema.sql;' and 'source db/seeds.sql' to created the database and populate it with dummy data. You can now exit sql by typing in 'exit;'. Now make sure in index.js on line 12 you input your sql password and save.


## Usage

Once the program has been successfully installed you can run the program by typing 'node index.js' into the command line opened in the root folder of the program.

You will be presented with a list of option: view all departments, view all roles, view all employees, add a department, add a role, add an employee, update an employee role and quit.

View all departments: Displays a table in the command line showing all department ids and department names.

View all roles: Displays a table in the command line showing the title of all roles, the role's id and the department the role belongs to.

View all employees: Displays a table in the command line shwoing the employee's id, Thier first name, last name, their role, the department they work in, their salary and the manager they report (no manager is indicated by null).

Add a department: Prompts the user for the name of the department and adds it to the database.

Add a role: Prompts the user for the name of the role, the salary of the role and the department the role belongs to.

Add an employee: Prompts the user for the first name, last name, role of the employee and which manager they are to report to.

Update an employee role: Allows the user to select an existing employee from a list and select the new role they wish to assign to that employee.

Quit: Closes the program.

A video showing the navigation through the menues can be found here: https://drive.google.com/file/d/1m70xWeQ77oFxwGaohbmCHQ2Zq1yJAwaJ/view

## Credits

Site  developper(s):
- Jordan Pletzer: https://github.com/pletzjd

## License

MIT License

Copyright (c) [2022] [Jordan Daniel Joseph Pletzer]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.