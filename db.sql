create database dac2023;

use dac2023;

create table employee(
    id INTEGER PRIMARY KEY auto_increment,
    e_name VARCHAR(100),
    email VARCHAR(1024),
    password VARCHAR(50),
    emp_id INTEGER,
    dname VARCHAR(50),
    doj date
);

insert into employee(e_name, email, password,emp_id,dname,doj) values ('emp1', 'emp@.com','emp1',1001,'IT','2015-05-05');
