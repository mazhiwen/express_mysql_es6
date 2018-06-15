import {mysql} from '../utils/mysql/mysql';

var express = require('express');
var router = express.Router();

// var mysql = require();
// var connection = mysql.createConnection({
//   host     : 'localhost',
//   user     : 'root',
//   password : 'password',
//   database:'mysql',
//   insecureAuth : true
// });
// connection.connect();


/* GET users listing. */
router.get('/', function(req, res, next) {
  
  

  

  mysql.query('SELECT * FROM users', function(err, rows, fields) {
    // console.log(err);
    // console.log(rows);
    // console.log(fields);
    if (err) throw err;
    console.log('The solution is: ', rows);
    res.send(rows);
  });
  // connection.end();



  // res.send('respond with a resource');
});

module.exports = router;
