INSERT INTO department (name)
VALUES ("Customer Service"),
       ("Sales"),
       ("Legal"),
       ("Accounting"),
       ("Engineering");

INSERT INTO role (title, salary, department_id)
VALUES ("Customer Service agent", 34000, 1),
       ("Customer Service Floor Manager", 40000, 1),
       ("Customer Service Head Manager", 50000, 1),
       ("Sales Associate", 34000, 2),
       ("Sales Floor Supervisor", 40000, 2),
       ("Sales Department Manager", 50000, 2),
       ("Junior Legal Associate", 50000, 3),
       ("Legal Associate", 70000, 3),
       ("Senior Legal Associate", 100000, 3),
       ("Junior Accountant", 40000, 4),
       ("Accountant", 55000, 4),
       ("Senior Accountant", 75000, 4),
       ("Junior Software Engineer", 60000, 5),
       ("Software Engineer", 75000, 5),
       ("Senior Software Engineer", 120000, 5);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Felicita","Strom",3, null),
       ("Ignat","Lauwens",2, 1),
       ("Sjakie","Stern",2, 1),
       ("Mus'ad","O Tuathail",1, 2),
       ("Tere","Munson",1, 3),
       ("Patrizia","Nystrom",6, null),
       ("Heike","Crouch",5, 6),
       ("Darina","Curtis",5, 6),
       ("Tabitha","Stepanek",4, 7),
       ("Fatima","Carl",4, 8),
       ("Aaron","Smolak",9, null),
       ("Harun","Mathieson",8, 11),
       ("Min-Jun","Woodham",8, 11),
       ("Sham'a","Picasso",7, 12),
       ("Tziporah","Herrera",7, 13),
       ("Mort","MacGilleChriosd",12, null),
       ("Goodwin","Peterson",11, 16),
       ("Louane","Stasiuk",11, 16),
       ("Alina","Terrell",10, 17),
       ("Michael","Martinez",10, 18),
       ("Liusaidh","Bellamy",15, null),
       ("Toon","Priestley",14, 21),
       ("Sofron","D'Angelo",14, 21),
       ("Ermete","Danielsson",13, 22),
       ("Julie","Kowalski",13, 23);




       