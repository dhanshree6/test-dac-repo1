const express = require('express')
//const router = express.Router()
const connection = require('../db')

// router.get('/', (request, response) => {
//   const statement = `select id, title, description, price from products`
//   db.query(statement, (error, data) => {
//     if (error) {
//       response.send('error')
//     } else {
//       response.send(data)
//     }
//   })
// })

// const express = require('express');
// const config = require('config');
const appForemps = express.Router();
// const mysql = require('mysql');
// var connection = mysql.createConnection(
//     {
//         host     : config.get("host"),
//         user     : config.get("user"),
//         password : config.get("password"),
//         database : config.get("database")
//     }
// );

appForemps.get("/",(request,response)=>
{
    connection.query('select * from employee',(error,result)=>{
        if(error == null){
            var data = JSON.stringify(result);
            response.setHeader("Content-Type","application/json");
            response.write(data);
           }
           else{
            console.log(error);
            response.setHeader("Content-Type","application/json");
            response.write(error);
           }
           response.end();
    })
   
})

appForemps.post("/",(request,response)=>
{
    var query = `insert into employee(e_name, email, password,emp_id,dname,doj) values('${request.body.e_name}','${request.body.email}','${request.body.password}',${request.body.emp_id},'${request.body.dname}','${request.body.doj}')`;
    connection.query(query,(error,result)=>{
        if(error == null){
            var data = JSON.stringify(result);
            response.setHeader("Content-Type","application/json");
            response.write(data);
           }
           else{
            console.log(error);
            response.setHeader("Content-Type","application/json");
            response.write(error);
           }
           response.end();
    })
})

appForemps.put('/:id',(request,response)=>
{
    var query = `update employee set e_name ='${request.body.e_name}',email='${request.body.email}' where id=${request.params.id}`;
    connection.query(query,(error,result)=>{
        if(error == null){
            var data = JSON.stringify(result);
            response.setHeader("Content-Type","application/json");
            response.write(data);
           }
           else{
            console.log(error);
            response.setHeader("Content-Type","application/json");
            response.write(error);
           }
           response.end();
    })
})

appForemps.delete('/:id',(request,response)=>
{
    var query = 
    `delete from employee where id = ${request.params.id}`;
                
    connection.query(query,(error,result)=>{
        if(error == null){
            var data = JSON.stringify(result);
            response.setHeader("Content-Type","application/json");
            response.write(data);
           }
           else{
            console.log(error);
            response.setHeader("Content-Type","application/json");
            response.write(error);
           }
           response.end();
    })
})

module.exports = appForemps;
