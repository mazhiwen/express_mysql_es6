-- create table users (
--     id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
--     accout VARCHAR(20) UNIQUE NOT NULL ,
--     password VARCHAR(20) NOT NULL


-- );



create table gameList (
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(50) UNIQUE NOT NULL ,
    releaseDate DATETIME

    

);



/*
source /Users/reborn/programs/express_mysql_es6/mysql.sql
alter table users AUTO_INCREMENT=10000;
insert into users (accout,password) values (1,2)

select * from users;
*/


