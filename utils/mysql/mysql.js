let mysql = require('mysql');
let pool  = mysql.createPool({
    connectionLimit : 1,
    host            : 'localhost',
    user            : 'root',
    password        : 'password',
    database        : 'second_main',
    insecureAuth : true
});

export {pool as mysql}