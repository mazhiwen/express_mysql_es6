import {mysql} from '../utils/mysql/mysql';
import {JWTSecret} from '../configs';

let express = require('express');
let router = express.Router();

let jwt=require('jsonwebtoken');

/* GET users listing. */
router.get('/', function(req, res, next) {
  mysql.query('SELECT * FROM users', function(err, rows, fields) {
    if (err) throw err;
    res.send(rows);
  });
});

// let token=jwt.sign({account:'mazhiwen'},JWTSecret);
// console.log(token);
// jwt.verify(token,JWTSecret,function(err,decoded){
  
// });
router.post('/create', function(req, res, next) {
  mysql.query(`INSERT INTO users (accout,password) values (${req.body.account},${req.body.password})`, function(err, rows, fields) {
    if (err) {
      let  message='错误';
      if(err.code=='ER_DUP_ENTRY'){
        message='用户名称重复'
      }
      res.send({
        status:500,
        message:message
      });
    }else{
      res.send({
        status:200,
        message:'成功'
      });
    }
  });
});

router.post('/login', function(req, res, next) {
  mysql.query(`select password from users where accout='${req.body.account}'`, function(err, rows, fields) {
    
    if (err) {
      let  message='系统错误';
      res.send({
        status:500,
        message:message
      });
    }else{
      
      if(rows.length>0){
        if(rows[0].password==req.body.password){
          let token=jwt.sign({account:req.body.account},JWTSecret);
          res.send({
            status:200,
            message:'成功',
            data:{
              token:token
            }
          });
        }else{
          res.send({
            status:400,
            message:'密码错误'
          });
        }
      }else{
        res.send({
          status:400,
          message:'账号不存在'
        });
      }
      
      
    }
  });
});
module.exports = router;
