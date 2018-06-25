create table users (
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    accout VARCHAR(20) UNIQUE NOT NULL ,
    password VARCHAR(20) NOT NULL


);

/*
source /Users/reborn/programs/express_mysql_es6/mysql.sql
alter table users AUTO_INCREMENT=10000;
insert into users (accout,password) values (1,2)

select * from users;
*/