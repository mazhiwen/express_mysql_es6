import {mysql} from '../utils/mysql/mysql';
import {JWTSecret} from '../configs';

let express = require('express');
let router = express.Router();

let jwt=require('jsonwebtoken');

router.get('/list', function(req, res, next) {
  res.send({
    status:200,
    data:[{
      id:'1',
      name:'dsadsa',
      developer:'ssss',
      releaseDate:1532329773657
    }]
  })
});


router.put('/create', function(req, res, next) {
  let {name,developer,releaseDate}=req.body;
  mysql.query(`INSERT INTO gameList values (NULL,${name},${developer},${releaseDate})`, function(err, rows, fields) {
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
  // mysql.query(`select password from users where accout='${req.body.account}'`, function(err, rows, fields) {
  //   if (err) {
  //     let  message='系统错误';
  //     res.send({
  //       status:500,
  //       message:message
  //     });
  //   }else{
  //     if(rows.length>0){
  //       if(rows[0].password==req.body.password){
  //         let token=jwt.sign({account:req.body.account},JWTSecret);
  //         res.send({
  //           status:200,
  //           message:'成功',
  //           data:{
  //             token:token
  //           }
  //         });
  //       }else{
  //         res.send({
  //           status:400,
  //           message:'密码错误'
  //         });
  //       }
  //     }else{
  //       res.send({
  //         status:400,
  //         message:'账号不存在'
  //       });
  //     }
  //   }
  // });
});
module.exports = router;
