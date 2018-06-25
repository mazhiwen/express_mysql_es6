import {mysql} from '../utils/mysql/mysql';

var express = require('express');
var router = express.Router();


/* GET users listing. */
router.get('/', function(req, res, next) {
  mysql.query('SELECT * FROM users', function(err, rows, fields) {
    if (err) throw err;
    res.send(rows);
  });
});
router.post('/create', function(req, res, next) {
  
  mysql.query(`INSERT INTO users (accout,password) values (${req.body.account},${req.body.password})`, function(err, rows, fields) {
    console.log(err);
    // if (err) throw err;
    res.send({
      status:200,
      message:''
    });
  });
});
module.exports = router;
