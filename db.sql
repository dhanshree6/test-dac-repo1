create database dac2023;

use dac2023;

create table Book(
    id INTEGER PRIMARY KEY auto_increment,
    b_name VARCHAR(100),
    author VARCHAR(1024),
    booktype VARCHAR(50),
    price INTEGER,
    pubdate date,
    lang VARCHAR(50)
);

insert into Book(b_name, author,booktype,price,pubdate,lang) values ('book1', 'auth1','booktype1',100,'2015-05-05','English');
