const express = require('express')
const connection = require('../db')

const appForemps = express.Router();

appForemps.get("/",(request,response)=>
{
    connection.query('select * from Book',(error,result)=>{
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
    var query = `insert into Book(b_name, author, booktype,price,pubdate,lang) values('${request.body.b_name}','${request.body.author}','${request.body.booktype}',${request.body.price},'${request.body.pubdate}','${request.body.lang}')`;
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
    var query = `update Book set price =${request.body.price},lang='${request.body.lang}' where id=${request.params.id}`;
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
